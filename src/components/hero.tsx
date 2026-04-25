"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const SCROLL_LOTTIE_SRC = encodeURI("/Scroll Down.json");

function heroTitleParts(rawTitle: string): { before: string; last: string } | null {
  const trimmed = rawTitle.trim();
  const body = /[.!?…]$/.test(trimmed) ? trimmed.slice(0, -1).trimEnd() : trimmed;
  const en = /^(.+)\s+(Sicily)$/i.exec(body);
  if (en) {
    return { before: en[1], last: `${en[2]}.` };
  }
  const it = /^(.+)\s+(la Sicilia)$/i.exec(body);
  if (it) {
    return { before: it[1], last: `${it[2]}.` };
  }
  return null;
}

export type HeroVariant = "home" | "compact";

export type HeroProps =
  | { variant?: "home" }
  /** Stessa hero della home: titolo grande come in home, altezza minima ~45svh (può crescere col contenuto). */
  | {
      variant: "compact";
      /** Chiave `Nav` (es. `experiences`). Ignorata se è impostato `titleOverride`. */
      menuTitleKey: string;
      pageSubtitle?: string;
      /** Allinea titolo e sottotitolo alla colonna `page-shell` (70% come il corpo sotto l’hero). */
      usePageShellColumn?: boolean;
      /** Titolo hero personalizzato (es. nome esperienza), stessa scala tipografica della home. */
      titleOverride?: string;
      /** Se presente, sostituisce il video con un'immagine di hero. */
      backgroundImageSrc?: string;
      backgroundImageAlt?: string;
    };

export function Hero(props: HeroProps) {
  const variant = props.variant ?? "home";
  const isCompact = variant === "compact";
  const menuTitleKey = props.variant === "compact" ? props.menuTitleKey : undefined;
  const pageSubtitle = props.variant === "compact" ? props.pageSubtitle : undefined;
  const titleOverride = props.variant === "compact" ? props.titleOverride : undefined;
  const usePageShellColumn = props.variant === "compact" && Boolean(props.usePageShellColumn);
  const backgroundImageSrc =
    props.variant === "compact" ? props.backgroundImageSrc : undefined;
  const backgroundImageAlt =
    props.variant === "compact" ? props.backgroundImageAlt : undefined;

  const t = useTranslations("Hero");
  const tNav = useTranslations("Nav");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollLottie, setScrollLottie] = useState<object | null>(null);
  const rawTitle = t("title").trim();
  const split = heroTitleParts(rawTitle);
  const titleFallback = /[.!?…]$/.test(rawTitle) ? rawTitle : `${rawTitle}.`;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (backgroundImageSrc) return;
    const slow = () => {
      el.playbackRate = 0.88;
    };
    el.addEventListener("loadedmetadata", slow);
    return () => el.removeEventListener("loadedmetadata", slow);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void fetch(SCROLL_LOTTIE_SRC)
      .then((res) => res.json())
      .then((data: object) => {
        if (!cancelled) setScrollLottie(data);
      })
      .catch(() => {
        if (!cancelled) setScrollLottie(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="hero"
      className={[
        "relative overflow-hidden border-b border-[color:var(--line)]",
        isCompact ? "min-h-[45svh]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-0">
        {backgroundImageSrc ? (
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt ?? ""}
            fill
            priority
            className="absolute inset-0 object-cover"
            sizes="100vw"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={t("videoAria")}
          >
            <source src="/media/video%20Del%20Moro.mp4" type="video/mp4" />
          </video>
        )}
        <div
          className="absolute inset-0 bg-linear-to-t from-[#0a1f36]/82 from-0% via-[#132f4d]/38 via-42% to-transparent to-100%"
          aria-hidden
        />
      </div>

      <div
        className={cn(
          "relative flex w-full flex-col justify-end text-left text-white",
          usePageShellColumn ? "px-0" : "px-6",
          isCompact
            ? "min-h-[45svh] gap-4 pb-20 pt-16 sm:pb-24 sm:pt-20 md:gap-5 md:pb-28 md:pt-24"
            : "min-h-[90svh] pb-20 pt-16 sm:pb-24 sm:pt-20 md:pb-28 md:pt-24",
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col items-start text-left text-white",
            "gap-4 md:gap-5",
            usePageShellColumn
              ? "page-shell"
              : "mx-auto w-full md:w-[70%] md:px-8 lg:px-10",
          )}
        >
          <h1 className="w-full font-serif text-[60px] font-normal leading-[1.04] tracking-normal text-balance sm:text-[76px] md:text-[100px] md:leading-[1.01] lg:text-[118px]">
            {isCompact && titleOverride ? (
              titleOverride
            ) : isCompact && menuTitleKey ? (
              tNav(menuTitleKey)
            ) : split ? (
              <>
                {split.before}
                <br />
                {split.last}
              </>
            ) : (
              titleFallback
            )}
          </h1>

          {(!isCompact || (pageSubtitle != null && pageSubtitle !== "")) && (
            <p
              className={[
                "w-full max-w-[44rem] text-balance text-white/85",
                isCompact
                  ? "line-clamp-3 text-[15px] leading-[1.75] md:text-[16px]"
                  : "text-[15px] leading-[1.75] md:text-[16px]",
              ].join(" ")}
            >
              {isCompact ? pageSubtitle : t("subtitle")}
            </p>
          )}
        </div>
      </div>

      <div
        className={[
          "pointer-events-none absolute left-1/2 z-10 -translate-x-1/2",
          "bottom-5 md:bottom-8",
        ].join(" ")}
      >
        <Link
          href={isCompact ? "#page-content" : "#discover-sicily"}
          aria-label={t("scrollHint")}
          className="pointer-events-auto block opacity-90 transition-opacity hover:opacity-100"
        >
          {scrollLottie ? (
            <Lottie
              animationData={scrollLottie}
              loop
              className="mx-auto h-9 w-9 md:h-11 md:w-11"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          ) : (
            <div className="mx-auto h-9 w-9 md:h-11 md:w-11" aria-hidden />
          )}
        </Link>
      </div>
    </section>
  );
}
