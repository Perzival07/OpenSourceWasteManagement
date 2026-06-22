import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Bell,
  BarChart3,
  Users,
  Truck,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/portal/Button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CleanCity — Civic waste management" },
      {
        name: "description",
        content:
          "Report waste issues, dispatch collectors, track resolution in real time. CleanCity connects citizens, collectors, and admins on one platform.",
      },
      { property: "og:title", content: "CleanCity — Civic waste management" },
      {
        property: "og:description",
        content:
          "Report waste issues, dispatch collectors, track resolution in real time.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: MapPin, title: "Live map", body: "See pending and active reports plotted on an interactive city map." },
  { icon: Bell, title: "Notifications", body: "Real-time status updates for every citizen and crew." },
  { icon: BarChart3, title: "Analytics", body: "KPIs that show where the city is improving — and where it isn't." },
  { icon: Users, title: "Multi-role", body: "Distinct portals for citizens, collectors, and administrators." },
  { icon: Truck, title: "Dispatch", body: "Assign jobs to the right crew with one click." },
  { icon: ShieldCheck, title: "Verification", body: "Photo evidence and worker confirmation on every resolution." },
];

const steps = [
  { n: "01", title: "Report", body: "Citizens snap a photo, drop a pin, and submit." },
  { n: "02", title: "Collectors respond", body: "Admins dispatch crews. Workers update status live." },
  { n: "03", title: "City stays clean", body: "Closed loop — verified resolution and analytics for everyone." },
];

function Landing() {
  return (
    <div className="bg-sand-50 text-ink-950">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-ink-950">
        <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-24 md:pt-24 md:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="inline-block bg-forest-500 border-2 border-ink-950 px-3 py-1 brutal-shadow-sm">
                <span className="font-mono text-xs uppercase tracking-wider">Civic platform · v1</span>
              </div>
              <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl leading-[0.95]">
                Cleaner cities,<br />
                <span className="bg-forest-500 border-2 border-ink-950 px-2 inline-block brutal-shadow-sm">built by everyone.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-950/80">
                CleanCity connects citizens, collection crews, and city admins on one
                live platform. Report a problem, dispatch the right crew, prove the fix.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button variant="brutal" size="lg">
                    Get started free <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="#how">
                  <Button variant="brutal-outline" size="lg">See how it works</Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-sand-50 border-4 border-ink-950 brutal-shadow p-6 rotate-[-1.5deg]">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-xs uppercase">Live feed</div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse-slow" /> 12 active
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    { tag: "Overflowing bin", zone: "Ward 4 · Maple St", status: "Assigned" },
                    { tag: "Illegal dump", zone: "Ward 9 · Riverside", status: "In progress" },
                    { tag: "Litter cluster", zone: "Ward 2 · Market Sq", status: "Resolved" },
                  ].map((it, i) => (
                    <li key={i} className="border-2 border-ink-950 bg-sand-100 p-3 flex items-center justify-between">
                      <div>
                        <div className="font-display font-bold">{it.tag}</div>
                        <div className="font-mono text-xs">{it.zone}</div>
                      </div>
                      <span className="font-mono text-xs uppercase bg-forest-300 border-2 border-ink-950 px-2 py-0.5">
                        {it.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b-4 border-ink-950 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider">// How it works</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-2">
                Three steps. Real impact.
              </h2>
            </div>
            <p className="max-w-md text-ink-950/70">
              A closed loop between citizens, crews, and admins — no more lost tickets,
              no more guesswork.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="bg-sand-50 border-4 border-ink-950 brutal-shadow p-6"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="font-mono text-sm">{s.n}</div>
                <h3 className="font-display font-bold text-2xl mt-2">{s.title}</h3>
                <p className="mt-3 text-ink-950/80">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b-4 border-ink-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-wider">// Features</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-2">
              Built for the people who keep the city clean.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-sand-50 border-2 border-ink-950 p-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:brutal-shadow-sm transition-transform"
              >
                <div className="w-12 h-12 bg-forest-300 border-2 border-ink-950 grid place-items-center">
                  <f.icon className="w-5 h-5 text-ink-950" />
                </div>
                <h3 className="mt-4 font-display font-bold text-xl">{f.title}</h3>
                <p className="mt-2 text-ink-950/70 text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-4 border-ink-950 bg-forest-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Zap className="w-8 h-8" />
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl">
              Bring CleanCity to your municipality.
            </h2>
            <p className="mt-4 max-w-lg text-ink-950/80">
              Free to start. Onboard citizens, register your crews, and dispatch in days
              — not months.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link to="/signup">
              <Button variant="brutal-outline" size="lg">
                Create your account <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="brutal" size="lg">Sign in</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
