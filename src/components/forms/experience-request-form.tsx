"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type ExperienceRequestFormProps = {
  /** Translation key under `Forms.*` used for the textarea placeholder. */
  notesPlaceholderKey?: "experienceLookingFor" | "accommodationLookingFor";
  /** Field name for textarea in submitted payload. */
  notesFieldName?: string;
};

export function ExperienceRequestForm({
  notesPlaceholderKey = "experienceLookingFor",
  notesFieldName = "experienceType",
}: ExperienceRequestFormProps) {
  const t = useTranslations("Forms");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [desiredDatesType, setDesiredDatesType] = useState<"text" | "date">("text");

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
      <input
        name="from"
        placeholder={t("visitingFrom")}
        className="field md:col-span-2"
      />
      <input
        name="desiredDates"
        type={desiredDatesType}
        placeholder={t("desiredDates")}
        className="field"
        onFocus={() => setDesiredDatesType("date")}
        onBlur={(e) => {
          if (!e.currentTarget.value) setDesiredDatesType("text");
        }}
      />
      <input name="guests" placeholder={t("guests")} className="field" />
      <textarea
        name={notesFieldName}
        rows={6}
        placeholder={t(notesPlaceholderKey)}
        className="field md:col-span-2"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="font-label h-12 w-fit rounded-full border border-[#bda589] bg-transparent px-6 text-sm font-medium tracking-[0.08em] text-[color:var(--muted)] transition-[color,border-color,background-color] hover:border-[#bda589] hover:bg-[#bda589] hover:text-white disabled:opacity-70"
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

