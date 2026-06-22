import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  body?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({ icon, title, body, action }: Props) {
  return (
    <div className="text-center py-16 px-6 bg-card border border-dashed border-border rounded-xl">
      {icon ? (
        <div className="mx-auto w-12 h-12 rounded-full bg-sand-100 text-forest-700 flex items-center justify-center mb-4">
          {icon}
        </div>
      ) : null}
      <h3 className="text-base font-semibold text-foreground font-display">{title}</h3>
      {body ? <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">{body}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  );
}
