import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { StatCard } from "@/components/portal/StatCard";
import { Card } from "@/components/portal/Card";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const analytics = useApi<any>("/admin/analytics?period=30d", {}, []);
  const recent = useApi<any>("/reports/?limit=6", {}, []);
  const summary = analytics.data?.summary ?? {};
  const reports: any[] = Array.isArray(recent.data) ? recent.data : recent.data?.items ?? [];

  return (
    <>
      <PageHeader title="Operations overview" subtitle="Live snapshot of the last 30 days.">
        <Link to="/admin/analytics"><Button variant="secondary">Full analytics</Button></Link>
      </PageHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Reports (30d)"
          value={analytics.loading ? "—" : summary.total_reports ?? 0}
          icon={<FileText className="w-5 h-5" />}
        />
        <StatCard
          label="Resolved"
          value={analytics.loading ? "—" : summary.resolved ?? 0}
          accent="forest"
          icon={<CheckCircle2 className="w-5 h-5" />}
        />
        <StatCard
          label="Avg. resolution"
          value={analytics.loading ? "—" : summary.avg_resolution_hours ?? "—"}
          accent="yellow"
          icon={<Clock className="w-5 h-5" />}
        />
        <StatCard
          label="Resolution rate"
          value={
            analytics.loading
              ? "—"
              : summary.resolution_rate != null
              ? `${Math.round(summary.resolution_rate)}%`
              : "—"
          }
          accent="blue"
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-lg">Recent reports</h2>
          <Link to="/admin/reports" className="text-sm text-forest-700 hover:underline">
            View all
          </Link>
        </div>
        {recent.loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
          </div>
        ) : recent.error ? (
          <EmptyState title="Couldn't load reports" body={recent.error} />
        ) : reports.length === 0 ? (
          <EmptyState icon={<FileText className="w-5 h-5" />} title="No reports yet" />
        ) : (
          <div className="space-y-2">
            {reports.slice(0, 6).map((r) => (
              <Card key={r.id} className="p-4 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      #{String(r.id).slice(0, 6)}
                    </span>
                    <StatusBadge status={r.priority || "medium"} />
                    <StatusBadge status={r.status} />
                  </div>
                  <div className="font-semibold text-foreground mt-1">
                    {r.category || r.tags?.[0] || "Report"}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {r.address || r.block || "—"}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground shrink-0">
                  {formatDate(r.created_at)}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
