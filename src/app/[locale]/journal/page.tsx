import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
import { ButtonLink } from "@/components/ui/button-link";
import { buildMetadata } from "@/lib/site";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return buildMetadata({
    locale,
    title: t("journalTitle"),
    description: t("journalDescription"),
    path: "/journal",
  });
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: "en" | "it" }>;
}) {
  const t = await getTranslations("Journal");
  const tHome = await getTranslations("Home");
  void (await params);

  return (
    <>
      <Hero variant="compact" menuTitleKey="journal" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-[80px] md:py-[100px]">
          <header className="w-full min-w-0">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("label")}
            </p>
            <h2 className="mt-6 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
              {t("title")}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("intro")}
            </p>
          </header>
        </div>

        <div className="mt-2 w-full px-6 pb-[80px] md:mt-4 md:px-[60px] md:pb-[100px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {(
              [
                {
                  key: "hiddenPlaces",
                  src: "/media/serena-torrisi-dmGWJXtRXJQ-unsplash.jpg",
                  href: "/journal/category/places",
                },
                {
                  key: "cultureLegends",
                  src: "/media/sarah-penney-3pALd7mqItc-unsplash.jpg",
                  href: "/journal/category/culture-history",
                },
                {
                  key: "letters",
                  src: "/media/josh-withers-FrChCKygfqA-unsplash.jpg",
                  href: "/journal/category/letters",
                },
                {
                  key: "lifestyle",
                  src: "/media/giordano-rossoni-hP6fQ5ivf0I-unsplash.jpg",
                  href: "/journal/category/lifestyle",
                },
              ] as const
            ).map((tile) => (
              <figure key={tile.key} className="min-w-0">
                <Link
                  href={tile.href}
                  className="group/tile block outline-none transition-opacity hover:opacity-95 focus-visible:opacity-95 focus-visible:ring-2 focus-visible:ring-[color:var(--gold-label)] focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-3/4 overflow-hidden border border-[color:var(--line)] bg-[color:var(--section-warm)] transition-transform duration-300 ease-out motion-safe:group-hover/tile:-translate-y-4">
                    <Image
                      src={tile.src}
                      alt={tHome(`journalTile.${tile.key}`)}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) calc((100vw - 120px) / 2), calc((100vw - 120px) / 4)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-serif text-[40px] font-normal leading-[1.08] text-[color:var(--ink)] transition-colors group-hover/tile:text-[color:var(--gold-label)] md:text-[42px]">
                    {tHome(`journalTile.${tile.key}`)}
                  </figcaption>
                </Link>
              </figure>
            ))}
          </div>
        </div>

      <section className="border-t border-[color:var(--line)] py-[72px] md:py-[96px]">
        <div className="page-shell">
          <div className="mx-auto w-full max-w-none text-center">
            <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
              {t("guideCtaKicker")}
            </p>
            <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
              {t("guideCtaTitle")}
            </h2>
            <p className="mx-auto mt-4 w-full text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("guideCtaLead")}
            </p>
            <ButtonLink href="/contact" className="mt-8">
              {t("guideCtaButton")}
            </ButtonLink>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
