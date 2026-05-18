"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cross,
  Phone,
  Mail,
  ExternalLink,
  HeartHandshake,
  Church,
  BookOpen,
  Flower2,
  Users,
  Star,
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

const steps = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Before Death",
    desc: "Meet with your parish priest to discuss the sacraments, funeral preferences, and burial wishes. Address any desires regarding cremation — the Church emphasizes that \"the presence of the body most clearly brings to mind the life and death of the person\" and strongly prefers the body be present for funeral rites.",
  },
  {
    number: "02",
    icon: Phone,
    title: "At Death",
    desc: "Contact your parish priest immediately, followed by a funeral director and a Catholic cemeterian. Work with the parish to plan either a Mass of Christian Burial or a Memorial Mass, selecting readings, responses, and music. At the funeral home, choose a casket and plan the vigil, and at the cemetery select a burial location.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "The Vigil",
    desc: "The vigil is held at the funeral home, a private residence, or the parish church for one or two days. It includes the Liturgy of the Word and traditionally the Rosary. The Church describes this as the time when \"the Christian community keeps watch with the family in prayer.\"",
  },
  {
    number: "04",
    icon: Church,
    title: "The Funeral",
    desc: "The Mass of Christian Burial, with the deceased's body present, is the preferred form. It emphasizes the Eucharistic sacrifice and Christ's Resurrection. A Memorial Mass without the body is an alternative. Eulogies take place after Mass, before the final blessing.",
  },
  {
    number: "05",
    icon: Flower2,
    title: "The Burial",
    desc: "Conducted at a Catholic cemetery following the Funeral Mass. The priest or deacon leads graveside prayers and blesses the grave. Cremated remains should be buried in sacred ground and are never to be scattered.",
  },
  {
    number: "06",
    icon: Star,
    title: "Remembrance",
    desc: "The connection with those who have died continues through prayer, participation in the life of the Church, and cemetery visits. Catholic cemeteries offer monthly Masses for the deceased and special memorial services throughout the year.",
  },
];

export default function FuneralRitesContent() {
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
              Faith Formation
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
              The Catholic Way of{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                Death and Burial
              </em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 300 }}
            >
              "I am the resurrection and the life. Whoever believes in me,
              though he die, yet shall he live."
            </p>
            <p
              className="text-[var(--gold-light)] mt-2 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — John 11:25
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p
              className="leading-relaxed mb-6"
              style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: "1.2rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
              }}
            >
              Catholic funeral rites reflect the Church's profound faith in the
              Resurrection of Christ and the resurrection of the body. They are
              an expression of hope rooted in the Paschal Mystery — that through
              death, we pass into eternal life.
            </p>
            <div
              className="rounded-2xl border p-7 text-left"
              style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
            >
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 mt-1 shrink-0" style={{ color: "var(--gold)" }} />
                <p
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: "1.05rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                  }}
                >
                  If you have experienced a death in your family, please contact a
                  funeral home first. Generally, all funeral arrangements — including
                  the scheduling of the Funeral Mass — will be made through the
                  funeral home with the parish.{" "}
                  <strong style={{ color: "var(--navy)" }}>
                    A Funeral Mass or burial cannot be scheduled without the parish
                    priest being involved in the process.
                  </strong>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Six Steps */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-5xl mx-auto">
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
                The Six Steps
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-4" style={{ background: "var(--gold)" }} />
              <p
                className="max-w-xl mx-auto"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}
              >
                The Church encourages families to plan ahead so that decisions
                can be made thoughtfully, rather than during a time of acute grief.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.number} delay={0.07 * i}>
                <div
                  className="rounded-2xl border p-8 flex gap-6 h-full"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div className="shrink-0 flex flex-col items-center gap-3 pt-1">
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
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                We Are Here for You
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Contact the Parish
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact */}
            <FadeUp delay={0.05}>
              <div
                className="rounded-2xl border p-8 h-full"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
              >
                <p
                  className="mb-5 font-medium text-[var(--gold-light)]"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Parish Office
                </p>
                <div className="flex flex-col gap-4 mb-6">
                  <a
                    href="tel:9104833216"
                    className="flex items-center gap-3 hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "rgba(255,255,255,0.75)", fontSize: "1.05rem" }}
                  >
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--gold-light)" }} />
                    (910) 483-3216
                  </a>
                  <a
                    href="mailto:info@stanncatholicchurch.org"
                    className="flex items-center gap-3 hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "rgba(255,255,255,0.75)", fontSize: "1.05rem" }}
                  >
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--gold-light)" }} />
                    info@stanncatholicchurch.org
                  </a>
                </div>
                <div
                  className="pt-5 border-t text-sm"
                  style={{ borderColor: "rgba(255,255,255,0.1)", fontFamily: "'Crimson Pro', serif", color: "rgba(255,255,255,0.4)" }}
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
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
              >
                <p
                  className="mb-2 font-medium text-[var(--gold-light)]"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Additional Resources
                </p>
                {[
                  {
                    label: "USCCB — Order of Christian Funerals",
                    href: "https://www.usccb.org/prayer-and-worship/sacraments-and-sacramentals/death-and-funerals",
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
                    style={{ borderColor: "rgba(255,255,255,0.1)", fontFamily: "'Crimson Pro', serif", color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}
                  >
                    <ExternalLink
                      className="w-4 h-4 shrink-0 transition-colors duration-150 group-hover:text-[var(--gold-light)]"
                      style={{ color: "rgba(255,255,255,0.3)" }}
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
      <section className="py-10 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/anointing-of-the-sick"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Anointing of the Sick
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
