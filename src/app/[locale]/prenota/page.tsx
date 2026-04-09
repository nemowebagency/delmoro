import { getTranslations } from "next-intl/server";
import { ConciergeForm } from "@/components/forms/concierge-form";
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
    title: t("bookingTitle"),
    description: t("bookingDescription"),
    path: "/prenota",
  });
}

export default async function BookingPage() {
  const t = await getTranslations("Booking");
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
        <RevealText className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("intro")}
        </RevealText>
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
          <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("requestLead")}
          </RevealText>
          <ConciergeForm />
        </div>
      </section>
    </div>
  );
}

