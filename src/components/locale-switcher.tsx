"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function FlagUk({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path fill="#012169" d="M0 0h60v30H0z" />
      <path stroke="#fff" strokeWidth="10" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#C8102E" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
      <path stroke="#fff" strokeWidth="12" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth="8" d="M30 0v30M0 15h60" />
    </svg>
  );
}

function FlagIt({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path fill="#009246" d="M0 0h1v2H0z" />
      <path fill="#fff" d="M1 0h1v2H1z" />
      <path fill="#CE2B37" d="M2 0h1v2H2z" />
    </svg>
  );
}

export function LocaleSwitcher({
  inverted,
  embedded,
}: {
  inverted?: boolean;
  /** No left border / margin — e.g. mobile menu panel */
  embedded?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "flex items-center",
        embedded
          ? "gap-2"
          : cn(
              "ml-1.5 gap-1 border-l pl-3 md:pl-4",
              inverted ? "border-[#b99e7e]/35" : "border-[color:var(--line)]",
            ),
      )}
    >
      {routing.locales.map((loc) => {
        const isEn = loc === "en";
        const label = isEn ? t("en") : t("it");
        return (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            prefetch={false}
            title={label}
            aria-label={label}
            aria-current={locale === loc ? "page" : undefined}
            className={cn(
              "inline-flex h-6 min-h-6 items-center justify-center overflow-hidden px-px",
              "border-b border-solid pb-0.5 transition-[opacity,border-color] focus-visible:outline-none",
              inverted
                ? cn(
                    locale === loc ? "border-[#b99e7e] opacity-100" : "border-transparent opacity-70",
                    "hover:border-[#b99e7e] hover:opacity-100",
                    "focus-visible:border-[#b99e7e]",
                  )
                : cn(
                    locale === loc
                      ? "border-[color:var(--ink)] opacity-100"
                      : "border-transparent opacity-60",
                    "hover:border-[#b3997a] hover:opacity-100",
                    "focus-visible:border-[#b3997a]",
                  ),
            )}
          >
            <span className="block h-3 w-6 overflow-hidden">
              {isEn ? (
                <FlagUk className="h-full w-full" />
              ) : (
                <FlagIt className="h-full w-full" />
              )}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
