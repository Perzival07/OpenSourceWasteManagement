import type { SelectHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/helpers";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | null;
  hint?: string;
  brutal?: boolean;
  children?: ReactNode;
}

export function SelectField({ label, error, hint, brutal, className, id, children, ...rest }: Props) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className={classNames(
            "text-sm font-medium",
            brutal ? "text-ink-950 uppercase tracking-wide" : "text-foreground"
          )}
        >
          {label}
        </label>
      ) : null}
      <select
        id={inputId}
        {...rest}
        className={classNames(
          "w-full px-3 py-2.5 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-forest-500/50",
          brutal
            ? "border-2 border-ink-950 rounded-md focus:ring-0 focus:shadow-[4px_4px_0_0_#0a0f0a]"
            : "border border-border rounded-lg",
          error && "border-red-500",
          className
        )}
      >
        {children}
      </select>
      {error ? <p className="text-xs text-red-600">{error}</p> : hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
