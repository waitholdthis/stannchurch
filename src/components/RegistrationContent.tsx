"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileDown, Phone, Mail, MapPin, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";
import { publicPath } from "@/lib/publicPath";

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

const steps = [
  {
    number: "01",
    title: "Download the Form",
    desc: "Download and print the Parish Registration Form. Take your time completing all sections.",
  },
  {
    number: "02",
    title: "Complete the Form",
    desc: "Fill out the form with your household information. All fields help us serve you and your family well.",
  },
  {
    number: "03",
    title: "Submit the Form",
    desc: "Return the completed form to the parish office in person, or drop it in the collection basket at any Sunday Mass.",
  },
  {
    number: "04",
    title: "We'll Follow Up",
    desc: "Someone from the parish office will contact you to welcome you and answer any questions. Welcome to St. Ann!",
  },
];

export default function RegistrationContent() {
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
                <Users className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
              </div>
            </div>
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Join Our Parish
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
              Parish{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Registration</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              We are so glad you are here. Registering with St. Ann Catholic Church
              makes you an official member of our parish family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                How to Register
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
                Four Simple Steps
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.number} delay={0.08 * i}>
                <div
                  className="rounded-2xl border p-8 flex gap-6 h-full"
                  style={{ background: "var(--cream)", borderColor: "var(--border)" }}
                >
                  <span
                    className="font-light leading-none shrink-0 pt-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      color: "var(--gold)",
                    }}
                  >
                    {s.number}
                  </span>
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
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.65,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Download CTA */}
          <FadeUp delay={0.15}>
            <div className="mt-10 text-center">
              <a
                href={publicPath("/documents/parish-registration-form.pdf")}
                download="St-Ann-Parish-Registration-Form.pdf"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-medium transition-all duration-200 shadow-lg group"
                style={{
                  background: "var(--gold)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                }}
              >
                <FileDown className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
                Download Registration Form
              </a>
              <p
                className="mt-4 text-sm"
                style={{ fontFamily: "'Crimson Pro', serif", color: "var(--muted)" }}
              >
                PDF form — print, complete, and return to the parish office or collection basket.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Benefits of Membership
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
                What Membership Means
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Access to all parish sacraments and services",
              "Receive the weekly parish bulletin",
              "Participate in Faith Formation programs",
              "Eligibility for children's religious education",
              "Involvement in parish ministries and organizations",
              "Connection to the St. Ann parish community",
              "Support from parish staff and pastoral team",
              "Enrollment eligibility at St. Ann Catholic School",
            ].map((item, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div
                  className="flex items-start gap-4 rounded-xl border p-5"
                  style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: "var(--gold)" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "var(--text-mid)",
                    }}
                  >
                    {item}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <span
                className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Need Help?
              </span>
              <h2
                className="text-white mt-3 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                Contact the Parish Office
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="rounded-2xl border p-10"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(184,146,42,0.15)" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <p
                    className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:9104833216"
                    className="text-white/80 hover:text-white hover:underline transition-colors duration-150"
                    style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem" }}
                  >
                    (910) 483-3216
                  </a>
                </div>

                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(184,146,42,0.15)" }}
                  >
                    <Mail className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <p
                    className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@stanncatholicchurch.org"
                    className="text-white/80 hover:text-white hover:underline transition-colors duration-150"
                    style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem" }}
                  >
                    info@stanncatholicchurch.org
                  </a>
                </div>

                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(184,146,42,0.15)" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <p
                    className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Address
                  </p>
                  <p
                    className="text-white/80"
                    style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", lineHeight: 1.5 }}
                  >
                    357 N. Cool Spring St.<br />
                    Fayetteville, NC 28301
                  </p>
                </div>
              </div>

              <div
                className="mt-8 pt-8 border-t text-center"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  Office Hours: Mon–Thu 9:00 AM – 3:00 PM · Friday by appointment
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/#contact"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            Contact Us
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
