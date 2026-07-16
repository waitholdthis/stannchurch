"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, CalendarDays, Phone, Mail, Megaphone } from "lucide-react";
import Link from "next/link";
import { announcements } from "./announcements-data";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// day-of-week → events (0=Sun … 6=Sat)
const weeklyEvents: Record<number, { time: string; title: string; note?: string }[]> = {
  0: [
    { time: "8:30 AM", title: "Mass" },
    { time: "11:00 AM", title: "Mass", note: "Livestreamed" },
  ],
  1: [{ time: "12:15 PM", title: "Communion Service" }],
  2: [{ time: "12:15 PM", title: "Mass" }],
  3: [
    { time: "12:15 PM", title: "Mass" },
    { time: "12:45 PM", title: "Adoration & Benediction", note: "Follows daily Mass" },
  ],
  4: [{ time: "9:00 AM", title: "Mass", note: "School Mass during the school year; 12:15 PM in June & July" }],
  5: [{ time: "12:15 PM", title: "Mass" }],
  6: [
    { time: "4:00 PM", title: "Confessions" },
    { time: "5:00 PM", title: "Vigil Mass" },
  ],
};

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const eventColor: Record<string, string> = {
  "Mass":                    "bg-[var(--navy)] text-white",
  "Vigil Mass":              "bg-[var(--navy)] text-white",
  "Communion Service":       "bg-[var(--navy-mid)] text-white",
  "Confessions":             "bg-[var(--gold)] text-white",
  "Adoration & Benediction": "bg-[var(--gold-pale)] text-[var(--navy)]",
};

function pill(title: string) {
  return eventColor[title] ?? "bg-[var(--cream-mid)] text-[var(--navy)]";
}

export default function EventsContent() {
  const today = new Date();
  const [year, setYear]   = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const firstDay  = new Date(year, month, 1).getDay();   // 0–6
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function prev() {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  }
  function next() {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  }

  // build grid cells (leading blanks + days)
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  const isToday = (d: number) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(184,146,42,0.2)", border: "1px solid rgba(184,146,42,0.4)" }}
              >
                <CalendarDays className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
              </div>
            </div>
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              St. Ann Catholic Church
            </span>
            <h1
              className="text-white mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Parish{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Events</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              Join us for Mass, sacraments, and community prayer throughout the week.
              All are welcome at St. Ann.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Announcements / schedule changes */}
      {announcements.length > 0 && (
        <section className="pt-16 px-6" style={{ background: "var(--cream)" }} aria-label="Schedule announcements">
          <div className="max-w-7xl mx-auto flex flex-col gap-3">
            {announcements.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border px-5 py-4 flex items-start gap-4"
                style={{ borderColor: "var(--border)", background: "var(--gold-pale)" }}
              >
                <Megaphone className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--gold)" }} />
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1rem" }}
                >
                  <span style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)", fontSize: "0.78rem", letterSpacing: "0.06em" }}>
                    {a.title}
                    {a.date ? ` — ${a.date}` : ""}
                  </span>
                  <br />
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Calendar */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp delay={0}>
            {/* Month nav */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-150 hover:bg-[var(--cream-mid)] cursor-pointer"
                style={{ borderColor: "var(--border)" }}
                aria-label="Previous month"
              >
                <ChevronLeft className="w-4 h-4" style={{ color: "var(--navy)" }} />
              </button>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 400,
                  color: "var(--navy)",
                }}
              >
                {MONTHS[month]} {year}
              </h2>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-150 hover:bg-[var(--cream-mid)] cursor-pointer"
                style={{ borderColor: "var(--border)" }}
                aria-label="Next month"
              >
                <ChevronRight className="w-4 h-4" style={{ color: "var(--navy)" }} />
              </button>
            </div>

            {/* Scrollable calendar — horizontal scroll on small screens */}
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <div className="min-w-[560px] px-6 sm:px-0">

            {/* Day-of-week headers */}
            <div className="grid grid-cols-7 mb-1">
              {DOW.map(d => (
                <div
                  key={d}
                  className="text-center text-xs tracking-widest uppercase py-3"
                  style={{ fontFamily: "'Cinzel', serif", color: "var(--muted)" }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Grid cells */}
            <div
              className="grid grid-cols-7 border-t border-l rounded-2xl overflow-hidden shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              {cells.map((day, idx) => {
                const dow = idx % 7;
                const events = day ? weeklyEvents[dow] ?? [] : [];
                return (
                  <div
                    key={idx}
                    className="border-b border-r p-2 sm:p-3 flex flex-col gap-1"
                    style={{
                      minHeight: "110px",
                      borderColor: "var(--border)",
                      background: day
                        ? isToday(day)
                          ? "var(--gold-pale)"
                          : "white"
                        : "var(--cream-mid)",
                    }}
                  >
                    {day && (
                      <>
                        <span
                          className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full self-end shrink-0 ${
                            isToday(day)
                              ? "bg-[var(--gold)] text-white"
                              : "text-[var(--navy)]"
                          }`}
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {day}
                        </span>
                        {events.map((ev, ei) => (
                          <span
                            key={ei}
                            className={`text-[11px] leading-snug px-2 py-1 rounded-md font-medium ${pill(ev.title)}`}
                            title={ev.note ? `${ev.time} — ${ev.note}` : ev.time}
                          >
                            <span className="opacity-75 mr-1">{ev.time}</span>
                            {ev.title}
                          </span>
                        ))}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

              </div>{/* end min-w inner */}
            </div>{/* end overflow-x-auto */}

            {/* Legend */}
            <div className="mt-5 flex flex-wrap gap-3">
              {Object.entries(eventColor).map(([label, cls]) => (
                <span key={label} className={`text-xs px-3 py-1.5 rounded-full font-medium ${cls}`}>
                  {label}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Regular Schedule
              </span>
              <h2
                className="mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "var(--navy)",
                }}
              >
                Weekly at a Glance
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {[
              { day: "Sunday",    items: ["8:30 AM — Mass", "11:00 AM — Mass (Livestreamed)"] },
              { day: "Monday",    items: ["12:15 PM — Communion Service"] },
              { day: "Tuesday",   items: ["12:15 PM — Mass"] },
              { day: "Wednesday", items: ["12:15 PM — Mass", "12:45 PM — Adoration & Benediction"] },
              { day: "Thursday",  items: ["9:00 AM — School Mass (school year)", "12:15 PM — Mass (June – July)"] },
              { day: "Friday",    items: ["12:15 PM — Mass"] },
              { day: "Saturday",  items: ["4:00 PM — Confessions", "5:00 PM — Vigil Mass"] },
            ].map(({ day, items }, i) => (
              <FadeUp key={day} delay={0.04 * i}>
                <div
                  className="rounded-xl border p-4 h-full"
                  style={{ borderColor: "var(--border)", background: "var(--cream)" }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-3 pb-2 border-b"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", borderColor: "var(--border)" }}
                  >
                    {day}
                  </p>
                  <div className="flex flex-col gap-2">
                    {items.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "var(--muted)" }} />
                        <p
                          className="text-sm leading-snug"
                          style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Note + Contact */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-10">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Questions?
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Contact the Parish Office
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="rounded-2xl border p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
            >
              <div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(184,146,42,0.15)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                </div>
                <p className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}>Phone</p>
                <a
                  href="tel:9104833216"
                  className="text-white/80 hover:text-white hover:underline transition-colors duration-150"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem" }}
                >
                  (910) 483-3216
                </a>
              </div>
              <div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(184,146,42,0.15)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                </div>
                <p className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}>Email</p>
                <a
                  href="mailto:info@stanncatholicchurch.org"
                  className="text-white/80 hover:text-white hover:underline transition-colors duration-150"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem" }}
                >
                  info@stanncatholicchurch.org
                </a>
              </div>
              <div
                className="sm:col-span-2 pt-6 border-t text-sm"
                style={{ borderColor: "rgba(255,255,255,0.08)", fontFamily: "'Crimson Pro', serif", color: "rgba(255,255,255,0.4)" }}
              >
                Office Hours: Mon–Thu 9:00 AM – 3:00 PM · Friday by appointment
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
