"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cross, Clock, CheckCircle2, BookOpen, Heart, Phone, Mail, ExternalLink } from "lucide-react";
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

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Examination of Conscience",
    desc: "Before coming to Confession, take time to prayerfully reflect on your thoughts, words, and actions since your last Confession. Consider how you may have fallen short in your love of God and neighbor, using the Ten Commandments and the Beatitudes as a guide.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Contrition",
    desc: "Be truly sorry for your sins — not merely out of fear of punishment, but out of love for God whom you have offended. Perfect contrition arises from love of God; imperfect contrition arises from other motives such as fear of hell. Both are sufficient for a valid Confession.",
  },
  {
    number: "03",
    icon: Cross,
    title: "Confession of Sins",
    desc: "Confess all mortal sins — in kind and number — to the priest. It is also encouraged to confess venial sins. The priest is bound by the absolute seal of Confession and may never reveal what is confessed under any circumstances.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Penance",
    desc: "The priest will assign a penance — a prayer, act of charity, or sacrifice — to help repair the harm caused by sin and to strengthen you against future temptation. Complete your penance as soon as possible after leaving the confessional.",
  },
  {
    number: "05",
    icon: Heart,
    title: "Absolution",
    desc: "The priest, acting in the person of Christ, pronounces the words of absolution. Through this sacrament, God truly forgives your sins. All guilt and eternal punishment due to mortal sin is removed. You leave reconciled with God and the Church.",
  },
];

export default function ReconciliationContent() {
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
                <Cross className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
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
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              The Sacrament of{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Reconciliation</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300 }}
            >
              "Receive the Holy Spirit. If you forgive the sins of any,
              they are forgiven them."
            </p>
            <p
              className="text-[var(--gold-light)] mt-2 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — John 20:22–23
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: "1.25rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
              }}
            >
              The Sacrament of Reconciliation — also known as Confession or Penance —
              is God's gift of mercy and healing to those who have sinned after Baptism.
              Through this sacrament, Christ himself forgives sins and restores us to
              full communion with God and the Church. It is an encounter with the
              loving mercy of our Father.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                At St. Ann
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Confession Schedule
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="rounded-2xl border p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(184,146,42,0.15)" }}
              >
                <Clock className="w-7 h-7" style={{ color: "var(--gold-light)" }} />
              </div>
              <div>
                <p
                  className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Weekly
                </p>
                <p
                  className="text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300 }}
                >
                  Saturdays at 4:00 PM
                </p>
                <p
                  className="text-white/50"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem" }}
                >
                  Confessions are also available by appointment. Contact the parish office to schedule.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* How to make a good Confession */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                A Guide
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
                How to Make a Good Confession
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
              <p
                className="max-w-xl mx-auto"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}
              >
                The Church invites us to approach the sacrament with a prepared and
                contrite heart. These five steps will help you make a fruitful Confession.
              </p>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-5">
            {steps.map((s, i) => (
              <FadeUp key={s.number} delay={0.07 * i}>
                <div
                  className="rounded-2xl border p-7 flex gap-6 items-start"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                    <span
                      className="font-light leading-none"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.6rem",
                        color: "var(--gold)",
                      }}
                    >
                      {s.number}
                    </span>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "var(--gold-pale)" }}
                    >
                      <s.icon className="w-4 h-4" style={{ color: "var(--gold)" }} />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        color: "var(--navy)",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.7,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Questions?
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
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact card */}
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
                  Mon–Thu: 9:00 AM – 3:00 PM · Friday: By appointment
                </div>
              </div>
            </FadeUp>

            {/* External resources */}
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
                    label: "Making a Good Confession — Catholic.org",
                    href: "https://www.catholic.org/prayers/confession.php",
                  },
                  {
                    label: "USCCB — The Sacrament of Penance",
                    href: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/penance",
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
            href="/baptism"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Baptism
          </Link>
          <span style={{ color: "var(--border)" }}>|</span>
          <Link
            href="/anointing-of-the-sick"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            Anointing of the Sick →
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
