"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Lock, Send } from "lucide-react";
import Link from "next/link";

// Prayer requests are delivered by Web3Forms (https://web3forms.com) directly to
// Father Matthew Nwafor's inbox and no one else. To activate: enter his email
// address at web3forms.com, and paste the access key it emails back below.
// The key is safe to publish — it maps to the inbox without revealing it.
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "sending" | "sent" | "error";

const labelStyle: React.CSSProperties = {
  fontFamily: "'Cinzel', serif",
  color: "var(--navy)",
};

const inputStyle: React.CSSProperties = {
  borderColor: "var(--border)",
  background: "var(--cream-mid)",
  fontFamily: "'Crimson Pro', serif",
  color: "var(--text)",
};

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

export default function PrayerRequestContent() {
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prayer, setPrayer] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const honeypot = (
      e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null
    )?.value;
    if (honeypot) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Prayer Request — St. Ann Catholic Church",
          from_name: anonymous || !name.trim() ? "Anonymous" : name.trim(),
          name: anonymous || !name.trim() ? "Anonymous" : name.trim(),
          email: anonymous || !email.trim() ? undefined : email.trim(),
          message: prayer.trim(),
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setName("");
    setEmail("");
    setPrayer("");
    setAnonymous(false);
    setStatus("idle");
  }

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
                <Heart className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
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
              Request a <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Prayer</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300 }}
            >
              "Come to me, all you who labor and are burdened,
              and I will give you rest."
            </p>
            <p
              className="text-[var(--gold-light)] mt-2 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — Matthew 11:28
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="text-center mb-10">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                A Private Request
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
                How May We Pray for You?
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="rounded-2xl border p-8 sm:p-10"
              style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
            >
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                    style={{ background: "var(--gold-pale)" }}
                  >
                    <Heart className="w-7 h-7" style={{ color: "var(--gold)" }} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.6rem",
                      color: "var(--navy)",
                      fontWeight: 400,
                    }}
                  >
                    Your Prayer Has Been Sent
                  </p>
                  <p
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      color: "var(--muted)",
                      fontSize: "1.05rem",
                      maxWidth: "22rem",
                    }}
                  >
                    Father Matthew will hold your intention in prayer. May God bless
                    you and keep you.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-4 px-8 py-3 rounded-full text-white transition-colors duration-200 cursor-pointer"
                    style={{
                      background: "var(--navy)",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Send Another Prayer
                  </button>
                </motion.div>
              ) : (
                <>
                  <p
                    className="mb-8 flex items-start gap-2"
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1.05rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.6,
                    }}
                  >
                    <Lock
                      className="w-4 h-4 mt-1 shrink-0"
                      style={{ color: "var(--gold)" }}
                      aria-hidden="true"
                    />
                    Your prayer request is delivered privately to Father Matthew
                    Nwafor, Pastor — and no one else. All requests are kept
                    confidential. You may share your name or remain anonymous.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input
                      type="text"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <label
                      className="flex items-center gap-3 cursor-pointer select-none"
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--text-mid)",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={(e) => setAnonymous(e.target.checked)}
                        className="w-4 h-4 accent-[var(--gold)]"
                      />
                      Keep me anonymous
                    </label>

                    {!anonymous && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="prayer-name"
                            className="block mb-1.5 text-xs tracking-widest uppercase"
                            style={labelStyle}
                          >
                            Your Name{" "}
                            <span
                              className="normal-case tracking-normal"
                              style={{ color: "var(--muted)", fontFamily: "'Crimson Pro', serif" }}
                            >
                              (optional)
                            </span>
                          </label>
                          <input
                            id="prayer-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150"
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="prayer-email"
                            className="block mb-1.5 text-xs tracking-widest uppercase"
                            style={labelStyle}
                          >
                            Your Email{" "}
                            <span
                              className="normal-case tracking-normal"
                              style={{ color: "var(--muted)", fontFamily: "'Crimson Pro', serif" }}
                            >
                              (optional)
                            </span>
                          </label>
                          <input
                            id="prayer-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150"
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="prayer-message"
                        className="block mb-1.5 text-xs tracking-widest uppercase"
                        style={labelStyle}
                      >
                        Your Prayer <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="prayer-message"
                        rows={7}
                        required
                        value={prayer}
                        onChange={(e) => setPrayer(e.target.value)}
                        placeholder="Share what is on your heart…"
                        className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150 resize-none"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>

                    {status === "error" && (
                      <p
                        role="alert"
                        className="rounded-xl border px-4 py-3"
                        style={{
                          fontFamily: "'Crimson Pro', serif",
                          fontSize: "1rem",
                          color: "#8B2E2E",
                          borderColor: "#D9B8B8",
                          background: "#FBF1F1",
                        }}
                      >
                        We couldn&apos;t send your prayer just now. Please try again in a
                        moment, or call the parish office at (910) 483-3216.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-200 shadow-md group disabled:opacity-60 cursor-pointer"
                      style={{
                        background: "var(--navy)",
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.8rem",
                        letterSpacing: "0.08em",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--navy-mid)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--navy)")}
                    >
                      {status === "sending" ? "Sending…" : "Send Prayer"}
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/prayer-resources"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Prayer Resources
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
