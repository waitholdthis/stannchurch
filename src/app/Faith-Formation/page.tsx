import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaithFormationContent from "@/components/FaithFormationContent";

export const metadata: Metadata = {
  title: "Faith Formation — St. Ann Catholic Church",
  description:
    "Explore faith formation programs at St. Ann Catholic Church in Fayetteville, NC — children's religious education, high school ministry, adult formation, and the sacraments.",
};

export default function FaithFormationPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <FaithFormationContent />
      </main>
      <Footer />
    </>
  );
}
