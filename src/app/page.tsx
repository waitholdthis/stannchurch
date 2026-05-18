import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MassTimes from "@/components/MassTimes";
import Welcome from "@/components/Welcome";
import School from "@/components/School";
import Staff from "@/components/Staff";
import Give from "@/components/Give";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
