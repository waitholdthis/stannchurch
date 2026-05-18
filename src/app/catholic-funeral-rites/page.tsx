import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FuneralRitesContent from "@/components/FuneralRitesContent";

export const metadata: Metadata = {
  title: "Catholic Funeral Rites — St. Ann Catholic Church",
  description:
    "Learn about the Catholic Way of Death and Burial at St. Ann Catholic Church in Fayetteville, NC — the six steps, Church teaching, and how to arrange funeral rites.",
};

export default function FuneralRitesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <FuneralRitesContent />
      </main>
      <Footer />
    </>
  );
}
