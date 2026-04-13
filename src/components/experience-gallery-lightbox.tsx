"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
export type GalleryItem = { src: string; alt: string };

export function ExperienceGalleryLightbox({
  items,
  labelledBy,
}: {
  items: GalleryItem[];
  labelledBy: string;
}) {
  const t = useTranslations("Experiences");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const go = useCallback(
    (delta: number) => {
      setOpenIndex((i) => {
        if (i === null || items.length === 0) return null;
        const next = (i + delta + items.length) % items.length;
        return next;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, go]);

  if (items.length === 0) return null;

  return (
    <>
      <ul className="mt-8 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-labelledby={labelledBy}>
        {items.map((item, i) => (
          <li key={`${item.src}-${i}`} className="min-w-0">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full cursor-zoom-in overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)] text-left outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[color:var(--gold-label)] focus-visible:ring-offset-2"
              aria-label={t("galleryOpenImage", { n: i + 1, total: items.length })}
            >
              <span className="relative block aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/92 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t("galleryDialogLabel")}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex shrink-0 justify-end pb-2">
            <button
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              aria-label={t("close")}
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-4">
            <div
              className="relative h-[min(72vh,820px)] w-full max-w-5xl px-10 sm:px-14 md:px-16"
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                const start = touchStartX.current;
                touchStartX.current = null;
                if (start == null) return;
                const end = e.changedTouches[0]?.clientX;
                if (end == null) return;
                const dx = end - start;
                if (dx > 56) go(-1);
                else if (dx < -56) go(1);
              }}
            >
              {items.length > 1 ? (
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-0 top-1/2 z-[1] inline-flex cursor-pointer -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2 text-white/95 backdrop-blur-sm transition hover:bg-black/65 sm:p-2.5"
                  aria-label={t("galleryPrevious")}
                >
                  <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </button>
              ) : null}
              <div className="relative h-full w-full">
                <Image
                  src={items[openIndex]!.src}
                  alt={items[openIndex]!.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
              {items.length > 1 ? (
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-0 top-1/2 z-[1] inline-flex cursor-pointer -translate-y-1/2 rounded-full border border-white/20 bg-black/45 p-2 text-white/95 backdrop-blur-sm transition hover:bg-black/65 sm:p-2.5"
                  aria-label={t("galleryNext")}
                >
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </button>
              ) : null}
            </div>

            {items.length > 1 ? (
              <p className="shrink-0 pb-6 text-center text-sm text-white/75">
                {t("galleryCounter", { current: openIndex + 1, total: items.length })}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
