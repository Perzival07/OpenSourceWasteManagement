import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LayoutDashboard, Plus, FileText, Calendar, Bell } from "lucide-react";
import { PortalLayout, type NavItem } from "@/components/PortalLayout";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/citizen")({
  ssr: false,
  head: () => ({ meta: [{ title: "Citizen — CleanCity" }] }),
  component: CitizenPortal,
});

const items: NavItem[] = [
  { to: "/citizen", label: "Dashboard", icon: LayoutDashboard },
  { to: "/citizen/new", label: "New report", icon: Plus },
  { to: "/citizen/reports", label: "My reports", icon: FileText },
  { to: "/citizen/schedule", label: "Schedule", icon: Calendar },
  { to: "/citizen/notifications", label: "Notifications", icon: Bell },
];

function CitizenPortal() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate({ to: "/login" });
    else if (user.role !== "citizen") navigate({ to: "/unauthorized" });
  }, [user, loading, navigate]);

  if (loading || !user || user.role !== "citizen") {
    return (
      <div className="min-h-screen grid place-items-center bg-sand-50">
        <div className="h-8 w-8 border-2 border-ink-950 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <PortalLayout role="citizen" items={items} brandLabel="Citizen" />;
}
