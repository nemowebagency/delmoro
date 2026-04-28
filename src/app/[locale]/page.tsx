import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceTilesGrid } from "@/components/experience-tiles-grid";
import { Link } from "@/i18n/navigation";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Hero } from "@/components/hero";
import { RevealMedia } from "@/components/reveal-media";
import { RevealText } from "@/components/reveal-text";
import { ButtonLink } from "@/components/ui/button-link";
import { buildMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });
  return buildMetadata({
    locale,
    title: tHero("title"),
    description: tMeta("homeDescription"),
    path: "/",
  });
}

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <Hero />

      <AnimatedSection
        id="discover-sicily"
        className="w-full scroll-mt-28 py-[84px] md:scroll-mt-32 md:py-[104px]"
      >
        <div className="page-shell flex w-full flex-col">
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="min-w-0 space-y-5 text-[15px] leading-[1.75] text-[color:var(--muted)]">
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("discoverOverline")}
              </p>
              <h2 className="w-full font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
                {t("manifestoLabel")}
              </h2>
              <RevealText className="text-justify">{t("manifesto1")}</RevealText>
              <blockquote className="relative mt-1 border-l-2 border-[#b99e7e] pl-5 md:mt-2 md:pl-7">
                <p className="font-serif text-[18px] font-normal italic leading-[1.55] text-[color:var(--ink)] md:text-[22px] md:leading-[1.5]">
                  <span
                    className="mr-0.5 font-serif text-[2.25rem] font-normal not-italic leading-none text-[#b99e7e] md:text-[2.75rem]"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  {t("manifestoQuote")}
                  <span
                    className="ml-0.5 font-serif text-[2.25rem] font-normal not-italic leading-none text-[#b99e7e] md:text-[2.75rem]"
                    aria-hidden
                  >
                    &rdquo;
                  </span>
                </p>
              </blockquote>
            </div>
            <div className="relative min-w-0">
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 aspect-[4/3] w-full translate-x-4 translate-y-4 border border-[#bba488] md:translate-x-7 md:translate-y-7"
              />
              <RevealMedia
                className="relative overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)]"
                delay={0.05}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/who-s-denilo-ZXSDMEGipNY-unsplash.jpg"
                  alt={t("discoverImageAlt")}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </RevealMedia>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-[color:var(--line)] bg-white py-[84px] md:py-[104px]">
        <div className="page-shell flex w-full flex-col">
          <div className="min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("journalLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="min-w-0 flex-1 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                {t("journalTitle")}
              </h2>
              <ButtonLink
                href="/journal"
                variant="navBook"
                className="w-fit shrink-0 sm:mt-1"
              >
                {t("journalCta")}
              </ButtonLink>
            </div>
            <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("journalLead")}
            </RevealText>
          </div>
        </div>

        <div className="mt-14 w-full px-[60px] lg:mt-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {(
              [
                {
                  key: "hiddenPlaces",
                  src: "/media/serena-torrisi-dmGWJXtRXJQ-unsplash.jpg",
                },
                {
                  key: "cultureLegends",
                  src: "/media/sarah-penney-3pALd7mqItc-unsplash.jpg",
                },
                {
                  key: "letters",
                  src: "/media/josh-withers-FrChCKygfqA-unsplash.jpg",
                },
                {
                  key: "lifestyle",
                  src: "/media/giordano-rossoni-hP6fQ5ivf0I-unsplash.jpg",
                },
              ] as const
            ).map((tile) => (
              <figure key={tile.key} className="min-w-0">
                <Link
                  href="/journal"
                  className="group/tile block outline-none transition-opacity hover:opacity-95 focus-visible:opacity-95 focus-visible:ring-2 focus-visible:ring-[color:var(--gold-label)] focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-3/4 overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)] transition-transform duration-300 ease-out motion-safe:group-hover/tile:-translate-y-4">
                    <Image
                      src={tile.src}
                      alt={t(`journalTile.${tile.key}`)}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 120px), (max-width: 1024px) calc((100vw - 120px) / 2), calc((100vw - 120px) / 4)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-serif text-[40px] font-normal leading-[1.08] text-[color:var(--ink)] transition-colors group-hover/tile:text-[color:var(--gold-label)] md:text-[42px]">
                    {t(`journalTile.${tile.key}`)}
                  </figcaption>
                </Link>
              </figure>
            ))}
          </div>
        </div>

      </AnimatedSection>

      <AnimatedSection className="w-full bg-[#f1ece3] py-[84px] md:py-[104px]">
        <div className="page-shell flex w-full flex-col">
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
                {t("aboutLabel")}
              </p>
              <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                {t("aboutTitle")}
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <RevealText className="whitespace-pre-line text-[15px] leading-[1.75] text-[color:var(--muted)]">
                {t("aboutBody")}
              </RevealText>
              <ButtonLink
                href="/about"
                variant="navBook"
                className="mt-8 w-fit cursor-pointer"
              >
                {t("discoverMore")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="home-experiences"
        className="w-full scroll-mt-28 border-y border-[color:var(--line)] py-[84px] md:scroll-mt-32 md:py-[104px]"
      >
        <div className="page-shell flex w-full flex-col">
          <div className="min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("experiencesLabel")}
            </p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <h2 className="min-w-0 flex-1 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
                {t("experiencesTitle")}
              </h2>
              <ButtonLink
                href="/esperienze"
                variant="navBook"
                className="w-fit shrink-0 sm:mt-1"
              >
                {t("experiencesCta")}
              </ButtonLink>
            </div>
            <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("experiencesLead")}
            </RevealText>
          </div>
        </div>

        <ExperienceTilesGrid layout="home" />
      </AnimatedSection>

      <AnimatedSection className="border-t border-[color:var(--line)] bg-[color:var(--section-warm)] py-[84px] md:py-[104px]">
        <div className="page-shell text-center">
          <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
            {t("letterLabel")}
          </p>
          <h3 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
            {t("letterTitle")}
          </h3>
          <RevealText className="mx-auto mt-4 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("letterBody")}
          </RevealText>
          <div className="mx-auto mt-8 w-full max-w-none">
            <NewsletterForm />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
