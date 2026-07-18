"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Language = "en" | "es";

const languages: { code: Language; short: string; label: string }[] = [
  { code: "en", short: "EN", label: "English" },
  { code: "es", short: "ES", label: "Español" },
];

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("en");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    function syncLanguage() {
      const selector = engine?.querySelector<HTMLSelectElement>("select");
      const selectedCode = selector?.value.split("|").pop();
      if (selectedCode === "en" || selectedCode === "es") {
        setLanguage(selectedCode);
      }
    }

    const observer = new MutationObserver(syncLanguage);
    observer.observe(engine, { childList: true, subtree: true });
    const timer = window.setTimeout(syncLanguage, 0);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function applyLanguage(nextLanguage: Language, attempt = 0) {
    // GTranslate only loads Google's translate library on pointerenter/focusin
    // over its wrapper, which is visually hidden here — fire it manually.
    engineRef.current?.dispatchEvent(new Event("pointerenter"));
    engineRef.current?.dispatchEvent(new Event("focusin"));

    const selector = engineRef.current?.querySelector<HTMLSelectElement>("select");
    const matchingOption = selector
      ? Array.from(selector.options).find(
          (option) =>
            option.value === nextLanguage ||
            option.value.split("|").pop() === nextLanguage,
        )
      : undefined;

    if (selector && matchingOption) {
      selector.value = matchingOption.value;
      selector.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    if (attempt < 20) {
      window.setTimeout(() => applyLanguage(nextLanguage, attempt + 1), 100);
    }
  }

  function chooseLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setOpen(false);
    applyLanguage(nextLanguage);
  }

  const selected = languages.find((item) => item.code === language) ?? languages[0];

  return (
    <div
      ref={containerRef}
      className="language-switcher notranslate shrink-0 xl:ml-3"
      translate="no"
    >
      <button
        type="button"
        className="language-switcher-button"
        aria-label={`Website language: ${selected.label}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="language-switcher-symbol" aria-hidden="true">
          <span>A</span>
          <span>文</span>
        </span>
        <span className="language-switcher-code">{selected.short}</span>
        <ChevronDown
          className={`language-switcher-chevron h-4 w-4 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="language-switcher-menu" role="listbox" aria-label="Website language">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={language === item.code}
              className="language-switcher-option"
              onClick={() => chooseLanguage(item.code)}
            >
              <span>{item.short}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      <div ref={engineRef} className="gtranslate_wrapper language-switcher-engine" />
    </div>
  );
}
