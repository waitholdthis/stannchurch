import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MassTimes from "@/components/MassTimes";
import Welcome from "@/components/Welcome";
import School from "@/components/School";
import Staff from "@/components/Staff";
import Give from "@/components/Give";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReset from "@/components/ScrollReset";

export default function Home() {
  return (
    <>
      <ScrollReset />
      <Navbar />
      <main id="main">
        <Hero />
        <MassTimes />
        <Welcome />
        <School />
        <Staff />
        <Give />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
