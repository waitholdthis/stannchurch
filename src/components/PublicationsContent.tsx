"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink, Bell, ChevronRight } from "lucide-react";
import Link from "next/link";
import managedContent from "../../content/bulletins.json";
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

const BULLETIN_URL =
  "https://parishesonline.com/publication-page/the-catholic-community-of-st-ann?selectedPublication=https://container.parishesonline.com/bulletins/";

const PUBLICATION_PAGE_URL =
  "https://parishesonline.com/publication-page/the-catholic-community-of-st-ann";

const SUBSCRIBE_URL =
  "https://parishesonline.com/organization/the-catholic-community-of-st-ann/subscribe";

// ParishesOnline (LPi) public API — same one their publication page uses.
// Organization ID is St. Ann's salesforce_id on ParishesOnline.
const PARISHES_ONLINE_API =
  "https://f2141mdwk2.execute-api.us-east-1.amazonaws.com/prod/organizations/0018000000Qc0AkAAJ/publications?limit=7&type=Church";

type Bulletin = { date: string; label: string; href: string };

type ManagedBulletin = {
  title: string;
  date: string;
  file?: string;
  external_url?: string;
};

const managedBulletins = (managedContent.bulletins as ManagedBulletin[])
  .filter((bulletin) => bulletin.file || bulletin.external_url)
  .sort((a, b) => b.date.localeCompare(a.date));

function bulletinHref(bulletin: ManagedBulletin) {
  return bulletin.external_url || publicPath(bulletin.file || "");
}

function formatPublishDate(publishDate: string): string {
  const [year, month, day] = publishDate.slice(0, 10).split("-").map(Number);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${monthNames[month - 1]} ${day}, ${year}`;
}

function useRecentBulletins(): Bulletin[] | null {
  const [bulletins, setBulletins] = useState<Bulletin[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(PARISHES_ONLINE_API)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(`${res.status}`))))
      .then((json: { data?: { publishDate: string; fileUrl: string }[] }) => {
        if (cancelled) return;
        setBulletins(
          (json.data ?? []).slice(0, 7).map((pub, i) => ({
            date: formatPublishDate(pub.publishDate),
            label: i === 0 ? "Current Issue" : "Sunday Bulletin",
            href: `${PUBLICATION_PAGE_URL}?selectedPublication=${pub.fileUrl}`,
          }))
        );
      })
      .catch(() => {
        if (!cancelled) setBulletins([]);
      });
    return () => { cancelled = true; };
  }, []);

  if (managedBulletins.length > 0) {
    return managedBulletins.map((bulletin, index) => ({
      date: formatPublishDate(bulletin.date),
      label: index === 0 ? "Current Issue" : bulletin.title,
      href: bulletinHref(bulletin),
    }));
  }

  return bulletins;
}

export default function PublicationsContent() {
  const [iframeError, setIframeError] = useState(false);
  const recentBulletins = useRecentBulletins();
  const currentBulletinUrl = managedBulletins.length > 0
    ? bulletinHref(managedBulletins[0])
    : BULLETIN_URL;

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
              Parish{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Bulletin</em>
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              Stay connected with your parish family. Read the latest bulletin,
              browse past issues, and subscribe to receive it by email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bulletin viewer + recent list */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Embedded viewer ── */}
            <FadeUp delay={0} >
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "var(--navy)",
                    }}
                  >
                    Current Bulletin
                  </h2>
                  <a
                    href={currentBulletinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 hover:underline"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.06em" }}
                  >
                    Open full site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {!iframeError ? (
                  <div
                    className="rounded-2xl overflow-hidden border shadow-sm"
                    style={{ borderColor: "var(--border)", height: "clamp(420px, 70vh, 700px)" }}
                  >
                    <iframe
                      src={currentBulletinUrl}
                      className="w-full h-full"
                      title="St. Ann Catholic Church Parish Bulletin"
                      onError={() => setIframeError(true)}
                      allow="fullscreen"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    />
                  </div>
                ) : (
                  /* Fallback if iframe is blocked */
                  <div
                    className="rounded-2xl border flex flex-col items-center justify-center gap-6 py-20 px-8 text-center"
                    style={{ borderColor: "var(--border)", background: "var(--cream-mid)", minHeight: "400px" }}
                  >
                    <BookOpen className="w-12 h-12" style={{ color: "var(--gold)" }} />
                    <div>
                      <p
                        className="mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "var(--navy)" }}
                      >
                        View the Parish Bulletin
                      </p>
                      <p
                        className="mb-6 max-w-sm mx-auto"
                        style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "1.05rem" }}
                      >
                        Our bulletins are hosted on ParishesOnline. Click below to read the latest issue.
                      </p>
                      <a
                        href={currentBulletinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all duration-200 shadow-md"
                        style={{
                          background: "var(--gold)",
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.8rem",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Read Bulletin
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>

            {/* ── Sidebar ── */}
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-6">

                {/* Recent issues */}
                <div>
                  <span
                    className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Recent Issues
                  </span>
                  <h3
                    className="mt-2 mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 400,
                      color: "var(--navy)",
                    }}
                  >
                    Past Bulletins
                  </h3>
                  <div className="w-8 h-0.5 mb-5" style={{ background: "var(--gold)" }} />

                  <div className="flex flex-col gap-2">
                    {recentBulletins === null && (
                      <p
                        className="text-sm px-4 py-3"
                        style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                      >
                        Loading recent issues…
                      </p>
                    )}
                    {recentBulletins?.length === 0 && (
                      <p
                        className="text-sm px-4 py-3"
                        style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                      >
                        Recent issues are unavailable right now — use the link below to browse all issues on ParishesOnline.
                      </p>
                    )}
                    {(recentBulletins ?? []).map((b, i) => (
                      <a
                        key={i}
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-150 group hover:border-[var(--gold)]"
                        style={{ borderColor: "var(--border)", background: i === 0 ? "var(--gold-pale)" : "white" }}
                      >
                        <div>
                          <p
                            className="text-sm font-medium"
                            style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)", fontSize: "0.75rem", letterSpacing: "0.04em" }}
                          >
                            {b.date}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                          >
                            {b.label}
                          </p>
                        </div>
                        <ChevronRight
                          className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                          style={{ color: "var(--gold)" }}
                        />
                      </a>
                    ))}
                  </div>

                  <a
                    href={BULLETIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-1.5 text-sm hover:underline transition-colors duration-150"
                    style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.06em" }}
                  >
                    Browse all issues
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Subscribe */}
                <div
                  className="rounded-2xl border p-6"
                  style={{ borderColor: "var(--border)", background: "var(--navy)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(184,146,42,0.2)" }}
                  >
                    <Bell className="w-5 h-5" style={{ color: "var(--gold-light)" }} />
                  </div>
                  <p
                    className="text-[var(--gold-light)] text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Never Miss an Issue
                  </p>
                  <p
                    className="text-white/70 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem" }}
                  >
                    Subscribe to receive the parish bulletin by email each week.
                  </p>
                  <a
                    href={SUBSCRIBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-colors duration-200"
                    style={{
                      background: "var(--gold)",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Subscribe
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
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
