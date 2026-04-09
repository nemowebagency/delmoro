import { getTranslations } from "next-intl/server";
import { ExperienceTourCards, type ExperienceTour } from "@/components/experience-tour-cards";
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
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return buildMetadata({
    locale,
    title: t("experiencesTitle"),
    description: t("experiencesDescription"),
    path: "/esperienze",
  });
}

export default async function ExperiencesPage() {
  const t = await getTranslations("Experiences");
  const tours = t.raw("tours") as ExperienceTour[];

  return (
    <div className="container py-[80px] md:py-[100px]">
      <header className="max-w-4xl">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("label")}
        </p>
        <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
          {t("title")}
        </h1>
        <RevealText className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("intro")}
        </RevealText>
      </header>

      <section className="mt-12">
        <ExperienceTourCards
          tours={tours}
          durationLabel={t("duration")}
          areaLabel={t("area")}
          priceFromLabel={t("priceFrom")}
          galleryLabel={t("galleryLabel")}
          closeLabel={t("close")}
        />
      </section>

      <section className="mt-14 border-t border-[color:var(--line)] pt-10">
        <h2 className="font-serif text-3xl font-normal text-[color:var(--ink)]">
          {t("otherServicesTitle")}
        </h2>
        <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:gap-12">
          <div className="text-[15px] leading-[1.75] text-[color:var(--muted)]">
            <RevealText>{t("otherServicesLead")}</RevealText>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {(t.raw("otherServices") as string[]).map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
            <ButtonLink href="/prenota" className="mt-10">
              {t("cta")}
            </ButtonLink>
          </div>
          <RevealMedia className="overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--section-warm)] md:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/motors/bearded-man-scooter-with-womanfriend-outdoors.jpg"
              alt="Noleggio mezzi e mobilità"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </RevealMedia>
        </div>
      </section>
    </div>
  );
}

