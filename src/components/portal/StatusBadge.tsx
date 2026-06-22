import { classNames } from "@/utils/helpers";

const map: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  assigned: "bg-blue-100 text-blue-800 border-blue-200",
  in_progress: "bg-forest-100 text-forest-800 border-forest-200",
  resolved: "bg-forest-200 text-forest-900 border-forest-300",
  cancelled: "bg-sand-200 text-sand-900 border-sand-300",
  rejected: "bg-red-100 text-red-700 border-red-200",
  low: "bg-sand-100 text-sand-800 border-sand-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  urgent: "bg-red-100 text-red-700 border-red-200",
};

export function StatusBadge({ status }: { status?: string | null }) {
  const key = (status ?? "").toLowerCase();
  const cls = map[key] ?? "bg-sand-100 text-sand-800 border-sand-200";
  const label = (status ?? "—").replace(/_/g, " ");
  return (
    <span
      className={classNames(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize",
        cls
      )}
    >
      {label}
    </span>
  );
}
