import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPinned, Plus, Trash2, Users } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { Modal } from "@/components/portal/Modal";
import { FormField } from "@/components/portal/FormField";
import { TextareaField } from "@/components/portal/TextareaField";
import { useApi } from "@/hooks/useApi";
import { apiFetch } from "@/lib/api";
import { hasErrors, validateFields, validators } from "@/utils/helpers";

export const Route = createFileRoute("/admin/zones")({
  component: ZoneManager,
});

interface Zone {
  id: string | number;
  name: string;
  description?: string;
  collectors_count?: number;
}

function ZoneManager() {
  const { data, loading, error, refetch } = useApi<any>("/admin/zones", {}, []);
  const zones: Zone[] = Array.isArray(data) ? data : data?.items ?? [];
  const [createOpen, setCreateOpen] = useState(false);
  const [toDelete, setToDelete] = useState<Zone | null>(null);
  const [busy, setBusy] = useState(false);

  const remove = async () => {
    if (!toDelete) return;
    setBusy(true);
    try {
      await apiFetch(`/admin/zones/${toDelete.id}`, { method: "DELETE" });
      await refetch();
      setToDelete(null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <PageHeader title="Zones" subtitle="Operational areas for crew assignments.">
        <Button onClick={() => setCreateOpen(true)}>
          <Plus className="w-4 h-4" /> New zone
        </Button>
      </PageHeader>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load zones" body={error} />
      ) : zones.length === 0 ? (
        <EmptyState
          icon={<MapPinned className="w-5 h-5" />}
          title="No zones yet"
          body="Group neighborhoods into zones to assign crews efficiently."
          action={<Button onClick={() => setCreateOpen(true)}><Plus className="w-4 h-4" /> New zone</Button>}
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {zones.map((z) => (
            <Card key={z.id} className="p-5 flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-display font-semibold text-foreground">{z.name}</div>
                  <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {z.description || "No description"}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-forest-100 text-forest-700 grid place-items-center shrink-0">
                  <MapPinned className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> {z.collectors_count ?? 0} collector{(z.collectors_count ?? 0) === 1 ? "" : "s"}
                </div>
                <Button size="sm" variant="ghost" onClick={() => setToDelete(z)}>
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <CreateZoneModal open={createOpen} onClose={() => setCreateOpen(false)} onCreated={refetch} />

      <Modal
        open={!!toDelete}
        title="Delete zone"
        onClose={() => setToDelete(null)}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setToDelete(null)}>Cancel</Button>
            <Button variant="danger" loading={busy} onClick={remove}>Delete</Button>
          </div>
        }
      >
        <p className="text-sm text-muted-foreground">
          This will permanently remove <span className="font-semibold text-foreground">{toDelete?.name}</span>.
          Collectors in this zone will need to be reassigned.
        </p>
      </Modal>
    </>
  );
}

function CreateZoneModal({ open, onClose, onCreated }: { open: boolean; onClose: () => void; onCreated: () => void }) {
  const [values, setValues] = useState({ name: "", description: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async () => {
    const es = validateFields({ name: validators.required }, values);
    setErrors(es);
    if (hasErrors(es)) return;
    setBusy(true);
    setErr(null);
    try {
      await apiFetch("/admin/zones", { method: "POST", body: values });
      onCreated();
      setValues({ name: "", description: "" });
      onClose();
    } catch (e: any) {
      setErr(e?.message || "Failed to create zone");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal
      open={open}
      title="New zone"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={submit} loading={busy}>Create</Button>
        </div>
      }
    >
      {err ? <div className="mb-3 text-sm text-red-600">{err}</div> : null}
      <div className="space-y-3">
        <FormField
          label="Name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          error={errors.name}
          placeholder="e.g. Ward 4 — North"
        />
        <TextareaField
          label="Description"
          value={values.description}
          onChange={(e) => setValues((v) => ({ ...v, description: e.target.value }))}
          placeholder="What's covered in this zone?"
        />
      </div>
    </Modal>
  );
}
