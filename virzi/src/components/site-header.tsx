"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--paper)]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[88px] w-full max-w-[1140px] items-center justify-between gap-3 px-5 py-2 md:min-h-[96px] md:px-8">
        <Link href="/" className="shrink-0 text-[color:var(--ink)]">
          <Image
            src="/brand/logo-b99e7e.svg"
            alt="Del Moro Sicily logo"
            width={96}
            height={96}
            className="h-[72px] w-[72px] md:h-20 md:w-20 lg:h-[88px] lg:w-[88px]"
            priority
            unoptimized
          />
        </Link>
        <div className="flex min-w-0 shrink items-center gap-2 md:gap-3">
          <nav className="hidden min-w-0 flex-nowrap items-center justify-end gap-x-1.5 md:flex lg:gap-x-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-label whitespace-nowrap rounded-sm px-2 py-1.5 text-[11px] font-normal uppercase tracking-[0.14em] text-[color:var(--muted)] transition-colors",
                  "md:text-[12px] md:tracking-[0.18em] lg:px-2.5 lg:text-[13px] lg:tracking-[0.22em]",
                  "hover:bg-[color:var(--section-warm)] hover:text-[color:var(--ink)]",
                  pathname === item.href && "text-[color:var(--ink)]",
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
