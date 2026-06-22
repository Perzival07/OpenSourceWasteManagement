import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Bell, CheckCheck } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { Button } from "@/components/portal/Button";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { useApi } from "@/hooks/useApi";
import { useSocket } from "@/hooks/useSocket";
import { classNames, formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/notifications")({
  component: Notifications,
});

interface Notice {
  id: string;
  title: string;
  body: string;
  status?: string;
  ts: string;
  read: boolean;
}

function Notifications() {
  const { data, loading, error } = useApi<any>("/reports/?limit=20", {}, []);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const [extra, setExtra] = useState<Notice[]>([]);
  const [read, setRead] = useState<Record<string, boolean>>({});

  const synthesised: Notice[] = useMemo(() => {
    return items.map((r) => ({
      id: `r-${r.id}`,
      title: `Report #${String(r.id).slice(0, 6)} — ${(r.status ?? "updated").replace(/_/g, " ")}`,
      body: r.address || r.block || r.category || "Status updated",
      status: r.status,
      ts: r.updated_at || r.created_at || new Date().toISOString(),
      read: false,
    }));
  }, [items]);

  useSocket(
    {
      "report:status_changed": (payload: any) => {
        setExtra((cur) => [
          {
            id: `w-${payload.id}-${Date.now()}`,
            title: `Report #${String(payload.id).slice(0, 6)} — ${(payload.status ?? "updated").replace(/_/g, " ")}`,
            body: payload.address || "Status changed",
            status: payload.status,
            ts: new Date().toISOString(),
            read: false,
          },
          ...cur,
        ]);
      },
    },
    true
  );

  const all = useMemo(() => {
    return [...extra, ...synthesised].map((n) => ({ ...n, read: !!read[n.id] }));
  }, [extra, synthesised, read]);

  const unread = all.filter((n) => !n.read).length;

  useEffect(() => {
    // no-op, just to silence unused warnings if any
  }, []);

  const markAllRead = () => {
    const map: Record<string, boolean> = {};
    all.forEach((n) => (map[n.id] = true));
    setRead(map);
  };
  const toggle = (id: string) => setRead((r) => ({ ...r, [id]: !r[id] }));

  return (
    <>
      <PageHeader title="Notifications" subtitle={unread ? `${unread} unread` : "You're all caught up"}>
        {unread > 0 ? (
          <Button variant="secondary" onClick={markAllRead}>
            <CheckCheck className="w-4 h-4" /> Mark all read
          </Button>
        ) : null}
      </PageHeader>

      {loading ? (
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load notifications" body={error} />
      ) : all.length === 0 ? (
        <EmptyState icon={<Bell className="w-5 h-5" />} title="No notifications" body="We'll let you know when anything changes." />
      ) : (
        <div className="space-y-2">
          {all.map((n) => (
            <Card
              key={n.id}
              onClick={() => toggle(n.id)}
              className={classNames(
                "p-4 flex items-start gap-3 cursor-pointer transition-colors",
                n.read ? "" : "bg-forest-50/60 border-forest-200"
              )}
            >
              <div className={classNames(
                "w-2 h-2 rounded-full mt-2 shrink-0",
                n.read ? "bg-sand-300" : "bg-forest-500"
              )} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="font-semibold text-foreground">{n.title}</div>
                  {n.status ? <StatusBadge status={n.status} /> : null}
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">{n.body}</div>
                <div className="text-xs text-muted-foreground mt-1">{formatDate(n.ts)}</div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
