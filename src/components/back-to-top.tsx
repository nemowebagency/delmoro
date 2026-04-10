"use client";

import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

const SCROLL_THRESHOLD = 300;

export function BackToTop() {
  const t = useTranslations("Nav");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const toggleVisibility = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setIsVisible(window.scrollY > SCROLL_THRESHOLD);
      });
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  const label = t("backToTop");

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={`fixed bottom-8 right-8 z-50 cursor-pointer rounded-full bg-[#b99e7e] p-4 text-white shadow-lg transition-all duration-300 hover:bg-[#a68d6f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b99e7e] ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={24} aria-hidden />
    </button>
  );
}
