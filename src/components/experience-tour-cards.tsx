"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";

export type ExperienceTour = {
  title: string;
  lead: string;
  duration: string;
  area: string;
  priceFrom: string;
  details: string[];
  highlights: string[];
  gallery?: Array<{ src: string; alt: string }>;
};

export function ExperienceTourCards({
  tours,
  durationLabel,
  areaLabel,
  priceFromLabel,
  galleryLabel,
  closeLabel,
}: {
  tours: ExperienceTour[];
  durationLabel: string;
  areaLabel: string;
  priceFromLabel: string;
  galleryLabel: string;
  closeLabel: string;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const localGallery = useMemo(
    () => [
      {
        src: "/media/img/rocky-shore-near-water-sunny-day.jpg",
        alt: "Rocky shore near water",
      },
      {
        src: "/media/img/vertical-shot-boat-with-beautiful-landscape.jpg",
        alt: "Boat and landscape",
      },
      {
        src: "/media/img/wall-opening-with-view-cityscape-by-sea.jpg",
        alt: "Cityscape by the sea",
      },
    ],
    [],
  );

  const lightboxImage = lightboxIndex == null ? null : localGallery[lightboxIndex] ?? null;

  const items = useMemo(
    () =>
      tours.map((t, i) => ({
        ...t,
        buttonId: `${baseId}-tour-btn-${i}`,
      })),
    [baseId, tours],
  );

  useEffect(() => {
    if (openIndex == null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex != null) setLightboxIndex(null);
        else setOpenIndex(null);
        return;
      }
      if (lightboxIndex == null) return;
      if (e.key === "ArrowLeft") {
        setLightboxIndex((cur) =>
          cur == null ? 0 : (cur - 1 + localGallery.length) % localGallery.length,
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((cur) =>
          cur == null ? 0 : (cur + 1) % localGallery.length,
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, lightboxIndex, localGallery.length]);

  return (
    <>
      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((tour, i) => {
          const open = openIndex === i;
          return (
            <article
              key={tour.title}
              className={[
                "relative flex h-60 flex-col overflow-hidden rounded-lg border border-[color:var(--brand)] bg-[color:var(--brand)]",
                "shadow-sm transition hover:shadow-md hover:shadow-[0_10px_30px_rgba(34,34,34,0.18)]",
              ].join(" ")}
            >
              <button
                id={tour.buttonId}
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(i)}
                className={[
                  "w-full text-left",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--paper)]",
                ].join(" ")}
              >
                <div className="bg-white px-3 pb-3 pt-3 text-[color:var(--ink)]">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="min-w-0 truncate font-serif text-[18px] font-semibold leading-snug">
                      {tour.title}
                    </h2>
                    <span
                      className={[
                        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        "border border-[color:var(--brand)] text-[color:var(--brand)]",
                        "transition",
                        open ? "bg-[color:var(--section-warm)]" : "bg-transparent",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          open ? "rotate-180 transition-transform" : "transition-transform"
                        }
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-3 h-px w-full bg-[color:var(--brand)]/35" />
                </div>

                <div className="flex-1 px-3 pb-3 pt-2 text-white">
                  <p className="text-[13px] leading-[1.45] text-white/90">
                    {tour.lead}
                  </p>
                  <dl className="mt-3 grid gap-1.5 text-sm text-white/85">
                    <div className="flex items-baseline justify-between gap-6">
                      <dt className="font-label text-[11px] uppercase tracking-[0.28em] text-white/70">
                        {durationLabel}
                      </dt>
                      <dd className="text-right text-white/95">{tour.duration}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-6">
                      <dt className="font-label text-[11px] uppercase tracking-[0.28em] text-white/70">
                        {areaLabel}
                      </dt>
                      <dd className="text-right text-white/95">{tour.area}</dd>
                    </div>
                  </dl>
                </div>
              </button>
            </article>
          );
        })}
      </div>

      {openIndex != null && items[openIndex] ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[openIndex].title}
          className="fixed inset-0 z-[60]"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpenIndex(null)}
            aria-label={closeLabel}
          />

          <div className="absolute inset-x-0 bottom-0 top-10 mx-auto w-full max-w-3xl px-4 pb-6 md:top-16">
            <div className="h-full overflow-hidden rounded-xl border border-white/15 bg-[color:var(--brand)] shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-white/20 p-4">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold leading-snug text-white md:text-2xl">
                    {items[openIndex].title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.55] text-white/85">
                    {items[openIndex].area} · {items[openIndex].duration}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={closeLabel}
                  title={closeLabel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative h-[calc(100%-72px)] overflow-auto px-5 py-6 md:px-6">
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
                  <div>
                    <div className="space-y-4 text-[15px] leading-[1.75] text-white/90">
                      {items[openIndex].details.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.7] text-white/95">
                      {items[openIndex].highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <p className="font-label text-[13px] uppercase tracking-[0.32em] text-white/85">
                        {galleryLabel}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {localGallery.map((img, idx) => (
                          <button
                            key={img.src}
                            type="button"
                            onClick={() => setLightboxIndex(idx)}
                            className="group relative overflow-hidden rounded-lg border border-white/20"
                            aria-label={img.alt}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={img.src}
                              alt={img.alt}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <aside className="md:sticky md:top-4">
                    <div className="flex flex-col gap-4 rounded-xl border border-white/25 bg-white/10 p-4">
                      <div>
                        <p className="font-label text-[11px] uppercase tracking-[0.32em] text-white/80">
                          {priceFromLabel}
                        </p>
                        <p className="mt-2 text-3xl font-semibold leading-none text-white">
                          {items[openIndex].priceFrom}
                        </p>
                      </div>
                      <Link
                        href="/prenota"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-[color:var(--ink)] shadow-md transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Prenota
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          {lightboxImage ? (
            <div className="fixed inset-0 z-[70]">
              <button
                type="button"
                className="absolute inset-0 bg-black/80"
                onClick={() => setLightboxIndex(null)}
                aria-label={closeLabel}
              />

              <div className="absolute right-4 top-4 z-10">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={closeLabel}
                  title={closeLabel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((cur) =>
                    cur == null
                      ? 0
                      : (cur - 1 + localGallery.length) % localGallery.length,
                  )
                }
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/20 p-3 text-white transition hover:bg-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Previous image"
                title="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((cur) =>
                    cur == null ? 0 : (cur + 1) % localGallery.length,
                  )
                }
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/20 p-3 text-white transition hover:bg-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Next image"
                title="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              <div className="absolute inset-0 grid place-items-center px-6 py-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="h-auto max-h-[80vh] w-auto max-w-[min(100%,980px)] rounded-lg object-contain shadow-2xl"
                />
                <p className="mt-4 text-center text-xs text-white/70">
                  {(lightboxIndex ?? 0) + 1} / {localGallery.length}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

