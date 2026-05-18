import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotosContent from "@/components/PhotosContent";

export const metadata: Metadata = {
  title: "Parish Photos — St. Ann Catholic Church",
  description:
    "Browse photo galleries from St. Ann Catholic Church in Fayetteville, NC, including church interior, historical photos, and anniversary celebrations.",
};

export default function PhotosPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PhotosContent />
      </main>
      <Footer />
    </>
  );
}
