"use client";

import { CalendarDays, ExternalLink, Headphones, Mic2, Play } from "lucide-react";
import { motion } from "framer-motion";
import content from "../../content/sermons.json";
import { publicPath } from "@/lib/publicPath";

type Sermon = {
  title: string;
  date: string;
  speaker: string;
  summary?: string;
  video_url?: string;
  audio_file?: string;
};

const sermons = (content.sermons as Sermon[]).sort((a, b) => b.date.localeCompare(a.date));

export default function SermonsContent() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)" }} />
        <motion.div className="max-w-4xl mx-auto relative z-10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(184,146,42,0.2)", border: "1px solid rgba(184,146,42,0.4)" }}>
            <Mic2 className="w-8 h-8" style={{ color: "var(--gold-light)" }} />
          </div>
          <span className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>Listen & Reflect</span>
          <h1 className="text-white mt-3 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 300 }}>Homilies & <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Sermons</em></h1>
          <p className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif" }}>Return to the Sunday message throughout the week and share it with family and friends.</p>
        </motion.div>
      </section>

      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          {sermons.length === 0 ? (
            <div className="rounded-2xl border p-10 text-center" style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}>
              <Headphones className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--gold)" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", color: "var(--navy)" }}>Sermons are coming soon</h2>
              <p className="mt-2" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>New recordings and videos will appear here as they are published.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sermons.map((sermon, index) => (
                <motion.article key={`${sermon.date}-${sermon.title}`} className="rounded-2xl border p-7 h-full" style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <p className="flex items-center gap-2 text-xs tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)" }}><CalendarDays className="w-3.5 h-3.5" />{new Date(`${sermon.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                  <h2 className="mt-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.55rem", color: "var(--navy)" }}>{sermon.title}</h2>
                  <p className="mt-1 text-sm" style={{ fontFamily: "'Cinzel', serif", color: "var(--text-mid)" }}>{sermon.speaker}</p>
                  {sermon.summary && <p className="mt-4 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}>{sermon.summary}</p>}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {sermon.video_url && <a href={sermon.video_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white" style={{ background: "var(--gold)", fontFamily: "'Cinzel', serif", fontSize: "0.75rem" }}><Play className="w-4 h-4" /> Watch <ExternalLink className="w-3 h-3" /></a>}
                    {sermon.audio_file && <a href={publicPath(sermon.audio_file)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border" style={{ borderColor: "var(--gold)", color: "var(--navy)", fontFamily: "'Cinzel', serif", fontSize: "0.75rem" }}><Headphones className="w-4 h-4" /> Listen</a>}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
