"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Calendar, Clock, Users, CheckCircle2, Phone, Mail, FileText, ExternalLink } from "lucide-react";
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

const godparentRequirements = [
  "At least 16 years of age",
  "Fully initiated Catholic — Baptism, First Holy Communion, and Confirmation received",
  "Living in good standing according to the teachings of the faith",
  "If married, the marriage must be recognized by the Church",
  "Must obtain a Certificate of Eligibility from their home parish",
  "Must attend the baptism preparation class",
  "One godparent must be Catholic; a baptized non-Catholic Christian may serve as a Christian witness alongside the Catholic godparent",
  "One male, one female, or one of each — maximum two godparents",
];

const preparationSteps = [
  {
    step: "01",
    title: "Contact the Parish",
    desc: "Reach out to the Director of Religious Education at least two months before your intended baptism date to begin the process.",
  },
  {
    step: "02",
    title: "Become Parish Members",
    desc: "Parents must register as members of St. Ann Catholic Church and commit to regular weekly Mass attendance.",
  },
  {
    step: "03",
    title: "Attend Preparation Class",
    desc: "Parents and godparents are required to attend a baptism preparation class, held on the first Saturday of each month at 3:30 PM.",
  },
  {
    step: "04",
    title: "Schedule the Baptism",
    desc: "Baptisms are administered on the last Saturday of the month at 10:00 AM, or during the 8:30 AM Mass on the last Sunday of the month.",
  },
];

export default function BaptismContent() {
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
                <Droplets className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
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
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Baptism</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300 }}
            >
              "Go therefore and make disciples of all nations, baptizing them in the
              name of the Father and of the Son and of the Holy Spirit."
            </p>
            <p
              className="text-[var(--gold-light)] mt-2 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — Matthew 28:19
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
              Baptism is our birth as Christians. Through Baptism we are baptized
              into Christ, die and rise with him, and become members of his family —
              the Church. It is the first and foundational sacrament of initiation,
              opening the door to all the other sacraments.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                How to Begin
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
                Baptism Preparation
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {preparationSteps.map((s, i) => (
              <FadeUp key={s.step} delay={0.08 * i}>
                <div
                  className="rounded-2xl border p-8 flex gap-6 h-full"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div
                    className="text-2xl font-light shrink-0 leading-none pt-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--gold)",
                    }}
                  >
                    {s.step}
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
                        lineHeight: 1.65,
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

      {/* Schedule */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Dates & Times
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Baptism Schedule
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Calendar,
                label: "Preparation Class",
                value: "First Saturday of the month",
                sub: "3:30 PM",
              },
              {
                icon: Clock,
                label: "Baptism — Saturday",
                value: "Last Saturday of the month",
                sub: "10:00 AM",
              },
              {
                icon: Clock,
                label: "Baptism — Sunday",
                value: "Last Sunday of the month",
                sub: "During the 8:30 AM Mass",
              },
            ].map((item) => (
              <FadeUp key={item.label}>
                <div
                  className="rounded-2xl p-7 border text-center"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(184,146,42,0.15)" }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <p
                    className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-white font-light mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-white/50 text-sm" style={{ fontFamily: "'Crimson Pro', serif" }}>
                    {item.sub}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p
              className="text-center text-white/40 mt-8 text-sm"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              Please begin preparations approximately 2 months before your intended baptism date.
              Flexibility may be required due to the liturgical schedule.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Godparent Requirements */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Sponsors
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
                Godparent Requirements
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
              <p
                className="max-w-xl mx-auto"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}
              >
                The Church requires godparents to be practicing Catholics who can
                serve as authentic witnesses of the faith for the person being baptized.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {godparentRequirements.map((req, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div
                  className="flex items-start gap-4 rounded-xl border p-5"
                  style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.55,
                    }}
                  >
                    {req}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Resources */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Next Steps
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
                style={{ background: "var(--cream)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <Users className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      className="font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "var(--navy)" }}
                    >
                      Antony Bishop
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "'Crimson Pro', serif", color: "var(--muted)" }}
                    >
                      Director of Religious Education
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:dre@stanncatholicchurch.org"
                    className="flex items-center gap-3 hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--gold)" }} />
                    dre@stanncatholicchurch.org
                  </a>
                  <a
                    href="tel:9104833216"
                    className="flex items-center gap-3 hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--gold)" }} />
                    (910) 483-3216
                  </a>
                </div>
                <div
                  className="mt-6 pt-6 border-t text-sm"
                  style={{ borderColor: "var(--border)", fontFamily: "'Crimson Pro', serif", color: "var(--muted)" }}
                >
                  357 N. Cool Spring St., Fayetteville, NC 28301<br />
                  Fax: (910) 483-4185
                </div>
              </div>
            </FadeUp>

            {/* Resources card */}
            <FadeUp delay={0.1}>
              <div
                className="rounded-2xl border p-8 h-full flex flex-col gap-4"
                style={{ background: "var(--cream)", borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <FileText className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <p
                    className="font-medium"
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
                </div>
                {[
                  { label: "USCCB — About Baptism", href: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/baptism" },
                  { label: "Diocese of Raleigh", href: "https://dioceseofraleigh.org/" },
                  { label: "The Vatican", href: "https://www.vatican.va/content/vatican/en.html" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors duration-150 hover:border-[var(--gold)] group"
                    style={{ borderColor: "var(--border)", fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:text-[var(--gold)] transition-colors duration-150" style={{ color: "var(--muted)" }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/sacraments"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← The Sacraments
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
