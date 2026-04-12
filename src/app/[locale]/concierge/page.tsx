import { getTranslations } from "next-intl/server";
import { ConciergeForm } from "@/components/forms/concierge-form";
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
    title: t("conciergeTitle"),
    description: t("conciergeDescription"),
    path: "/concierge",
  });
}

export default async function ConciergePage() {
  const t = await getTranslations("Concierge");
  const services = t.raw("services") as string[];

  return (
    <>
      <Hero variant="compact" menuTitleKey="concierge" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-[80px] md:py-[100px]">
          <header className="w-full min-w-0">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("label")}
        </p>
        <h2 className="mt-6 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
          {t("title")}
        </h2>
        <RevealText className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("intro")}
        </RevealText>
      </header>

      <section className="mt-12 grid gap-12 md:grid-cols-2 md:gap-14">
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
            {t("servicesTitle")}
          </h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {services.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
            {t("requestTitle")}
          </h2>
          <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("requestLead")}
          </RevealText>
          <ConciergeForm />
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
