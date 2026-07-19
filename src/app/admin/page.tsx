import type { Metadata } from "next";
import Script from "next/script";
import { publicPath } from "@/lib/publicPath";

export const metadata: Metadata = {
  title: "St. Ann Parish Content Manager",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7f3ea" }}>
      <link
        href={publicPath("/admin/config.yml")}
        type="application/yaml"
        rel="cms-config-url"
      />
      <p
        style={{
          margin: 0,
          padding: "3rem 1.5rem",
          textAlign: "center",
          color: "#15233b",
          fontFamily: "Georgia, serif",
        }}
      >
        Loading the St. Ann Parish Content Manager…
      </p>
      <Script
        src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
