"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

const supporters = [
  {
    name: "Ann's Flower Shop",
    address: "5780 Ramsey St Ste 101, Fayetteville, NC 28311",
    phone: "910-488-4177",
  },
  {
    name: "Carolina Specialties Inter.",
    address: "536 Ramsey St, Fayetteville, NC 28301",
    phone: "910-323-0718",
  },
  {
    name: "Grilled Ginger Restaurant",
    address: "5052 Yadkin Rd Ste 101, Fayetteville, NC 28303",
    phone: "910-867-2227",
  },
  {
    name: "JTL Mold Services LLC",
    address: null,
    phone: "910-237-3519",
  },
  {
    name: "KW Fayetteville – Jennifer Tap",
    address: "639 Executive Pl Ste 100, Fayetteville, NC 28305",
    phone: "910-222-2800",
  },
  {
    name: "Knights of Columbus",
    address: "365 N Cool Spring St, Fayetteville, NC 28301",
    phone: "910-860-1709",
  },
  {
    name: "Rogers & Breece Funeral Home",
    address: "500 Ramsey St, Fayetteville, NC 28301",
    phone: "910-483-2191",
  },
  {
    name: "The Firehouse",
    address: "4021 Dunn Rd, Eastover, NC 28312",
    phone: "910-487-3473",
  },
  {
    name: "Wiseman Mortuary Inc.",
    address: "431 Cumberland St, Fayetteville, NC 28301",
    phone: "919-483-7111",
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function SupportersContent() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        {/* Decorative glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)",
          }}
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
              Parish Bulletin
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
              Bulletin Ads &{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                Supporters
              </em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              These local businesses support our parish by advertising in the
              St. Ann Catholic Church bulletin. Please consider supporting them
              in return.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supporters grid */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--cream)" }}
        aria-labelledby="supporters-heading"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2
              id="supporters-heading"
              className="sr-only"
            >
              Our Business Supporters
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supporters.map((biz, i) => (
              <FadeUp key={biz.name} delay={0.06 * i}>
                <div
                  className="group rounded-2xl border p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
                >
                  {/* Gold top bar */}
                  <div
                    className="w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ background: "var(--gold)" }}
                  />

                  <h3
                    className="leading-tight"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      color: "var(--navy)",
                    }}
                  >
                    {biz.name}
                  </h3>

                  <div className="flex flex-col gap-2.5 mt-auto">
                    {biz.address && (
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(biz.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2.5 group/link"
                        aria-label={`Map to ${biz.name}`}
                      >
                        <MapPin
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: "var(--gold)" }}
                        />
                        <span
                          className="text-sm leading-snug group-hover/link:underline"
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            color: "var(--text-mid)",
                          }}
                        >
                          {biz.address}
                        </span>
                      </a>
                    )}

                    <a
                      href={`tel:${biz.phone.replace(/-/g, "")}`}
                      className="flex items-center gap-2.5 group/link"
                    >
                      <Phone
                        className="w-4 h-4 shrink-0"
                        style={{ color: "var(--gold)" }}
                      />
                      <span
                        className="text-sm group-hover/link:underline"
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          color: "var(--text-mid)",
                        }}
                      >
                        {biz.phone}
                      </span>
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Advertise CTA */}
      <section
        className="py-24 px-6"
        style={{ background: "var(--cream-mid)" }}
        aria-labelledby="advertise-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <span
              className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Advertise With Us
            </span>
            <h2
              id="advertise-heading"
              className="mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 300,
                color: "var(--navy)",
              }}
            >
              Support Our Parish, <br />
              <em style={{ color: "var(--gold)", fontWeight: 400 }}>
                Grow Your Business
              </em>
            </h2>
            <div className="w-12 h-0.5 mx-auto mb-8" style={{ background: "var(--gold)" }} />
            <p
              className="mb-10 leading-relaxed max-w-xl mx-auto"
              style={{
                fontFamily: "'Crimson Pro', serif",
                fontSize: "1.15rem",
                color: "var(--text-mid)",
              }}
            >
              Advertising in the St. Ann Catholic Church bulletin is a great way
              to reach our active parish community while directly supporting our
              ministries and programs. Ads are available for purchase for local
              businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-200 shadow-md"
                style={{
                  background: "var(--navy)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                }}
              >
                Contact the Parish Office
              </Link>
              <a
                href="tel:9104833216"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium border transition-all duration-200"
                style={{
                  color: "var(--navy)",
                  borderColor: "var(--navy)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                }}
              >
                <Phone className="w-4 h-4" />
                (910) 483-3216
              </a>
            </div>

            {/* Office info */}
            <p
              className="mt-8 text-sm"
              style={{ fontFamily: "'Crimson Pro', serif", color: "var(--muted)" }}
            >
              Office hours: Mon–Thu 9:00 AM – 3:00 PM &nbsp;·&nbsp; Friday by appointment
            </p>

            {/* Back to home */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150"
                style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Back to St. Ann Catholic Church
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
