"use client";

import { Camera, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import content from "../../content/virtual-tour.json";

const tourUrl = (content.tour_url ?? "").trim();
const note = (content.note ?? "").trim();

// Kuula share links are the only ones its embedded viewer accepts.
const isEmbeddable = /^https:\/\/(www\.)?kuula\.co\//.test(tourUrl);

export default function VirtualTourContent() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)" }} />
        <motion.div className="max-w-4xl mx-auto relative z-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(184,146,42,0.2)", border: "1px solid rgba(184,146,42,0.4)" }}>
            <Camera className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
          </div>
          <span className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>See Our Church</span>
          <h1 className="text-white mt-3 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300 }}>Take a <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Virtual Tour</em></h1>
          <p className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif" }}>Step inside St. Ann from wherever you are. Look around the sanctuary, the stained glass, and the grounds before your first visit.</p>
        </motion.div>
      </section>

      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          {isEmbeddable ? (
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {note && (
                <p className="mb-6 text-center text-lg" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>{note}</p>
              )}
              <div className="relative w-full overflow-hidden rounded-2xl border aspect-video" style={{ borderColor: "var(--border)", background: "#000" }}>
                <iframe
                  src={tourUrl}
                  title="St. Ann Catholic Church virtual tour"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen; autoplay"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
              <p className="mt-5 text-center" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>
                Trouble viewing?{" "}
                <a href={tourUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--gold)" }}>
                  Open the tour in a new tab <ExternalLink className="inline w-3.5 h-3.5 align-baseline" />
                </a>
              </p>
            </motion.div>
          ) : (
            <div className="rounded-2xl border p-10 text-center" style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}>
              <Camera className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--gold)" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", color: "var(--navy)" }}>Our virtual tour is coming soon</h2>
              <p className="mt-2 max-w-xl mx-auto" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>
                We are putting together a 3D walkthrough of the church. In the meantime, we would love to welcome you in person — Sunday Mass is at 8:30 AM and 11:00 AM, with the Saturday Vigil at 5:00 PM.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white mt-6"
                style={{ background: "var(--gold)", fontFamily: "'Cinzel', serif", fontSize: "0.75rem" }}
              >
                Visit us in person <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
