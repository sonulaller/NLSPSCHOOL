import { Router, type NextFunction, type Request, type Response } from "express";
import { SendChatMessageBody, SendChatMessageResponse } from "@workspace/api-zod";

const router = Router();

const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const CHAT_WINDOW_MS = 10 * 60 * 1000;
const CHAT_REQUESTS_PER_WINDOW = 10;
const MAX_CHAT_MESSAGES = 12;
const MAX_CHAT_INPUT_CHARS = 6000;

type RateLimitEntry = {
  startedAt: number;
  count: number;
};

const chatRateLimits = new Map<string, RateLimitEntry>();

function getClientKey(req: Request): string {
  return req.ip || req.socket.remoteAddress || "unknown";
}

function rateLimitChat(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const now = Date.now();
  const clientKey = getClientKey(req);
  const current = chatRateLimits.get(clientKey);
  const entry =
    !current || now - current.startedAt >= CHAT_WINDOW_MS
      ? { startedAt: now, count: 0 }
      : current;

  if (entry.count >= CHAT_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.max(
      1,
      Math.ceil((entry.startedAt + CHAT_WINDOW_MS - now) / 1000),
    );
    res.setHeader("Retry-After", retryAfter.toString());
    res.status(429).json({
      error: "Too many chat requests. Please try again shortly.",
    });
    return;
  }

  entry.count += 1;
  chatRateLimits.set(clientKey, entry);
  next();
}

const schoolAssistantPrompt = `You are the helpful virtual assistant for New Little Star Public School (NLSPS) Kasan, Kaithal, Haryana.

Answer questions clearly and politely. You can answer general questions too, but for school-specific information use the website context below:
- School: New Little Star Public School, Kasan
- Location: Kichhana Road, Kasan, Kaithal, Haryana 136044
- Email: newlittlestarkasan@gmail.com
- Website sections: About, Teachers, SMC Members, Fee Structure, Facilities, Gallery, Admissions, Contact, and Notice Board
- The school focuses on values-driven education, modern learning, character building, and CBSE-aligned academics.

Never invent fees, dates, admission rules, staff details, phone numbers, notices, or official policies. If the website context does not contain the answer, say that the visitor should contact the school office or check the relevant website page. Keep answers concise, friendly, and easy to understand.`;

router.post("/chat", rateLimitChat, async (req, res): Promise<void> => {
  const parsed = SendChatMessageBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please send a valid chat message." });
    return;
  }

  const totalInputChars = parsed.data.messages.reduce(
    (total, message) => total + message.content.length,
    0,
  );
  if (
    parsed.data.messages.length > MAX_CHAT_MESSAGES ||
    totalInputChars > MAX_CHAT_INPUT_CHARS
  ) {
    res.status(400).json({
      error: "Please keep the conversation shorter and try again.",
    });
    return;
  }

  const apiKey = process.env["GROQ_API_KEY"];
  if (!apiKey) {
    req.log.error("GROQ_API_KEY is not configured");
    res.status(503).json({ error: "Chatbot service is not configured yet." });
    return;
  }

  const messages = [
    { role: "system" as const, content: schoolAssistantPrompt },
    ...parsed.data.messages,
  ];

  try {
    const response = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.4,
        max_tokens: 600,
      }),
    });

    if (!response.ok) {
      const providerError = await response.text();
      req.log.error(
        { status: response.status, providerError: providerError.slice(0, 300) },
        "Groq request failed",
      );
      res.status(503).json({ error: "The chatbot is temporarily unavailable." });
      return;
    }

    const data: unknown = await response.json();
    const answer =
      typeof data === "object" &&
      data !== null &&
      "choices" in data &&
      Array.isArray(data.choices) &&
      data.choices.length > 0 &&
      typeof data.choices[0] === "object" &&
      data.choices[0] !== null &&
      "message" in data.choices[0] &&
      typeof data.choices[0].message === "object" &&
      data.choices[0].message !== null &&
      "content" in data.choices[0].message &&
      typeof data.choices[0].message.content === "string"
        ? data.choices[0].message.content.trim()
        : "";

    if (!answer) {
      req.log.error("Groq returned an empty answer");
      res.status(503).json({ error: "The chatbot returned an empty answer." });
      return;
    }

    res.json(SendChatMessageResponse.parse({ answer }));
  } catch (error) {
    req.log.error({ err: error }, "Unable to reach Groq");
    res.status(503).json({ error: "The chatbot is temporarily unavailable." });
  }
});

export default router;