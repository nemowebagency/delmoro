import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
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
    title: t("digitalProductsTitle"),
    description: t("digitalProductsDescription"),
    path: "/digital-products",
  });
}

export default async function DigitalProductsPage() {
  const t = await getTranslations("DigitalProducts");

  return (
    <>
      <Hero variant="compact" menuTitleKey="digitalProducts" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-[80px] md:py-[100px]">
          <header className="w-full min-w-0">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("pageLabel")}
        </p>
        <h2 className="mt-6 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
          {t("pageTitle")}
        </h2>
        <RevealText className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("pageIntro")}
        </RevealText>
      </header>

      <article className="mt-12 w-full min-w-0 border border-[color:var(--line)] bg-[color:var(--section-warm)] px-8 py-10 md:px-12 md:py-14">
        <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
          {t("productLabel")}
        </p>
        <h2 className="mt-4 font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
          {t("productTitle")}
        </h2>
        <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("productFormat")}
        </RevealText>
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
          <RevealText className="mt-4 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("notProduct")}
          </RevealText>
          <RevealText className="mt-2 text-[15px] leading-[1.75] text-[color:var(--muted)]" delay={0.06}>
            {t("butAs")}
          </RevealText>
          <p className="mt-4 border-l-2 border-[color:var(--bronze)] pl-5 font-serif text-xl font-normal leading-snug text-[color:var(--ink)] md:text-[22px]">
            {t("readerGuide")}
          </p>
        </div>
      </article>
        </div>
      </div>
    </>
  );
}
