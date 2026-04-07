"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export function NewsletterForm() {
  const t = useTranslations("Forms");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-2 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={t("emailPlaceholder")}
        className="field h-12 flex-1 rounded-sm"
      />
      <button
        type="submit"
        className="font-label h-12 shrink-0 rounded-sm border border-[color:var(--bronze)] bg-[color:var(--bronze)] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--bronze-hover)] hover:bg-[color:var(--bronze-hover)] disabled:opacity-70"
        disabled={status === "loading"}
      >
        {t("subscribe")}
      </button>
      {status === "success" && (
        <p className="text-sm text-[color:var(--gold-label)] sm:basis-full">
          {t("subscribeSuccess")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700 sm:basis-full">{t("subscribeError")}</p>
      )}
    </form>
  );
}
