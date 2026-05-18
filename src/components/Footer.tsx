"use client";

import { MapPin, Phone, Clock, Cross, Mail } from "lucide-react";

const navLinks = [
  { label: "Mass Times", href: "#mass-times" },
  { label: "Our Parish", href: "#welcome" },
  { label: "Ministries", href: "#ministries" },
  { label: "School", href: "#school" },
  { label: "Parish Staff", href: "#staff" },
  { label: "Give Online", href: "#give" },
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
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "var(--gold)" }}
              >
                <Cross className="w-4 h-4 text-white" strokeWidth={2.5} />
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
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[var(--gold-light)] transition-colors duration-150 text-base"
                    style={{ fontFamily: "'Crimson Pro', serif" }}
                  >
                    {link.label}
                  </a>
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
