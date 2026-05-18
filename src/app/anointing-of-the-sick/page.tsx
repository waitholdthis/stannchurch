import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnointingContent from "@/components/AnointingContent";

export const metadata: Metadata = {
  title: "Anointing of the Sick — St. Ann Catholic Church",
  description:
    "Learn about the Sacrament of Anointing of the Sick at St. Ann Catholic Church in Fayetteville, NC — who can receive it, its graces, and how to request it.",
};

export default function AnointingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <AnointingContent />
      </main>
      <Footer />
    </>
  );
}
