"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  PrinterIcon,
  Clock,
  GraduationCap,
  ChevronDown,
  Send,
} from "lucide-react";

function FacebookIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const staffContacts = [
  { label: "— Select a contact —", value: "" },
  { label: "Father Matthew Nwafor — Pastor", value: "father-nwafor" },
  { label: "Deacon Gary Stemple", value: "deacon-stemple" },
  { label: "Mr. Antony Bishop — Director of Religious Education", value: "antony-bishop" },
  { label: "Mr. Lee Pittman — School Principal", value: "lee-pittman" },
  { label: "Ms. Pok-Hui Folsom — Bookkeeper", value: "pok-hui-folsom" },
];

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

export default function Contact() {
  const [recipient, setRecipient] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "var(--cream-mid)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeUp>
          <div className="text-center mb-16">
            <span
              className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Get In Touch
            </span>
            <h2
              id="contact-heading"
              className="mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--navy)",
              }}
            >
              Contact Us
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Left: Info panel ── */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <FadeUp delay={0.05}>
              <div
                className="rounded-2xl p-7 border flex gap-5"
                style={{ background: "var(--cream)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="mb-1 font-medium"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--navy)", textTransform: "uppercase" }}
                  >
                    Address
                  </p>
                  <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.5 }}>
                    357 N. Cool Spring St.<br />
                    Fayetteville, NC 28301
                  </p>
                  <a
                    href="https://maps.google.com/?q=357+N+Cool+Spring+St+Fayetteville+NC+28301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm underline underline-offset-2 transition-colors duration-150"
                    style={{ color: "var(--gold)", fontFamily: "'Crimson Pro', serif" }}
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Phone & Fax */}
            <FadeUp delay={0.1}>
              <div
                className="rounded-2xl p-7 border grid grid-cols-1 sm:grid-cols-2 gap-6"
                style={{ background: "var(--cream)", borderColor: "var(--border)" }}
              >
                <div className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      className="mb-1 font-medium"
                      style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--navy)", textTransform: "uppercase" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:9104833216"
                      className="transition-colors duration-150 hover:underline"
                      style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}
                    >
                      (910) 483-3216
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <PrinterIcon className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      className="mb-1 font-medium"
                      style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--navy)", textTransform: "uppercase" }}
                    >
                      Fax
                    </p>
                    <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}>
                      (910) 483-4185
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Office Hours */}
            <FadeUp delay={0.15}>
              <div
                className="rounded-2xl p-7 border flex gap-5"
                style={{ background: "var(--cream)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--gold)" }} />
                </div>
                <div className="w-full">
                  <p
                    className="mb-3 font-medium"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--navy)", textTransform: "uppercase" }}
                  >
                    Office Hours
                  </p>
                  <div
                    className="divide-y"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {[
                      { days: "Monday – Thursday", hours: "9:00 AM – 3:00 PM" },
                      { days: "Friday", hours: "By Appointment Only" },
                      { days: "Saturday – Sunday", hours: "Closed" },
                    ].map((row) => (
                      <div
                        key={row.days}
                        className="flex justify-between items-center py-2"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "var(--text-mid)" }}>
                          {row.days}
                        </span>
                        <span
                          className="font-medium"
                          style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: row.hours === "Closed" ? "var(--muted)" : "var(--navy)" }}
                        >
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Online */}
            <FadeUp delay={0.2}>
              <div
                className="rounded-2xl p-7 border flex flex-col gap-4"
                style={{ background: "var(--cream)", borderColor: "var(--border)" }}
              >
                <p
                  className="font-medium"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", letterSpacing: "0.1em", color: "var(--navy)", textTransform: "uppercase" }}
                >
                  Find Us Online
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.facebook.com/StAnnFayettevilleNorthCarolina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-[#1877F2]"
                      style={{ background: "var(--gold-pale)" }}
                    >
                      <FacebookIcon className="w-4 h-4 group-hover:text-white transition-colors duration-200" style={{ color: "var(--gold)" }} />
                    </div>
                    <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "var(--text-mid)" }} className="group-hover:underline">
                      St. Ann Fayetteville, North Carolina
                    </span>
                  </a>
                  <a
                    href="https://www.stanncatholicschool.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--navy)]"
                      style={{ background: "var(--gold-pale)" }}
                    >
                      <GraduationCap className="w-4 h-4 group-hover:text-white transition-colors duration-200" style={{ color: "var(--gold)" }} />
                    </div>
                    <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "var(--text-mid)" }} className="group-hover:underline">
                      stanncatholicschool.net
                    </span>
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: Contact form ── */}
          <FadeUp delay={0.15}>
            <div
              className="rounded-2xl border p-8 h-full"
              style={{ background: "var(--cream)", borderColor: "var(--border)" }}
            >
              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                }}
              >
                Send a Message
              </h3>
              <p
                className="mb-7"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "var(--muted)" }}
              >
                Select a recipient and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <Send className="w-7 h-7" style={{ color: "var(--gold)" }} />
                  </div>
                  <p
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "var(--navy)", fontWeight: 400 }}
                  >
                    Message Sent
                  </p>
                  <p style={{ fontFamily: "'Crimson Pro', serif", color: "var(--muted)", fontSize: "1rem" }}>
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm underline underline-offset-2"
                    style={{ color: "var(--gold)", fontFamily: "'Crimson Pro', serif" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Recipient dropdown */}
                  <div>
                    <label
                      htmlFor="recipient"
                      className="block mb-1.5 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)" }}
                    >
                      To <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="recipient"
                        required
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="w-full appearance-none rounded-xl border px-4 py-3 pr-10 text-base outline-none transition-colors duration-150 focus:ring-2 cursor-pointer"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--cream-mid)",
                          fontFamily: "'Crimson Pro', serif",
                          color: recipient ? "var(--text)" : "var(--muted)",
                          boxShadow: "none",
                        }}
                        onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = "var(--gold)")}
                        onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = "var(--border)")}
                      >
                        {staffContacts.map((c) => (
                          <option key={c.value} value={c.value} disabled={c.value === ""}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        style={{ color: "var(--muted)" }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "first-name", label: "First Name" },
                      { id: "last-name", label: "Last Name" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label
                          htmlFor={f.id}
                          className="block mb-1.5 text-xs tracking-widest uppercase"
                          style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)" }}
                        >
                          {f.label} <span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <input
                          id={f.id}
                          type="text"
                          required
                          className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--cream-mid)",
                            fontFamily: "'Crimson Pro', serif",
                            color: "var(--text)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1.5 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)" }}
                    >
                      Email <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--cream-mid)",
                        fontFamily: "'Crimson Pro', serif",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-1.5 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)" }}
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--cream-mid)",
                        fontFamily: "'Crimson Pro', serif",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1.5 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)" }}
                    >
                      Message <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150 resize-none"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--cream-mid)",
                        fontFamily: "'Crimson Pro', serif",
                        color: "var(--text)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-200 shadow-md group"
                    style={{
                      background: "var(--navy)",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--navy-mid)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--navy)")}
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
