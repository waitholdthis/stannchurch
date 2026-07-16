"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone } from "lucide-react";
import { announcements } from "./announcements-data";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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

export default function Announcements() {
  if (announcements.length === 0) return null;

  return (
    <section
      id="announcements"
      className="py-24 px-6"
      style={{ background: "var(--cream)" }}
      aria-labelledby="announcements-heading"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <span
              className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Parish News
            </span>
            <h2
              id="announcements-heading"
              className="mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--navy)",
              }}
            >
              Announcements
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
          </div>
        </FadeUp>

        <div className="flex flex-col gap-4">
          {announcements.map((a, i) => (
            <FadeUp key={a.title} delay={0.08 * i}>
              <div
                className="rounded-2xl border p-6 sm:p-7 flex gap-5"
                style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gold-pale)" }}
                >
                  <Megaphone className="w-5 h-5" style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        color: "var(--navy)",
                      }}
                    >
                      {a.title}
                    </h3>
                    {a.date && (
                      <span
                        className="text-xs tracking-wider uppercase"
                        style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                      >
                        {a.date}
                      </span>
                    )}
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.65,
                    }}
                  >
                    {a.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
