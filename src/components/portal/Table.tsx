import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { classNames } from "@/utils/helpers";

export function Table({ children, className, ...rest }: HTMLAttributes<HTMLTableElement> & { children?: ReactNode }) {
  return (
    <div className="overflow-x-auto bg-card border border-border rounded-xl">
      <table {...rest} className={classNames("w-full text-sm", className)}>
        {children}
      </table>
    </div>
  );
}

export function Th({ children, className, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      {...rest}
      className={classNames(
        "text-left px-4 py-3 text-xs uppercase tracking-wide font-medium text-muted-foreground border-b border-border bg-sand-50",
        className
      )}
    >
      {children}
    </th>
  );
}

export function Td({ children, className, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...rest}
      className={classNames("px-4 py-3 border-b border-border/60 text-foreground", className)}
    >
      {children}
    </td>
  );
}
