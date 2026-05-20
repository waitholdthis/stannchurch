"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/publicPath";

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

const milestones = [
  {
    year: "1939",
    title: "A Parish Is Born",
    desc: "Father John Hennessy establishes St. Ann Catholic Church to serve the Black Catholic community of Fayetteville. The earliest Masses are celebrated in Mack's Barber Shop on Gillespie Street — a humble beginning rooted in remarkable faith.",
  },
  {
    year: "1940",
    title: "A Permanent Home",
    desc: "The parish community, supported by Boston's St. Ann Church and the Catholic Negro-American Mission Board, secures its first dedicated church building — giving the congregation a permanent house of worship.",
  },
  {
    year: "1956",
    title: "St. Ann Catholic School Opens",
    desc: "In September, St. Ann Catholic School opens its doors, fulfilling the parish's deep commitment to Catholic education. The school extends the parish's mission of forming faith and mind together.",
  },
  {
    year: "1983",
    title: "The Stained Glass Windows",
    desc: "Eight magnificent stained glass windows are installed in the main nave of the church, each one narrating a chapter of parish history — its African Catholic roots, its military faithful, its founding families, and its enduring hope.",
  },
  {
    year: "Today",
    title: "A Vibrant Community",
    desc: "St. Ann continues to grow as a vibrant, engaged parish family — rooted in the Sunday Eucharist, committed to Catholic education, and united across every background in the love of God.",
  },
];

export default function ParishHistoryContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Est. 1939 · Fayetteville, NC
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
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>History</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              From a barbershop on Gillespie Street to a thriving parish community —
              St. Ann Catholic Church has been a home of faith, education, and unity
              in Fayetteville for over eighty years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening quote */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p
              className="leading-relaxed italic"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.35rem",
                fontWeight: 300,
                color: "var(--navy)",
              }}
            >
              "A community of Faithful in Christ where there is neither Black nor White,
              bond nor free, but all are one in the Love of God."
            </p>
            <p
              className="mt-3 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
            >
              — Founding Vision of St. Ann Parish
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="flex flex-col gap-6">
                <div>
                  <span
                    className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Our Founding
                  </span>
                  <h2
                    className="mt-3 mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                      fontWeight: 300,
                      color: "var(--navy)",
                    }}
                  >
                    Born of Faith in{" "}
                    <em style={{ color: "var(--gold)", fontWeight: 400 }}>1939</em>
                  </h2>
                  <div className="w-10 h-0.5 mb-5" style={{ background: "var(--gold)" }} />
                </div>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.8 }}
                >
                  St. Ann Catholic Church was founded in 1939 to serve the Black Catholic
                  community of Fayetteville, North Carolina. In its earliest days, the faithful
                  gathered for Mass in Mack's Barber Shop on Gillespie Street — a testament to
                  the community's determination to worship together despite limited means.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.8 }}
                >
                  The parish was aided by St. Patrick Parish — the "ecclesiastical mother" of
                  St. Ann — and by Boston's St. Ann Church, whose financial support helped fund
                  the young Father John Hennessy and establish a permanent home for the
                  Fayetteville congregation. The Oblates of Mary Immaculate have served the
                  parish since its earliest years.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.8 }}
                >
                  Today, St. Ann stands as a vibrant, growing parish — rooted in the Sunday
                  Eucharist, committed to Catholic education, and home to a community that
                  reflects the full breadth of God's family.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={publicPath("/st-ann-fayetteville.jpg")}
                  alt="St. Ann Catholic Church, Fayetteville NC"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[var(--navy)]/20" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Through the Years
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
                Milestones
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <FadeUp key={m.year} delay={0.06 * i}>
                  <div className="flex gap-6 items-start">
                    {/* Year bubble */}
                    <div
                      className="hidden sm:flex w-12 h-12 rounded-full items-center justify-center shrink-0 text-xs font-medium z-10"
                      style={{
                        background: i === milestones.length - 1 ? "var(--gold)" : "var(--navy)",
                        color: "white",
                        fontFamily: "'Cinzel', serif",
                        letterSpacing: "0.02em",
                        fontSize: "0.65rem",
                      }}
                    >
                      {m.year === "Today" ? "Now" : m.year.slice(2)}
                    </div>

                    <div
                      className="flex-1 rounded-2xl border p-6"
                      style={{ borderColor: "var(--border)", background: "var(--cream)" }}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span
                          className="text-xs tracking-widest uppercase shrink-0 sm:hidden"
                          style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                        >
                          {m.year}
                        </span>
                        <span
                          className="text-xs tracking-widest uppercase hidden sm:block shrink-0"
                          style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                        >
                          {m.year}
                        </span>
                      </div>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.35rem",
                          fontWeight: 500,
                          color: "var(--navy)",
                        }}
                      >
                        {m.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: "1.05rem",
                          color: "var(--text-mid)",
                          lineHeight: 1.7,
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Learn More
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
                Explore Parish History
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <Link
              href="/Church-Windows"
              className="group flex flex-col sm:flex-row gap-6 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.3)" }}
              >
                <BookOpen className="w-7 h-7" style={{ color: "var(--gold)" }} />
              </div>
              <div className="flex-1">
                <p
                  className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Art &amp; Heritage
                </p>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--navy)",
                  }}
                >
                  The Church Windows
                </h3>
                <p
                  style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.6 }}
                >
                  Installed in 1983, the eight stained glass windows of St. Ann tell the story
                  of the parish in light and color — honoring saints, founders, soldiers, and
                  the school that carries the mission forward.
                </p>
              </div>
              <div className="flex items-center self-center shrink-0">
                <ChevronRight
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--gold)" }}
                />
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Closing navy */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/75 leading-relaxed italic mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                fontWeight: 300,
              }}
            >
              "Here began, in humble faith, a community that endures — growing still
              in the grace and love of God."
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
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
