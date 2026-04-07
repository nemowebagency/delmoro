import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { buildMetadata, contactPlaceholders } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return buildMetadata({
    locale,
    title: t("contactTitle"),
    description: t("contactDescription"),
    path: "/contact",
  });
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

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

      <section className="mt-10 max-w-xl border-t border-[color:var(--line)] pt-8">
        <p className="font-label text-[13px] uppercase tracking-[0.35em] text-[color:var(--gold-label)]">
          {t("detailsTitle")}
        </p>
        <dl className="mt-6 space-y-5 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          <div>
            <dt className="font-label text-[12px] uppercase tracking-[0.3em] text-[color:var(--muted-warm)]">
              {t("emailLabel")}
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${contactPlaceholders.email}`}
                className="text-[color:var(--ink)] underline decoration-[color:var(--line)] underline-offset-4 transition hover:decoration-[color:var(--bronze)]"
              >
                {contactPlaceholders.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-label text-[12px] uppercase tracking-[0.3em] text-[color:var(--muted-warm)]">
              {t("phoneLabel")}
            </dt>
            <dd className="mt-1">
              <a
                href={`tel:${contactPlaceholders.phone.replace(/\s/g, "")}`}
                className="text-[color:var(--ink)] underline decoration-[color:var(--line)] underline-offset-4 transition hover:decoration-[color:var(--bronze)]"
              >
                {contactPlaceholders.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-label text-[12px] uppercase tracking-[0.3em] text-[color:var(--muted-warm)]">
              {t("addressLabel")}
            </dt>
            <dd className="mt-1 text-[color:var(--ink)]">
              {contactPlaceholders.street}
              <br />
              {contactPlaceholders.cityLine}, {t("countryLine")}
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12 grid gap-12 md:grid-cols-2 md:gap-14">
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-3xl font-normal text-[color:var(--ink)]">
            {t("writeTitle")}
          </h2>
          <ContactForm />
        </div>
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-3xl font-normal text-[color:var(--ink)]">
            {t("newsletterTitle")}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("newsletterLead")}
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
