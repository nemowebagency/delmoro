"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export function ScrollToTopOnNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Force scroll reset on any navigation (including locale changes).
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, searchParams]);

  return null;
}

