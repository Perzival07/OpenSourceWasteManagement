import { classNames } from "@/utils/helpers";
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "animate-pulse bg-sand-200/60 rounded-md",
        className
      )}
    />
  );
}
