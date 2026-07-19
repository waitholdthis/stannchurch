"use client";

import { CalendarDays, ExternalLink, Tv } from "lucide-react";
import { motion } from "framer-motion";
import content from "../../content/livestream.json";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/StAnnFayettevilleNorthCarolina";

const videoUrl = (content.video_url ?? "").trim();
const note = (content.note ?? "").trim();

// The Facebook embedded player only accepts facebook.com / fb.watch video links.
const isEmbeddable = /^https:\/\/((www|m|web)\.)?(facebook\.com|fb\.watch)\//.test(videoUrl);

const embedSrc = isEmbeddable
  ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&autoplay=true&width=1280`
  : "";

export default function WatchLiveContent() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)" }} />
        <motion.div className="max-w-4xl mx-auto relative z-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(184,146,42,0.2)", border: "1px solid rgba(184,146,42,0.4)" }}>
            <Tv className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
          </div>
          <span className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>Join Us From Home</span>
          <h1 className="text-white mt-3 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300 }}>Watch <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Live</em></h1>
          <p className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif" }}>Sunday Mass is livestreamed at 11:00 AM. Watch right here — no Facebook account needed.</p>
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
                  src={embedSrc}
                  title="St. Ann Catholic Church livestream"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="mt-5 text-center" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>
                Trouble viewing?{" "}
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--gold)" }}>
                  Watch directly on Facebook <ExternalLink className="inline w-3.5 h-3.5 align-baseline" />
                </a>
              </p>
            </motion.div>
          ) : (
            <div className="rounded-2xl border p-10 text-center" style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}>
              <CalendarDays className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--gold)" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", color: "var(--navy)" }}>The livestream will appear here</h2>
              <p className="mt-2 max-w-xl mx-auto" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>
                We stream Sunday Mass at 11:00 AM. Check back shortly before Mass begins, or visit our Facebook page.
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white mt-6"
                style={{ background: "var(--gold)", fontFamily: "'Cinzel', serif", fontSize: "0.75rem" }}
              >
                Visit us on Facebook <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
