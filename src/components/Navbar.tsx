"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/publicPath";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavLeaf = { label: string; href: string };
type NavChild = { label: string; href: string; children?: NavLeaf[] };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Registration", href: "/registration" },
      { label: "Events", href: "/events" },
      {
        label: "Parish History",
        href: "/Parish-History",
        children: [{ label: "Church Windows", href: "/Church-Windows" }],
      },
      { label: "Bulletin", href: "/publications" },
      { label: "Sermons", href: "/sermons" },
      { label: "Watch Live", href: "/watch-live" },
      { label: "Photos", href: "/photos" },
    ],
  },
  {
    label: "Faith Formation",
    href: "/Faith-Formation",
    children: [
      {
        label: "The Sacraments",
        href: "/The-Sacraments",
        children: [
          { label: "Baptism", href: "/baptism" },
          { label: "Reconciliation", href: "/reconciliation" },
          {
            label: "Anointing of the Sick",
            href: "/anointing-of-the-sick",
          },
        ],
      },
      { label: "Catholic Funeral Rites", href: "/catholic-funeral-rites" },
      { label: "Vocations", href: "https://ncpriest.org/" },
    ],
  },
  {
    label: "Prayer",
    href: "/prayer-request",
    children: [
      { label: "Prayer Resources", href: "/prayer-resources" },
      { label: "Prayer Requests", href: "/prayer-request" },
    ],
  },
  {
    label: "Ministries / Organizations",
    href: "/ministries",
    children: [
      {
        label: "Ministries & Organizations 2026",
        href: "/ministries",
      },
    ],
  },
  { label: "School", href: "https://waitholdthis.github.io/stannslogin/" },
  {
    label: "Resources",
    href: "/news",
    children: [
      { label: "The Vatican", href: "https://www.vatican.va/content/vatican/en.html" },
      { label: "Diocese of Raleigh", href: "https://dioceseofraleigh.org/" },
    ],
  },
  { label: "Bulletin Ads", href: "/supporters" },
  { label: "Contact", href: "/#contact" },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

function NavA({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

// ── Desktop dropdown item (handles optional flyout for nested children) ──────
function DropdownItem({ child, onClose }: { child: NavChild; onClose?: () => void }) {
  const [open, setOpen] = useState(false);

  if (!child.children) {
    return (
      <NavA
        href={child.href}
        className="block px-5 py-3 text-[var(--text-mid)] hover:bg-[var(--cream-mid)] hover:text-[var(--navy)] text-sm transition-colors duration-150 whitespace-nowrap"
        onClick={onClose}
      >
        {child.label}
      </NavA>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="w-full flex items-center justify-between px-5 py-3 text-[var(--text-mid)] hover:bg-[var(--cream-mid)] hover:text-[var(--navy)] text-sm transition-colors duration-150 cursor-pointer whitespace-nowrap gap-4">
        <NavA href={child.href} className="flex-1 text-left" onClick={onClose}>
          {child.label}
        </NavA>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 pointer-events-none" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-0 left-full ml-1 min-w-52 bg-white rounded-xl shadow-xl shadow-black/10 border border-[var(--border)] overflow-hidden"
          >
            {child.children.map((leaf) => (
              <NavA
                key={leaf.label}
                href={leaf.href}
                className="block px-5 py-3 text-[var(--text-mid)] hover:bg-[var(--cream-mid)] hover:text-[var(--navy)] text-sm transition-colors duration-150 whitespace-nowrap"
                onClick={onClose}
              >
                {leaf.label}
              </NavA>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Mobile accordion item ─────────────────────────────────────────────────────
function MobileItem({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <NavA
        href={link.href}
        onClick={onClose}
        className="block py-3 text-white/90 hover:text-[var(--gold-light)] text-lg border-b border-white/10 transition-colors duration-150"
      >
        {link.label}
      </NavA>
    );
  }

  return (
    <div className="border-b border-white/10">
      <div className="w-full flex items-center justify-between py-3">
        <NavA
          href={link.href}
          onClick={onClose}
          className="flex-1 text-left text-white/90 hover:text-[var(--gold-light)] text-lg transition-colors duration-150"
        >
          {link.label}
        </NavA>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${link.label} menu`}
          className="p-1 text-white/90 hover:text-[var(--gold-light)] transition-colors duration-150 cursor-pointer"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2">
              {link.children.map((child) => (
                <div key={child.label}>
                  <NavA
                    href={child.href}
                    onClick={onClose}
                    className="block py-2 text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    {child.label}
                  </NavA>
                  {child.children && (
                    <div className="pl-4">
                      {child.children.map((leaf) => (
                        <NavA
                          key={leaf.label}
                          href={leaf.href}
                          onClick={onClose}
                          className="block py-1.5 text-white/40 hover:text-white/80 text-xs transition-colors duration-150"
                        >
                          {leaf.label}
                        </NavA>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--navy)]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="St. Ann Catholic Church — Home"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden shadow-md ring-2 ring-[var(--gold)]/60 shrink-0">
              <Image
                src={publicPath("/StAnnChurch.webp")}
                alt="St. Ann Catholic Church logo"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p
                className="text-white font-semibold tracking-wider text-sm uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                St. Ann
              </p>
              <p className="text-[var(--gold-light)] text-xs tracking-widest uppercase">
                Catholic Church
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden xl:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div
                    className="flex items-center gap-1 px-3 py-2 text-white/85 hover:text-white text-sm tracking-wide transition-colors duration-200 whitespace-nowrap"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                  >
                    <NavA href={link.href} className="hover:text-white">
                      {link.label}
                    </NavA>
                    <ChevronDown
                      className={`w-3 h-3 shrink-0 pointer-events-none transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 min-w-52 bg-white rounded-xl shadow-xl shadow-black/10 border border-[var(--border)] overflow-visible py-1"
                      >
                        {link.children.map((child) => (
                          <DropdownItem
                            key={child.label}
                            child={child}
                            onClose={() => setOpenDropdown(null)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavA
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-white/85 hover:text-white text-sm tracking-wide transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </NavA>
              )
            )}
          </nav>

          {/* CTA */}
          <Link
            href="/#give"
            className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white text-sm font-medium rounded-full transition-colors duration-200 shadow-md shrink-0"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Give Online
          </Link>

          <LanguageSwitcher />

          {/* Mobile menu button */}
          <button
            className="xl:hidden text-white p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-80 bg-[var(--navy)] z-40 shadow-2xl pt-24 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <MobileItem
                  key={link.label}
                  link={link}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/#give"
                onClick={() => setMobileOpen(false)}
                className="mt-6 block text-center py-3 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white rounded-full font-medium transition-colors duration-200"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Give Online
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 xl:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
