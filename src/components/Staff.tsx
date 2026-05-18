"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const staff = [
  {
    name: "Father Matthew Nwafor",
    role: "Pastor",
    photo: "/staff/father-matthew-nwafor.jpg",
  },
  {
    name: "Deacon Gary Stemple",
    role: "Deacon",
    photo: "/staff/deacon-gary-stemple.jpg",
  },
  {
    name: "Antony Bishop",
    role: "Director of Religious Education",
    photo: "/staff/antony-bishop.jpg",
  },
  {
    name: "Lee Pittman",
    role: "School Principal",
    photo: "/staff/lee-pittman.webp",
  },
  {
    name: "Pok-Hui Folsom",
    role: "Bookkeeper",
    photo: "/staff/pok-hui-folsom.jpg",
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

export default function Staff() {
  return (
    <section
      id="staff"
      className="py-28 px-6"
      style={{ background: "var(--cream)" }}
      aria-labelledby="staff-heading"
    >
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <span
              className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Parish Leadership
            </span>
            <h2
              id="staff-heading"
              className="mt-3 mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--navy)",
              }}
            >
              Our Staff
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{ background: "var(--gold)" }} />
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {staff.map((person, i) => (
            <FadeUp key={person.name} delay={0.07 * i}>
              <div className="flex flex-col items-center text-center group">
                {/* Photo */}
                <div
                  className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 border-2 shadow-md transition-shadow duration-300 group-hover:shadow-xl"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Image
                    src={person.photo}
                    alt={`Photo of ${person.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  {/* Gold tint overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--navy)]/0 group-hover:bg-[var(--navy)]/10 transition-colors duration-300" />
                </div>

                {/* Name & role */}
                <p
                  className="font-medium leading-tight mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: "var(--navy)",
                    fontWeight: 500,
                  }}
                >
                  {person.name}
                </p>
                <p
                  className="text-xs leading-snug"
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    color: "var(--muted)",
                  }}
                >
                  {person.role}
                </p>

                {/* Gold underline accent */}
                <div
                  className="mt-3 h-0.5 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "var(--gold)" }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
