import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationContent from "@/components/RegistrationContent";

export const metadata: Metadata = {
  title: "Parish Registration — St. Ann Catholic Church",
  description:
    "Register as a member of St. Ann Catholic Church in Fayetteville, NC. Download the parish registration form or contact the parish office.",
};

export default function RegistrationPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <RegistrationContent />
      </main>
      <Footer />
    </>
  );
}
