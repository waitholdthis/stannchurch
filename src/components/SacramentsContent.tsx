"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Droplets, HandHeart, Heart } from "lucide-react";
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

const sacraments = [
  {
    icon: Droplets,
    label: "Baptism",
    href: "/baptism",
    tagline: "New Life in Christ",
    desc: "Baptism is the foundation of Christian life — the sacrament by which we are freed from sin, reborn as children of God, and incorporated into the Church. Learn about preparation, scheduling, and godparent requirements at St. Ann.",
  },
  {
    icon: HandHeart,
    label: "Reconciliation",
    href: "/reconciliation",
    tagline: "God's Mercy & Forgiveness",
    desc: "Through the Sacrament of Reconciliation, God restores the relationship broken by sin. St. Ann offers regular confession times and welcomes all who seek God's healing forgiveness. Learn how to prepare and what to expect.",
  },
  {
    icon: Heart,
    label: "Anointing of the Sick",
    href: "/anointing-of-the-sick",
    tagline: "Healing & Comfort",
    desc: "The Anointing of the Sick brings the strength, peace, and courage of the Holy Spirit to those who are seriously ill, elderly, or facing surgery. Learn about this sacrament and how to request it for a loved one.",
  },
];

export default function SacramentsContent() {
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
            transition={{ duration: 0.5 }}
          >
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
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              The{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Sacraments</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              The sacraments are the living encounters with Christ that mark the key moments
              of our journey of faith. At St. Ann, we celebrate them with reverence, preparation,
              and joy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sacrament cards */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {sacraments.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.label} delay={0.08 * i}>
                <Link
                  href={s.href}
                  className="group flex flex-col sm:flex-row gap-6 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.3)" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-1"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {s.tagline}
                    </p>
                    <h2
                      className="mb-3"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        color: "var(--navy)",
                      }}
                    >
                      {s.label}
                    </h2>
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
                  <div className="flex items-center self-center shrink-0">
                    <ChevronRight
                      className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "var(--gold)" }}
                    />
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/75 leading-relaxed italic"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                fontWeight: 300,
              }}
            >
              "The sacraments are the channels through which God's grace flows into our lives —
              signs of Christ's love, tangible and true."
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/Faith-Formation"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Faith Formation
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
