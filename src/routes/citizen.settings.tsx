// src/routes/citizen.settings.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { User, Mail, Phone, Save, Key, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { FormField } from "@/components/portal/FormField";
import { Button } from "@/components/portal/Button";
import { useAuth } from "@/context/AuthContext";
import { apiFetch } from "@/lib/api";
import { hasErrors, validateFields, validators } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/settings")({
  component: CitizenSettings,
});

function CitizenSettings() {
  const { user, refreshMe } = useAuth();
  const navigate = useNavigate();

  // Profile form state
  const [displayName, setDisplayName] = useState(user?.display_name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [email] = useState(user?.email || "");

  // Password change state
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Redirect if not citizen
  useEffect(() => {
    if (user && user.role !== "citizen") {
      navigate({ to: "/unauthorized" });
    }
  }, [user, navigate]);

  // Handle profile update
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileError(null);
    setProfileSuccess(false);

    const rules = {
      display_name: validators.required,
      phone_number: validators.phone,
    };
    const errs = validateFields(rules, { display_name: displayName, phone_number: phoneNumber });
    setFieldErrors(errs);
    if (hasErrors(errs)) return;

    setLoading(true);
    try {
      const updated = await apiFetch("/users/me", {
        method: "PUT",
        body: { display_name: displayName, phone_number: phoneNumber },
      });
      // Refresh the auth context user
      await refreshMe();
      setProfileSuccess(true);
      // Clear success after 3s
      setTimeout(() => setProfileSuccess(false), 3000);
    } catch (err: any) {
      setProfileError(err?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Handle password change (stub – backend endpoint not yet implemented)
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(false);

    // Basic validation
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with real endpoint when backend supports password change
      // await apiFetch("/users/change-password", { method: "POST", body: { old_password: oldPassword, new_password: newPassword } });
      // For now, simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPasswordSuccess(true);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setPasswordSuccess(false), 3000);
    } catch (err: any) {
      setPasswordError(err?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <>
      <PageHeader title="Account Settings" subtitle="Manage your profile and security" />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <Card className="p-6">
          <h2 className="font-display font-semibold text-lg flex items-center gap-2">
            <User className="w-5 h-5" /> Profile Information
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Update your personal details.
          </p>

          {profileError && (
            <div className="mb-4 border border-red-200 bg-red-50 p-3 text-sm text-red-700 rounded-lg">
              {profileError}
            </div>
          )}
          {profileSuccess && (
            <div className="mb-4 border border-forest-200 bg-forest-50 p-3 text-sm text-forest-700 rounded-lg">
              Profile updated successfully!
            </div>
          )}

          <form onSubmit={handleProfileUpdate} className="space-y-4">
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </label>
              <p className="text-sm text-muted-foreground bg-sand-50 p-2 rounded border border-border">
                {email}
              </p>
              <span className="text-xs text-muted-foreground">Email cannot be changed.</span>
            </div>

            <FormField
              label="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              error={fieldErrors.display_name}
              placeholder="Your full name"
            />

            <FormField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              error={fieldErrors.phone_number}
              placeholder="+1 555 123 4567"
            />

            <Button type="submit" loading={loading}>
              <Save className="w-4 h-4" /> Save Profile
            </Button>
          </form>
        </Card>

        {/* Password Card */}
        <Card className="p-6">
          <h2 className="font-display font-semibold text-lg flex items-center gap-2">
            <Key className="w-5 h-5" /> Change Password
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Update your password. (Backend endpoint not yet implemented – this is a stub.)
          </p>

          {passwordError && (
            <div className="mb-4 border border-red-200 bg-red-50 p-3 text-sm text-red-700 rounded-lg">
              {passwordError}
            </div>
          )}
          {passwordSuccess && (
            <div className="mb-4 border border-forest-200 bg-forest-50 p-3 text-sm text-forest-700 rounded-lg">
              Password changed successfully!
            </div>
          )}

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <FormField
              label="Current Password"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <FormField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Min 8 characters"
              required
            />
            <FormField
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <Button type="submit" loading={loading} variant="secondary">
              <Key className="w-4 h-4" /> Change Password
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            * Password change requires a backend endpoint. This UI is ready to connect.
          </p>
        </Card>
      </div>
    </>
  );
}
