import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Ann Catholic Church — Fayetteville, NC",
  description:
    "A vibrant, growing, and engaged Catholic community in Fayetteville, NC. Join us for Mass, Faith Formation, and parish life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
