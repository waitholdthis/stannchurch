"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cross,
  Music,
  BookOpen,
  Heart,
  Baby,
  Users,
  HandHelping,
  LandmarkIcon,
  DollarSign,
  ShieldCheck,
  PartyPopper,
  Swords,
  Flower2,
  Palette,
  Wrench,
  Globe,
  HeartHandshake,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

type ContactInfo = {
  name?: string;
  phone?: string;
  email?: string;
  website?: string;
};

type Entry = {
  icon: React.ElementType;
  title: string;
  desc: string;
  contact: ContactInfo;
  note?: string;
};

const ministries: Entry[] = [
  {
    icon: Cross,
    title: "Altar Servers",
    desc: "Assist with weekend and school Masses, weddings, funerals, and special occasions. Must have received First Holy Communion in the Catholic Church.",
    contact: { name: "Deacon Gary Stemple", phone: "910-483-3216", email: "deacongary@stanncatholicchurch.org" },
  },
  {
    icon: Music,
    title: "Mass Choirs",
    desc: "Performs at Saturday 5 PM and Sunday 8:30 AM & 11 AM Masses, featuring acoustic guitars, keyboard, percussion, and over 15 members.",
    contact: { name: "Pauline Stemple", phone: "910-483-3216", email: "pas0405@aol.com" },
    note: "Rehearsals: Wednesdays at 7:00 PM",
  },
  {
    icon: BookOpen,
    title: "Lectors",
    desc: "Proclaims Scripture readings at Mass. Open to any practicing Catholic after training and preparation.",
    contact: { name: "Karen Estep", phone: "910-977-8641", email: "ncesteps@gmail.com" },
  },
  {
    icon: Heart,
    title: "Extraordinary Ministers of Holy Communion",
    desc: "Distributes Holy Communion at Mass. Open to practicing Catholics aged 18+ who have completed the Sacraments of Initiation and required training.",
    contact: { name: "Patricia Fortuna", phone: "910-391-5139", email: "pattiann230@gmail.com" },
  },
  {
    icon: Baby,
    title: "Children's Liturgy",
    desc: "Offered at the 11:00 AM Mass for children ages 4–10. Nursery also available for ages 1–3 from 10:50 AM to 12:20 PM.",
    contact: { name: "Jennifer Tapia", email: "Mrstapia678@gmail.com" },
  },
  {
    icon: HandHelping,
    title: "OCIA / OCIC",
    desc: "Order of Christian Initiation for adults and children exploring Catholicism or completing their Sacraments. Meets Sundays 10:00–10:45 AM in the school.",
    contact: { name: "Jo Katherine Dessaw (Adults)", phone: "910-583-1005", email: "jdessaw@prodigy.net" },
    note: "Children: Erin Coughlin — erincoughlin11@gmail.com",
  },
  {
    icon: Users,
    title: "Usher / Hospitality",
    desc: "Welcomes parishioners and guests at Mass and helps maintain the cleanliness and order of the church.",
    contact: { name: "Michael Patterson", phone: "252-955-8359" },
  },
];

const organizations: Entry[] = [
  {
    icon: LandmarkIcon,
    title: "Pastoral Council",
    desc: "Advises the pastor and works to identify and address the needs of the parishioner community.",
    contact: { name: "Becky Oskey", phone: "910-658-7771", email: "parishcouncil@stanncatholicchurch.org" },
  },
  {
    icon: DollarSign,
    title: "Finance Council",
    desc: "Provides fiscal guidance to the parish, including oversight of budgets, financial systems, and reports.",
    contact: { name: "Parish Office", email: "info@stanncatholicchurch.org" },
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment Training",
    desc: "Mandatory annual training for all church and school personnel and youth ministry volunteers, covering child abuse recognition, reporting, and prevention.",
    contact: { name: "Antony Bishop", email: "dff@stanncatholicchurch.org" },
  },
  {
    icon: PartyPopper,
    title: "Social Committee",
    desc: "Coordinates community programs, gatherings, and events that strengthen the bonds of parish life.",
    contact: { name: "Becky Oskey", phone: "910-658-7771", email: "becky.oskey@gmail.com" },
  },
  {
    icon: Swords,
    title: "Knights of Columbus",
    desc: "A fraternal brotherhood focused on community service, charity, and support of the parish and its members.",
    contact: { name: "Robert Gonzalez", email: "KofC11683@stanncatholicchurch.org", website: "http://www.kofc-council-11683.faithmatters.site/" },
  },
  {
    icon: Flower2,
    title: "Altar Rosary Society",
    desc: "Maintains the sanctuary, prays the rosary together, and conducts service activities in support of the parish.",
    contact: { name: "Pauline Stemple", email: "pas0405@aol.com" },
  },
  {
    icon: Palette,
    title: "Arts and Environment Committee",
    desc: "Maintains the beauty of our worship spaces and plans seasonal liturgical decorations throughout the year.",
    contact: { name: "Barbara Ingano", email: "rbciggy1@gmail.com" },
  },
  {
    icon: Wrench,
    title: "Grounds & Maintenance Committee",
    desc: "Ensures the church, school, and entire campus are properly maintained, landscaped, and cared for.",
    contact: { name: "Parish Office", phone: "910-483-3216", email: "info@stanncatholicchurch.org" },
  },
  {
    icon: Globe,
    title: "Filipino Community",
    desc: "Celebrates Mass on the second Sunday of each month at 3:00 PM followed by a potluck. Tagalog Mass offered every other month.",
    contact: { name: "Zeny Bohol", phone: "910-424-7298" },
  },
  {
    icon: HeartHandshake,
    title: "Catholic Charities",
    desc: "Addresses emergency needs and advances social justice advocacy both within the parish and in the wider community.",
    contact: { name: "Vicky Jimenez", phone: "910-424-2020" },
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function EntryCard({ entry, delay }: { entry: Entry; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div
        className="group rounded-2xl border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden h-full"
        style={{ background: "var(--cream)", borderColor: "var(--border)" }}
      >
        {/* Card header */}
        <div className="p-7 flex-1">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[var(--navy)]"
            style={{ background: "var(--gold-pale)" }}
          >
            <entry.icon
              className="w-5 h-5 transition-colors duration-300 group-hover:text-[var(--gold-light)]"
              style={{ color: "var(--gold)" }}
            />
          </div>

          <h3
            className="mb-3 leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontWeight: 500,
              color: "var(--navy)",
            }}
          >
            {entry.title}
          </h3>

          <p
            className="leading-relaxed mb-3"
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: "1rem",
              color: "var(--text-mid)",
              lineHeight: 1.6,
            }}
          >
            {entry.desc}
          </p>

          {entry.note && (
            <p
              className="text-sm italic px-3 py-2 rounded-lg"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: "var(--gold)",
                background: "var(--gold-pale)",
              }}
            >
              {entry.note}
            </p>
          )}
        </div>

        {/* Contact footer */}
        <div
          className="px-7 py-4 border-t flex flex-col gap-1.5"
          style={{ borderColor: "var(--border)", background: "var(--cream-mid)" }}
        >
          {entry.contact.name && (
            <p
              className="text-xs font-medium tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: "var(--navy)", fontSize: "0.72rem", letterSpacing: "0.08em" }}
            >
              {entry.contact.name}
            </p>
          )}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {entry.contact.phone && (
              <a
                href={`tel:${entry.contact.phone.replace(/-/g, "")}`}
                className="flex items-center gap-1.5 text-xs hover:underline transition-colors duration-150"
                style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "0.9rem" }}
              >
                <Phone className="w-3 h-3 shrink-0" style={{ color: "var(--gold)" }} />
                {entry.contact.phone}
              </a>
            )}
            {entry.contact.email && (
              <a
                href={`mailto:${entry.contact.email}`}
                className="flex items-center gap-1.5 text-xs hover:underline transition-colors duration-150 truncate"
                style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "0.9rem" }}
              >
                <Mail className="w-3 h-3 shrink-0" style={{ color: "var(--gold)" }} />
                {entry.contact.email}
              </a>
            )}
            {entry.contact.website && (
              <a
                href={entry.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:underline transition-colors duration-150"
                style={{ fontFamily: "'Crimson Pro', serif", color: "var(--text-mid)", fontSize: "0.9rem" }}
              >
                <ExternalLink className="w-3 h-3 shrink-0" style={{ color: "var(--gold)" }} />
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function SectionHeading({ label, title, id }: { label: string; title: string; id: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span
        className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {label}
      </span>
      <h2
        id={id}
        className="mt-3 mb-4"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 300,
          color: "var(--navy)",
        }}
      >
        {title}
      </h2>
      <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
    </motion.div>
  );
}

export default function Ministries() {
  return (
    <section id="ministries" aria-label="Ministries and Organizations">
      {/* Ministries */}
      <div className="py-24 px-6" style={{ background: "var(--cream-mid)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Get Involved"
            title="Ministries"
            id="ministries-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ministries.map((m, i) => (
              <EntryCard key={m.title} entry={m} delay={0.05 * i} />
            ))}
          </div>
        </div>
      </div>

      {/* Organizations */}
      <div className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Parish Life"
            title="Organizations"
            id="organizations-heading"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {organizations.map((o, i) => (
              <EntryCard key={o.title} entry={o} delay={0.05 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
