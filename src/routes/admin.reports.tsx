import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Play, Check, UserPlus } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { Table, Th, Td } from "@/components/portal/Table";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { Modal } from "@/components/portal/Modal";
import { SelectField } from "@/components/portal/SelectField";
import { useApi } from "@/hooks/useApi";
import { apiFetch, API_URL } from "@/lib/api";
import { classNames, formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/admin/reports")({
  component: ReportsManager,
});

const STATUSES = ["all", "pending", "assigned", "in_progress", "resolved", "cancelled"];
const PAGE_SIZE = 10;

function priorityScore(r: any) {
  const p = (r.priority || "medium").toLowerCase();
  const m: Record<string, number> = { low: 25, medium: 50, high: 75, urgent: 95 };
  return m[p] ?? 50;
}

function ReportsManager() {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [assignFor, setAssignFor] = useState<any | null>(null);
  const [collectorId, setCollectorId] = useState("");
  const [busy, setBusy] = useState<string | number | null>(null);
  const [viewPhoto, setViewPhoto] = useState<string | null>(null);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    p.set("skip", String(page * PAGE_SIZE));
    p.set("limit", String(PAGE_SIZE));
    if (status !== "all") p.set("status", status);
    if (search.trim()) p.set("search", search.trim());
    return p.toString();
  }, [status, search, page]);

  const { data, loading, error, refetch } = useApi<any>(`/reports/?${qs}`, {}, [qs]);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const total: number = data?.total ?? items.length;

  const collectors = useApi<any>(
    assignFor ? "/admin/users?role=collector&limit=100" : null,
    {},
    [assignFor?.id]
  );
  const collectorList: any[] = Array.isArray(collectors.data) ? collectors.data : collectors.data?.items ?? [];

  const update = async (id: string | number, patch: any) => {
    setBusy(id);
    try {
      await apiFetch(`/reports/${id}`, { method: "PUT", body: patch });
      await refetch();
    } finally {
      setBusy(null);
    }
  };

  const confirmAssign = async () => {
    if (!assignFor || !collectorId) return;
    await update(assignFor.id, { status: "assigned", assigned_worker_id: collectorId });
    setAssignFor(null);
    setCollectorId("");
  };

  return (
    <>
      <PageHeader title="Reports" subtitle="Triage, assign, and close reports." />

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <FormField
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            placeholder="Search address, description, ID"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => { setStatus(s); setPage(0); }}
              className={classNames(
                "px-3 py-1.5 rounded-full text-xs font-medium border capitalize",
                status === s
                  ? "bg-forest-700 text-sand-50 border-forest-700"
                  : "bg-card text-muted-foreground border-border hover:bg-sand-100"
              )}
            >
              {s.replace(/_/g, " ")}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-2">
          {[...Array(8)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load reports" body={error} />
      ) : items.length === 0 ? (
        <EmptyState title="No reports match" body="Adjust filters or wait for new reports." />
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Photo</Th>
                <Th>Category</Th>
                <Th>Priority</Th>
                <Th>Address</Th>
                <Th>Status</Th>
                <Th>Score</Th>
                <Th>Reported</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {items.map((r) => {
                const st = (r.status || "").toLowerCase();
                const score = priorityScore(r);
                return (
                  <tr key={r.id} className="hover:bg-sand-50">
                    <Td className="font-mono text-xs">#{String(r.id).slice(0, 6)}</Td>
                    <Td>
                      {r.photo_url ? (
                        <button type="button" onClick={() => setViewPhoto(r.photo_url.startsWith('http') ? r.photo_url : `${API_URL}${r.photo_url}`)} className="block">
                          <img
                            src={r.photo_url.startsWith('http') ? r.photo_url : `${API_URL}${r.photo_url}`}
                            alt="Report"
                            className="w-10 h-10 object-cover rounded-md border border-border hover:opacity-80 transition-opacity"
                          />
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </Td>
                    <Td>{r.category || r.tags?.[0] || "—"}</Td>
                    <Td><StatusBadge status={r.priority || "medium"} /></Td>
                    <Td className="max-w-[220px] truncate">{r.address || r.block || "—"}</Td>
                    <Td><StatusBadge status={r.status} /></Td>
                    <Td>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-sand-200 overflow-hidden">
                          <div
                            className={classNames(
                              "h-full",
                              score >= 80 ? "bg-red-500" : score >= 60 ? "bg-orange-500" : "bg-forest-500"
                            )}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">{score}</span>
                      </div>
                    </Td>
                    <Td className="text-muted-foreground text-xs">{formatDate(r.created_at)}</Td>
                    <Td>
                      <div className="flex justify-end gap-1.5">
                        {st === "pending" ? (
                          <Button size="sm" loading={busy === r.id} onClick={() => setAssignFor(r)}>
                            <UserPlus className="w-3.5 h-3.5" /> Assign
                          </Button>
                        ) : null}
                        {st === "assigned" ? (
                          <Button size="sm" loading={busy === r.id} onClick={() => update(r.id, { status: "in_progress" })}>
                            <Play className="w-3.5 h-3.5" /> Start
                          </Button>
                        ) : null}
                        {st === "in_progress" ? (
                          <Button size="sm" loading={busy === r.id} onClick={() => update(r.id, { status: "resolved" })}>
                            <Check className="w-3.5 h-3.5" /> Resolve
                          </Button>
                        ) : null}
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-muted-foreground">
              Showing {page * PAGE_SIZE + 1}–{page * PAGE_SIZE + items.length} of {total}
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
                Previous
              </Button>
              <Button variant="secondary" size="sm" disabled={items.length < PAGE_SIZE} onClick={() => setPage((p) => p + 1)}>
                Next
              </Button>
            </div>
          </div>
        </>
      )}

      <Modal
        open={!!assignFor}
        title="Assign collector"
        onClose={() => { setAssignFor(null); setCollectorId(""); }}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => { setAssignFor(null); setCollectorId(""); }}>Cancel</Button>
            <Button onClick={confirmAssign} disabled={!collectorId}>Assign</Button>
          </div>
        }
      >
        <div className="space-y-3">
          <div className="text-sm text-muted-foreground">
            Report <span className="font-mono">#{String(assignFor?.id ?? "").slice(0, 6)}</span> —{" "}
            {assignFor?.address || assignFor?.block || "—"}
          </div>
          <SelectField
            label="Collector"
            value={collectorId}
            onChange={(e) => setCollectorId(e.target.value)}
          >
            <option value="">{collectors.loading ? "Loading…" : "Select a collector"}</option>
            {collectorList.map((c) => (
              <option key={c.id} value={c.id}>
                {c.full_name || c.display_name || c.email}
                {c.zone ? ` · ${c.zone}` : ""}
              </option>
            ))}
          </SelectField>
        </div>
      </Modal>

      <Modal
        open={!!viewPhoto}
        title="Report Photo"
        onClose={() => setViewPhoto(null)}
      >
        <div className="flex justify-center p-4">
          {viewPhoto && (
            <img src={viewPhoto} alt="Enlarged Report" className="max-w-full max-h-[70vh] object-contain rounded-md" />
          )}
        </div>
      </Modal>
    </>
  );
}
