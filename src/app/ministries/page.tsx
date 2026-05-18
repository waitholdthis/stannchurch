import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ministries from "@/components/Ministries";

export const metadata: Metadata = {
  title: "Ministries & Organizations — St. Ann Catholic Church",
  description:
    "Explore the ministries and organizations at St. Ann Catholic Church in Fayetteville, NC. Find contact information and learn how to get involved.",
};

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Page hero */}
        <section
          className="relative pt-40 pb-24 px-6 overflow-hidden"
          style={{ background: "var(--navy)" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, var(--gold) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <span
              className="text-[var(--gold-light)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Get Involved
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
              Ministries &amp;{" "}
              <em style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                Organizations
              </em>
            </h1>
            <div
              className="w-12 h-0.5 mx-auto mb-6"
              style={{ background: "var(--gold)" }}
            />
            <p
              className="text-white/65 max-w-xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              There is a place for everyone at St. Ann. Explore our ministries
              and organizations and discover how you can serve, grow, and
              connect with our parish community.
            </p>
          </div>
        </section>

        <Ministries />
      </main>
      <Footer />
    </>
  );
}
