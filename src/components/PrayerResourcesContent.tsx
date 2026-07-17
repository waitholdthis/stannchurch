"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink, Heart, Sparkles } from "lucide-react";
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

const traditionalPrayers = [
  {
    title: "The Our Father",
    text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
  },
  {
    title: "The Hail Mary",
    text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
  },
  {
    title: "The Glory Be",
    text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
  },
  {
    title: "Prayer to St. Michael",
    text: "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.",
  },
  {
    title: "The Memorare",
    text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother. To thee do I come; before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.",
  },
  {
    title: "Prayer to St. Ann",
    text: "Good St. Ann, mother of Mary and grandmother of Jesus, we honor you as the patroness of our parish family. Intercede for us and for all who seek your help, that we may grow in faith, hope, and love. Watch over our families as you watched over the Holy Family, and lead us ever closer to your grandson, our Lord Jesus Christ. Amen.",
  },
];

const devotionLinks = [
  {
    label: "Daily Readings — USCCB",
    href: "https://bible.usccb.org/daily-bible-reading",
  },
  {
    label: "How to Pray the Rosary — USCCB",
    href: "https://www.usccb.org/how-to-pray-the-rosary",
  },
  {
    label: "The Divine Mercy Chaplet",
    href: "https://www.thedivinemercy.org/message/devotions/pray-the-chaplet",
  },
  {
    label: "Stations of the Cross — USCCB",
    href: "https://www.usccb.org/prayer-and-worship/prayers-and-devotions/stations-of-the-cross",
  },
  {
    label: "Prayers & Devotions — USCCB",
    href: "https://www.usccb.org/prayer-and-worship/prayers-and-devotions",
  },
  {
    label: "Vatican News — Daily Prayer",
    href: "https://www.vaticannews.va/en/prayers.html",
  },
];

export default function PrayerResourcesContent() {
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
              Prayer
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
              Prayer <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Resources</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300 }}
            >
              "Rejoice always. Pray without ceasing. In all circumstances give thanks."
            </p>
            <p
              className="text-[var(--gold-light)] mt-2 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — 1 Thessalonians 5:16–18
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
              Prayer is the raising of one&apos;s mind and heart to God. Whether you are
              new to prayer or deepening a lifelong practice, these treasured prayers
              of the Church and devotional resources can help you grow closer to the
              Lord each day.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Traditional prayers */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Treasures of the Church
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
                Traditional Prayers
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="flex flex-col gap-5">
            {traditionalPrayers.map((p, i) => (
              <FadeUp key={p.title} delay={0.06 * i}>
                <div
                  className="rounded-2xl border p-7 flex gap-6 items-start"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-1"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: "var(--gold)" }} />
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
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.7,
                      }}
                    >
                      {p.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Devotions & daily prayer links */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Grow in Faith
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
                Devotions &amp; Daily Prayer
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devotionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl border transition-colors duration-150 hover:border-[var(--gold)] group"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--cream-mid)",
                    fontFamily: "'Crimson Pro', serif",
                    color: "var(--text-mid)",
                    fontSize: "1.05rem",
                  }}
                >
                  <ExternalLink
                    className="w-4 h-4 shrink-0 transition-colors duration-150 group-hover:text-[var(--gold)]"
                    style={{ color: "var(--muted)" }}
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Prayer request CTA */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="flex justify-center mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(184,146,42,0.15)" }}
              >
                <Heart className="w-6 h-6" style={{ color: "var(--gold-light)" }} />
              </div>
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 300,
              }}
            >
              May We Pray for You?
            </h2>
            <p
              className="text-white/60 max-w-xl mx-auto mb-8"
              style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              Father Matthew would be honored to hold your intentions in prayer.
              Every request is received privately and kept confidential.
            </p>
            <Link
              href="/prayer-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white rounded-full transition-colors duration-200 shadow-md"
              style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", letterSpacing: "0.08em" }}
            >
              <Heart className="w-4 h-4" />
              Request a Prayer
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/prayer-request"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            Prayer Requests →
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
