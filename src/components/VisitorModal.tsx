"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Send, Users, X } from "lucide-react";
import { createPortal } from "react-dom";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_VISITOR_WEB3FORMS_ACCESS_KEY ?? "";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const inputClassName =
  "w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-150 focus:ring-2 focus:ring-[var(--gold)]/20";

const inputStyle = {
  borderColor: "var(--border)",
  background: "var(--cream)",
  color: "var(--text)",
  fontFamily: "'Crimson Pro', serif",
};

const labelClassName = "mb-1.5 block text-xs uppercase tracking-widest";

export default function VisitorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const today = new Date();
  const minimumDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60_000,
  )
    .toISOString()
    .slice(0, 10);

  useEffect(() => {
    if (!isOpen) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => firstFieldRef.current?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setStatus("idle");
        formRef.current?.reset();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [isOpen]);

  function openModal() {
    setStatus("idle");
    setIsOpen(true);
  }

  function closeModal() {
    if (status === "sending") return;
    setIsOpen(false);
    setStatus("idle");
    formRef.current?.reset();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    if (formData.get("botcheck")) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "New Visitor Introduction — St. Ann Catholic Church");
    formData.set("from_name", String(formData.get("name") ?? "Church visitor"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Submission failed");
      formRef.current?.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07152c]/80 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="visitor-modal-title"
            aria-describedby="visitor-modal-description"
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border shadow-2xl"
            style={{ background: "var(--cream-mid)", borderColor: "var(--border)" }}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div
              className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b px-6 py-5 sm:px-8"
              style={{ background: "var(--navy)", borderColor: "rgba(255,255,255,0.12)" }}
            >
              <div>
                <p
                  className="mb-1 text-xs uppercase tracking-[0.25em] text-[var(--gold-light)]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Welcome to St. Ann
                </p>
                <h2
                  id="visitor-modal-title"
                  className="text-3xl text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Plan Your Visit
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                disabled={status === "sending"}
                className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40"
                aria-label="Close visitor form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-7 sm:px-8 sm:py-8">
              {status === "sent" ? (
                <div className="flex flex-col items-center px-2 py-10 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold-pale)]">
                    <CheckCircle2 className="h-8 w-8 text-[var(--gold)]" />
                  </div>
                  <h3
                    className="mb-2 text-3xl text-[var(--navy)]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    We look forward to meeting you!
                  </h3>
                  <p className="mb-7 max-w-md text-[var(--text-mid)]">
                    Your introduction has been sent to the parish staff. Someone from St. Ann will be ready to welcome you.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="rounded-full border px-6 py-3 text-sm text-[var(--navy)]"
                      style={{ borderColor: "var(--border)", fontFamily: "'Cinzel', serif" }}
                    >
                      Send Another
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm text-white hover:bg-[var(--gold-light)]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex gap-3 rounded-2xl bg-[var(--gold-pale)] px-4 py-3.5 text-[var(--text-mid)]">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" aria-hidden="true" />
                    <p id="visitor-modal-description" className="text-base leading-relaxed">
                      Tell us a little about yourself and when you plan to visit. Your note will go directly to our parish staff so we can help you feel at home.
                    </p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input
                      type="text"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="visitor-name" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                          Your Name <span aria-hidden="true" className="text-red-700">*</span>
                        </label>
                        <input ref={firstFieldRef} id="visitor-name" name="name" type="text" required autoComplete="name" className={inputClassName} style={inputStyle} />
                      </div>
                      <div>
                        <label htmlFor="visitor-email" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                          Email <span aria-hidden="true" className="text-red-700">*</span>
                        </label>
                        <input id="visitor-email" name="email" type="email" required autoComplete="email" className={inputClassName} style={inputStyle} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="visitor-phone" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                          Phone <span className="normal-case tracking-normal text-[var(--muted)]">(optional)</span>
                        </label>
                        <input id="visitor-phone" name="phone" type="tel" autoComplete="tel" className={inputClassName} style={inputStyle} />
                      </div>
                      <div>
                        <label htmlFor="visitor-date" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                          Visit Date <span aria-hidden="true" className="text-red-700">*</span>
                        </label>
                        <div className="relative">
                          <input id="visitor-date" name="visit_date" type="date" required min={minimumDate} className={`${inputClassName} pr-11`} style={inputStyle} />
                          <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--gold)]" aria-hidden="true" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="visitor-mass" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                          Mass or Occasion <span aria-hidden="true" className="text-red-700">*</span>
                        </label>
                        <select id="visitor-mass" name="mass_or_occasion" required defaultValue="" className={inputClassName} style={inputStyle}>
                          <option value="" disabled>Select one</option>
                          <option>Saturday Vigil — 5:00 PM</option>
                          <option>Sunday Mass — 8:30 AM</option>
                          <option>Sunday Mass — 11:00 AM</option>
                          <option>Weekday Mass</option>
                          <option>Parish event or meeting</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="visitor-party" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                          Number Visiting <span aria-hidden="true" className="text-red-700">*</span>
                        </label>
                        <input id="visitor-party" name="number_visiting" type="number" required min="1" max="30" defaultValue="1" className={inputClassName} style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="visitor-message" className={labelClassName} style={{ color: "var(--navy)", fontFamily: "'Cinzel', serif" }}>
                        Brief Introduction <span aria-hidden="true" className="text-red-700">*</span>
                      </label>
                      <textarea
                        id="visitor-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about yourself, your family, or anything that would help us welcome you."
                        className={`${inputClassName} resize-y`}
                        style={inputStyle}
                      />
                    </div>

                    {(status === "error" || status === "unconfigured") && (
                      <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-base text-red-800">
                        {status === "unconfigured"
                          ? "Online visitor introductions are not configured yet. Please call the parish office at (910) 483-3216."
                          : "We couldn’t send your introduction just now. Please try again or call the parish office at (910) 483-3216."}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium text-white shadow-md transition-colors hover:bg-[var(--gold-light)] disabled:cursor-wait disabled:opacity-60"
                      style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.06em" }}
                    >
                      {status === "sending" ? "Sending…" : "Send Introduction"}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base text-white transition-all duration-200 hover:border-[var(--gold-light)] hover:bg-[var(--gold)]/15"
        style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
        aria-haspopup="dialog"
      >
        Plan a Visit
      </button>
      {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}
