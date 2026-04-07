import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    path: "/about",
  });
}

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <div className="container py-[80px] md:py-[100px]">
      <AnimatedSection>
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("label")}
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.75] text-[color:var(--muted)] md:text-lg">
          {t("intro")}
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-12 max-w-3xl space-y-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
        <p>{t("p1")}</p>
        <p>
          {t("p2Before")}{" "}
          <span className="font-medium text-[color:var(--ink)]">{t("p2Em")}</span>{" "}
          {t("p2After")}
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-14 bg-[color:var(--section-warm)] px-6 py-12 md:px-12 md:py-16">
        <figure className="mx-auto max-w-2xl border-l-2 border-[color:var(--bronze)] pl-6 md:pl-10">
          <blockquote className="font-serif text-xl font-normal leading-relaxed text-[color:var(--ink)] md:text-[26px]">
            <p className="font-label text-[13px] font-normal uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
              {t("quoteLabel")}
            </p>
            <p className="mt-5">{t("quote1")}</p>
            <p className="mt-5">{t("quote2")}</p>
          </blockquote>
        </figure>
      </AnimatedSection>

      <AnimatedSection className="mt-12 max-w-3xl space-y-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
        <p>{t("p3")}</p>
      </AnimatedSection>

      <AnimatedSection className="mt-16 bg-[color:var(--ink)] px-6 py-12 text-[color:var(--on-dark-muted)] md:px-12 md:py-16">
        <p className="mx-auto max-w-3xl text-center font-serif text-2xl font-normal leading-snug text-white md:text-[32px]">
          {t("darkLine1")}
          <br />
          <span className="text-[color:var(--gold-label)]">{t("darkLine2a")}</span>{" "}
          {t("darkLine2b")}
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-12 max-w-3xl space-y-4 text-[15px] leading-[1.75] text-[color:var(--muted)]">
        <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
          {t("roadmapLabel")}
        </p>
        <p>
          <strong className="text-[color:var(--ink)]">{t("phase1")}</strong>{" "}
          {t("phase1Text")}
        </p>
        <p>
          <strong className="text-[color:var(--ink)]">{t("phase2")}</strong>{" "}
          {t("phase2Text")}
        </p>
        <p>
          <strong className="text-[color:var(--ink)]">{t("phase3")}</strong>{" "}
          {t("phase3Text")}
        </p>
      </AnimatedSection>
    </div>
  );
}
