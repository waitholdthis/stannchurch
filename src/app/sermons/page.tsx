import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SermonsContent from "@/components/SermonsContent";

export const metadata: Metadata = {
  title: "Homilies & Sermons — St. Ann Catholic Church",
  description: "Watch and listen to recent homilies and sermons from St. Ann Catholic Church in Fayetteville, NC.",
};

export default function SermonsPage() {
  return <><Navbar /><main id="main"><SermonsContent /></main><Footer /></>;
}
