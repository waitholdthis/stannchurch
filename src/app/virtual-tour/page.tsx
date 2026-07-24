import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VirtualTourContent from "@/components/VirtualTourContent";

export const metadata: Metadata = {
  title: "Take a Virtual Tour — St. Ann Catholic Church",
  description: "Explore St. Ann Catholic Church in Fayetteville, NC with an interactive 3D virtual tour of the sanctuary and grounds.",
};

export default function VirtualTourPage() {
  return <><Navbar /><main id="main"><VirtualTourContent /></main><Footer /></>;
}
