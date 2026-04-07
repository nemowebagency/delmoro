"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  const t = useTranslations("Hero");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const slow = () => {
      el.playbackRate = 0.88;
    };
    el.addEventListener("loadedmetadata", slow);
    return () => el.removeEventListener("loadedmetadata", slow);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--line)]">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1800&q=80"
          aria-label={t("videoAria")}
        >
          <source src="/media/hero-cinematic.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Griglia a una cella = centro geometrico reale del viewport */}
      <div className="relative grid min-h-[78svh] w-full place-items-center px-5 py-16 sm:py-20 md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-[36rem] flex-col items-center justify-center gap-4 text-center text-white md:max-w-[42rem] md:gap-5">
          {/* SVG locale: <img> per allineamento prevedibile (next/Image aggiunge wrapper) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-b99e7e.svg"
            alt={t("logoAlt")}
            width={440}
            height={440}
            decoding="async"
            fetchPriority="high"
            className="mx-auto block h-56 w-56 max-w-full shrink-0 object-contain md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[22rem] xl:w-[22rem]"
          />

          <h1
            className="w-full max-w-[34rem] font-serif text-2xl font-normal leading-snug tracking-normal text-balance md:text-[28px] md:leading-snug"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,.85), 0 4px 20px rgba(0,0,0,.45)" }}
          >
            {t("title")}
          </h1>

          <p className="w-full max-w-md text-balance text-[15px] leading-[1.75] text-white/85">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/journal">{t("ctaJournal")}</ButtonLink>
            <ButtonLink
              href="/about"
              variant="ghost"
              className="!border-white/50 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
            >
              {t("ctaStory")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
