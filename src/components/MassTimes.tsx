"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar, Tv, BookOpen } from "lucide-react";

const weekdayMasses = [
  { day: "Monday", service: "Communion Service", time: "12:15 PM" },
  { day: "Tuesday", service: "Mass", time: "12:15 PM" },
  { day: "Wednesday", service: "Mass", time: "12:15 PM" },
  { day: "Thursday", service: "School Mass (school year)", time: "9:00 AM" },
  { day: "Thursday", service: "Mass (June – July)", time: "12:15 PM" },
  { day: "Friday", service: "Mass", time: "12:15 PM" },
];

const weekendMasses = [
  { day: "Saturday", service: "Vigil Mass", time: "5:00 PM" },
  { day: "Sunday", service: "Mass", time: "8:30 AM" },
  { day: "Sunday", service: "Mass (Livestreamed)", time: "11:00 AM" },
];

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

export default function MassTimes() {
  return (
    <section
      id="mass-times"
      className="py-24 px-6"
      style={{ background: "var(--navy)" }}
      aria-labelledby="mass-heading"
    >
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Worship With Us
            </span>
            <h2
              id="mass-heading"
              className="text-white mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
              }}
            >
              Mass Schedule
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekday */}
          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="px-8 py-5 border-b border-white/10 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--gold-light)]" />
                <h3
                  className="text-white font-medium tracking-wider text-sm uppercase"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Weekday Masses
                </h3>
              </div>
              <div className="px-8 py-4 divide-y divide-white/10">
                {weekdayMasses.map((m) => (
                  <div key={`${m.day}-${m.time}`} className="py-4 flex justify-between items-center">
                    <div>
                      <p
                        className="text-white font-medium"
                        style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
                      >
                        {m.day}
                      </p>
                      <p className="text-white/50 text-sm">{m.service}</p>
                    </div>
                    <span
                      className="text-[var(--gold-light)] font-medium text-base"
                      style={{ fontFamily: "'Crimson Pro', serif" }}
                    >
                      {m.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Weekend + info */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                <div className="px-8 py-5 border-b border-white/10 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[var(--gold-light)]" />
                  <h3
                    className="text-white font-medium tracking-wider text-sm uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Weekend Masses
                  </h3>
                </div>
                <div className="px-8 py-4 divide-y divide-white/10">
                  {weekendMasses.map((m, i) => (
                    <div key={i} className="py-4 flex justify-between items-center">
                      <div>
                        <p
                          className="text-white font-medium"
                          style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem" }}
                        >
                          {m.day}
                        </p>
                        <p className="text-white/50 text-sm">{m.service}</p>
                      </div>
                      <span
                        className="text-[var(--gold-light)] font-medium text-base"
                        style={{ fontFamily: "'Crimson Pro', serif" }}
                      >
                        {m.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FadeUp delay={0.3}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <BookOpen className="w-5 h-5 text-[var(--gold-light)] mb-3" />
                  <p
                    className="text-white font-medium mb-1"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", letterSpacing: "0.1em" }}
                  >
                    Reconciliation
                  </p>
                  <p className="text-white/70" style={{ fontFamily: "'Crimson Pro', serif" }}>
                    Saturdays at 4:00 PM
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 p-6">
                  <Tv className="w-5 h-5 text-[var(--gold-light)] mb-3" />
                  <p
                    className="text-white font-medium mb-1"
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", letterSpacing: "0.1em" }}
                  >
                    Livestream
                  </p>
                  <p className="text-white/70" style={{ fontFamily: "'Crimson Pro', serif" }}>
                    Sunday 11am on Facebook
                  </p>
                  <a
                    href="https://www.facebook.com/StAnnFayettevilleNorthCarolina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[var(--gold-light)] text-sm hover:text-white transition-colors duration-150 underline underline-offset-2"
                  >
                    Watch Live →
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
