import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Hero } from "@/components/hero";
import { RevealText } from "@/components/reveal-text";
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
    <>
      <Hero variant="compact" menuTitleKey="contact" />
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

      <section className="mt-10 w-full min-w-0 border-t border-[color:var(--line)] pt-8">
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
          <h2 className="font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
            {t("writeTitle")}
          </h2>
          <ContactForm />
        </div>
        <div className="border-t border-[color:var(--line)] pt-8">
          <h2 className="font-serif text-[45px] font-normal leading-[1.08] text-[color:var(--ink)]">
            {t("newsletterTitle")}
          </h2>
          <RevealText className="mt-3 text-[15px] leading-[1.75] text-[color:var(--muted)]">
            {t("newsletterLead")}
          </RevealText>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
