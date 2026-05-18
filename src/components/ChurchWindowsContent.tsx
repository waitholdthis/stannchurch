"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
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

const BASE = "https://uploads.weconnect.com/7162831af8ce5410afcaf892908183c8177130bc/";

const mainWindows = [
  {
    number: "I",
    title: "Saint Charles Lwanga",
    image: BASE + "gt73bfpijgrby90cld5lljibsml.jpg",
    memorial: "Gift of the Raymond Johnson Family",
    symbols: ["Sword & fire — methods of martyrdom", "Dates 1885–1887 — the Uganda Persecution", "Black Liberation flag — blood, skin, land, and hope"],
    desc: "This window honors Saint Charles Lwanga, an African martyr who opposed efforts to restore paganism in Uganda. He was martyred alongside more than twenty other Christians for his faith. The window reflects the parish's proud origins as a Black Catholic community and its deep roots in African Catholic heritage.",
  },
  {
    number: "II",
    title: "Saint Jude",
    image: BASE + "en1jc8tspw8p3jqvc5jznd738ml.jpg",
    memorial: "Dedicated to Franklin and Sallie McKay",
    symbols: ["Old-style barber pole", "Hair scissors, comb, and hand-powered clippers", "Dates 1939–1940 — the shop-church years"],
    desc: "Known as the \"Saint of the Impossible,\" Saint Jude is depicted alongside the symbols of Mack's Barber Shop on Gillespie Street — the humble space that first served as the parish's church. The window commemorates the faith of the early Black Catholic community in Fayetteville who worshiped in that barbershop during 1939 and 1940.",
  },
  {
    number: "III",
    title: "Saint Eugene",
    image: BASE + "gu9z3o0asbmd75ef0yprpudfkcl.jpg",
    memorial: "With love for Frances, Kathy, Kelly and Patty Allan — daughters of Mr. and Mrs. Marvin Allan",
    symbols: ["Fishing net", "Notre Dame de la Garde shrine", "Founding date 1816"],
    desc: "Saint Eugene de Mazenod, founder of the Oblates of Mary Immaculate, was struck by the religious ignorance and indifference widespread after the French Revolution and dedicated his life to missionary work among the poor. This window celebrates the Oblate order's founding and their ministry at St. Ann since the parish's earliest days.",
  },
  {
    number: "IV",
    title: "Saint Ann",
    image: BASE + "8yimhcrevd90jd9860xs18cywql.jpg",
    memorial: "Gift from the Laura T. Mitchell and Elaine Newsome families",
    symbols: ["Three mountains", "Star of David", "Christmas wreath", "Date 1940"],
    desc: "Saint Ann, mother of the Blessed Virgin Mary, is the parish patroness. The window tells of how Boston's Saint Ann Church raised funds for a young priest, Father John Hennessy, which the Bishop directed toward building this Fayetteville parish — uniting two communities across distance in the bonds of faith.",
  },
  {
    number: "V",
    title: "Saint Patrick",
    image: BASE + "l1a2z4cnfknzj9dzt9mmgljlr8l.jpg",
    memorial: "Gift of Mr. and Mrs. Enrico W. Tonet, Jr.",
    symbols: ["Shamrock", "Harp", "Bishop's staff", "Original church building outline"],
    desc: "Saint Patrick Parish was the \"ecclesiastical mother\" of St. Ann — the original Fayetteville Catholic parish that supported and aided St. Ann's founding efforts. This window honors that lineage and the generations of Irish-American Catholics who helped establish the faith in Fayetteville.",
  },
  {
    number: "VI",
    title: "Saint Michael Archangel",
    image: BASE + "wbaqry9byp9xlmza9tpajkbgc7l.jpg",
    memorial: "A memorial to Master Sergeant Donald C. Richard, USA",
    symbols: ["82nd Airborne Division insignia", "Special Forces insignia", "XVIII Airborne Corps dragon insignia"],
    desc: "This window pays tribute to the brave men and women of Fort Bragg and Pope Air Force Base who have worshiped at St. Ann. Saint Michael the Archangel — patron of soldiers and guardian of the Church — watches over the military faithful. The window bears the insignia of the All-American 82nd Airborne Division and the XVIII Airborne Corps.",
  },
  {
    number: "VII",
    title: "Saint Augustine",
    image: BASE + "wsynj2fq5gsq8yy2s84z5qx9cvl.jpg",
    memorial: "Dedicated to and honoring the Altar and Rosary Society",
    symbols: ["Bishop's miter", "Candle and book", "School building", "Architect's tools"],
    desc: "A 5th-century Doctor of the Church and Bishop of Hippo in North Africa, Saint Augustine is a towering African intellectual and spiritual father. This window honors the parish's educational mission, supported by the Catholic Negro-American Mission Board, and celebrates the opening of St. Ann Catholic School in September 1956.",
  },
  {
    number: "VIII",
    title: "Mary, Mother of the Church",
    image: BASE + "jkjo10vwq2na6yojaulmebwchnl.jpg",
    memorial: "Gift honoring the parents of Dr. and Mrs. F.O. Harbach",
    symbols: ["Rose of Sharon", "Calvary", "Vatican dome", "Diverse figures of the faithful"],
    desc: "The final window expresses the deepest hope of St. Ann Parish: \"a community of Faithful in Christ where there is neither Black nor White, bond nor free, but all are one in the Love of God.\" Under the mantle of Mary, Mother of the Church, the parish has striven since its founding to embody this unity.",
  },
];

type AdditionalWindow = {
  title: string;
  images: string[] | null;
  artist?: string;
  panels: { side: string; desc: string }[];
  desc: string;
};

const additionalWindows: AdditionalWindow[] = [
  {
    title: "Reconciliation Room",
    images: null,
    panels: [
      { side: "Left", desc: "A Eucharist medallion, representing the source and summit of Christian life." },
      { side: "Right", desc: "\"Lamb of God\" medallion with the Empty Tomb and butterfly — symbols of the Resurrection and new life in Christ." },
    ],
    desc: "Two intimate windows grace the Reconciliation Room, drawing those who seek God's forgiveness into a space of quiet beauty and sacramental mystery.",
  },
  {
    title: "Blessed Sacrament Chapel",
    images: [BASE + "gvlo1umrsickomypniaimlo791l.gif", BASE + "p7b9mx33ct4hqqei8axcq2bls7l.gif"],
    artist: "Marianne Downs Behle",
    panels: [
      { side: "Lancet 1", desc: "Foot washing medallion — a Cross of Faith. Wheat and grapes at center recall the Eucharist." },
      { side: "Lancet 2", desc: "Woman touching Christ's cloak — an Anchor of Hope. A radiating cross fills the center." },
      { side: "Lancet 3", desc: "Loaves and fishes — a Heart of Charity, expressing the Church's call to feed the hungry." },
    ],
    desc: "Three lancet windows by artist Marianne Downs Behle illuminate the Blessed Sacrament Chapel with the theological virtues of Faith, Hope, and Charity — pointing all who adore the Blessed Sacrament toward the fullness of Christian life.",
  },
];

export default function ChurchWindowsContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)" }}
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
              Parish History
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
              The{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>Church Windows</em>
              {" "}of St. Ann
            </h1>
            <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
            <p
              className="text-white/65 max-w-2xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              Installed in 1983, the eight main stained glass windows of St. Ann Catholic Church
              tell the story of our parish — its origins, its people, its faith, and its hope.
              Each window is a prayer in light and color.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro banner */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p
              className="leading-relaxed italic"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.35rem",
                fontWeight: 300,
                color: "var(--navy)",
              }}
            >
              "The windows of the church are the eyes of the soul — they filter the light
              of heaven and tell the stories that words alone cannot hold."
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Eight Main Windows */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Installed 1983
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
                The Eight Main Windows
              </h2>
              <div className="w-12 h-0.5 mx-auto mb-4" style={{ background: "var(--gold)" }} />
              <p
                className="max-w-xl mx-auto"
                style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "var(--text-mid)" }}
              >
                Each of the eight windows in the main nave of the church honors a saint,
                a founder, or a chapter of St. Ann's history.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {mainWindows.map((w, i) => (
              <FadeUp key={w.number} delay={0.06 * (i % 4)}>
                <div
                  className="rounded-2xl border overflow-hidden flex flex-col"
                  style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
                >
                  {/* Image */}
                  <div
                    className="relative w-full flex items-center justify-center"
                    style={{ aspectRatio: "3/4", background: "var(--navy)" }}
                  >
                    <Image
                      src={w.image}
                      alt={`${w.title} stained glass window`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Number badge */}
                    <div
                      className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: "var(--navy)", border: "2px solid var(--gold)" }}
                    >
                      <span
                        className="text-[var(--gold-light)] text-sm font-light"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {w.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col gap-4">
                    <div>
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          color: "var(--navy)",
                        }}
                      >
                        {w.title}
                      </h3>
                      <p
                        className="text-sm italic"
                        style={{ fontFamily: "'Crimson Pro', serif", color: "var(--gold)" }}
                      >
                        {w.memorial}
                      </p>
                    </div>

                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.7,
                      }}
                    >
                      {w.desc}
                    </p>

                    {/* Symbols */}
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ fontFamily: "'Cinzel', serif", color: "var(--muted)" }}
                      >
                        Symbols
                      </p>
                      <ul className="flex flex-col gap-1">
                        {w.symbols.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-2 text-sm"
                            style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)" }}
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "var(--gold)" }}
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Windows */}
      <section className="py-20 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span
                className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Throughout the Church
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
                Additional Windows
              </h2>
              <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalWindows.map((aw, i) => (
              <FadeUp key={aw.title} delay={0.08 * i}>
                <div
                  className="rounded-2xl border overflow-hidden flex flex-col h-full"
                  style={{ borderColor: "var(--border)", background: "var(--cream)" }}
                >
                  {/* Image area */}
                  {aw.images ? (
                    <div
                      className="w-full flex gap-2 p-4"
                      style={{ background: "var(--navy)" }}
                    >
                      {aw.images.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative flex-1"
                          style={{ aspectRatio: "1/2" }}
                        >
                          <Image
                            src={src}
                            alt={`${aw.title} panel ${idx + 1}`}
                            fill
                            className="object-contain"
                            sizes="25vw"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="w-full flex items-center justify-center py-16 px-8"
                      style={{ background: "var(--navy)" }}
                    >
                      <p
                        className="text-center italic"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}
                      >
                        Reconciliation Room
                      </p>
                    </div>
                  )}
                  {/* Text content */}
                  <div className="p-7 flex flex-col gap-4">
                    <div>
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          color: "var(--navy)",
                        }}
                      >
                        {aw.title}
                      </h3>
                      {"artist" in aw && (
                        <p
                          className="text-sm italic"
                          style={{ fontFamily: "'Crimson Pro', serif", color: "var(--gold)" }}
                        >
                          By {aw.artist}
                        </p>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "1.05rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.7,
                      }}
                    >
                      {aw.desc}
                    </p>
                    <div className="flex flex-col gap-2">
                      {aw.panels.map((p) => (
                        <div key={p.side} className="flex gap-3">
                          <span
                            className="shrink-0 text-xs tracking-wider uppercase pt-0.5"
                            style={{
                              fontFamily: "'Cinzel', serif",
                              color: "var(--gold)",
                              minWidth: "4.5rem",
                            }}
                          >
                            {p.side}
                          </span>
                          <p
                            className="text-sm"
                            style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", lineHeight: 1.6 }}
                          >
                            {p.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-20 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div
              className="w-16 h-0.5 mx-auto mb-8"
              style={{ background: "var(--gold)" }}
            />
            <p
              className="text-white/75 leading-relaxed italic mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                fontWeight: 300,
              }}
            >
              "a community of Faithful in Christ where there is neither Black nor White,
              bond nor free, but all are one in the Love of God."
            </p>
            <p
              className="text-[var(--gold-light)] text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              — Inscription, Mary Mother of the Church Window
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Back nav */}
      <section className="py-10 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/Parish-History"
            className="text-sm transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'Cinzel', serif", color: "var(--gold)", letterSpacing: "0.06em" }}
          >
            ← Parish History
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
