import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { FormField } from "@/components/portal/FormField";
import { Button } from "@/components/portal/Button";
import { useAuth } from "@/context/AuthContext";
import { hasErrors, validateFields, validators } from "@/utils/helpers";

export const Route = createFileRoute("/login")({
  ssr: false,
  head: () => ({ meta: [{ title: "Sign in — CleanCity" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const router = useRouter();
  const search = router.state.location.search as Record<string, any>;
  const justRegistered = search?.registered === "1" || search?.registered === 1;

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      navigate({ to: `/${user.role}` as any });
    }
  }, [user, navigate]);

  const onChange = (k: string) => (e: any) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateFields(
      { email: [validators.required, validators.email], password: validators.required },
      values
    );
    setErrors(errs);
    if (hasErrors(errs)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const u = await login(values.email, values.password);
      navigate({ to: `/${u.role}` as any });
    } catch (err: any) {
      setSubmitError(err?.message || "Sign in failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back."
      subtitle="Sign in to your CleanCity account"
      message={"Sign in.\nDispatch.\nKeep the city moving."}
    >
      {justRegistered ? (
        <div className="mb-4 border-2 border-ink-950 bg-forest-200 p-3 text-sm">
          Account created. Sign in to continue.
        </div>
      ) : null}
      {submitError ? (
        <div className="mb-4 border-2 border-red-600 bg-red-50 p-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          brutal
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          placeholder="you@city.gov"
          value={values.email}
          error={errors.email}
          onChange={onChange("email")}
        />
        <FormField
          brutal
          name="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={values.password}
          error={errors.password}
          onChange={onChange("password")}
        />
        <Button type="submit" variant="brutal" size="lg" loading={submitting} className="w-full">
          Sign in
        </Button>
      </form>
      <p className="mt-6 text-sm text-ink-950/70">
        New to CleanCity?{" "}
        <Link to="/signup" className="font-semibold underline underline-offset-4 text-ink-950">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
