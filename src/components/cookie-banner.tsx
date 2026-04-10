"use client";

import { Cookie, Settings, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "cookieConsent";

type ConsentValue = "accepted" | "rejected";

export function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "accepted" || saved === "rejected") {
        setConsent(saved);
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setConsent("accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {
      /* ignore */
    }
    setConsent("rejected");
    setShowBanner(false);
  };

  const handleOpenBanner = () => setShowBanner(true);
  const handleCloseBanner = () => setShowBanner(false);

  if (showBanner) {
    return (
      <div className="fixed bottom-0 left-0 z-[100] w-full md:bottom-4 md:left-4 md:w-auto md:max-w-md">
        <div className="m-4 rounded-none border border-[color:var(--line)] bg-[color:var(--paper)] p-6 shadow-2xl md:m-0">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <Cookie className="shrink-0 text-[#b99e7e]" size={24} aria-hidden />
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">
                {t("title")}
              </h3>
            </div>
            <button
              type="button"
              onClick={handleCloseBanner}
              className="shrink-0 cursor-pointer text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
              aria-label={t("closeBanner")}
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-[color:var(--muted)]">
            {t("description")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 cursor-pointer rounded-none bg-[#b99e7e] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#a68d6f]"
            >
              {t("accept")}
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="flex-1 cursor-pointer rounded-none border border-[color:var(--line)] px-6 py-3 font-semibold text-[color:var(--ink)] transition-all duration-300 hover:bg-[color:var(--section-warm)]"
            >
              {t("reject")}
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/cookie-policy"
              className="cursor-pointer text-xs text-[color:var(--muted)] underline transition-colors hover:text-[#b99e7e]"
            >
              {t("moreInfo")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (consent) {
    return (
      <button
        type="button"
        onClick={handleOpenBanner}
        className="group fixed bottom-4 left-4 z-[100] flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-2 shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label={t("managePreferences")}
      >
        <Settings
          size={16}
          className="text-[#b99e7e] transition-transform duration-300 group-hover:rotate-90"
          aria-hidden
        />
        <span className="text-xs text-[color:var(--muted)]">
          {consent === "accepted" ? t("acceptedLabel") : t("rejectedLabel")}
        </span>
      </button>
    );
  }

  return null;
}
