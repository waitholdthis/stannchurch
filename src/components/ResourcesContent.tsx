"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, BookOpen, Newspaper, FileText, ExternalLink, Phone, Mail } from "lucide-react";
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

const churchAuthorities = [
  {
    label: "The Vatican",
    desc: "The official website of the Holy See — papal documents, encyclicals, the Catechism, and news from Rome.",
    href: "https://www.vatican.va/content/vatican/en.html",
  },
  {
    label: "Diocese of Raleigh",
    desc: "Our local diocese serving Catholics across eastern North Carolina — news, events, and diocesan resources.",
    href: "https://dioceseofraleigh.org/",
  },
  {
    label: "USCCB",
    desc: "The United States Conference of Catholic Bishops — pastoral guidance, liturgical resources, and Church teaching.",
    href: "https://www.usccb.org/",
  },
];

const newsAndMedia = [
  {
    label: "Catholic News Agency",
    desc: "Daily Catholic news from across the Church — the Pope, dioceses, culture, and world affairs.",
    href: "https://www.catholicnewsagency.com/",
  },
  {
    label: "EWTN",
    desc: "Global Catholic television, radio, and news — live Mass, documentaries, and faith formation programming.",
    href: "https://www.ewtn.com/",
  },
  {
    label: "Word on Fire",
    desc: "Bishop Robert Barron's media ministry — Catholic evangelization through compelling media and resources.",
    href: "https://www.wordonfire.org/",
  },
  {
    label: "Aleteia",
    desc: "Catholic spirituality, news, and culture for a global audience — inspiring stories and faith perspectives.",
    href: "https://aleteia.org/",
  },
];

const parishResources = [
  {
    icon: FileText,
    label: "Parish Bulletin",
    desc: "Read the current bulletin and browse archives from St. Ann Catholic Church.",
    href: "/publications",
    external: false,
  },
  {
    icon: BookOpen,
    label: "Faith Formation",
    desc: "Religious education programs, sacramental preparation, and adult formation opportunities.",
    href: "/Faith-Formation",
    external: false,
  },
  {
    icon: Globe,
    label: "Bulletin Ads & Supporters",
    desc: "Local businesses that support our parish by advertising in the bulletin.",
    href: "/supporters",
    external: false,
  },
];

export default function ResourcesContent() {
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
                <Globe className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
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
              Catholic{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Resources</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              Helpful links to Church authorities, Catholic news, and parish
              publications to support your faith journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Church Authorities */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Church Leadership
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
                The Vatican &amp; Our Diocese
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {churchAuthorities.map((res, i) => (
              <FadeUp key={res.label} delay={0.07 * i}>
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 rounded-2xl border p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: "var(--gold)" }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "var(--navy)",
                    }}
                  >
                    {res.label}
                  </h3>
                  <p
                    className="flex-1 text-sm leading-relaxed"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                  >
                    {res.desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit Site
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Catholic News & Media */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Stay Informed
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
                Catholic News &amp; Media
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {newsAndMedia.map((res, i) => (
              <FadeUp key={res.label} delay={0.07 * i}>
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border p-6 transition-all duration-200 hover:border-[var(--gold)] hover:shadow-md"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <Newspaper className="w-4 h-4" style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          color: "var(--navy)",
                        }}
                      >
                        {res.label}
                      </h3>
                      <ExternalLink
                        className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        style={{ color: "var(--gold)" }}
                      />
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                    >
                      {res.desc}
                    </p>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Parish Resources */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Within Our Parish
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Parish Resources
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {parishResources.map((res, i) => (
              <FadeUp key={res.label} delay={0.07 * i}>
                <Link
                  href={res.href}
                  className="group flex flex-col gap-4 rounded-2xl border p-7 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(184,146,42,0.15)" }}
                  >
                    <res.icon className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "white",
                    }}
                  >
                    {res.label}
                  </h3>
                  <p
                    className="flex-1 text-sm leading-relaxed"
                    style={{ fontFamily: "'Crimson Pro', serif", color: "rgba(255,255,255,0.55)" }}
                  >
                    {res.desc}
                  </p>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--gold-light)" }}
                  >
                    View →
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div
              className="rounded-2xl border p-8 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left"
              style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
            >
              <div className="flex-1">
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: "var(--navy)",
                  }}
                >
                  Need more help?
                </p>
                <p
                  style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                >
                  The parish office is happy to answer questions and point you to the
                  right resources.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="tel:9104833216"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-colors duration-200"
                  style={{ background: "var(--navy)", fontFamily: "'Cinzel', serif", fontSize: "0.78rem", letterSpacing: "0.08em" }}
                >
                  <Phone className="w-4 h-4" />
                  (910) 483-3216
                </a>
                <a
                  href="mailto:info@stanncatholicchurch.org"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border transition-colors duration-200"
                  style={{ color: "var(--navy)", borderColor: "var(--navy)", fontFamily: "'Cinzel', serif", fontSize: "0.78rem", letterSpacing: "0.08em" }}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
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
