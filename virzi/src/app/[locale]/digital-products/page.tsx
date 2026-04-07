import { getTranslations } from "next-intl/server";
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
    title: t("digitalProductsTitle"),
    description: t("digitalProductsDescription"),
    path: "/digital-products",
  });
}

export default async function DigitalProductsPage() {
  const t = await getTranslations("DigitalProducts");

  return (
    <div className="container py-[80px] md:py-[100px]">
      <header className="max-w-3xl">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("pageLabel")}
        </p>
        <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
          {t("pageTitle")}
        </h1>
        <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("pageIntro")}
        </p>
      </header>

      <article className="mt-12 max-w-2xl border border-[color:var(--line)] bg-[color:var(--section-warm)] px-8 py-10 md:px-12 md:py-14">
        <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
          {t("productLabel")}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-normal text-[color:var(--ink)] md:text-[36px]">
          {t("productTitle")}
        </h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("productFormat")}
        </p>
        <div className="mt-8 border-t border-[color:var(--line)] pt-8">
          <p className="font-label text-[12px] uppercase tracking-[0.3em] text-[color:var(--muted-warm)]">
            {t("priceLabel")}
          </p>
          <p className="mt-2 font-serif text-2xl font-normal text-[color:var(--ink)]">
            {t("priceRange")}
          </p>
        </div>
        <div className="mt-8 border-t border-[color:var(--line)] pt-8">
          <p className="font-label text-[12px] uppercase tracking-[0.3em] text-[color:var(--muted-warm)]">
            {t("presentationLabel")}
          </p>
          <p className="mt-4 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("notProduct")}
          </p>
          <p className="mt-2 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("butAs")}
          </p>
          <p className="mt-4 border-l-2 border-[color:var(--bronze)] pl-5 font-serif text-xl font-normal leading-snug text-[color:var(--ink)] md:text-[22px]">
            {t("readerGuide")}
          </p>
        </div>
      </article>
    </div>
  );
}
