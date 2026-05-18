"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Faith-integrated curriculum",
  "Pre-K through 8th grade",
  "Small class sizes & dedicated teachers",
  "Strong academic program",
  "Vibrant school community",
  "Rooted in Catholic tradition",
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

export default function School() {
  return (
    <section
      id="school"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "var(--navy)" }}
      aria-labelledby="school-heading"
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Icon / Visual */}
          <FadeUp>
            <div
              className="rounded-3xl p-12 border text-center"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
                style={{ background: "var(--gold)" }}
              >
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                }}
              >
                St. Ann Catholic School
              </h3>
              <p
                className="text-white/60 mb-8"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
              >
                Principal: Lee Pittman
              </p>

              <ul className="text-left grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--gold-light)" }}
                    />
                    <span
                      className="text-white/80"
                      style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem" }}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Text */}
          <div>
            <FadeUp delay={0.1}>
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Education
              </span>
              <h2
                id="school-heading"
                className="text-white mt-3 mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  lineHeight: 1.25,
                }}
              >
                Forming Hearts &amp; Minds <br />
                <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                  in the Catholic Tradition
                </em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="w-12 h-0.5 mb-8" style={{ background: "var(--gold)" }} />
              <p
                className="text-white/70 mb-5 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem" }}
              >
                St. Ann Catholic School is committed to academic excellence
                within a faith-filled environment. Our students are challenged
                to grow intellectually, spiritually, and as people of character.
              </p>
              <p
                className="text-white/70 mb-10 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.15rem" }}
              >
                Rooted in the Church's tradition of education, we prepare our
                students to be servant leaders in their families, the Church,
                and the world.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-200 group"
                style={{
                  background: "var(--gold)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.07em",
                }}
              >
                Learn About Enrollment
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
