import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, UserPlus, UserX, UserCheck, Users as UsersIcon } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { Table, Th, Td } from "@/components/portal/Table";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { Modal } from "@/components/portal/Modal";
import { SelectField } from "@/components/portal/SelectField";
import { useApi } from "@/hooks/useApi";
import { apiFetch } from "@/lib/api";
import { classNames, formatDate, hasErrors, validateFields, validators } from "@/utils/helpers";

export const Route = createFileRoute("/admin/users")({
  component: UsersManager,
});

const ROLES = ["all", "citizen", "collector"];
const PAGE_SIZE = 10;

function UsersManager() {
  const [role, setRole] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [createOpen, setCreateOpen] = useState(false);
  const [busy, setBusy] = useState<string | number | null>(null);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", String(page + 1));
    p.set("limit", String(PAGE_SIZE));
    if (role !== "all") p.set("role", role);
    if (search.trim()) p.set("search", search.trim());
    return p.toString();
  }, [role, search, page]);

  const { data, loading, error, refetch } = useApi<any>(`/admin/users?${qs}`, {}, [qs]);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const total: number = data?.total ?? items.length;

  const toggleActive = async (u: any) => {
    setBusy(u.id);
    try {
      await apiFetch(`/admin/users/${u.id}/deactivate`, { method: "PATCH" });
      await refetch();
    } finally {
      setBusy(null);
    }
  };

  return (
    <>
      <PageHeader title="Users" subtitle="Citizens and collectors registered on the platform.">
        <Button onClick={() => setCreateOpen(true)}>
          <UserPlus className="w-4 h-4" /> Create user
        </Button>
      </PageHeader>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <FormField
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            placeholder="Search name or email"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ROLES.map((r) => (
            <button
              key={r}
              onClick={() => { setRole(r); setPage(0); }}
              className={classNames(
                "px-3 py-1.5 rounded-full text-xs font-medium border capitalize",
                role === r
                  ? "bg-forest-700 text-sand-50 border-forest-700"
                  : "bg-card text-muted-foreground border-border hover:bg-sand-100"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-14 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load users" body={error} />
      ) : items.length === 0 ? (
        <EmptyState
          icon={<UsersIcon className="w-5 h-5" />}
          title="No users found"
          body="Adjust filters or create a new user."
          action={<Button onClick={() => setCreateOpen(true)}><UserPlus className="w-4 h-4" /> Create user</Button>}
        />
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <Th>User</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Zone</Th>
                <Th>Joined</Th>
                <Th>Status</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {items.map((u) => {
                const name = u.full_name || u.display_name || u.email;
                const active = u.is_active !== false && !u.deactivated_at;
                return (
                  <tr key={u.id} className="hover:bg-sand-50">
                    <Td>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-forest-100 text-forest-800 grid place-items-center font-bold text-sm">
                          {String(name).charAt(0).toUpperCase()}
                        </div>
                        <span className="font-medium">{name}</span>
                      </div>
                    </Td>
                    <Td className="text-muted-foreground">{u.email}</Td>
                    <Td className="capitalize">{u.role}</Td>
                    <Td className="text-muted-foreground">{u.zone || "—"}</Td>
                    <Td className="text-muted-foreground text-xs">{formatDate(u.created_at)}</Td>
                    <Td>
                      <span className={classNames(
                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
                        active
                          ? "bg-forest-100 text-forest-800 border-forest-200"
                          : "bg-sand-200 text-sand-900 border-sand-300"
                      )}>
                        {active ? "Active" : "Inactive"}
                      </span>
                    </Td>
                    <Td>
                      <div className="flex justify-end">
                        <Button
                          size="sm"
                          variant={active ? "ghost" : "secondary"}
                          loading={busy === u.id}
                          onClick={() => toggleActive(u)}
                        >
                          {active ? <><UserX className="w-3.5 h-3.5" /> Deactivate</> : <><UserCheck className="w-3.5 h-3.5" /> Reactivate</>}
                        </Button>
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

      <CreateUserModal open={createOpen} onClose={() => setCreateOpen(false)} onCreated={refetch} />
    </>
  );
}

function CreateUserModal({ open, onClose, onCreated }: { open: boolean; onClose: () => void; onCreated: () => void }) {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
    role: "citizen",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const set = (k: string) => (e: any) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = async () => {
    const es = validateFields(
      {
        full_name: validators.required,
        email: [validators.required, validators.email],
        password: [validators.required, validators.password],
        phone: validators.phone,
      },
      values
    );
    setErrors(es);
    if (hasErrors(es)) return;
    setSubmitting(true);
    setErr(null);
    try {
      await apiFetch("/admin/users", { method: "POST", body: values });
      onCreated();
      onClose();
      setValues({ full_name: "", email: "", password: "", phone: "", role: "citizen" });
    } catch (e: any) {
      setErr(e?.message || "Failed to create user");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      title="Create user"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={submit} loading={submitting}>Create</Button>
        </div>
      }
    >
      {err ? <div className="mb-3 text-sm text-red-600">{err}</div> : null}
      <div className="space-y-3">
        <FormField label="Full name" value={values.full_name} onChange={set("full_name")} error={errors.full_name} />
        <FormField label="Email" type="email" value={values.email} onChange={set("email")} error={errors.email} />
        <FormField label="Password" type="password" value={values.password} onChange={set("password")} error={errors.password} />
        <FormField label="Phone (optional)" value={values.phone} onChange={set("phone")} error={errors.phone} />
        <SelectField label="Role" value={values.role} onChange={set("role")}>
          <option value="citizen">Citizen</option>
          <option value="collector">Collector</option>
          <option value="admin">Admin</option>
        </SelectField>
      </div>
    </Modal>
  );
}
