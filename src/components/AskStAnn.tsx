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

// Keywords are matched as whole words or whole phrases, so short entries such as
// "ill" or "hi" cannot fire on words like "still" or "this". Longer matches win,
// which keeps "first communion" from being answered as a Mass-times question.
const topics: Array<{
  keywords: string[];
  reply: Reply;
}> = [
  {
    keywords: ["mass", "masses", "mass time", "mass times", "mass schedule", "school mass", "service", "services", "worship", "sunday", "saturday", "weekday", "vigil", "communion service"],
    reply: {
      text: "Weekend Masses are Saturday at 5:00 PM (Vigil) and Sunday at 8:30 AM and 11:00 AM. The 11:00 AM Sunday Mass is livestreamed. Weekdays: Communion Service Monday at 12:15 PM, Mass Tuesday, Wednesday, and Friday at 12:15 PM, and Thursday School Mass at 9:00 AM during the school year (12:15 PM in June and July).",
      link: { label: "See the full schedule", href: "/events" },
    },
  },
  {
    keywords: ["holy day", "holy days", "holy day of obligation", "christmas", "easter", "ash wednesday", "lent", "lenten", "advent", "holy week", "good friday", "palm sunday", "triduum"],
    reply: {
      text: "Holy Day and seasonal Mass schedules change each year, so they are announced on the Events page and in the weekly bulletin as the date approaches. The parish office can confirm times for a specific feast.",
      link: { label: "Check parish events", href: "/events" },
    },
  },
  {
    keywords: ["confess", "confession", "confessions", "reconciliation", "penance"],
    reply: {
      text: "Confessions are offered Saturday at 4:00 PM. The parish Reconciliation page also explains how to prepare and what to expect.",
      link: { label: "Reconciliation information", href: "/reconciliation" },
    },
  },
  {
    keywords: ["baptism", "baptisms", "baptize", "baptized", "godparent", "godparents", "christening"],
    reply: {
      text: "Baptisms are normally celebrated at 10:00 AM on the last Saturday of the month or during the 8:30 AM Mass on the last Sunday. Preparation and godparent requirements are available online.",
      link: { label: "Baptism information", href: "/baptism" },
    },
  },
  {
    keywords: ["anointing", "anointing of the sick", "sick", "hospital", "ill", "illness", "surgery", "last rites", "emergency", "dying"],
    reply: {
      text: "To request Anointing of the Sick, contact the parish office at (910) 483-3216. If someone is seriously ill or preparing for surgery, please reach out as early as possible.",
      link: { label: "Anointing information", href: "/anointing-of-the-sick" },
    },
  },
  {
    keywords: ["funeral", "funerals", "burial", "cremation", "death", "died", "passed away", "bereavement", "mass of christian burial", "vigil service", "cemetery"],
    reply: {
      text: "Our Catholic Funeral Rites page walks through the Catholic way of death and burial, including what to do first, planning the funeral Mass, and Church teaching on cremation. Please also call the parish office at (910) 483-3216 so we can help your family.",
      link: { label: "Catholic Funeral Rites", href: "/catholic-funeral-rites" },
    },
  },
  {
    keywords: ["sacrament", "sacraments", "seven sacraments"],
    reply: {
      text: "The Sacraments page introduces the sacraments celebrated here, with detailed pages for Baptism, Reconciliation, and Anointing of the Sick. Sacramental preparation for children and adults runs through Faith Formation.",
      link: { label: "The Sacraments", href: "/The-Sacraments" },
    },
  },
  {
    keywords: ["marriage", "married", "wedding", "weddings", "matrimony", "engaged", "annulment", "convalidation"],
    reply: {
      text: "Marriage preparation is arranged directly with the parish. The Diocese normally asks couples to begin at least six months before the wedding date, so please call the parish office at (910) 483-3216 to speak with Father Nwafor before setting a date.",
      link: { label: "Contact the parish office", href: "/#contact" },
    },
  },
  {
    keywords: ["ocia", "rcia", "ocic", "become catholic", "becoming catholic", "convert", "converting", "join the church", "adult confirmation"],
    reply: {
      text: "Adults and children who wish to become Catholic are welcomed through OCIA / OCIC. Jo Katherine Dessaw leads the adult process and can be reached at 910-583-1005 or jdessaw@prodigy.net.",
      link: { label: "OCIA and other ministries", href: "/ministries" },
    },
  },
  {
    keywords: ["faith formation", "religious education", "confirmation", "first communion", "first eucharist", "ccd", "sunday school", "youth ministry", "young adult", "adult formation", "class", "classes", "dre", "formed", "lighthouse"],
    reply: {
      text: "Faith Formation includes children’s religious education, high school ministry, young adult ministry, adult formation, and sacramental preparation. Parishioners also get free access to FORMED and Lighthouse Catholic Media. Registration generally opens in July.",
      link: { label: "Faith Formation programs", href: "/Faith-Formation" },
    },
  },
  {
    keywords: ["school", "schools", "catholic school", "st ann catholic school", "education", "enroll", "enrollment", "enrolling", "admission", "admissions", "tuition", "principal", "student", "students", "grade", "grades", "pre k", "prek", "preschool", "kindergarten", "elementary", "middle school", "academics"],
    reply: {
      text: "Yes — St. Ann Catholic School serves Pre-K through 8th grade with a faith-integrated curriculum, small class sizes, and a strong academic program. The principal is Lee Pittman. For enrollment, call the parish office at (910) 483-3216 or visit stanncatholicschool.net.",
      link: { label: "St. Ann Catholic School", href: "https://www.stanncatholicschool.net" },
    },
  },
  {
    keywords: ["ministry", "ministries", "organization", "organizations", "volunteer", "volunteering", "serve", "get involved", "involved", "group", "groups", "altar server", "altar servers", "choir", "choirs", "music", "lector", "lectors", "usher", "ushers", "hospitality", "pastoral council", "finance council", "social committee", "filipino"],
    reply: {
      text: "St. Ann has ministries for worship, service, fellowship, and formation — including Altar Servers, Mass Choirs, Lectors, Extraordinary Ministers of Holy Communion, Children’s Liturgy, Ushers and Hospitality, the Knights of Columbus, the Altar Rosary Society, and more. Each listing on the Ministries page includes a contact.",
      link: { label: "Explore ministries", href: "/ministries" },
    },
  },
  {
    keywords: ["knights of columbus", "knights", "kofc", "altar rosary society", "rosary society"],
    reply: {
      text: "The Knights of Columbus (Council 11683) and the Altar Rosary Society are both active at St. Ann. Contacts for each are listed on the Ministries page — Robert Gonzalez for the Knights and Pauline Stemple for the Altar Rosary Society.",
      link: { label: "Ministries and organizations", href: "/ministries" },
    },
  },
  {
    keywords: ["help", "assistance", "financial help", "food", "food pantry", "charity", "charities", "catholic charities", "in need", "utility", "rent"],
    reply: {
      text: "Catholic Charities serves our community through the parish — Vicky Jimenez can be reached at 910-424-2020. For other needs, the parish office at (910) 483-3216 can point you in the right direction.",
      link: { label: "Ministries and outreach", href: "/ministries" },
    },
  },
  {
    keywords: ["staff", "clergy", "priest", "priests", "pastor", "father", "father nwafor", "father matthew", "deacon", "deacon gary", "who is the pastor", "leadership", "bookkeeper", "antony bishop"],
    reply: {
      text: "Father Matthew Nwafor is our Pastor, assisted by Deacon Gary Stemple. Antony Bishop is Director of Religious Education, Lee Pittman is School Principal, and Pok-Hui Folsom is Bookkeeper. The contact form lets you write to any of them directly.",
      link: { label: "Meet our staff", href: "/#staff" },
    },
  },
  {
    keywords: ["address", "location", "located", "direction", "directions", "map", "park", "parking", "where are you", "where is the church", "cool spring"],
    reply: {
      text: "St. Ann Catholic Church is at 357 N. Cool Spring St., Fayetteville, NC 28301. Additional parking is available behind the office building by driving through the dumpster area.",
      link: { label: "Contact and directions", href: "/#contact" },
    },
  },
  {
    keywords: ["phone", "phone number", "call", "email", "contact", "office", "office hours", "hours", "fax", "reach you", "open"],
    reply: {
      text: "The parish office is open Monday–Thursday, 9:00 AM–3:00 PM, with Friday visits by appointment, and closed on weekends. Call (910) 483-3216, fax (910) 483-4185, or email info@stanncatholicchurch.org.",
      link: { label: "Contact the parish", href: "/#contact" },
    },
  },
  {
    keywords: ["register", "registration", "sign up", "join", "join the parish", "member", "membership", "new parishioner", "new here", "new to the parish", "first time", "visiting", "visitor"],
    reply: {
      text: "Welcome! You can download the parish registration form and find instructions on the Registration page. The parish office can also help you get connected.",
      link: { label: "Register with St. Ann", href: "/registration" },
    },
  },
  {
    keywords: ["give", "giving", "donate", "donation", "donations", "offertory", "tithe", "tithing", "stewardship", "contribute", "contribution", "online giving", "weshare", "support the parish"],
    reply: {
      text: "Thank you for your generosity. You can give online through WeShare at any time, or place your offering in the collection at Mass. Gifts support the ministries, education, and charitable works of the parish.",
      link: { label: "Give online", href: "https://stanncatholicchurch.weshareonline.org/ws/opportunities" },
    },
  },
  {
    keywords: ["bulletin", "bulletins", "publication", "publications", "newsletter", "announcement", "announcements", "subscribe"],
    reply: {
      text: "You can read the current parish bulletin, browse recent issues, and subscribe to receive it by email from the Bulletin page.",
      link: { label: "Open parish bulletins", href: "/publications" },
    },
  },
  {
    keywords: ["bulletin ad", "bulletin ads", "advertise", "advertising", "advertisement", "sponsor", "sponsors", "supporter", "supporters", "business"],
    reply: {
      text: "Local businesses support the parish by advertising in our weekly bulletin. The Bulletin Ads page lists our current supporters and explains how to advertise.",
      link: { label: "Bulletin ads and supporters", href: "/supporters" },
    },
  },
  {
    keywords: ["event", "events", "calendar", "happening", "upcoming", "this week", "schedule"],
    reply: {
      text: "The parish Events page lists upcoming activities, current schedule notices, and the regular weekly worship schedule.",
      link: { label: "View parish events", href: "/events" },
    },
  },
  {
    keywords: ["sermon", "sermons", "homily", "homilies", "listen", "recording", "recordings", "audio"],
    reply: {
      text: "Recent homilies and sermon recordings are collected in the parish sermon archive as they are published.",
      link: { label: "Browse sermons", href: "/sermons" },
    },
  },
  {
    keywords: ["watch live", "livestream", "livestreamed", "live stream", "streaming", "stream", "online mass", "watch mass", "watch from home", "facebook", "shut in", "homebound"],
    reply: {
      text: "The 11:00 AM Sunday Mass is livestreamed on Facebook, and you can watch it on our Watch Live page without a Facebook account.",
      link: { label: "Watch live", href: "/watch-live" },
    },
  },
  {
    keywords: ["tour", "virtual tour", "3d tour", "360", "walkthrough", "look inside", "see the church", "see inside"],
    reply: {
      text: "You can take a virtual tour of the church from our Virtual Tour page. The 3D walkthrough is being prepared, and the page will show it as soon as it is ready.",
      link: { label: "Take a virtual tour", href: "/virtual-tour" },
    },
  },
  {
    keywords: ["photo", "photos", "picture", "pictures", "gallery", "galleries", "images", "anniversary"],
    reply: {
      text: "The Photos page has galleries of the church interior, historical photos, and anniversary celebrations.",
      link: { label: "Browse photo galleries", href: "/photos" },
    },
  },
  {
    keywords: ["history", "historical", "founded", "founding", "when was the church built", "how old", "1939", "barbershop", "origin", "origins", "anniversary of the parish"],
    reply: {
      text: "St. Ann Catholic Church was founded in 1939 to serve the Black Catholic community of Fayetteville, first worshiping in Mack’s Barber Shop on Gillespie Street. The Parish History page tells the full story.",
      link: { label: "Read our parish history", href: "/Parish-History" },
    },
  },
  {
    keywords: ["window", "windows", "stained glass", "glass", "saint jude", "st jude"],
    reply: {
      text: "Our eight stained glass windows tell the story of the parish — its origins, its saints, and its faith. One depicts Saint Jude alongside the barber shop where the parish began in 1939.",
      link: { label: "Explore the church windows", href: "/Church-Windows" },
    },
  },
  {
    keywords: ["prayer request", "prayer requests", "pray for", "pray", "praying", "prayer", "prayers", "intention", "intentions", "request prayer"],
    reply: {
      text: "You may send a confidential prayer request to Father Nwafor and the parish, with your name or anonymously.",
      link: { label: "Submit a prayer request", href: "/prayer-request" },
    },
  },
  {
    keywords: ["prayer resources", "rosary", "how to pray", "novena", "devotion", "devotions", "daily readings", "readings", "act of contrition", "hail mary", "our father", "chaplet", "divine mercy"],
    reply: {
      text: "The Prayer Resources page collects traditional Catholic prayers, the Rosary, daily readings, and devotional resources — including a prayer to St. Ann, our patroness.",
      link: { label: "Prayer resources", href: "/prayer-resources" },
    },
  },
  {
    keywords: ["vocation", "vocations", "priesthood", "become a priest", "seminary", "religious life", "discernment", "sister", "nun"],
    reply: {
      text: "If you are discerning a vocation to the priesthood or religious life, the Diocese of Raleigh vocations office at ncpriest.org is the place to begin. Father Nwafor is also glad to talk with you.",
      link: { label: "Vocations information", href: "/Faith-Formation" },
    },
  },
  {
    keywords: ["diocese", "diocese of raleigh", "bishop", "vatican", "pope", "catholic news", "resources", "links"],
    reply: {
      text: "We are part of the Diocese of Raleigh. The Resources page links to the Diocese, the Vatican, Catholic news, and other trusted resources for parishioners.",
      link: { label: "Catholic resources", href: "/news" },
    },
  },
  {
    keywords: ["spanish", "espanol", "en espanol", "translate", "translation", "language", "otro idioma"],
    reply: {
      text: "You can read this website in Spanish using the EN / ES language button in the navigation bar at the top of every page. For help in Spanish by phone, please call the parish office at (910) 483-3216.",
      link: { label: "Contact the parish", href: "/#contact" },
    },
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "thank you", "thanks"],
    reply: {
      text: "Hello, and welcome to St. Ann. I can help with Mass times, our school, the sacraments, events, ministries, giving, prayer requests, and directions. What would you like to know?",
    },
  },
];

const suggestions = ["What time is Mass?", "Is there a school?", "How do I register?", "Where is the church?"];

// Pad and strip punctuation so keywords match on word boundaries, not substrings.
function normalize(value: string) {
  return ` ${value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()} `;
}

function findReply(question: string): Reply {
  const asked = normalize(question);
  const match = topics
    .map((topic) => ({
      topic,
      score: topic.keywords.reduce(
        (score, keyword) => score + (asked.includes(normalize(keyword)) ? keyword.length : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score)[0];

  if (match?.score) return match.topic.reply;

  return {
    text: "I’m not sure about that one yet. I can help with Mass times, our school, the sacraments, funerals, events, bulletins, registration, ministries, giving, prayer, photos, parish history, and directions. For anything else, please call the parish office at (910) 483-3216.",
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
      text: "Welcome! I can help you find Mass times, our school, parish events, the sacraments, ministries, giving, registration information, and more. What would you like to know?",
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
                  {message.link &&
                    (message.link.href.startsWith("http") ? (
                      <a href={message.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex mt-2 font-semibold underline underline-offset-4" style={{ color: "var(--gold)" }}>
                        {message.link.label} →
                      </a>
                    ) : (
                      <Link href={message.link.href} onClick={() => setOpen(false)} className="inline-flex mt-2 font-semibold underline underline-offset-4" style={{ color: "var(--gold)" }}>
                        {message.link.label} →
                      </Link>
                    ))}
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
