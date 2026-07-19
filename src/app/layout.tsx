import type { Metadata } from "next";
import Script from "next/script";
import AskStAnn from "@/components/AskStAnn";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Ann Catholic Church — Fayetteville, NC",
  description:
    "A vibrant, growing, and engaged Catholic community in Fayetteville, NC. Join us for Mass, Faith Formation, and parish life.",
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <AskStAnn />
      </body>
      <Script id="gtranslate-settings" strategy="afterInteractive">
        {`window.gtranslateSettings = {
          default_language: "en",
          native_language_names: true,
          detect_browser_language: false,
          languages: ["en", "es"],
          wrapper_selector: ".gtranslate_wrapper"
        };`}
      </Script>
      <Script
        id="gtranslate-widget"
        src="https://cdn.gtranslate.net/widgets/latest/dropdown.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
