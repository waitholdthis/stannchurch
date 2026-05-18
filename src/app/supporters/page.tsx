import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportersContent from "@/components/SupportersContent";

export const metadata: Metadata = {
  title: "Bulletin Ads & Supporters — St. Ann Catholic Church",
  description:
    "Support St. Ann Catholic Church by advertising in our parish bulletin. View our current business supporters in Fayetteville, NC.",
};

export default function SupportersPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <SupportersContent />
      </main>
      <Footer />
    </>
  );
}
