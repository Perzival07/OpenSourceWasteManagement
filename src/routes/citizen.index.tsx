import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Clock, Loader2, CheckCircle2, Plus } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { StatCard } from "@/components/portal/StatCard";
import { Table, Th, Td } from "@/components/portal/Table";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/")({
  component: CitizenDashboard,
});

interface Report {
  id: number | string;
  category?: string;
  tags?: string[];
  priority?: string;
  address?: string;
  block?: string;
  status?: string;
  created_at?: string;
}

function CitizenDashboard() {
  const { data, loading, error } = useApi<{ items?: Report[] } | Report[]>(
    "/reports/?limit=5",
    {},
    []
  );
  const reports: Report[] = Array.isArray(data) ? data : data?.items ?? [];

  const count = (s: string) =>
    reports.filter((r) => (r.status ?? "").toLowerCase() === s).length;

  return (
    <>
      <PageHeader title="Welcome back" subtitle="Here's what's happening with your reports">
        <Link to="/citizen/new">
          <Button><Plus className="w-4 h-4" /> New report</Button>
        </Link>
      </PageHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total" value={reports.length} icon={<FileText className="w-5 h-5" />} />
        <StatCard label="Pending" value={count("pending")} icon={<Clock className="w-5 h-5" />} accent="yellow" />
        <StatCard label="In progress" value={count("in_progress")} icon={<Loader2 className="w-5 h-5" />} accent="blue" />
        <StatCard label="Resolved" value={count("resolved")} icon={<CheckCircle2 className="w-5 h-5" />} accent="forest" />
      </div>

      <div className="mt-8">
        <h2 className="font-display font-semibold text-lg mb-3">Recent reports</h2>
        {loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
          </div>
        ) : error ? (
          <EmptyState
            title="Couldn't load reports"
            body={error}
            action={<Link to="/citizen/new"><Button>Create your first report</Button></Link>}
          />
        ) : reports.length === 0 ? (
          <EmptyState
            icon={<FileText className="w-5 h-5" />}
            title="No reports yet"
            body="Spotted a problem in your neighborhood? File your first report."
            action={<Link to="/citizen/new"><Button>New report</Button></Link>}
          />
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Category</Th>
                <Th>Priority</Th>
                <Th>Address</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {reports.slice(0, 5).map((r) => (
                <tr key={r.id} className="hover:bg-sand-50">
                  <Td className="font-mono text-xs">#{String(r.id).slice(0, 6)}</Td>
                  <Td>{r.category || r.tags?.[0] || "—"}</Td>
                  <Td><StatusBadge status={r.priority || "medium"} /></Td>
                  <Td className="max-w-[240px] truncate">{r.address || r.block || "—"}</Td>
                  <Td className="text-muted-foreground">{formatDate(r.created_at)}</Td>
                  <Td><StatusBadge status={r.status} /></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}
