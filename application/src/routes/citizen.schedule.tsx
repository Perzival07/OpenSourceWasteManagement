import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/schedule")({
  component: CitizenSchedule,
});

function CitizenSchedule() {
  const { data, loading, error } = useApi<any>("/reports/?limit=50", {}, []);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const upcoming = items.filter((r) => ["assigned", "in_progress"].includes((r.status || "").toLowerCase()));

  return (
    <>
      <PageHeader title="Pickup schedule" subtitle="Upcoming collection visits for your reports." />
      {loading ? (
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load schedule" body={error} />
      ) : upcoming.length === 0 ? (
        <EmptyState
          icon={<Calendar className="w-5 h-5" />}
          title="Nothing scheduled"
          body="When your reports are assigned to a collector, they'll show up here."
        />
      ) : (
        <div className="space-y-3">
          {upcoming.map((r) => (
            <Card key={r.id} className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-forest-100 text-forest-700 grid place-items-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="font-semibold text-foreground">
                    {r.category || r.tags?.[0] || "Pickup"}
                  </div>
                  <StatusBadge status={r.status} />
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {r.address || r.block || "Address not provided"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Reported {formatDate(r.created_at)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
