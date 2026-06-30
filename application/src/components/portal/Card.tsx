import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/helpers";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Card({ className, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        "bg-card border border-border rounded-xl shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
