"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

export function ConciergeForm() {
  const t = useTranslations("Forms");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
      <input name="name" required placeholder={t("fullName")} className="field" />
      <input
        name="email"
        type="email"
        required
        placeholder={t("email")}
        className="field"
      />
      <input name="travelWindow" placeholder={t("travelWindow")} className="field" />
      <input name="guests" placeholder={t("guests")} className="field" />
      <textarea
        name="notes"
        rows={6}
        placeholder={t("conciergeNotes")}
        className="field md:col-span-2"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="font-label h-12 w-fit rounded-full border border-[color:var(--bronze)] bg-[color:var(--bronze)] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:border-[color:var(--bronze-hover)] hover:bg-[color:var(--bronze-hover)] disabled:opacity-70"
      >
        {t("conciergeSubmit")}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-700 md:col-span-2">{t("conciergeSuccess")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700 md:col-span-2">{t("conciergeError")}</p>
      )}
    </form>
  );
}
