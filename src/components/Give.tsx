"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ArrowRight } from "lucide-react";

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

export default function Give() {
  return (
    <section
      id="give"
      className="py-28 px-6"
      style={{ background: "var(--cream-mid)" }}
      aria-labelledby="give-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "var(--gold-pale)" }}
          >
            <Heart className="w-7 h-7" style={{ color: "var(--gold)" }} />
          </div>
          <span
            className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Stewardship
          </span>
          <h2
            id="give-heading"
            className="mt-3 mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "var(--navy)",
            }}
          >
            Support Our Parish
          </h2>
          <div className="w-12 h-0.5 mx-auto mb-8" style={{ background: "var(--gold)" }} />
          <p
            className="max-w-xl mx-auto mb-10 leading-relaxed"
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: "1.15rem",
              color: "var(--text-mid)",
            }}
          >
            Your generous contributions make possible the ministries, education,
            and charitable works of St. Ann Catholic Church. Every gift — large
            or small — makes a real difference in our community.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-medium transition-all duration-200 shadow-lg group"
            style={{
              background: "var(--navy)",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.07em",
            }}
          >
            Give Online
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
