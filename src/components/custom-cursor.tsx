"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    setActive(true);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      const target = e.target;
      if (!(target instanceof Element)) {
        setIsPointer(false);
        return;
      }

      const el = target as HTMLElement;
      const tag = el.tagName;
      const role = el.getAttribute("role");
      const style = window.getComputedStyle(el);

      const isClickable =
        tag === "A" ||
        tag === "BUTTON" ||
        role === "button" ||
        role === "link" ||
        role === "menuitem" ||
        el.hasAttribute("data-cursor-pointer") ||
        typeof el.onclick === "function" ||
        style.cursor === "pointer";

      setIsPointer(isClickable);
    };

    const animate = (timestamp: number) => {
      if (previousTimeRef.current !== undefined) {
        const speed = 0.2;
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;
        setSmoothPosition({ x: currentX, y: currentY });
      }

      previousTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!active) {
    return null;
  }

  return (
    <div
      className={`pointer-events-none fixed z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${smoothPosition.x}px`,
        top: `${smoothPosition.y}px`,
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.2))",
      }}
      aria-hidden
    >
      <div
        className={`rounded-full border-2 transition-all duration-300 ${
          isPointer
            ? "h-10 w-10 border-[#b99e7e] bg-[#b99e7e]/20"
            : "h-8 w-8 border-white/90 bg-white/10"
        }`}
      />
    </div>
  );
}
