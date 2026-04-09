"use client";

import { useEffect, useMemo, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  const threshold = useMemo(() => 480, []);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setVisible(window.scrollY > threshold);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Torna su"
      title="Torna su"
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }}
      className={[
        "fixed bottom-5 right-5 z-50",
        "inline-flex h-11 w-11 items-center justify-center rounded-full",
        "border border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--ink)] shadow-sm",
        "transition hover:bg-[color:var(--section-warm)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--bronze)]",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

