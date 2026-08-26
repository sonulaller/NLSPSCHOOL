import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  Loader2,
  MessageCircle,
  Send,
  X,
  GraduationCap,
  CreditCard,
  Users,
  Phone,
  BookOpen,
} from "lucide-react";
import { useSendChatMessage, type ChatMessage } from "@workspace/api-client-react";

const welcomeMessage: ChatMessage = {
  role: "assistant",
  content:
    "Namaste! I am the NLSPS Kasan assistant. Ask me about admissions, fees, teachers, facilities, or anything else.",
};

const quickReplies = [
  { label: "Admission Process", icon: GraduationCap, query: "What is the admission process?" },
  { label: "Fee Structure", icon: CreditCard, query: "What are the fees for all classes?" },
  { label: "Teachers", icon: Users, query: "Who are the teachers at NLSPS?" },
  { label: "Facilities", icon: BookOpen, query: "What facilities does the school have?" },
  { label: "Contact Us", icon: Phone, query: "What is the school contact information?" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendMessage = useSendChatMessage();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sendMessage.isPending]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 96)}px`;
    }
  }, [draft]);

  const sendChatMessage = (content: string) => {
    if (!content || sendMessage.isPending) return;

    const userMessage: ChatMessage = { role: "user", content };
    const nextMessages = [...messages, userMessage].slice(-12);
    setMessages(nextMessages);
    setShowQuickReplies(false);

    sendMessage.mutate(
      { data: { messages: nextMessages } },
      {
        onSuccess: ({ answer }) => {
          const assistantMessage: ChatMessage = {
            role: "assistant",
            content: answer,
          };
          setMessages((current) =>
            [...current, assistantMessage].slice(-12),
          );
        },
        onError: () => {
          const errorMessage: ChatMessage = {
            role: "assistant",
            content:
              "Maaf kijiye, chatbot abhi temporarily unavailable hai. School office se contact karein ya baad mein try karein.",
          };
          setMessages((current) => [...current, errorMessage].slice(-12));
        },
      },
    );
  };

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = draft.trim();
    if (!content) return;
    setDraft("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    sendChatMessage(content);
  };

  const handleQuickReply = (query: string) => {
    sendChatMessage(query);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <div className="mb-4 flex h-[min(640px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white">
                  <Bot size={21} />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-primary bg-green-400" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold">NLSPS Assistant</p>
                <p className="text-xs text-white/70">
                  {sendMessage.isPending ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#fafaf8] p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot size={14} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-secondary text-white"
                      : "rounded-bl-md border border-primary/5 bg-white text-foreground shadow-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {sendMessage.isPending && (
              <div className="flex justify-start">
                <div className="mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot size={14} className="text-primary" />
                </div>
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-primary/5 bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm">
                  <Loader2 size={15} className="animate-spin text-secondary" />
                  <span>Typing...</span>
                </div>
              </div>
            )}

            {/* Quick Reply Buttons */}
            {showQuickReplies && !sendMessage.isPending && messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.label}
                    type="button"
                    onClick={() => handleQuickReply(reply.query)}
                    className="flex items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/5 hover:border-primary/30"
                  >
                    <reply.icon size={12} />
                    {reply.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={submitMessage} className="border-t border-border bg-white p-3">
            <div className="flex items-end gap-2 rounded-xl border border-border bg-[#fafaf8] p-2 focus-within:border-secondary">
              <textarea
                ref={textareaRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                placeholder="Apna sawaal likhein..."
                aria-label="Chat message"
                rows={1}
                maxLength={2000}
                className="max-h-24 min-h-10 flex-1 resize-none border-0 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!draft.trim() || sendMessage.isPending}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 px-1 text-[10px] text-muted-foreground">
              NLSPS Assistant galat ho sakta hai. Official jaankari ke liye school office se contact karein.
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        onClick={() => setOpen((current) => !current)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        {open ? <X size={23} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
