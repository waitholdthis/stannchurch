"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/publicPath";

const navLinks = [
  { label: "Mass Times", href: "/#mass-times" },
  { label: "Our Parish", href: "/#welcome" },
  { label: "Ministries", href: "/ministries" },
  { label: "School", href: "/#school" },
  { label: "Parish Staff", href: "/#staff" },
  { label: "Give Online", href: "/#give" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "#080f1f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[var(--gold)]/60 shrink-0">
                <Image
                  src={publicPath("/StAnnChurch.webp")}
                  alt="St. Ann Catholic Church logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-white font-semibold text-sm tracking-wider uppercase"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  St. Ann
                </p>
                <p
                  className="text-[var(--gold-light)] text-xs tracking-widest uppercase"
                >
                  Catholic Church
                </p>
              </div>
            </div>
            <p
              className="text-white/50 leading-relaxed text-base"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              A vibrant Catholic community in Fayetteville, NC, rooted in the
              Eucharist since 1939.
            </p>
            <a
              href="https://www.facebook.com/StAnnFayettevilleNorthCarolina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="St. Ann Catholic Church on Facebook"
              className="mt-5 inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[var(--gold)] transition-colors duration-150"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
              </svg>
            </a>
            <div className="mt-5 flex flex-col items-center w-fit mx-auto sm:mx-0 sm:mt-3 sm:ml-10 sm:inline-flex">
              <div className="rounded-2xl bg-white p-3 shadow-md">
                <Image
                  src={publicPath("/StAnnChurch_QR_Code.png")}
                  alt="QR code for St. Ann Catholic Church"
                  width={176}
                  height={176}
                  className="w-44 h-44"
                />
              </div>
              <p
                className="mt-3 text-white/40 text-sm text-center"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                Scan to share our parish website
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white/80 text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[var(--gold-light)] transition-colors duration-150 text-base"
                    style={{ fontFamily: "'Crimson Pro', serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white/80 text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Contact &amp; Location
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--gold-light)" }} />
                <p
                  className="text-white/60 text-base leading-snug"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  357 N. Cool Spring St.<br />
                  Fayetteville, NC 28301
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--gold-light)" }} />
                <a
                  href="tel:9104833216"
                  className="text-white/60 hover:text-white transition-colors duration-150 text-base"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  (910) 483-3216
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--gold-light)" }} />
                <p
                  className="text-white/60 text-base"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  office@stanncatholicchurch.org
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 shrink-0" style={{ color: "var(--gold-light)" }} />
                <p
                  className="text-white/60 text-base leading-snug"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  Mon–Thu: 9am – 3pm<br />
                  Friday: By appointment
                </p>
              </div>
            </address>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            © {new Date().getFullYear()} St. Ann Catholic Church, Fayetteville, NC.
            All rights reserved.
          </p>
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Website Created by{" "}
            <a
              href="https://church.tootiedesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--gold-light)] underline underline-offset-2 transition-colors duration-150"
            >
              Tootie Designs LLC
            </a>
          </p>
          <p
            className="text-white/20 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Diocese of Raleigh
          </p>
        </div>
      </div>
    </footer>
  );
}
