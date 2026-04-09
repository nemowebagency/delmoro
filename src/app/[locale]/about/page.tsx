import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/animated-section";
import { RevealMedia } from "@/components/reveal-media";
import { RevealText } from "@/components/reveal-text";
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

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="text-[15px] leading-[1.75] text-[color:var(--muted)] md:text-lg">
            <h1 className="font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
              {t("title")}
            </h1>
            <RevealText className="mt-5">{t("intro")}</RevealText>
            <div className="mt-6 space-y-6">
              <RevealText delay={0.06}>{t("p1")}</RevealText>
              <RevealText delay={0.12}>{t("p2")}</RevealText>
              <RevealText delay={0.18}>{t("p3")}</RevealText>
            </div>
          </div>

          <RevealMedia className="overflow-hidden rounded-lg border border-[color:var(--line)] bg-[color:var(--section-warm)] md:justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/gabriele/art-thailand-greece-maldives-relaxing.jpg"
              alt="Gabriele"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </RevealMedia>
        </div>
      </AnimatedSection>
    </div>
  );
}
