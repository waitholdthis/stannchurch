import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BaptismContent from "@/components/BaptismContent";

export const metadata: Metadata = {
  title: "Baptism — St. Ann Catholic Church",
  description:
    "Learn about Baptism preparation, schedules, godparent requirements, and how to register at St. Ann Catholic Church in Fayetteville, NC.",
};

export default function BaptismPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <BaptismContent />
      </main>
      <Footer />
    </>
  );
}
