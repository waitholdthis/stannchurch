import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesContent from "@/components/ResourcesContent";

export const metadata: Metadata = {
  title: "Resources — St. Ann Catholic Church",
  description:
    "Catholic resources for parishioners at St. Ann Catholic Church — links to the Vatican, Diocese of Raleigh, Catholic news, and parish publications.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ResourcesContent />
      </main>
      <Footer />
    </>
  );
}
