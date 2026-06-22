import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, children }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground font-display">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        ) : null}
      </div>
      {children ? <div className="flex items-center gap-2">{children}</div> : null}
    </div>
  );
}
