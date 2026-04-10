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
      className="mx-auto mt-2 w-full max-w-xl"
    >
      <div className="flex w-full items-stretch rounded-full border border-[color:var(--bronze)] bg-[color:var(--paper)] p-1.5 pl-5 transition-colors focus-within:border-[color:var(--gold-label)]">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("emailPlaceholder")}
          className="min-h-0 min-w-0 flex-1 border-0 bg-transparent py-2.5 pr-2 text-sm text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)] focus:ring-0"
        />
        <button
          type="submit"
          className="font-label shrink-0 cursor-pointer rounded-full border border-[color:var(--bronze)] bg-[color:var(--bronze)] px-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-[#c9b08a] hover:bg-[#c9b08a] disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:text-sm"
          disabled={status === "loading"}
        >
          {t("subscribe")}
        </button>
      </div>
      {status === "success" && (
        <p className="mt-3 text-sm text-[color:var(--gold-label)]">
          {t("subscribeSuccess")}
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-700">{t("subscribeError")}</p>
      )}
    </form>
  );
}
