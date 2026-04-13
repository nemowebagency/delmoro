"use client";

import { useCallback, useMemo, useState } from "react";

type Props = {
  url: string;
  title: string;
};

function enc(v: string) {
  return encodeURIComponent(v);
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12.04 2C6.53 2 2.05 6.48 2.05 11.99c0 1.95.56 3.83 1.62 5.44L2 22l4.7-1.54a9.9 9.9 0 0 0 5.34 1.55h.01c5.51 0 10-4.48 10-9.99C22.05 6.48 17.56 2 12.04 2Zm0 18.19h-.01a8.2 8.2 0 0 1-4.2-1.16l-.3-.18-2.79.91.91-2.72-.19-.31a8.19 8.19 0 1 1 6.58 3.46Zm4.78-6.54c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.05-1.28-.76-.68-1.27-1.52-1.42-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.58-1.39-.8-1.9-.21-.51-.42-.44-.58-.45h-.49c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.17 1.85 2.83 4.48 3.96.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3Z"
      />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.4-3H13.5V9.2c0-.9.3-1.6 1.7-1.6h1.4V5c-.2 0-1.3-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4V11H7v3h2.7v8h3.8Z"
      />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M18.9 2H21l-6.7 7.7L22 22h-6.2l-4.8-6.2L5.6 22H3.5l7.2-8.3L2 2h6.3l4.3 5.6L18.9 2Zm-.7 18.3h1.2L7.7 3.6H6.4l11.8 16.7Z"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6A5.2 5.2 0 0 1 16.8 22H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm9.6 2H7.2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-2.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
      />
    </svg>
  );
}

export function ArticleShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const shareText = useMemo(() => `${title}\n${url}`, [title, url]);

  const links = useMemo(
    () => [
      {
        id: "whatsapp",
        label: "WhatsApp",
        href: `https://wa.me/?text=${enc(shareText)}`,
      },
      {
        id: "facebook",
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
      },
      {
        id: "x",
        label: "X",
        href: `https://x.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
      },
    ],
    [shareText, title, url],
  );

  const onInstagram = useCallback(async () => {
    setCopied(false);

    try {
      if (typeof navigator !== "undefined" && "share" in navigator) {
        await navigator.share({ title, text: title, url });
        return;
      }
    } catch {
      // Ignore and fall back to copy.
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    } catch {
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    }
  }, [title, url]);

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.id}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#bda589] bg-transparent px-6 text-[14px] font-normal normal-case tracking-wide text-[color:var(--muted)] transition-[color,border-color,background-color] hover:border-[#bda589] hover:bg-[#bda589] hover:text-white"
        >
          {l.id === "whatsapp" ? <IconWhatsApp className="h-4 w-4" /> : null}
          {l.id === "facebook" ? <IconFacebook className="h-4 w-4" /> : null}
          {l.id === "x" ? <IconX className="h-4 w-4" /> : null}
          {l.label}
        </a>
      ))}

      <button
        type="button"
        onClick={onInstagram}
        className="font-label inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#bda589] bg-[#bda589] px-6 text-[14px] font-normal normal-case tracking-wide text-white transition-[color,border-color,background-color] hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white"
      >
        <IconInstagram className="h-4 w-4" />
        Instagram
      </button>

      {copied ? (
        <p className="w-full text-sm text-[color:var(--gold-label)]">
          Link copiato.
        </p>
      ) : null}
    </div>
  );
}

