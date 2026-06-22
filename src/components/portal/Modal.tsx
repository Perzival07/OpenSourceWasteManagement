import type { ReactNode } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  title?: string;
  onClose: () => void;
  children?: ReactNode;
  footer?: ReactNode;
  maxWidth?: string;
}

export function Modal({ open, title, onClose, children, footer, maxWidth = "max-w-lg" }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className={`relative w-full ${maxWidth} bg-card rounded-2xl border border-border shadow-xl animate-fade-up`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground font-display">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md hover:bg-sand-100 text-muted-foreground"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-5">{children}</div>
        {footer ? <div className="px-5 py-4 border-t border-border bg-sand-50/50 rounded-b-2xl">{footer}</div> : null}
      </div>
    </div>
  );
}
