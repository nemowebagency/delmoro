"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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

export function Hero() {
  const t = useTranslations("Hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollLottie, setScrollLottie] = useState<object | null>(null);
  const rawTitle = t("title").trim();
  const split = heroTitleParts(rawTitle);
  const titleFallback = /[.!?…]$/.test(rawTitle) ? rawTitle : `${rawTitle}.`;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
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
      className="relative overflow-hidden border-b border-[color:var(--line)]"
    >
      <div className="absolute inset-0">
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
          <source src="/media/Full-hd.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-linear-to-t from-[#0a1f36]/82 from-0% via-[#132f4d]/38 via-42% to-transparent to-100%"
          aria-hidden
        />
      </div>

      <div className="relative flex min-h-[90svh] w-full flex-col justify-end px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 md:pb-28 md:pt-24">
        <div className="mx-auto flex w-full flex-col items-start gap-4 text-left text-white md:w-[70%] md:gap-5 md:px-8 lg:px-10">
          <h1 className="w-full font-serif text-[60px] font-normal leading-[1.04] tracking-normal text-balance sm:text-[76px] md:text-[100px] md:leading-[1.01] lg:text-[118px]">
            {split ? (
              <>
                {split.before}
                <br />
                {split.last}
              </>
            ) : (
              titleFallback
            )}
          </h1>

          <p className="w-full max-w-[44rem] text-balance text-[15px] leading-[1.75] text-white/85 md:text-[16px]">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 md:bottom-8">
        <Link
          href="#discover-sicily"
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
