"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { publicPath } from "@/lib/publicPath";
import VisitorModal from "@/components/VisitorModal";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to St. Ann Catholic Church"
    >
      {/* Full-bleed church photograph */}
      <Image
        src={publicPath("/st-ann-fayetteville.jpg")}
        alt="St. Ann Catholic Church, Fayetteville NC"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[var(--navy)]/70" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-6"
        >
          <span
            className="inline-block text-[var(--gold-light)] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Est. 1939 · Fayetteville, NC
          </span>
          <div
            className="w-12 h-0.5 mx-auto mb-6"
            style={{ background: "var(--gold)" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.07 }}
          className="text-white mb-6 leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              color: "var(--gold-light)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            St. Ann
          </span>{" "}
          <br />Catholic Church
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.13 }}
          className="text-white/70 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Crimson Pro', serif" }}
        >
          A vibrant, growing, and engaged community rooted in the Sunday Eucharist
          and committed to Catholic education and parish life in Fayetteville.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#mass-times"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white font-medium rounded-full transition-all duration-200 shadow-lg shadow-black/30 text-base"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
          >
            Mass Times
          </a>
          <a
            href="#welcome"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-white/60 text-white hover:bg-white/5 rounded-full transition-all duration-200 text-base"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
          >
            Our Parish
          </a>
          <VisitorModal />
        </motion.div>

        {/* Quick info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.22 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: "Sunday Mass", value: "8:30am & 11:00am" },
            { label: "Saturday Vigil", value: "5:00pm" },
            { label: "Reconciliation", value: "Saturday 4:00pm" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl px-4 py-3 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <p className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif" }}>
                {item.label}
              </p>
              <p className="text-white font-light text-base" style={{ fontFamily: "'Crimson Pro', serif" }}>
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#mass-times"
        aria-label="Scroll to Mass Times"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors duration-200 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
