"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Users,
  GraduationCap,
  Heart,
  Monitor,
  Headphones,
  ChevronRight,
  Phone,
  Mail,
  ExternalLink,
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

const programs = [
  {
    icon: BookOpen,
    label: "Children's Ministry",
    grades: "Pre-K through 8th Grade",
    desc: "Our Religious Education program forms children in the Catholic faith through age-appropriate classes, preparing them for the sacraments and a lifetime of discipleship.",
    note: "Baptismal certificates required for children receiving First Communion or Confirmation.",
  },
  {
    icon: GraduationCap,
    label: "High School Ministry",
    grades: "Grades 9–12",
    desc: "Teenagers deepen their faith through engaging formation sessions, service opportunities, and community with peers as they prepare for Confirmation and adult life in the Church.",
    note: null,
  },
  {
    icon: Heart,
    label: "Young Adult Ministry",
    grades: "Ages 18–35",
    desc: "A welcoming community for young adults seeking to grow in faith through formation, service, and fellowship. All young adults are warmly invited to participate.",
    note: null,
  },
  {
    icon: Users,
    label: "Adult Formation",
    grades: "All Parishioners",
    desc: "Ongoing formation for adults through Faith Matters sessions covering Catholic teachings, held Tuesday evenings at 7 PM and Thursday mornings at 10 AM.",
    note: null,
  },
];

const resources = [
  {
    icon: Monitor,
    label: "FORMED",
    desc: "Access Bishop Robert Barron's Catholicism series and hundreds of other educational programs, movies, and audio content through our parish's FORMED subscription.",
    href: "https://formed.org/",
  },
  {
    icon: Headphones,
    label: "Lighthouse Catholic Media",
    desc: "Browse our kiosk of CDs and MP3 downloads on Catholic faith topics — a great resource for deepening your understanding of Church teaching.",
    href: null,
  },
];

const subPages = [
  {
    label: "The Sacraments",
    desc: "Baptism, Reconciliation, and Anointing of the Sick",
    href: "/The-Sacraments",
    external: false,
  },
  {
    label: "Catholic Funeral Rites",
    desc: "Understanding the Church's rites of Christian burial",
    href: "/catholic-funeral-rites",
    external: false,
  },
  {
    label: "Vocations",
    desc: "Answering God's call — priesthood and religious life in North Carolina",
    href: "https://ncpriest.org/",
    external: true,
  },
];

export default function FaithFormationContent() {
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
                <BookOpen className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
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
              Faith{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Formation</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300 }}
            >
              "A life-long process which begins within the family and encompasses
              every aspect of life."
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
              At St. Ann Catholic Church, we believe that parents are the first and
              primary educators of their children in the faith. Our formal programs
              supplement and support that home-based faith development — nurturing
              disciples from early childhood through adulthood.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Programs & Ministries
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
                Formation for Every Age
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <FadeUp key={prog.label} delay={0.07 * i}>
                <div
                  className="rounded-2xl border p-8 h-full flex flex-col gap-4"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--gold-pale)" }}
                    >
                      <prog.icon className="w-5 h-5" style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.3rem",
                          fontWeight: 500,
                          color: "var(--navy)",
                        }}
                      >
                        {prog.label}
                      </h3>
                      <p
                        className="text-xs tracking-widest uppercase"
                        style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                      >
                        {prog.grades}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.65,
                    }}
                  >
                    {prog.desc}
                  </p>
                  {prog.note && (
                    <p
                      className="text-sm italic border-t pt-4"
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        color: "var(--muted)",
                        borderColor: "var(--border)",
                      }}
                    >
                      {prog.note}
                    </p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Registration note */}
          <FadeUp delay={0.2}>
            <div
              className="mt-8 rounded-2xl border px-8 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
              style={{ borderColor: "var(--gold)", background: "var(--gold-pale)" }}
            >
              <div className="shrink-0">
                <span
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                >
                  Enrollment
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "1.05rem",
                  color: "var(--navy)",
                  lineHeight: 1.6,
                }}
              >
                Registration opens in <strong>July</strong>. Sessions begin in{" "}
                <strong>September</strong>. Contact the parish office or the Director of
                Religious Education to register your family.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Learning Tools
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Formation Resources
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((res, i) => (
              <FadeUp key={res.label} delay={0.08 * i}>
                <div
                  className="rounded-2xl border p-8 h-full flex flex-col gap-4"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(184,146,42,0.15)" }}
                  >
                    <res.icon className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "white",
                    }}
                  >
                    {res.label}
                  </h3>
                  <p
                    className="flex-1"
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.65,
                    }}
                  >
                    {res.desc}
                  </p>
                  {res.href && (
                    <a
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm transition-colors duration-150 hover:opacity-100 opacity-70"
                      style={{ fontFamily: "'Cinzel', serif", color: "var(--gold-light)", letterSpacing: "0.06em" }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit FORMED
                    </a>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-page navigation */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Explore More
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
                Faith Formation Topics
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {subPages.map((page, i) => (
              <FadeUp key={page.label} delay={0.07 * i}>
                <a
                  href={page.href}
                  target={page.external ? "_blank" : undefined}
                  rel={page.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-3 rounded-2xl border p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--navy)",
                    }}
                  >
                    {page.label}
                  </h3>
                  <p
                    className="flex-1 text-sm leading-relaxed"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                  >
                    {page.desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-xs tracking-widest uppercase mt-auto"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                  >
                    {page.external ? (
                      <ExternalLink className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                    Learn More
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Get In Touch
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
                Director of Religious Education
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-8" style={{ background: "var(--gold)" }} />
              <p
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "1.1rem",
                  color: "var(--text-mid)",
                }}
              >
                Questions about registration, programs, or sacramental preparation?
                Reach out to our Director of Religious Education.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="rounded-2xl border p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
              style={{ background: "var(--cream)", borderColor: "var(--border)" }}
            >
              <a
                href="mailto:dre@stanncatholicchurch.org"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--muted)" }}
                  >
                    Email
                  </p>
                  <p
                    className="group-hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    dre@stanncatholicchurch.org
                  </p>
                </div>
              </a>

              <a
                href="tel:9104833216"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--muted)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="group-hover:underline"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                  >
                    (910) 483-3216
                  </p>
                </div>
              </a>

              <div
                className="sm:col-span-2 pt-6 border-t text-sm text-center"
                style={{ borderColor: "var(--border)", fontFamily: "'Crimson Pro', serif", color: "var(--muted)" }}
              >
                357 N. Cool Spring St., Fayetteville, NC 28301 &nbsp;·&nbsp; Office Hours: Mon–Thu 9:00 AM – 3:00 PM
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto flex justify-center">
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
