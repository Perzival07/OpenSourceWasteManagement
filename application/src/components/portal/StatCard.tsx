import type { ReactNode } from "react";
import { classNames } from "@/utils/helpers";

type Accent = "forest" | "sand" | "red" | "yellow" | "blue";

const accents: Record<Accent, string> = {
  forest: "bg-forest-100 text-forest-700",
  sand: "bg-sand-100 text-sand-800",
  red: "bg-red-100 text-red-700",
  yellow: "bg-yellow-100 text-yellow-700",
  blue: "bg-blue-100 text-blue-700",
};

interface Props {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  accent?: Accent;
}

export function StatCard({ label, value, sub, icon, accent = "forest" }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
      {icon ? (
        <div
          className={classNames(
            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
            accents[accent]
          )}
        >
          {icon}
        </div>
      ) : null}
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
          {label}
        </div>
        <div className="text-2xl font-semibold text-foreground mt-1 font-display">
          {value}
        </div>
        {sub ? <div className="text-xs text-muted-foreground mt-1">{sub}</div> : null}
      </div>
    </div>
  );
}
