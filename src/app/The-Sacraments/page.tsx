import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SacramentsContent from "@/components/SacramentsContent";

export const metadata: Metadata = {
  title: "The Sacraments — St. Ann Catholic Church",
  description:
    "Learn about the Sacraments celebrated at St. Ann Catholic Church in Fayetteville, NC — Baptism, Reconciliation, and Anointing of the Sick.",
};

export default function SacramentsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <SacramentsContent />
      </main>
      <Footer />
    </>
  );
}
