import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { FormField } from "@/components/portal/FormField";
import { Button } from "@/components/portal/Button";
import { useAuth, type SignupPayload, type UserRole } from "@/context/AuthContext";
import { classNames, hasErrors, validateFields, validators } from "@/utils/helpers";

export const Route = createFileRoute("/signup")({
  ssr: false,
  head: () => ({ meta: [{ title: "Create account — CleanCity" }] }),
  component: SignupPage,
});

interface Values {
  email: string;
  password: string;
  confirm: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  zone: string;
}

const roleOptions: { value: UserRole; title: string; body: string }[] = [
  { value: "citizen", title: "Citizen", body: "Report issues in your neighborhood." },
  { value: "collector", title: "Collector", body: "Receive and resolve assigned tasks." },
  { value: "admin", title: "Admin", body: "Dispatch crews and oversee the city." },
];

function SignupPage() {
  const { signup, user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    confirm: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "citizen",
    zone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: `/${user.role}` as any });
  }, [user, navigate]);

  const set = (k: keyof Values) => (e: any) => {
    setValues((v) => ({ ...v, [k]: e?.target ? e.target.value : e }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const validateStep = (s: number) => {
    if (s === 0) {
      return validateFields(
        {
          email: [validators.required, validators.email],
          password: [validators.required, validators.password],
          confirm: [validators.required, validators.confirmPassword(values.password)],
        },
        values
      );
    }
    if (s === 1) {
      return validateFields(
        {
          firstName: validators.required,
          lastName: validators.required,
          phone: validators.phone,
        },
        values
      );
    }
    return validateFields(
      {
        role: validators.required,
        ...(values.role === "collector" ? { zone: validators.required } : {}),
      },
      values
    );
  };

  const next = () => {
    const errs = validateStep(step);
    setErrors(errs);
    if (!hasErrors(errs)) setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep(2);
    setErrors(errs);
    if (hasErrors(errs)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const payload: SignupPayload = {
        email: values.email.trim(),
        password: values.password,
        display_name: `${values.firstName} ${values.lastName}`.trim(),
        phone_number: values.phone || undefined,
        role: values.role,
        ...(values.role === "collector" ? { zone: values.zone } : {}),
      };
      const u = await signup(payload);
      if (u) navigate({ to: `/${u.role}` as any });
      else navigate({ to: "/login", search: { registered: "1" } as any });
    } catch (err: any) {
      setSubmitError(err?.message || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account."
      subtitle={`Step ${step + 1} of 3`}
      message={"Join the\nplatform that\ncleans cities."}
    >
      {/* Stepper */}
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={classNames(
              "h-2 flex-1 border-2 border-ink-950",
              i <= step ? "bg-forest-500" : "bg-sand-100"
            )}
          />
        ))}
      </div>

      {submitError ? (
        <div className="mb-4 border-2 border-red-600 bg-red-50 p-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}

      <form onSubmit={submit} className="space-y-4">
        {step === 0 ? (
          <>
            <FormField brutal label="Email" type="email" value={values.email} onChange={set("email")} error={errors.email} placeholder="you@city.gov" />
            <FormField brutal label="Password" type="password" value={values.password} onChange={set("password")} error={errors.password} placeholder="At least 8 characters" />
            <FormField brutal label="Confirm password" type="password" value={values.confirm} onChange={set("confirm")} error={errors.confirm} placeholder="Repeat password" />
          </>
        ) : null}

        {step === 1 ? (
          <>
            <div className="grid grid-cols-2 gap-3">
              <FormField brutal label="First name" value={values.firstName} onChange={set("firstName")} error={errors.firstName} />
              <FormField brutal label="Last name" value={values.lastName} onChange={set("lastName")} error={errors.lastName} />
            </div>
            <FormField brutal label="Phone (optional)" type="tel" value={values.phone} onChange={set("phone")} error={errors.phone} placeholder="+1 555 123 4567" />
          </>
        ) : null}

        {step === 2 ? (
          <>
            <div className="space-y-3">
              <div className="text-sm font-medium uppercase tracking-wide">I am a</div>
              {roleOptions.map((opt) => {
                const active = values.role === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={classNames(
                      "flex items-start gap-3 border-2 border-ink-950 p-4 cursor-pointer transition-transform",
                      active ? "bg-forest-300 brutal-shadow-sm" : "bg-sand-50 hover:translate-x-[-1px] hover:translate-y-[-1px]"
                    )}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={opt.value}
                      checked={active}
                      onChange={() => set("role")(opt.value)}
                      className="mt-1 accent-ink-950"
                    />
                    <div>
                      <div className="font-display font-bold">{opt.title}</div>
                      <div className="text-sm text-ink-950/70">{opt.body}</div>
                    </div>
                  </label>
                );
              })}
              {errors.role ? <p className="text-xs text-red-600">{errors.role}</p> : null}
            </div>
            {values.role === "collector" ? (
              <FormField brutal label="Assigned zone" value={values.zone} onChange={set("zone")} error={errors.zone} placeholder="e.g. Ward 4" />
            ) : null}
          </>
        ) : null}

        <div className="flex items-center justify-between pt-2">
          <div>
            {step > 0 ? (
              <Button type="button" variant="brutal-outline" size="md" onClick={back}>
                Back
              </Button>
            ) : null}
          </div>
          {step < 2 ? (
            <Button type="button" variant="brutal" size="md" onClick={next}>
              Continue
            </Button>
          ) : (
            <Button type="submit" variant="brutal" size="md" loading={submitting}>
              Create account
            </Button>
          )}
        </div>
      </form>

      <p className="mt-6 text-sm text-ink-950/70">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold underline underline-offset-4 text-ink-950">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
