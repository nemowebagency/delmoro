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
      aria-hidden="true"
    >
      <path fill="#009246" d="M0 0h1v2H0z" />
      <path fill="#fff" d="M1 0h1v2H1z" />
      <path fill="#CE2B37" d="M2 0h1v2H2z" />
    </svg>
  );
}

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="ml-1.5 flex items-center gap-1 border-l border-[color:var(--line)] pl-3 md:pl-4"
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
              "flex h-5 min-h-5 items-center justify-center overflow-hidden rounded-[2px] border border-transparent px-px transition-[opacity,box-shadow]",
              "hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[color:var(--bronze)]",
              locale === loc
                ? "opacity-100 shadow-[0_0_0_1px_var(--bronze)]"
                : "opacity-50 hover:opacity-80",
            )}
          >
            {isEn ? (
              <FlagUk className="h-2.5 w-5 rounded-[1px]" />
            ) : (
              <FlagIt className="h-2.5 w-[0.94rem] rounded-[1px]" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
