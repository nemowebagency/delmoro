"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Regola qui lo scroll Lenis. Usiamo `ReactLenis` da `lenis/react`: al cambio di
 * questi numeri l’istanza viene ricreata (non resta “bloccata” come con useEffect []).
 *
 * - lerp: più basso = più strascico dopo il rilascio; più alto = si ferma subito (tipico ~0.07–0.16).
 * - wheelMultiplier: compensa un lerp basso (rotella ancora viva durante il gesto).
 */
const LENIS_OPTIONS = {
  /** Più basso = dopo il rilascio continua a scorrere di più (inerzia). */
  lerp: 0.075,
  smoothWheel: true,
  /** Resta >1 così durante la rotella non diventa “pesante”. */
  wheelMultiplier: 1.14,
  touchMultiplier: 1.08,
  anchors: true,
  autoRaf: true,
} as const;

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [allowSmooth, setAllowSmooth] = useState(true);

  useEffect(() => {
    setAllowSmooth(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!allowSmooth) {
    return children;
  }

  return (
    <ReactLenis root options={{ ...LENIS_OPTIONS }}>
      {children}
    </ReactLenis>
  );
}
