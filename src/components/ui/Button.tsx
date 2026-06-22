import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/helpers";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "brutal" | "brutal-outline";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children?: ReactNode;
}

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-sand-50 hover:bg-forest-800 active:bg-forest-900 rounded-lg shadow-sm",
  secondary:
    "bg-sand-100 text-forest-900 hover:bg-sand-200 rounded-lg",
  ghost:
    "bg-transparent text-forest-800 hover:bg-sand-100 rounded-lg",
  danger:
    "bg-red-600 text-white hover:bg-red-700 rounded-lg",
  brutal:
    "bg-forest-500 text-ink-950 border-2 border-ink-950 brutal-shadow font-bold uppercase tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0_0_#0a0f0a] transition-transform",
  "brutal-outline":
    "bg-sand-50 text-ink-950 border-2 border-ink-950 brutal-shadow font-bold uppercase tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0_0_#0a0f0a] transition-transform",
};

export function Button({
  variant = "primary",
  size = "md",
  loading,
  disabled,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={classNames(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
