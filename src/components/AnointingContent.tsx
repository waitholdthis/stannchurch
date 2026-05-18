"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HeartPulse,
  UserCheck,
  Sparkles,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

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

const whoCanReceive = [
  {
    icon: HeartPulse,
    title: "Serious Physical Illness",
    desc: "Catholics who are suffering from a grave or serious illness, whether sudden or prolonged, are encouraged to receive this sacrament without delay.",
  },
  {
    icon: BookOpen,
    title: "The Elderly",
    desc: "The elderly who are weakened or burdened by the infirmities of age may receive this sacrament, even if no life-threatening illness is present.",
  },
  {
    icon: UserCheck,
    title: "Before Major Surgery",
    desc: "Anyone who is about to undergo a serious surgical operation may be anointed beforehand, when the underlying illness is serious enough to warrant it.",
  },
];

const graces = [
  "Union of the sick person with the Passion of Christ, for his own good and that of the whole Church",
  "Strength, peace, and courage to endure the sufferings of illness or old age",
  "Forgiveness of sins, if the sick person was not able to obtain it through the Sacrament of Penance",
  "Restoration of health, if it is conducive to the salvation of the soul",
  "Preparation for passing over to eternal life",
];

export default function AnointingContent() {
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
                <HeartPulse className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
              </div>
            </div>
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Faith Formation · The Sacraments
            </span>
            <h1
              className="text-white mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Sacrament of{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                Anointing of the Sick
              </em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 300 }}
            >
              "Is anyone among you sick? Let him call for the elders of the church,
              and let them pray over him, anointing him with oil in the name of the Lord."
            </p>
            <p
              className="text-[var(--gold-light)] mt-2 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — James 5:14
            </p>
          </motion.div>
        </div>
      </section>

      {/* CCC Quote */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <blockquote
              className="relative rounded-2xl border p-10"
              style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
            >
              <div
                className="absolute top-6 left-8 text-6xl leading-none font-serif opacity-20"
                style={{ color: "var(--gold)", fontFamily: "'Cormorant Garamond', serif" }}
                aria-hidden="true"
              >
                "
              </div>
              <p
                className="relative leading-relaxed mb-5 pt-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--navy)",
                  lineHeight: 1.75,
                }}
              >
                By the sacred anointing of the sick and the prayer of the priests
                the whole Church commends those who are ill to the suffering and
                glorified Lord, that he may raise them up and save them. And indeed
                she exhorts them to contribute to the good of the People of God by
                freely uniting themselves to the Passion and death of Christ.
              </p>
              <footer
                className="text-sm tracking-wider uppercase"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
              >
                Catechism of the Catholic Church, #1499
              </footer>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* Who Can Receive */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Eligibility
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
                Who Can Receive This Sacrament?
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whoCanReceive.map((item, i) => (
              <FadeUp key={item.title} delay={0.08 * i}>
                <div
                  className="rounded-2xl border p-8 flex flex-col items-center text-center h-full"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--navy)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Graces of the Sacrament */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                The Gift
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Graces of This Sacrament
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
              <p
                className="text-white/60 max-w-xl mx-auto"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
              >
                Through the grace of the Holy Spirit, this sacrament brings
                profound spiritual and, at times, physical healing to the recipient.
              </p>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-4">
            {graces.map((grace, i) => (
              <FadeUp key={i} delay={0.07 * i}>
                <div
                  className="flex items-start gap-5 rounded-xl border px-7 py-5"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <Sparkles
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: "var(--gold-light)" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.1rem",
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.6,
                    }}
                  >
                    {grace}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                How to Request
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
                Contact &amp; Resources
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
              <p
                className="max-w-xl mx-auto"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}
              >
                To request the Anointing of the Sick for yourself or a loved one,
                contact the parish office directly. The sacrament is also announced
                in the weekly bulletin as dates approach.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact */}
            <FadeUp delay={0.05}>
              <div
                className="rounded-2xl border p-8 h-full"
                style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
              >
                <p
                  className="mb-5 font-medium"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    color: "var(--navy)",
                    textTransform: "uppercase",
                  }}
                >
                  Parish Office
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href="tel:9104833216"
                    className="flex items-center gap-3 hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--gold)" }} />
                    (910) 483-3216
                  </a>
                  <a
                    href="mailto:info@stanncatholicchurch.org"
                    className="flex items-center gap-3 hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--gold)" }} />
                    info@stanncatholicchurch.org
                  </a>
                </div>
                <div
                  className="pt-5 border-t text-sm"
                  style={{ borderColor: "var(--border)", fontFamily: "'Crimson Pro', serif", color: "var(--muted)" }}
                >
                  357 N. Cool Spring St., Fayetteville, NC 28301<br />
                  Fax: (910) 483-4185<br />
                  Mon–Thu: 9:00 AM – 3:00 PM · Friday: By appointment
                </div>
              </div>
            </FadeUp>

            {/* Resources */}
            <FadeUp delay={0.1}>
              <div
                className="rounded-2xl border p-8 h-full flex flex-col gap-4"
                style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
              >
                <p
                  className="mb-2 font-medium"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    color: "var(--navy)",
                    textTransform: "uppercase",
                  }}
                >
                  Additional Resources
                </p>
                {[
                  {
                    label: "USCCB — Anointing of the Sick",
                    href: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/anointing-of-the-sick",
                  },
                  {
                    label: "Diocese of Raleigh",
                    href: "https://dioceseofraleigh.org/",
                  },
                  {
                    label: "The Vatican",
                    href: "https://www.vatican.va/content/vatican/en.html",
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-150 hover:border-[var(--gold)] group"
                    style={{ borderColor: "var(--border)", fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1rem" }}
                  >
                    <ExternalLink
                      className="w-4 h-4 shrink-0 transition-colors duration-150 group-hover:text-[var(--gold)]"
                      style={{ color: "var(--muted)" }}
                    />
                    {link.label}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/reconciliation"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Reconciliation
          </Link>
          <span style={{ color: "var(--border)" }}>|</span>
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
