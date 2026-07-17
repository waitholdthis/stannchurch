import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrayerResourcesContent from "@/components/PrayerResourcesContent";

export const metadata: Metadata = {
  title: "Prayer Resources — St. Ann Catholic Church",
  description:
    "Traditional Catholic prayers, daily readings, the Rosary, and devotional resources from St. Ann Catholic Church in Fayetteville, NC.",
};

export default function PrayerResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PrayerResourcesContent />
      </main>
      <Footer />
    </>
  );
}
