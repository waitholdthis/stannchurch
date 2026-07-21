"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Church, MessageCircle, Send, X } from "lucide-react";

type Reply = {
  text: string;
  link?: { label: string; href: string };
};

type Message = Reply & { id: number; role: "assistant" | "user" };

const topics: Array<{
  keywords: string[];
  reply: Reply;
}> = [
  {
    keywords: ["mass", "service", "worship", "sunday", "saturday", "weekday", "communion"],
    reply: {
      text: "Weekend Masses are Saturday at 5:00 PM and Sunday at 8:30 AM and 11:00 AM. The 11:00 AM Sunday Mass is livestreamed. Weekday Mass or Communion Service is generally at 12:15 PM, except the Thursday school-year Mass at 9:00 AM. Please check parish announcements for schedule changes.",
      link: { label: "See the full schedule", href: "/events" },
    },
  },
  {
    keywords: ["confession", "confessions", "reconciliation", "penance"],
    reply: {
      text: "Confessions are offered Saturday at 4:00 PM. The parish Reconciliation page also explains how to prepare and what to expect.",
      link: { label: "Reconciliation information", href: "/reconciliation" },
    },
  },
  {
    keywords: ["address", "location", "located", "directions", "map", "parking"],
    reply: {
      text: "St. Ann Catholic Church is at 357 N. Cool Spring St., Fayetteville, NC 28301. Additional parking is available behind the office building by driving through the dumpster area.",
      link: { label: "Contact and directions", href: "/#contact" },
    },
  },
  {
    keywords: ["phone", "call", "email", "contact", "office", "hours"],
    reply: {
      text: "The parish office is open Monday–Thursday, 9:00 AM–3:00 PM, with Friday visits by appointment. Call (910) 483-3216 or email info@stanncatholicchurch.org.",
      link: { label: "Contact the parish", href: "/#contact" },
    },
  },
  {
    keywords: ["bulletin", "bulletins", "publication", "news", "announcement"],
    reply: {
      text: "You can read the current parish bulletin, browse recent issues, and subscribe to receive it by email from the Bulletin page.",
      link: { label: "Open parish bulletins", href: "/publications" },
    },
  },
  {
    keywords: ["event", "events", "calendar", "happening", "upcoming"],
    reply: {
      text: "The parish Events page lists upcoming activities, current schedule notices, and the regular weekly worship schedule.",
      link: { label: "View parish events", href: "/events" },
    },
  },
  {
    keywords: ["register", "registration", "join", "member", "membership", "new parishioner"],
    reply: {
      text: "Welcome! You can download the parish registration form and find instructions on the Registration page. The parish office can also help you get connected.",
      link: { label: "Register with St. Ann", href: "/registration" },
    },
  },
  {
    keywords: ["baptism", "baptize", "godparent", "christening"],
    reply: {
      text: "Baptisms are normally celebrated at 10:00 AM on the last Saturday of the month or during the 8:30 AM Mass on the last Sunday. Preparation and godparent requirements are available online.",
      link: { label: "Baptism information", href: "/baptism" },
    },
  },
  {
    keywords: ["anointing", "sick", "hospital", "ill", "emergency"],
    reply: {
      text: "To request Anointing of the Sick, contact the parish office at (910) 483-3216. If someone is seriously ill or preparing for surgery, please reach out as early as possible.",
      link: { label: "Anointing information", href: "/anointing-of-the-sick" },
    },
  },
  {
    keywords: ["prayer", "pray", "prayers", "intention", "request"],
    reply: {
      text: "You may send a confidential prayer request to the parish, with your name or anonymously.",
      link: { label: "Submit a prayer request", href: "/prayer-request" },
    },
  },
  {
    keywords: ["sermon", "sermons", "homily", "homilies", "listen", "recording"],
    reply: {
      text: "Recent homilies and sermon recordings are collected in the parish sermon archive as they are published.",
      link: { label: "Browse sermons", href: "/sermons" },
    },
  },
  {
    keywords: ["ministry", "ministries", "volunteer", "serve", "involved", "group"],
    reply: {
      text: "St. Ann has ministries for worship, service, fellowship, and faith formation. Visit the Ministries page to find a place to participate.",
      link: { label: "Explore ministries", href: "/ministries" },
    },
  },
  {
    keywords: ["faith formation", "religious education", "confirmation", "first communion", "class", "classes", "dre"],
    reply: {
      text: "Faith Formation includes children’s religious education, sacramental preparation, youth formation, and adult opportunities. Registration generally opens in July.",
      link: { label: "Faith Formation programs", href: "/Faith-Formation" },
    },
  },
];

const suggestions = ["What time is Mass?", "Where is the church?", "How do I register?"];

function findReply(question: string): Reply {
  const words = question.toLowerCase();
  const match = topics
    .map((topic) => ({
      topic,
      score: topic.keywords.reduce((score, keyword) => score + (words.includes(keyword) ? keyword.length : 0), 0),
    }))
    .sort((a, b) => b.score - a.score)[0];

  if (match?.score) return match.topic.reply;

  return {
    text: "I’m not sure about that yet. I can help with Mass times, sacraments, events, bulletins, registration, ministries, prayer requests, directions, and parish contact information. For anything else, please call the parish office at (910) 483-3216.",
    link: { label: "Contact the parish office", href: "/#contact" },
  };
}

export default function AskStAnn() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "Welcome! I can help you find Mass times, parish events, sacraments, registration information, and more. What would you like to know?",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || !window.matchMedia("(max-width: 639px)").matches) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  if (pathname.startsWith("/admin")) return null;

  function ask(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    const id = Date.now();
    setMessages((current) => [
      ...current,
      { id, role: "user", text: trimmed },
      { id: id + 1, role: "assistant", ...findReply(trimmed) },
    ]);
    setQuestion("");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    ask(question);
  }

  return (
    <aside className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-7 sm:right-7 z-[80] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <section
          id="ask-st-ann-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="ask-st-ann-title"
          className="fixed inset-0 w-full h-[100dvh] sm:static sm:w-[min(390px,calc(100vw-2rem))] sm:h-[min(610px,calc(100dvh-7rem))] rounded-none sm:rounded-2xl overflow-hidden border-0 sm:border shadow-2xl flex flex-col"
          style={{ borderColor: "var(--border)", background: "var(--cream)" }}
        >
          <header className="px-4 sm:px-5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 sm:py-4 flex items-center gap-3" style={{ background: "var(--navy)" }}>
            <span className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(184,146,42,0.2)" }}>
              <Church className="w-5 h-5" style={{ color: "var(--gold-light)" }} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id="ask-st-ann-title" className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem" }}>Ask St. Ann</h2>
              <p className="text-white/55 text-xs">Parish information assistant</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Ask St. Ann" className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 sm:px-4 py-4 sm:py-5 space-y-4" aria-live="polite" aria-label="Conversation">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[92%] sm:max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
                  style={{
                    background: message.role === "user" ? "var(--navy)" : "var(--cream-mid)",
                    color: message.role === "user" ? "white" : "var(--text-mid)",
                    borderBottomRightRadius: message.role === "user" ? "0.35rem" : undefined,
                    borderBottomLeftRadius: message.role === "assistant" ? "0.35rem" : undefined,
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: "1rem",
                  }}
                >
                  <p>{message.text}</p>
                  {message.link && (
                    <Link href={message.link.href} onClick={() => setOpen(false)} className="inline-flex mt-2 font-semibold underline underline-offset-4" style={{ color: "var(--gold)" }}>
                      {message.link.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((suggestion) => (
                  <button key={suggestion} type="button" onClick={() => ask(suggestion)} className="rounded-full border px-3 py-2 text-xs cursor-pointer hover:bg-[var(--gold-pale)] transition-colors" style={{ borderColor: "var(--border)", color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={submit} className="p-3 border-t flex items-center gap-2" style={{ borderColor: "var(--border)", background: "white" }}>
            <label htmlFor="ask-st-ann-input" className="sr-only">Ask a question about St. Ann</label>
            <input ref={inputRef} id="ask-st-ann-input" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={240} placeholder="Ask about Mass, events, sacraments…" autoComplete="off" className="min-w-0 flex-1 rounded-full border px-4 py-3 text-base sm:text-sm outline-none focus:ring-2 focus:ring-[var(--gold)]" style={{ borderColor: "var(--border)", color: "var(--navy)" }} />
            <button type="submit" disabled={!question.trim()} aria-label="Send question" className="w-11 h-11 rounded-full flex items-center justify-center text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity" style={{ background: "var(--gold)" }}>
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
          <p className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center text-[11px]" style={{ color: "var(--muted)", background: "white" }}>For urgent pastoral needs, call the parish office.</p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="ask-st-ann-panel"
        aria-label={open ? "Close Ask St. Ann" : "Open Ask St. Ann"}
        className={`${open ? "hidden sm:flex" : "flex"} group rounded-full pl-4 pr-5 py-3.5 items-center gap-2.5 text-white shadow-xl cursor-pointer transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--gold-light)]`}
        style={{ background: "var(--gold)" }}
      >
        {open ? <X className="w-5 h-5" aria-hidden="true" /> : <MessageCircle className="w-5 h-5" aria-hidden="true" />}
        <span className="font-semibold tracking-wide" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.78rem" }}>Ask St. Ann</span>
      </button>
    </aside>
  );
}
