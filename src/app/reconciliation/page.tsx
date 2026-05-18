import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReconciliationContent from "@/components/ReconciliationContent";

export const metadata: Metadata = {
  title: "Reconciliation — St. Ann Catholic Church",
  description:
    "Learn how to make a good Confession at St. Ann Catholic Church in Fayetteville, NC. Schedule, steps, and resources for the Sacrament of Reconciliation.",
};

export default function ReconciliationPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ReconciliationContent />
      </main>
      <Footer />
    </>
  );
}
