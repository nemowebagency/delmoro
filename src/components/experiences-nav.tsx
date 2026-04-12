"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { HOME_EXPERIENCE_TILES } from "@/lib/experience-tiles";
import { cn } from "@/lib/utils";

function experiencesPathActive(pathname: string | null) {
  const p = pathname || "";
  return p === "/esperienze" || p.startsWith("/esperienze/");
}

export function ExperiencesNavDesktop({ overlayOnHero }: { overlayOnHero: boolean }) {
  const t = useTranslations("Nav");
  const tHome = useTranslations("Home");
  const pathname = usePathname();
  const active = experiencesPathActive(pathname);

  const triggerClass = cn(
    "font-label inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1.5 text-[15px] font-normal tracking-wide transition-[color,text-decoration-color] underline-offset-10 decoration-1 decoration-transparent lg:px-3.5 lg:py-1.5 lg:text-[16px]",
    overlayOnHero
      ? "text-white/85 hover:text-white hover:underline hover:decoration-[#b99e7e]"
      : "text-[color:var(--muted)] hover:text-[#b3997a] hover:underline hover:decoration-[#b3997a]",
    active &&
      (overlayOnHero
        ? "text-white underline decoration-[#b99e7e]"
        : "text-[color:var(--ink)] underline decoration-[color:var(--ink)]"),
  );

  return (
    <div className="group/experiences relative inline-flex">
      <Link href="/esperienze" className={triggerClass}>
        {t("experiences")}
      </Link>
      <div
        className="pointer-events-none invisible absolute left-1/2 top-full z-[60] min-w-[min(100vw-2rem,17rem)] -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] duration-150 ease-out group-hover/experiences:pointer-events-auto group-hover/experiences:visible group-hover/experiences:opacity-100 group-focus-within/experiences:pointer-events-auto group-focus-within/experiences:visible group-focus-within/experiences:opacity-100"
        role="presentation"
      >
        <ul
          className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] py-2 shadow-xl"
          role="menu"
          aria-label={t("experiencesSubmenu")}
        >
          {HOME_EXPERIENCE_TILES.map((tile) => (
            <li key={tile.slug} role="none">
              <Link
                role="menuitem"
                href={`/esperienze/${tile.slug}`}
                className="font-label block px-4 py-2.5 text-left text-[13px] font-normal tracking-wide text-[color:var(--muted)] transition-colors hover:bg-[color:var(--section-warm)] hover:text-[color:var(--ink)]"
              >
                {tHome(tile.titleKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperiencesMobileBlock({
  active,
  onNavigate,
  linkClassName,
}: {
  active: boolean;
  onNavigate: () => void;
  linkClassName: (activeLink: boolean) => string;
}) {
  const t = useTranslations("Nav");
  const tHome = useTranslations("Home");

  return (
    <li>
      <Link
        href="/esperienze"
        className={linkClassName(active)}
        onClick={onNavigate}
      >
        {t("experiences")}
      </Link>
      <ul className="mt-2 space-y-1 border-l-2 border-[color:var(--line)] pl-3">
        {HOME_EXPERIENCE_TILES.map((tile) => (
          <li key={tile.slug}>
            <Link
              href={`/esperienze/${tile.slug}`}
              className={linkClassName(false)}
              onClick={onNavigate}
            >
              {tHome(tile.titleKey)}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
