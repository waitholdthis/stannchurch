import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicationsContent from "@/components/PublicationsContent";

export const metadata: Metadata = {
  title: "Parish Bulletin — St. Ann Catholic Church",
  description:
    "Read the latest parish bulletin from St. Ann Catholic Church in Fayetteville, NC. Browse past issues and subscribe to receive the bulletin by email.",
};

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PublicationsContent />
      </main>
      <Footer />
    </>
  );
}
