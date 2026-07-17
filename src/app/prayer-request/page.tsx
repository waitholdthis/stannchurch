import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrayerRequestContent from "@/components/PrayerRequestContent";

export const metadata: Metadata = {
  title: "Prayer Requests — St. Ann Catholic Church",
  description:
    "Submit a confidential prayer request to Father Matthew Nwafor, Pastor of St. Ann Catholic Church in Fayetteville, NC. Share your name or remain anonymous.",
};

export default function PrayerRequestPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PrayerRequestContent />
      </main>
      <Footer />
    </>
  );
}
