import { getTranslations } from "next-intl/server";
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
    title: t("guidesTitle"),
    description: t("guidesDescription"),
    path: "/guides",
  });
}

export default async function GuidesPage() {
  const t = await getTranslations("Guides");

  return (
    <div className="container py-[80px] md:py-[100px]">
      <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
        {t("label")}
      </p>
      <h1 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted)]">
        {t("p1")}
      </p>
      <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-[color:var(--muted-warm)]">
        {t("p2")}
      </p>
      <ButtonLink href="/journal" className="mt-8">
        {t("cta")}
      </ButtonLink>
    </div>
  );
}
