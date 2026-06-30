import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/portal/Button";

export const Route = createFileRoute("/unauthorized")({
  head: () => ({ meta: [{ title: "Not authorized — CleanCity" }] }),
  component: Unauthorized,
});

function Unauthorized() {
  return (
    <div className="min-h-screen bg-sand-50 flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-wider">// 403</div>
        <h1 className="font-display font-bold text-4xl mt-2 text-ink-950">Not authorized</h1>
        <p className="mt-3 text-ink-950/70">
          You don't have permission to view this page. Sign in with the right account or
          head back home.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link to="/"><Button variant="brutal-outline">Go home</Button></Link>
          <Link to="/login"><Button variant="brutal">Sign in</Button></Link>
        </div>
      </div>
    </div>
  );
}
