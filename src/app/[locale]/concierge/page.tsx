import { getTranslations } from "next-intl/server";
import { ConciergeForm } from "@/components/forms/concierge-form";
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
    <div className="container py-[80px] md:py-[100px]">
      <header className="max-w-4xl">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("label")}
        </p>
        <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.25] text-[color:var(--ink)] md:text-[45px]">
          {t("title")}
        </h1>
        <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("intro")}
        </p>
      </header>

      <section className="mt-12 grid gap-12 md:grid-cols-2 md:gap-14">
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-3xl font-normal text-[color:var(--ink)]">
            {t("servicesTitle")}
          </h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {services.map((service) => (
              <li key={service}>• {service}</li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-3xl font-normal text-[color:var(--ink)]">
            {t("requestTitle")}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("requestLead")}
          </p>
          <ConciergeForm />
        </div>
      </section>
    </div>
  );
}
