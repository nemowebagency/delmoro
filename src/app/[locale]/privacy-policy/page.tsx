import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
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
    title: t("privacyPolicyTitle"),
    description: t("privacyPolicyDescription"),
    path: "/privacy-policy",
  });
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <>
      <Hero variant="compact" menuTitleKey="privacyPolicy" />
      <div id="page-content" className="scroll-mt-24 md:scroll-mt-28">
        <div className="page-shell py-[80px] md:py-[100px]">
          <header className="w-full min-w-0">
        <p className="font-label text-[15px] font-normal uppercase tracking-[0.38em] text-[color:var(--gold-label)]">
          {t("label")}
        </p>
        <h2 className="mt-6 font-serif text-[45px] font-normal leading-[1.08] tracking-normal text-balance text-[color:var(--ink)]">
          {t("title")}
        </h2>
        <p className="mt-6 text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("intro")}
        </p>
      </header>
          <div className="mt-10 w-full min-w-0">
            <p className="whitespace-pre-line text-[15px] leading-[1.75] text-[color:var(--muted)]">
              {t("body")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
