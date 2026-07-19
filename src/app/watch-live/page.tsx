import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WatchLiveContent from "@/components/WatchLiveContent";

export const metadata: Metadata = {
  title: "Watch Live — St. Ann Catholic Church",
  description: "Watch the Sunday 11:00 AM Mass livestream from St. Ann Catholic Church in Fayetteville, NC — no Facebook account required.",
};

export default function WatchLivePage() {
  return <><Navbar /><main id="main"><WatchLiveContent /></main><Footer /></>;
}
