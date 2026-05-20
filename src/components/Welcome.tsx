"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
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

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="py-28 px-6"
      style={{ background: "var(--cream)" }}
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeUp>
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Our Parish
              </span>
              <h2
                id="welcome-heading"
                className="mt-3 mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "var(--navy)",
                  lineHeight: 1.2,
                }}
              >
                A Community of Faith, <br />
                <em style={{ color: "var(--gold)", fontWeight: 400 }}>
                  Rooted in the Eucharist
                </em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div
                className="w-12 h-0.5 mb-8"
                style={{ background: "var(--gold)" }}
              />
              <p
                className="mb-5 leading-relaxed"
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "1.15rem",
                  color: "var(--text-mid)",
                }}
              >
                Since 1939, St. Ann Catholic Church has been a cornerstone of
                the Fayetteville community — welcoming all who seek to deepen
                their faith, serve their neighbors, and gather around the table
                of the Lord.
              </p>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Crimson Pro', serif",
                  fontSize: "1.15rem",
                  color: "var(--text-mid)",
                }}
              >
                We are a vibrant, growing, and engaged parish. Whether you are a
                lifelong Catholic, returning to the Church, or simply curious —
                there is a place for you here.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-200 shadow-md"
                  style={{
                    background: "var(--navy)",
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.06em",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.background = "var(--navy-mid)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.background = "var(--navy)")
                  }
                >
                  Register as a Parishioner
                </a>
                <Link
                  href="/ministries"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200"
                  style={{
                    color: "var(--navy)",
                    borderColor: "var(--navy)",
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.06em",
                  }}
                >
                  Our Ministries
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Decorative quote panel */}
          <FadeUp delay={0.25}>
            <div
              className="relative rounded-3xl p-10 overflow-hidden"
              style={{ background: "var(--navy)" }}
            >
              {/* bg glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
                }}
              />
              <Quote
                className="w-10 h-10 mb-6 opacity-30"
                style={{ color: "var(--gold-light)" }}
              />
              <blockquote>
                <p
                  className="text-white/90 mb-6 leading-relaxed italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                  }}
                >
                  "Where two or three are gathered in my name, there am I among
                  them."
                </p>
                <footer
                  className="text-[var(--gold-light)] text-sm tracking-wider uppercase"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  — Matthew 18:20
                </footer>
              </blockquote>

              <div
                className="mt-10 pt-8 border-t grid grid-cols-3 gap-4 text-center"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                {[
                  { number: "85+", label: "Years Serving" },
                  { number: "3", label: "Sunday Masses" },
                  { number: "1", label: "Parish School" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-[var(--gold-light)] font-medium"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "2rem",
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="text-white/50 text-xs mt-1 tracking-wider uppercase"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
