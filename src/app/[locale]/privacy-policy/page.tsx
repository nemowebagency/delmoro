import { getTranslations } from "next-intl/server";
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
    title: t("privacyPolicyTitle"),
    description: t("privacyPolicyDescription"),
    path: "/privacy-policy",
  });
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <div className="container py-[80px] md:py-[100px]">
      <header className="max-w-3xl">
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
      <div className="mt-10 max-w-3xl">
        <p className="whitespace-pre-line text-[15px] leading-[1.75] text-[color:var(--muted)]">
          {t("body")}
        </p>
      </div>
    </div>
  );
}
