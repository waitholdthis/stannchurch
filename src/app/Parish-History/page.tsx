import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParishHistoryContent from "@/components/ParishHistoryContent";

export const metadata: Metadata = {
  title: "Parish History — St. Ann Catholic Church",
  description:
    "Discover the rich history of St. Ann Catholic Church in Fayetteville, NC — from its founding in 1939 in a humble barbershop to its growth as a vibrant Catholic community.",
};

export default function ParishHistoryPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ParishHistoryContent />
      </main>
      <Footer />
    </>
  );
}
