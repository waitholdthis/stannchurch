import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsContent from "@/components/EventsContent";

export const metadata: Metadata = {
  title: "Events — St. Ann Catholic Church",
  description:
    "View the weekly Mass schedule and upcoming events at St. Ann Catholic Church in Fayetteville, NC.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <EventsContent />
      </main>
      <Footer />
    </>
  );
}
