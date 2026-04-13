import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light" | "navBook" | "outlineBeige" | "beigeFill";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-label inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300",
        variant === "primary" &&
          "border-[color:var(--bronze)] bg-[color:var(--bronze)] text-white hover:border-[color:var(--bronze-hover)] hover:bg-[color:var(--bronze-hover)]",
        variant === "ghost" &&
          "border-[color:var(--gold-label)] bg-transparent text-[color:var(--gold-label)] hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white",
        variant === "light" &&
          "border-transparent bg-[color:var(--cream)] text-[color:var(--ink)] hover:bg-white",
        variant === "navBook" &&
          "rounded-full border-[#bda589] bg-transparent px-9 py-2 text-[14px] font-normal normal-case tracking-wide text-[color:var(--muted)] transition-[color,border-color,background-color] hover:border-[#bda589] hover:bg-[#bda589] hover:text-white md:px-10 md:py-2.5 md:text-[15px]",
        variant === "outlineBeige" &&
          "border-[#bda589] bg-transparent text-[14px] font-normal normal-case tracking-wide text-[color:var(--muted)] transition-[color,border-color,background-color] hover:border-[#bda589] hover:bg-[#bda589] hover:text-white md:text-[15px]",
        variant === "beigeFill" &&
          "border-[#bda589] bg-[#bda589] text-[14px] font-normal normal-case tracking-wide text-white transition-[color,border-color,background-color] hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white md:text-[15px]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
