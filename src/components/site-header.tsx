"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const normalizedPathname = (pathname || "/").replace(/\/+$/, "") || "/";
  const isHome =
    normalizedPathname === "/" ||
    normalizedPathname === "/it" ||
    normalizedPathname === "/en";
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const overlayOnHero = isHome && !isPastHero;

  useLayoutEffect(() => {
    if (!isHome) {
      setIsPastHero(false);
      return;
    }

    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setIsPastHero(true);
        return;
      }
      const threshold = Math.max(0, hero.offsetHeight - 1);
      setIsPastHero(window.scrollY >= threshold);
    };

    const onScrollOrResize = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [isHome, pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const mobileNavLinkClass = (active: boolean) =>
    cn(
      "font-label block w-full border-b border-[color:var(--line)] py-4 text-left text-[16px] font-normal tracking-wide transition-colors",
      "text-[color:var(--muted)] hover:text-[#b3997a]",
      active && "text-[color:var(--ink)]",
    );

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out",
        isHome ? "fixed" : "sticky",
        overlayOnHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-[color:var(--line)] bg-[color:var(--paper)]/95 backdrop-blur",
      )}
    >
      <div className="mx-auto flex min-h-[80px] w-full items-center justify-between gap-3 px-6 py-1.5 md:min-h-[88px] md:w-[70%] md:px-8 lg:px-10">
        <Link
          href="/"
          className={cn(
            "shrink-0",
            overlayOnHero ? "text-white" : "text-[color:var(--ink)]",
          )}
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={overlayOnHero ? "/brand/Bianco2.png" : "/brand/Nero2.png"}
            alt="Del Moro logo"
            width={96}
            height={96}
            className="h-[60px] w-auto object-contain md:h-[68px] lg:h-[76px]"
            priority
            unoptimized
          />
        </Link>
        <div className="flex min-w-0 shrink items-center gap-2 lg:gap-3">
          <nav
            className="hidden min-w-0 flex-nowrap items-center justify-end gap-x-2.5 lg:flex lg:gap-x-3.5"
            aria-label={t("mainNav")}
          >
            {siteConfig.nav.map((item) => {
              const isBook = item.href === "/prenota";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    isBook
                      ? cn(
                          "font-label whitespace-nowrap rounded-full border bg-transparent px-8 py-1.5 text-[15px] font-normal tracking-wide transition-[color,border-color,background-color]",
                          "lg:px-9 lg:py-2 lg:text-[16px]",
                          overlayOnHero
                            ? "border-[#b99e7e]/75 text-white/85 hover:border-[#b99e7e] hover:bg-[#b99e7e] hover:text-white"
                            : "border-[color:var(--ink)]/25 text-[color:var(--muted)] hover:border-[#b3997a] hover:bg-[#b3997a] hover:text-white",
                          pathname === item.href &&
                            (overlayOnHero
                              ? "border-[#b99e7e] text-white"
                              : "border-[color:var(--ink)]/40 text-[color:var(--ink)]"),
                        )
                      : cn(
                          "font-label whitespace-nowrap rounded-sm px-2.5 py-1.5 text-[15px] font-normal tracking-wide transition-[color,text-decoration-color] underline-offset-10 decoration-1 decoration-transparent",
                          "lg:px-3.5 lg:py-1.5 lg:text-[16px]",
                          overlayOnHero
                            ? "text-white/85 hover:text-white hover:underline hover:decoration-[#b99e7e]"
                            : "text-[color:var(--muted)] hover:text-[#b3997a] hover:underline hover:decoration-[#b3997a]",
                          pathname === item.href &&
                            (overlayOnHero
                              ? "text-white underline decoration-[#b99e7e]"
                              : "text-[color:var(--ink)] underline decoration-[color:var(--ink)]"),
                        ),
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <LocaleSwitcher inverted={overlayOnHero} />
          </div>
          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm transition-colors lg:hidden",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              overlayOnHero
                ? "text-white focus-visible:outline-white/60"
                : "text-[color:var(--ink)] focus-visible:outline-[color:var(--gold-label)]",
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            <span className="sr-only">{t("openMenu")}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t("mainNav")}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label={t("closeMenu")}
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[color:var(--paper)] shadow-[-8px_0_40px_rgba(0,0,0,0.12)]"
          >
            <div className="flex min-h-[64px] shrink-0 items-center justify-end border-b border-[color:var(--line)] px-5 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2">
              <button
                ref={closeBtnRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-[color:var(--ink)] transition hover:text-[#b3997a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--gold-label)]"
                onClick={() => setMobileOpen(false)}
                aria-label={t("closeMenu")}
              >
                <X className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col overflow-y-auto px-5 py-6"
              aria-label={t("mainNav")}
            >
              <ul className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={mobileNavLinkClass(active)}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(item.labelKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="shrink-0 border-t border-[color:var(--line)] px-5 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <LocaleSwitcher inverted={false} embedded />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
