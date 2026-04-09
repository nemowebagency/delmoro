"use client";

import { cn } from "@/lib/utils";

type SpotlightProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  children: React.ReactNode;
};

export function Spotlight({ children, className, ...rest }: SpotlightProps) {
  return (
    <div
      className={cn(className)}
      {...rest}
      onPointerEnter={(e) => {
        e.currentTarget.style.setProperty("--spotlight-opacity", "1");
        e.currentTarget.style.setProperty("--hover-scale", "1.015");
        e.currentTarget.style.setProperty(
          "--card-shadow",
          "0 14px 40px rgba(34,34,34,0.12)",
        );
        rest.onPointerEnter?.(e);
      }}
      onPointerMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--spotlight-x", `${x}px`);
        el.style.setProperty("--spotlight-y", `${y}px`);
        el.style.setProperty("--spotlight-opacity", "1");
        el.style.setProperty("--hover-scale", "1.015");
        el.style.setProperty("--card-shadow", "0 14px 40px rgba(34,34,34,0.12)");
        rest.onPointerMove?.(e);
      }}
      onPointerLeave={(e) => {
        const el = e.currentTarget;
        el.style.setProperty("--spotlight-opacity", "0");
        el.style.setProperty("--hover-scale", "1");
        el.style.setProperty("--card-shadow", "0 0 0 rgba(0,0,0,0)");
        el.style.removeProperty("--spotlight-x");
        el.style.removeProperty("--spotlight-y");
        rest.onPointerLeave?.(e);
      }}
    >
      {children}
    </div>
  );
}
