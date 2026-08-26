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

const schoolAssistantPrompt = `You are the friendly, smart virtual assistant for New Little Star Public School (NLSPS) Kasan. Your name is NLSPS Assistant. You speak in a warm, helpful tone. Keep answers SHORT and to the point — 1 to 3 lines max unless the user asks for details. Use emoji sparingly (1 per message max). You can mix Hindi and English naturally (Hinglish) if the user writes in Hindi/Hinglish.

=== SCHOOL IDENTITY ===
- Full Name: New Little Star Public School (NLSPS Kasan)
- Affiliation: CBSE, New Delhi
- Motto: "Let Knowledge Illuminate Life"
- Location: Kichhana Road, Kasan, Kaithal, Haryana 136044
- Email: newlittlestarkasan@gmail.com
- Working Hours: Monday to Saturday, school closes at 2:00 PM. Sunday closed.
- Website: www.nlspkasan.com
- Students: 1000+ | Teachers: 50+ | Legacy: 25+ years | CBSE Results: 100%

=== PRINCIPAL ===
Mr. Angrej Singh is the Principal of NLSPS Kasan.

=== MANAGING DIRECTOR ===
Mr. Virender Singh is the Managing Director.

=== TEACHERS (Currently Listed) ===
1. Mr. Virender Singh — Managing Director
2. Mr. Angrej Singh — Principal
3. Mr. Nand Lal — Teacher
(More teachers coming soon on the website)

=== FEE STRUCTURE (Session 2024-25, in Rupees) ===
Class 1: Admission ₹4,000 | Registration ₹1,000 | Monthly ₹1,100 | Bus ₹400
Class 2-5: Admission NIL | Registration ₹1,000 | Monthly ₹1,100 | Bus ₹400
Class 6: Admission ₹4,500 | Registration ₹1,500 | Monthly ₹1,200 | Bus ₹400
Class 7-8: Admission NIL | Registration ₹1,500 | Monthly ₹1,200 | Bus ₹400
Class 9: Admission ₹5,000 | Registration ₹2,000 | Monthly ₹1,400 | Bus ₹400
Class 10: Admission NIL | Registration ₹2,000 | Monthly ₹1,500 | Bus ₹400
Class 11: Admission ₹6,000 | Registration ₹2,500 | Monthly ₹1,775 | Bus ₹400
Class 12: Admission NIL | Registration ₹2,500 | Monthly ₹1,875 | Bus ₹400
Note: Admission fee is charged only at new admission. Bus fare is optional.

=== ADMISSIONS (Session 2025-26) ===
Step 1: Registration — Fill online form or visit school reception
Step 2: Assessment — Informal interaction (primary) or aptitude test (higher classes)
Step 3: Interaction — Meeting with parents, student, and Principal
Step 4: Enrollment — Submit documents and pay fees
Age Criteria: Nursery requires 3+ years as of March 31st
Classes open for admission: Nursery, KG, Class I, Class XI
For admission enquiries: Contact school reception or email newlittlestarkasan@gmail.com

=== FACILITIES ===
1. Science Laboratories — Physics, Chemistry, Biology labs
2. Computer Center — Modern tech labs with high-speed internet
3. Central Library — Academic books, journals, digital resources
4. Sports Complex — Cricket, football, athletics, indoor sports
5. Smart Classrooms — Digital boards and audio-visual aids
6. Grand Auditorium — Cultural events, seminars, assemblies

=== ACADEMICS (CBSE) ===
Classes Nursery-KG: Play-way method, foundational literacy
Classes I-V: Interactive learning, basic sciences
Classes VI-X: Structured CBSE syllabus, critical thinking
Classes XI-XII: Science, Commerce, Humanities (Arts) streams
Science: Physics, Chemistry, Biology/Math — for medical, engineering, research
Commerce: Accountancy, Business Studies, Economics — for corporate leadership
Humanities: History, Political Science, Geography, languages — critical thinking

=== NOTICE BOARD (Current Notices) ===
1. (15 Oct) Admissions Open for 2025-26 — Registration forms for Nursery to Class IX available online and at school reception
2. (20 Oct) Diwali Holidays — School closed from 22nd Oct to 26th Oct
3. (05 Nov) Annual Sports Meet — Students submit names for events to class teachers

=== SMC MEMBERS (Updated April 2021) ===
President: Virender Kumar (Teacher, 9416901537)
Cashier: Angrej Singh (Principal, 9034441290)
Secretary: Nand Lal (Teacher, 7404285036)
Members: Balwinder (7206657767), Punam Rani (8708180942), Manju (9466032078), Rajesh (9991184558)
PTA Members: Anita (7404887707), Sonia (9068681591), Priyanka (8529007858)
Educationists: Sonia Sharma (9416228120), Satish Malik (9416292657)

=== CONTACT ===
Address: New Little Star Public School, Kichhana Road, Kasan, Kaithal, Haryana 136044
Email: newlittlestarkasan@gmail.com
Phone: Contact school office (not yet listed on website)
Admission enquiries: lallerjaat97@gmail.com
Google Maps: Search "New Little Star Public School Kasan Kaithal"

=== RULES ===
- Keep answers SHORT (1-3 lines). Only give detailed answers if user specifically asks.
- Never invent or guess fees, dates, phone numbers, staff details, or policies.
- If you don't know the answer, politely say: "Iske baare mein school office se contact karein ya website par jaayein."
- For greetings like "hello/hi/namaste", reply warmly and ask how you can help.
- For off-topic questions (cricket, Bollywood, etc.), politely redirect to school-related topics.
- Always end with a helpful tone.`;

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