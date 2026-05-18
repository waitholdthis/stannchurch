import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChurchWindowsContent from "@/components/ChurchWindowsContent";

export const metadata: Metadata = {
  title: "Church Windows — St. Ann Catholic Church",
  description:
    "Explore the eight stained glass windows of St. Ann Catholic Church in Fayetteville, NC — each one telling the story of the parish's origins, saints, and faith.",
};

export default function ChurchWindowsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ChurchWindowsContent />
      </main>
      <Footer />
    </>
  );
}
