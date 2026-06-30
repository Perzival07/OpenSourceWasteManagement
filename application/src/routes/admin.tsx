import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  MapPinned,
  BarChart3,
} from "lucide-react";
import { PortalLayout, type NavItem } from "@/components/PortalLayout";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({ meta: [{ title: "Admin — CleanCity" }] }),
  component: AdminPortal,
});

const items: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/reports", label: "Reports", icon: FileText },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/zones", label: "Zones", icon: MapPinned },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

function AdminPortal() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate({ to: "/login" });
    else if (user.role !== "admin") navigate({ to: "/unauthorized" });
  }, [user, loading, navigate]);

  if (loading || !user || user.role !== "admin") {
    return (
      <div className="min-h-screen grid place-items-center bg-sand-50">
        <div className="h-8 w-8 border-2 border-ink-950 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <PortalLayout role="admin" items={items} brandLabel="Admin" />;
}
