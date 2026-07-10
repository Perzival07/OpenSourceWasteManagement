# Project Structure

```
OpenSourceWasteManagement
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .tanstack
│   └── tmp
├── AGENTS.md
├── backend
│   └── seed_demo_users.py
├── bunfig.toml
├── components.json
├── eslint.config.js
├── package.json
├── src
│   ├── components
│   │   ├── AuthLayout.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── PortalLayout.tsx
│   │   ├── portal
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── FormField.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── PageHeader.tsx
│   │   │   ├── SelectField.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── Table.tsx
│   │   │   └── TextareaField.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── context
│   │   └── AuthContext.tsx
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   ├── useApi.ts
│   │   └── useSocket.ts
│   ├── lib
│   │   ├── api.ts
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   ├── routes
│   │   ├── README.md
│   │   ├── __root.tsx
│   │   ├── admin.analytics.tsx
│   │   ├── admin.index.tsx
│   │   ├── admin.reports.tsx
│   │   ├── admin.tsx
│   │   ├── admin.users.tsx
│   │   ├── admin.zones.tsx
│   │   ├── citizen.index.tsx
│   │   ├── citizen.new.tsx
│   │   ├── citizen.notifications.tsx
│   │   ├── citizen.reports.tsx
│   │   ├── citizen.schedule.tsx
│   │   ├── citizen.tsx
│   │   ├── collector.history.tsx
│   │   ├── collector.index.tsx
│   │   ├── collector.map.tsx
│   │   ├── collector.schedule.tsx
│   │   ├── collector.tasks.tsx
│   │   ├── collector.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   └── unauthorized.tsx
│   ├── server.ts
│   ├── start.ts
│   ├── styles.css
│   └── utils
│       └── helpers.ts
├── tsconfig.json
└── vite.config.ts
```

# File Contents

## `.env`

```text
VITE_API_URL=http://localhost:8000
VITE_REALTIME_URL=http://localhost:4000

```

## `.gitignore`

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
.output
.vinxi
.tanstack/**
.nitro
*.local

# Wrangler / Cloudflare
.wrangler/
.dev.vars

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

## `.prettierignore`

```text
node_modules
dist
.output
.vinxi
pnpm-lock.yaml
package-lock.json
bun.lock
routeTree.gen.ts

```

## `.prettierrc`

```text
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all"
}

```

## `AGENTS.md`

```markdown
<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

```

## `bunfig.toml`

```toml
[install]
# 24h supply-chain guard: skip package versions published less than a day ago.
minimumReleaseAge = 86400
# Each entry bypasses the 24h guard for one package — confirm with the user
# before adding any.
minimumReleaseAgeExcludes = ["@lovable.dev/vite-tanstack-config", "@lovable.dev/mcp-js", "@lovable.dev/vite-plugin-dev-server-bridge", "@lovable.dev/vite-plugin-hmr-gate"]

```

## `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "src/styles.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}

```

## `eslint.config.js`

```javascript
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);

```

## `package.json`

```json
{
  "name": "tanstack_start_ts",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@fontsource/dm-mono": "^5.2.7",
    "@fontsource/dm-sans": "^5.2.8",
    "@fontsource/syne": "^5.2.7",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-query": "^5.83.0",
    "@tanstack/react-router": "^1.168.25",
    "@tanstack/react-start": "^1.167.50",
    "@tanstack/router-plugin": "^1.167.28",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.460.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.15.4",
    "socket.io-client": "^4.8.3",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@lovable.dev/vite-tanstack-config": "2.5.3",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.2.0",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "nitro": "3.0.260603-beta",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^8.0.16"
  }
}

```

## `tsconfig.json`

```json
{
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts", "eslint.config.js"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": false,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

## `vite.config.ts`

```typescript
// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

```

## `backend\seed_demo_users.py`

```python
"""
Seed demo users for local CleanCity development.

Creates one account per role (citizen, collector, admin) so the frontend
can sign in immediately against a fresh database.

Usage
-----
    # from your FastAPI project root, with the app's virtualenv active:
    python -m backend.seed_demo_users
    # or
    python backend/seed_demo_users.py

Environment
-----------
    DATABASE_URL   SQLAlchemy URL (defaults to sqlite:///./cleancity.db)
    SEED_PASSWORD  Override the default password ("Password123!")

Assumptions
-----------
- A SQLAlchemy `User` model exists at `app.models.user.User` with at least:
    id, email, hashed_password, display_name, phone_number,
    role (str/enum: citizen|collector|admin), zone (nullable), is_active.
- A password hasher exposed as `app.core.security.hash_password`.
- A session factory `SessionLocal` exposed at `app.db.session.SessionLocal`.

If your project lays things out differently, tweak the three imports in
`_load_app_bindings()` below — the rest of the script is generic.
"""

from __future__ import annotations

import os
import sys
from dataclasses import dataclass
from typing import Callable, Iterable


DEFAULT_PASSWORD = os.environ.get("SEED_PASSWORD", "Password123!")


@dataclass(frozen=True)
class DemoUser:
    email: str
    display_name: str
    role: str
    phone_number: str | None = None
    zone: str | None = None


DEMO_USERS: tuple[DemoUser, ...] = (
    DemoUser(
        email="citizen@demo.cleancity.dev",
        display_name="Casey Citizen",
        role="citizen",
        phone_number="+15550100001",
    ),
    DemoUser(
        email="collector@demo.cleancity.dev",
        display_name="Cory Collector",
        role="collector",
        phone_number="+15550100002",
        zone="Ward 4",
    ),
    DemoUser(
        email="admin@demo.cleancity.dev",
        display_name="Avery Admin",
        role="admin",
        phone_number="+15550100003",
    ),
)


def _load_app_bindings():
    """Import the app's User model, password hasher, token issuer, and session factory.

    `create_access_token` should return a signed JWT whose payload includes
    at least `sub` and `role` claims. Adjust paths to match your project.
    """
    try:
        from app.models.user import User  # type: ignore
        from app.core.security import hash_password, create_access_token  # type: ignore
        from app.db.session import SessionLocal  # type: ignore
    except ImportError as exc:  # pragma: no cover
        raise SystemExit(
            "Could not import app bindings. Edit _load_app_bindings() in "
            f"seed_demo_users.py to match your project layout. ({exc})"
        )
    return User, hash_password, create_access_token, SessionLocal


def _upsert(session, User, hash_password: Callable[[str], str], user: DemoUser) -> str:
    """Insert the user if absent, otherwise reset password + role. Returns action label."""
    existing = session.query(User).filter(User.email == user.email).one_or_none()
    hashed = hash_password(DEFAULT_PASSWORD)

    if existing is None:
        row = User(
            email=user.email,
            hashed_password=hashed,
            display_name=user.display_name,
            phone_number=user.phone_number,
            role=user.role,
            zone=user.zone,
            is_active=True,
        )
        session.add(row)
        return "created"

    existing.hashed_password = hashed
    existing.display_name = user.display_name
    existing.phone_number = user.phone_number
    existing.role = user.role
    existing.zone = user.zone
    existing.is_active = True
    return "updated"


def _decode_unverified(token: str) -> dict:
    """Best-effort decode of a JWT payload for display only (no signature check)."""
    import base64, json
    try:
        payload_b64 = token.split(".")[1]
        payload_b64 += "=" * (-len(payload_b64) % 4)
        return json.loads(base64.urlsafe_b64decode(payload_b64.encode()))
    except Exception:
        return {}


def seed(users: Iterable[DemoUser] = DEMO_USERS) -> None:
    User, hash_password, create_access_token, SessionLocal = _load_app_bindings()

    with SessionLocal() as session:
        results: list[tuple[DemoUser, str, str, dict]] = []
        for u in users:
            action = _upsert(session, User, hash_password, u)
            results.append((u, action, "", {}))
        session.commit()

        # Re-fetch to get persisted ids, then mint a JWT per user.
        minted: list[tuple[DemoUser, str, str, dict]] = []
        for u, action, _, _ in results:
            row = session.query(User).filter(User.email == u.email).one()
            try:
                token = create_access_token(
                    {"sub": str(row.id), "role": row.role, "email": row.email}
                )
            except TypeError:
                # Some implementations take (subject, role=...) instead of a dict.
                token = create_access_token(str(row.id), role=row.role)  # type: ignore[misc]
            minted.append((u, action, token, _decode_unverified(token)))

    print("\nCleanCity demo accounts ready:")
    print("-" * 72)
    print(f"{'ROLE':<10} {'EMAIL':<36} {'PASSWORD':<16} STATUS")
    print("-" * 72)
    for u, action, _, _ in minted:
        print(f"{u.role:<10} {u.email:<36} {DEFAULT_PASSWORD:<16} {action}")
    print("-" * 72)

    print("\nDemo JWT tokens (paste into Authorization: Bearer <token>):")
    for u, _, token, claims in minted:
        print("\n" + "=" * 72)
        print(f"{u.role.upper()}  —  {u.email}")
        print(f"  expected route: /{u.role}")
        if claims:
            shown = {k: claims.get(k) for k in ("sub", "role", "email", "exp") if k in claims}
            print(f"  claims: {shown}")
        print(f"  token: {token}")
    print("=" * 72)
    print("\nSign in at http://localhost:3000/login or test directly with curl:")
    print("  curl -H 'Authorization: Bearer <token>' http://localhost:8000/users/me\n")


if __name__ == "__main__":
    try:
        seed()
    except SystemExit:
        raise
    except Exception as exc:  # pragma: no cover
        print(f"Seed failed: {exc}", file=sys.stderr)
        sys.exit(1)

```

## `src\router.tsx`

```typescript
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

```

## `src\routeTree.gen.ts`

```typescript
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as UnauthorizedRouteImport } from './routes/unauthorized'
import { Route as SignupRouteImport } from './routes/signup'
import { Route as LoginRouteImport } from './routes/login'
import { Route as CollectorRouteImport } from './routes/collector'
import { Route as CitizenRouteImport } from './routes/citizen'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CollectorIndexRouteImport } from './routes/collector.index'
import { Route as CitizenIndexRouteImport } from './routes/citizen.index'
import { Route as AdminIndexRouteImport } from './routes/admin.index'
import { Route as CollectorTasksRouteImport } from './routes/collector.tasks'
import { Route as CollectorScheduleRouteImport } from './routes/collector.schedule'
import { Route as CollectorMapRouteImport } from './routes/collector.map'
import { Route as CollectorHistoryRouteImport } from './routes/collector.history'
import { Route as CitizenScheduleRouteImport } from './routes/citizen.schedule'
import { Route as CitizenReportsRouteImport } from './routes/citizen.reports'
import { Route as CitizenNotificationsRouteImport } from './routes/citizen.notifications'
import { Route as CitizenNewRouteImport } from './routes/citizen.new'
import { Route as AdminZonesRouteImport } from './routes/admin.zones'
import { Route as AdminUsersRouteImport } from './routes/admin.users'
import { Route as AdminReportsRouteImport } from './routes/admin.reports'
import { Route as AdminAnalyticsRouteImport } from './routes/admin.analytics'

const UnauthorizedRoute = UnauthorizedRouteImport.update({
  id: '/unauthorized',
  path: '/unauthorized',
  getParentRoute: () => rootRouteImport,
} as any)
const SignupRoute = SignupRouteImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRouteImport,
} as any)
const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const CollectorRoute = CollectorRouteImport.update({
  id: '/collector',
  path: '/collector',
  getParentRoute: () => rootRouteImport,
} as any)
const CitizenRoute = CitizenRouteImport.update({
  id: '/citizen',
  path: '/citizen',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminRoute = AdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const CollectorIndexRoute = CollectorIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CollectorRoute,
} as any)
const CitizenIndexRoute = CitizenIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CitizenRoute,
} as any)
const AdminIndexRoute = AdminIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)
const CollectorTasksRoute = CollectorTasksRouteImport.update({
  id: '/tasks',
  path: '/tasks',
  getParentRoute: () => CollectorRoute,
} as any)
const CollectorScheduleRoute = CollectorScheduleRouteImport.update({
  id: '/schedule',
  path: '/schedule',
  getParentRoute: () => CollectorRoute,
} as any)
const CollectorMapRoute = CollectorMapRouteImport.update({
  id: '/map',
  path: '/map',
  getParentRoute: () => CollectorRoute,
} as any)
const CollectorHistoryRoute = CollectorHistoryRouteImport.update({
  id: '/history',
  path: '/history',
  getParentRoute: () => CollectorRoute,
} as any)
const CitizenScheduleRoute = CitizenScheduleRouteImport.update({
  id: '/schedule',
  path: '/schedule',
  getParentRoute: () => CitizenRoute,
} as any)
const CitizenReportsRoute = CitizenReportsRouteImport.update({
  id: '/reports',
  path: '/reports',
  getParentRoute: () => CitizenRoute,
} as any)
const CitizenNotificationsRoute = CitizenNotificationsRouteImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => CitizenRoute,
} as any)
const CitizenNewRoute = CitizenNewRouteImport.update({
  id: '/new',
  path: '/new',
  getParentRoute: () => CitizenRoute,
} as any)
const AdminZonesRoute = AdminZonesRouteImport.update({
  id: '/zones',
  path: '/zones',
  getParentRoute: () => AdminRoute,
} as any)
const AdminUsersRoute = AdminUsersRouteImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => AdminRoute,
} as any)
const AdminReportsRoute = AdminReportsRouteImport.update({
  id: '/reports',
  path: '/reports',
  getParentRoute: () => AdminRoute,
} as any)
const AdminAnalyticsRoute = AdminAnalyticsRouteImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => AdminRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/citizen': typeof CitizenRouteWithChildren
  '/collector': typeof CollectorRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/unauthorized': typeof UnauthorizedRoute
  '/admin/analytics': typeof AdminAnalyticsRoute
  '/admin/reports': typeof AdminReportsRoute
  '/admin/users': typeof AdminUsersRoute
  '/admin/zones': typeof AdminZonesRoute
  '/citizen/new': typeof CitizenNewRoute
  '/citizen/notifications': typeof CitizenNotificationsRoute
  '/citizen/reports': typeof CitizenReportsRoute
  '/citizen/schedule': typeof CitizenScheduleRoute
  '/collector/history': typeof CollectorHistoryRoute
  '/collector/map': typeof CollectorMapRoute
  '/collector/schedule': typeof CollectorScheduleRoute
  '/collector/tasks': typeof CollectorTasksRoute
  '/admin/': typeof AdminIndexRoute
  '/citizen/': typeof CitizenIndexRoute
  '/collector/': typeof CollectorIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/unauthorized': typeof UnauthorizedRoute
  '/admin/analytics': typeof AdminAnalyticsRoute
  '/admin/reports': typeof AdminReportsRoute
  '/admin/users': typeof AdminUsersRoute
  '/admin/zones': typeof AdminZonesRoute
  '/citizen/new': typeof CitizenNewRoute
  '/citizen/notifications': typeof CitizenNotificationsRoute
  '/citizen/reports': typeof CitizenReportsRoute
  '/citizen/schedule': typeof CitizenScheduleRoute
  '/collector/history': typeof CollectorHistoryRoute
  '/collector/map': typeof CollectorMapRoute
  '/collector/schedule': typeof CollectorScheduleRoute
  '/collector/tasks': typeof CollectorTasksRoute
  '/admin': typeof AdminIndexRoute
  '/citizen': typeof CitizenIndexRoute
  '/collector': typeof CollectorIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/citizen': typeof CitizenRouteWithChildren
  '/collector': typeof CollectorRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/unauthorized': typeof UnauthorizedRoute
  '/admin/analytics': typeof AdminAnalyticsRoute
  '/admin/reports': typeof AdminReportsRoute
  '/admin/users': typeof AdminUsersRoute
  '/admin/zones': typeof AdminZonesRoute
  '/citizen/new': typeof CitizenNewRoute
  '/citizen/notifications': typeof CitizenNotificationsRoute
  '/citizen/reports': typeof CitizenReportsRoute
  '/citizen/schedule': typeof CitizenScheduleRoute
  '/collector/history': typeof CollectorHistoryRoute
  '/collector/map': typeof CollectorMapRoute
  '/collector/schedule': typeof CollectorScheduleRoute
  '/collector/tasks': typeof CollectorTasksRoute
  '/admin/': typeof AdminIndexRoute
  '/citizen/': typeof CitizenIndexRoute
  '/collector/': typeof CollectorIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/admin'
    | '/citizen'
    | '/collector'
    | '/login'
    | '/signup'
    | '/unauthorized'
    | '/admin/analytics'
    | '/admin/reports'
    | '/admin/users'
    | '/admin/zones'
    | '/citizen/new'
    | '/citizen/notifications'
    | '/citizen/reports'
    | '/citizen/schedule'
    | '/collector/history'
    | '/collector/map'
    | '/collector/schedule'
    | '/collector/tasks'
    | '/admin/'
    | '/citizen/'
    | '/collector/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/signup'
    | '/unauthorized'
    | '/admin/analytics'
    | '/admin/reports'
    | '/admin/users'
    | '/admin/zones'
    | '/citizen/new'
    | '/citizen/notifications'
    | '/citizen/reports'
    | '/citizen/schedule'
    | '/collector/history'
    | '/collector/map'
    | '/collector/schedule'
    | '/collector/tasks'
    | '/admin'
    | '/citizen'
    | '/collector'
  id:
    | '__root__'
    | '/'
    | '/admin'
    | '/citizen'
    | '/collector'
    | '/login'
    | '/signup'
    | '/unauthorized'
    | '/admin/analytics'
    | '/admin/reports'
    | '/admin/users'
    | '/admin/zones'
    | '/citizen/new'
    | '/citizen/notifications'
    | '/citizen/reports'
    | '/citizen/schedule'
    | '/collector/history'
    | '/collector/map'
    | '/collector/schedule'
    | '/collector/tasks'
    | '/admin/'
    | '/citizen/'
    | '/collector/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRouteWithChildren
  CitizenRoute: typeof CitizenRouteWithChildren
  CollectorRoute: typeof CollectorRouteWithChildren
  LoginRoute: typeof LoginRoute
  SignupRoute: typeof SignupRoute
  UnauthorizedRoute: typeof UnauthorizedRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/unauthorized': {
      id: '/unauthorized'
      path: '/unauthorized'
      fullPath: '/unauthorized'
      preLoaderRoute: typeof UnauthorizedRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collector': {
      id: '/collector'
      path: '/collector'
      fullPath: '/collector'
      preLoaderRoute: typeof CollectorRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/citizen': {
      id: '/citizen'
      path: '/citizen'
      fullPath: '/citizen'
      preLoaderRoute: typeof CitizenRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collector/': {
      id: '/collector/'
      path: '/'
      fullPath: '/collector/'
      preLoaderRoute: typeof CollectorIndexRouteImport
      parentRoute: typeof CollectorRoute
    }
    '/citizen/': {
      id: '/citizen/'
      path: '/'
      fullPath: '/citizen/'
      preLoaderRoute: typeof CitizenIndexRouteImport
      parentRoute: typeof CitizenRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminIndexRouteImport
      parentRoute: typeof AdminRoute
    }
    '/collector/tasks': {
      id: '/collector/tasks'
      path: '/tasks'
      fullPath: '/collector/tasks'
      preLoaderRoute: typeof CollectorTasksRouteImport
      parentRoute: typeof CollectorRoute
    }
    '/collector/schedule': {
      id: '/collector/schedule'
      path: '/schedule'
      fullPath: '/collector/schedule'
      preLoaderRoute: typeof CollectorScheduleRouteImport
      parentRoute: typeof CollectorRoute
    }
    '/collector/map': {
      id: '/collector/map'
      path: '/map'
      fullPath: '/collector/map'
      preLoaderRoute: typeof CollectorMapRouteImport
      parentRoute: typeof CollectorRoute
    }
    '/collector/history': {
      id: '/collector/history'
      path: '/history'
      fullPath: '/collector/history'
      preLoaderRoute: typeof CollectorHistoryRouteImport
      parentRoute: typeof CollectorRoute
    }
    '/citizen/schedule': {
      id: '/citizen/schedule'
      path: '/schedule'
      fullPath: '/citizen/schedule'
      preLoaderRoute: typeof CitizenScheduleRouteImport
      parentRoute: typeof CitizenRoute
    }
    '/citizen/reports': {
      id: '/citizen/reports'
      path: '/reports'
      fullPath: '/citizen/reports'
      preLoaderRoute: typeof CitizenReportsRouteImport
      parentRoute: typeof CitizenRoute
    }
    '/citizen/notifications': {
      id: '/citizen/notifications'
      path: '/notifications'
      fullPath: '/citizen/notifications'
      preLoaderRoute: typeof CitizenNotificationsRouteImport
      parentRoute: typeof CitizenRoute
    }
    '/citizen/new': {
      id: '/citizen/new'
      path: '/new'
      fullPath: '/citizen/new'
      preLoaderRoute: typeof CitizenNewRouteImport
      parentRoute: typeof CitizenRoute
    }
    '/admin/zones': {
      id: '/admin/zones'
      path: '/zones'
      fullPath: '/admin/zones'
      preLoaderRoute: typeof AdminZonesRouteImport
      parentRoute: typeof AdminRoute
    }
    '/admin/users': {
      id: '/admin/users'
      path: '/users'
      fullPath: '/admin/users'
      preLoaderRoute: typeof AdminUsersRouteImport
      parentRoute: typeof AdminRoute
    }
    '/admin/reports': {
      id: '/admin/reports'
      path: '/reports'
      fullPath: '/admin/reports'
      preLoaderRoute: typeof AdminReportsRouteImport
      parentRoute: typeof AdminRoute
    }
    '/admin/analytics': {
      id: '/admin/analytics'
      path: '/analytics'
      fullPath: '/admin/analytics'
      preLoaderRoute: typeof AdminAnalyticsRouteImport
      parentRoute: typeof AdminRoute
    }
  }
}

interface AdminRouteChildren {
  AdminAnalyticsRoute: typeof AdminAnalyticsRoute
  AdminReportsRoute: typeof AdminReportsRoute
  AdminUsersRoute: typeof AdminUsersRoute
  AdminZonesRoute: typeof AdminZonesRoute
  AdminIndexRoute: typeof AdminIndexRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminAnalyticsRoute: AdminAnalyticsRoute,
  AdminReportsRoute: AdminReportsRoute,
  AdminUsersRoute: AdminUsersRoute,
  AdminZonesRoute: AdminZonesRoute,
  AdminIndexRoute: AdminIndexRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface CitizenRouteChildren {
  CitizenNewRoute: typeof CitizenNewRoute
  CitizenNotificationsRoute: typeof CitizenNotificationsRoute
  CitizenReportsRoute: typeof CitizenReportsRoute
  CitizenScheduleRoute: typeof CitizenScheduleRoute
  CitizenIndexRoute: typeof CitizenIndexRoute
}

const CitizenRouteChildren: CitizenRouteChildren = {
  CitizenNewRoute: CitizenNewRoute,
  CitizenNotificationsRoute: CitizenNotificationsRoute,
  CitizenReportsRoute: CitizenReportsRoute,
  CitizenScheduleRoute: CitizenScheduleRoute,
  CitizenIndexRoute: CitizenIndexRoute,
}

const CitizenRouteWithChildren =
  CitizenRoute._addFileChildren(CitizenRouteChildren)

interface CollectorRouteChildren {
  CollectorHistoryRoute: typeof CollectorHistoryRoute
  CollectorMapRoute: typeof CollectorMapRoute
  CollectorScheduleRoute: typeof CollectorScheduleRoute
  CollectorTasksRoute: typeof CollectorTasksRoute
  CollectorIndexRoute: typeof CollectorIndexRoute
}

const CollectorRouteChildren: CollectorRouteChildren = {
  CollectorHistoryRoute: CollectorHistoryRoute,
  CollectorMapRoute: CollectorMapRoute,
  CollectorScheduleRoute: CollectorScheduleRoute,
  CollectorTasksRoute: CollectorTasksRoute,
  CollectorIndexRoute: CollectorIndexRoute,
}

const CollectorRouteWithChildren = CollectorRoute._addFileChildren(
  CollectorRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  CitizenRoute: CitizenRouteWithChildren,
  CollectorRoute: CollectorRouteWithChildren,
  LoginRoute: LoginRoute,
  SignupRoute: SignupRoute,
  UnauthorizedRoute: UnauthorizedRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}

```

## `src\server.ts`

```typescript
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

```

## `src\start.ts`

```typescript
import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));

```

## `src\styles.css`

```css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@import "@fontsource/syne/500.css";
@import "@fontsource/syne/600.css";
@import "@fontsource/syne/700.css";
@import "@fontsource/syne/800.css";
@import "@fontsource/dm-sans/400.css";
@import "@fontsource/dm-sans/500.css";
@import "@fontsource/dm-sans/700.css";
@import "@fontsource/dm-mono/400.css";
@import "@fontsource/dm-mono/500.css";

@custom-variant dark (&:is(.dark *));

@theme {
  --font-display: "Syne", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --font-mono: "DM Mono", monospace;

  --color-forest-50: #f0faf0;
  --color-forest-100: #d9f2da;
  --color-forest-200: #b2e5b6;
  --color-forest-300: #7dd183;
  --color-forest-400: #4db857;
  --color-forest-500: #2d9e38;
  --color-forest-600: #1e7e2a;
  --color-forest-700: #165f20;
  --color-forest-800: #114a19;
  --color-forest-900: #0c3812;
  --color-forest-950: #061d09;

  --color-sand-50: #fafaf5;
  --color-sand-100: #f4f4e8;
  --color-sand-200: #e8e8ce;
  --color-sand-300: #d8d8ae;
  --color-sand-400: #c4c48a;
  --color-sand-500: #aeae6a;
  --color-sand-600: #969654;
  --color-sand-700: #787842;
  --color-sand-800: #5e5e34;
  --color-sand-900: #4a4a28;

  --color-ink-950: #0a0f0a;

  --animate-fade-up: fadeUp 0.6s ease forwards;
  --animate-fade-in: fadeIn 0.5s ease forwards;
  --animate-slide-right: slideRight 0.5s ease forwards;
  --animate-pulse-slow: pulse 3s ease-in-out infinite;

  --background-image-noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(24px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes slideRight {
  0% { opacity: 0; transform: translateX(-16px); }
  100% { opacity: 1; transform: translateX(0); }
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 0.625rem;
  --background: #fafaf5;
  --foreground: #0a0f0a;
  --card: #ffffff;
  --card-foreground: #0a0f0a;
  --popover: #ffffff;
  --popover-foreground: #0a0f0a;
  --primary: #1e7e2a;
  --primary-foreground: #fafaf5;
  --secondary: #f4f4e8;
  --secondary-foreground: #0c3812;
  --muted: #f4f4e8;
  --muted-foreground: #5e5e34;
  --accent: #d9f2da;
  --accent-foreground: #0c3812;
  --destructive: #c93636;
  --destructive-foreground: #fafaf5;
  --border: #e8e8ce;
  --input: #e8e8ce;
  --ring: #2d9e38;
}

@layer base {
  * { border-color: var(--color-border); }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); letter-spacing: -0.02em; }
}

@utility brutal-shadow {
  box-shadow: 8px 8px 0 0 #0a0f0a;
}
@utility brutal-shadow-sm {
  box-shadow: 4px 4px 0 0 #0a0f0a;
}

```

## `src\components\AuthLayout.tsx`

```typescript
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  subtitle?: string;
  message?: string;
  children: ReactNode;
}

export function AuthLayout({ title, subtitle, message, children }: Props) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-sand-50">
      {/* Left panel — neo-brutalist */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-forest-500 border-r-4 border-ink-950 overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />
        <Link to="/" className="relative flex items-center gap-3 z-10">
          <div className="w-12 h-12 rounded-md bg-sand-50 border-2 border-ink-950 grid place-items-center brutal-shadow-sm">
            <span className="font-display font-bold text-ink-950 text-2xl">C</span>
          </div>
          <span className="font-display font-bold text-2xl text-ink-950">CleanCity</span>
        </Link>

        <div className="relative z-10 space-y-6">
          <div className="inline-block bg-sand-50 border-2 border-ink-950 px-3 py-1 brutal-shadow-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-950">
              {subtitle || "Civic platform"}
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl text-ink-950 leading-[0.95]">
            {message || "Cleaner streets.\nFaster response.\nReal accountability."}
          </h2>
          <p className="text-ink-950/80 max-w-md font-medium">
            Citizens report. Collectors respond. Admins coordinate. One platform, one
            cleaner city.
          </p>
        </div>

        <div className="relative z-10 flex gap-3">
          <div className="w-16 h-2 bg-ink-950" />
          <div className="w-8 h-2 bg-ink-950/40" />
          <div className="w-4 h-2 bg-ink-950/20" />
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-md bg-forest-500 border-2 border-ink-950 grid place-items-center brutal-shadow-sm">
              <span className="font-display font-bold text-ink-950">C</span>
            </div>
            <span className="font-display font-bold text-xl text-ink-950">CleanCity</span>
          </Link>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-950">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 text-ink-950/70">{subtitle}</p>
          ) : null}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

```

## `src\components\Footer.tsx`

```typescript
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-sand-100 border-t-2 border-ink-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-forest-500 border-2 border-sand-50 grid place-items-center">
              <span className="font-display font-bold text-ink-950 text-lg">C</span>
            </div>
            <span className="font-display font-bold text-xl">CleanCity</span>
          </div>
          <p className="mt-4 max-w-md text-sand-300 text-sm">
            A role-based urban waste management platform connecting citizens, collectors, and city administrators.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-sand-300">
            <li><a href="#features" className="hover:text-sand-50">Features</a></li>
            <li><a href="#how" className="hover:text-sand-50">How it works</a></li>
            <li><Link to="/signup" className="hover:text-sand-50">Get started</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Account</h4>
          <ul className="space-y-2 text-sm text-sand-300">
            <li><Link to="/login" className="hover:text-sand-50">Sign in</Link></li>
            <li><Link to="/signup" className="hover:text-sand-50">Sign up</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-900/40 py-4 text-center text-xs text-sand-400">
        © {new Date().getFullYear()} CleanCity. Built for cleaner cities.
      </div>
    </footer>
  );
}

```

## `src\components\Navbar.tsx`

```typescript
import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/portal/Button";
import { classNames } from "@/utils/helpers";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLanding = path === "/";

  return (
    <header
      className={classNames(
        "sticky top-0 z-40 transition-all",
        scrolled || !isLanding
          ? "bg-sand-50/95 backdrop-blur border-b-2 border-ink-950"
          : "bg-transparent border-b-2 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md bg-forest-500 border-2 border-ink-950 grid place-items-center brutal-shadow-sm">
            <span className="font-display font-bold text-ink-950 text-lg">C</span>
          </div>
          <span className="font-display font-bold text-xl text-ink-950">CleanCity</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#how" className="font-medium text-ink-950 hover:underline underline-offset-4">How it works</a>
          <a href="#features" className="font-medium text-ink-950 hover:underline underline-offset-4">Features</a>
          <Link to="/login" className="font-medium text-ink-950 hover:underline underline-offset-4">Sign in</Link>
          <Link to="/signup">
            <Button variant="brutal" size="sm">Get started</Button>
          </Link>
        </nav>

        <button
          className="md:hidden p-2 border-2 border-ink-950 rounded-md bg-sand-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t-2 border-ink-950 bg-sand-50 px-4 py-4 flex flex-col gap-3">
          <a href="#how" onClick={() => setOpen(false)} className="font-medium">How it works</a>
          <a href="#features" onClick={() => setOpen(false)} className="font-medium">Features</a>
          <Link to="/login" className="font-medium">Sign in</Link>
          <Link to="/signup"><Button variant="brutal" size="sm" className="w-full">Get started</Button></Link>
        </div>
      ) : null}
    </header>
  );
}

```

## `src\components\PortalLayout.tsx`

```typescript
import { Link, Outlet, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { classNames, getRoleColors } from "@/utils/helpers";

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface Props {
  role: "citizen" | "collector" | "admin";
  items: NavItem[];
  brandLabel?: string;
}

export function PortalLayout({ role, items, brandLabel }: Props) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const colors = getRoleColors(role);

  useEffect(() => {
    setSidebarOpen(false);
  }, [path]);

  const handleLogout = () => {
    logout();
    router.navigate({ to: "/login" });
  };

  return (
    <div className="min-h-screen bg-sand-50 flex">
      {/* Overlay */}
      {sidebarOpen ? (
        <div
          className="fixed inset-0 bg-ink-950/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      {/* Sidebar */}
      <aside
        className={classNames(
          "fixed lg:static z-40 inset-y-0 left-0 w-64 bg-card border-r border-border flex flex-col transition-transform",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-16 px-5 flex items-center gap-2 border-b border-border">
          <div className="w-8 h-8 rounded-md bg-forest-500 grid place-items-center">
            <span className="font-display font-bold text-ink-950">C</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display font-bold text-ink-950 leading-none">CleanCity</div>
            <div className={classNames("text-[10px] uppercase tracking-wider mt-0.5 inline-block px-1.5 rounded", colors.bg, colors.text)}>
              {brandLabel || role} portal
            </div>
          </div>
          <button
            className="lg:hidden p-1.5 rounded-md hover:bg-sand-100"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {items.map((it) => {
            const active =
              it.to === `/${role}`
                ? path === it.to
                : path === it.to || path.startsWith(it.to + "/");
            return (
              <Link
                key={it.to}
                to={it.to}
                className={classNames(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  active
                    ? "bg-forest-100 text-forest-900"
                    : "text-muted-foreground hover:bg-sand-100 hover:text-foreground"
                )}
              >
                <it.icon className="w-4 h-4" />
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-sand-100 hover:text-foreground"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 bg-card border-b border-border px-4 md:px-6 flex items-center justify-between sticky top-0 z-20">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-sand-100"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-full hover:bg-sand-100" aria-label="Notifications">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-sand-100"
              >
                <div className={classNames("w-8 h-8 rounded-full grid place-items-center text-xs font-bold", colors.bg, colors.text)}>
                  {(user?.display_name || user?.email || "U").charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:block text-sm font-medium max-w-[140px] truncate">
                  {user?.display_name || user?.email || "Account"}
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              {menuOpen ? (
                <div
                  className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <div className="px-4 py-3 border-b border-border">
                    <div className="text-sm font-semibold truncate">{user?.display_name || "Account"}</div>
                    <div className="text-xs text-muted-foreground truncate">{user?.email}</div>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-sand-100">
                    Account settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

```

## `src\components\portal\Button.tsx`

```typescript
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/helpers";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "brutal" | "brutal-outline";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children?: ReactNode;
}

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-sand-50 hover:bg-forest-800 active:bg-forest-900 rounded-lg shadow-sm",
  secondary:
    "bg-sand-100 text-forest-900 hover:bg-sand-200 rounded-lg",
  ghost:
    "bg-transparent text-forest-800 hover:bg-sand-100 rounded-lg",
  danger:
    "bg-red-600 text-white hover:bg-red-700 rounded-lg",
  brutal:
    "bg-forest-500 text-ink-950 border-2 border-ink-950 brutal-shadow font-bold uppercase tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0_0_#0a0f0a] transition-transform",
  "brutal-outline":
    "bg-sand-50 text-ink-950 border-2 border-ink-950 brutal-shadow font-bold uppercase tracking-wide hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0_0_#0a0f0a] transition-transform",
};

export function Button({
  variant = "primary",
  size = "md",
  loading,
  disabled,
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={classNames(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}

```

## `src\components\portal\Card.tsx`

```typescript
import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/helpers";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Card({ className, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        "bg-card border border-border rounded-xl shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

```

## `src\components\portal\EmptyState.tsx`

```typescript
import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  body?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({ icon, title, body, action }: Props) {
  return (
    <div className="text-center py-16 px-6 bg-card border border-dashed border-border rounded-xl">
      {icon ? (
        <div className="mx-auto w-12 h-12 rounded-full bg-sand-100 text-forest-700 flex items-center justify-center mb-4">
          {icon}
        </div>
      ) : null}
      <h3 className="text-base font-semibold text-foreground font-display">{title}</h3>
      {body ? <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">{body}</p> : null}
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  );
}

```

## `src\components\portal\FormField.tsx`

```typescript
import type { InputHTMLAttributes } from "react";
import { classNames } from "@/utils/helpers";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
  hint?: string;
  brutal?: boolean;
}

export function FormField({ label, error, hint, brutal, className, id, ...rest }: Props) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className={classNames(
            "text-sm font-medium",
            brutal ? "text-ink-950 uppercase tracking-wide" : "text-foreground"
          )}
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        {...rest}
        className={classNames(
          "w-full px-3 py-2.5 text-sm bg-card placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-forest-500/50 transition",
          brutal
            ? "border-2 border-ink-950 rounded-md focus:ring-0 focus:border-ink-950 focus:shadow-[4px_4px_0_0_#0a0f0a]"
            : "border border-border rounded-lg focus:border-forest-500",
          error && (brutal ? "border-red-600" : "border-red-500"),
          className
        )}
      />
      {error ? (
        <p className="text-xs text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

```

## `src\components\portal\Modal.tsx`

```typescript
import type { ReactNode } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  title?: string;
  onClose: () => void;
  children?: ReactNode;
  footer?: ReactNode;
  maxWidth?: string;
}

export function Modal({ open, title, onClose, children, footer, maxWidth = "max-w-lg" }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className={`relative w-full ${maxWidth} bg-card rounded-2xl border border-border shadow-xl animate-fade-up`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="font-semibold text-foreground font-display">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md hover:bg-sand-100 text-muted-foreground"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-5">{children}</div>
        {footer ? <div className="px-5 py-4 border-t border-border bg-sand-50/50 rounded-b-2xl">{footer}</div> : null}
      </div>
    </div>
  );
}

```

## `src\components\portal\PageHeader.tsx`

```typescript
import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, children }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground font-display">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        ) : null}
      </div>
      {children ? <div className="flex items-center gap-2">{children}</div> : null}
    </div>
  );
}

```

## `src\components\portal\SelectField.tsx`

```typescript
import type { SelectHTMLAttributes, ReactNode } from "react";
import { classNames } from "@/utils/helpers";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | null;
  hint?: string;
  brutal?: boolean;
  children?: ReactNode;
}

export function SelectField({ label, error, hint, brutal, className, id, children, ...rest }: Props) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className={classNames(
            "text-sm font-medium",
            brutal ? "text-ink-950 uppercase tracking-wide" : "text-foreground"
          )}
        >
          {label}
        </label>
      ) : null}
      <select
        id={inputId}
        {...rest}
        className={classNames(
          "w-full px-3 py-2.5 text-sm bg-card focus:outline-none focus:ring-2 focus:ring-forest-500/50",
          brutal
            ? "border-2 border-ink-950 rounded-md focus:ring-0 focus:shadow-[4px_4px_0_0_#0a0f0a]"
            : "border border-border rounded-lg",
          error && "border-red-500",
          className
        )}
      >
        {children}
      </select>
      {error ? <p className="text-xs text-red-600">{error}</p> : hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

```

## `src\components\portal\Skeleton.tsx`

```typescript
import { classNames } from "@/utils/helpers";
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "animate-pulse bg-sand-200/60 rounded-md",
        className
      )}
    />
  );
}

```

## `src\components\portal\StatCard.tsx`

```typescript
import type { ReactNode } from "react";
import { classNames } from "@/utils/helpers";

type Accent = "forest" | "sand" | "red" | "yellow" | "blue";

const accents: Record<Accent, string> = {
  forest: "bg-forest-100 text-forest-700",
  sand: "bg-sand-100 text-sand-800",
  red: "bg-red-100 text-red-700",
  yellow: "bg-yellow-100 text-yellow-700",
  blue: "bg-blue-100 text-blue-700",
};

interface Props {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  accent?: Accent;
}

export function StatCard({ label, value, sub, icon, accent = "forest" }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
      {icon ? (
        <div
          className={classNames(
            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
            accents[accent]
          )}
        >
          {icon}
        </div>
      ) : null}
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
          {label}
        </div>
        <div className="text-2xl font-semibold text-foreground mt-1 font-display">
          {value}
        </div>
        {sub ? <div className="text-xs text-muted-foreground mt-1">{sub}</div> : null}
      </div>
    </div>
  );
}

```

## `src\components\portal\StatusBadge.tsx`

```typescript
import { classNames } from "@/utils/helpers";

const map: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  assigned: "bg-blue-100 text-blue-800 border-blue-200",
  in_progress: "bg-forest-100 text-forest-800 border-forest-200",
  resolved: "bg-forest-200 text-forest-900 border-forest-300",
  cancelled: "bg-sand-200 text-sand-900 border-sand-300",
  rejected: "bg-red-100 text-red-700 border-red-200",
  low: "bg-sand-100 text-sand-800 border-sand-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  urgent: "bg-red-100 text-red-700 border-red-200",
};

export function StatusBadge({ status }: { status?: string | null }) {
  const key = (status ?? "").toLowerCase();
  const cls = map[key] ?? "bg-sand-100 text-sand-800 border-sand-200";
  const label = (status ?? "—").replace(/_/g, " ");
  return (
    <span
      className={classNames(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize",
        cls
      )}
    >
      {label}
    </span>
  );
}

```

## `src\components\portal\Table.tsx`

```typescript
import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { classNames } from "@/utils/helpers";

export function Table({ children, className, ...rest }: HTMLAttributes<HTMLTableElement> & { children?: ReactNode }) {
  return (
    <div className="overflow-x-auto bg-card border border-border rounded-xl">
      <table {...rest} className={classNames("w-full text-sm", className)}>
        {children}
      </table>
    </div>
  );
}

export function Th({ children, className, ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      {...rest}
      className={classNames(
        "text-left px-4 py-3 text-xs uppercase tracking-wide font-medium text-muted-foreground border-b border-border bg-sand-50",
        className
      )}
    >
      {children}
    </th>
  );
}

export function Td({ children, className, ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...rest}
      className={classNames("px-4 py-3 border-b border-border/60 text-foreground", className)}
    >
      {children}
    </td>
  );
}

```

## `src\components\portal\TextareaField.tsx`

```typescript
import type { TextareaHTMLAttributes } from "react";
import { classNames } from "@/utils/helpers";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | null;
  hint?: string;
  brutal?: boolean;
}

export function TextareaField({ label, error, hint, brutal, className, id, ...rest }: Props) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={inputId}
          className={classNames(
            "text-sm font-medium",
            brutal ? "text-ink-950 uppercase tracking-wide" : "text-foreground"
          )}
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={inputId}
        {...rest}
        className={classNames(
          "w-full px-3 py-2.5 text-sm bg-card placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-forest-500/50 min-h-[100px]",
          brutal
            ? "border-2 border-ink-950 rounded-md focus:ring-0 focus:shadow-[4px_4px_0_0_#0a0f0a]"
            : "border border-border rounded-lg",
          error && "border-red-500",
          className
        )}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

```

## `src\components\ui\accordion.tsx`

```typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

```

## `src\components\ui\alert-dialog.tsx`

```typescript
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

```

## `src\components\ui\alert.tsx`

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };

```

## `src\components\ui\aspect-ratio.tsx`

```typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };

```

## `src\components\ui\avatar.tsx`

```typescript
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

```

## `src\components\ui\badge.tsx`

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

```

## `src\components\ui\breadcrumb.tsx`

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

```

## `src\components\ui\button.tsx`

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```

## `src\components\ui\calendar.tsx`

```typescript
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day,
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

```

## `src\components\ui\card.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

```

## `src\components\ui\carousel.tsx`

```typescript
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};

```

## `src\components\ui\chart.tsx`

```typescript
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload
            .filter((item) => item.type !== "none")
            .map((item, index) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`;
              const itemConfig = getPayloadConfigFromPayload(config, item, key);
              const indicatorColor = color || item.payload.fill || item.color;

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    indicator === "dot" && "items-center",
                  )}
                >
                  {formatter && item?.value !== undefined && item.name ? (
                    formatter(item.value, item.name, item, index, item.payload)
                  ) : (
                    <>
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIndicator && (
                          <div
                            className={cn(
                              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                              {
                                "h-2.5 w-2.5": indicator === "dot",
                                "w-1": indicator === "line",
                                "w-0 border-[1.5px] border-dashed bg-transparent":
                                  indicator === "dashed",
                                "my-0.5": nestLabel && indicator === "dashed",
                              },
                            )}
                            style={
                              {
                                "--color-bg": indicatorColor,
                                "--color-border": indicatorColor,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                      <div
                        className={cn(
                          "flex flex-1 justify-between leading-none",
                          nestLabel ? "items-end" : "items-center",
                        )}
                      >
                        <div className="grid gap-1.5">
                          {nestLabel ? tooltipLabel : null}
                          <span className="text-muted-foreground">
                            {itemConfig?.label || item.name}
                          </span>
                        </div>
                        {item.value && (
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {item.value.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};

```

## `src\components\ui\checkbox.tsx`

```typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

```

## `src\components\ui\collapsible.tsx`

```typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

```

## `src\components\ui\command.tsx`

```typescript
"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

```

## `src\components\ui\context-menu.tsx`

```typescript
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

```

## `src\components\ui\dialog.tsx`

```typescript
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

```

## `src\components\ui\drawer.tsx`

```typescript
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

```

## `src\components\ui\dropdown-menu.tsx`

```typescript
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

```

## `src\components\ui\form.tsx`

```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};

```

## `src\components\ui\hover-card.tsx`

```typescript
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };

```

## `src\components\ui\input-otp.tsx`

```typescript
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

```

## `src\components\ui\input.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

```

## `src\components\ui\label.tsx`

```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

```

## `src\components\ui\menubar.tsx`

```typescript
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};

```

## `src\components\ui\navigation-menu.tsx`

```typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

```

## `src\components\ui\pagination.tsx`

```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};

```

## `src\components\ui\popover.tsx`

```typescript
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

```

## `src\components\ui\progress.tsx`

```typescript
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

```

## `src\components\ui\radio-group.tsx`

```typescript
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

```

## `src\components\ui\resizable.tsx`

```typescript
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

```

## `src\components\ui\scroll-area.tsx`

```typescript
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

```

## `src\components\ui\select.tsx`

```typescript
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

```

## `src\components\ui\separator.tsx`

```typescript
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

```

## `src\components\ui\sheet.tsx`

```typescript
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

```

## `src\components\ui\sidebar.tsx`

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  ),
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ ...props }, ref) => <li ref={ref} {...props} />,
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};

```

## `src\components\ui\skeleton.tsx`

```typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
}

export { Skeleton };

```

## `src\components\ui\slider.tsx`

```typescript
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

```

## `src\components\ui\sonner.tsx`

```typescript
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

```

## `src\components\ui\switch.tsx`

```typescript
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

```

## `src\components\ui\table.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };

```

## `src\components\ui\tabs.tsx`

```typescript
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

```

## `src\components\ui\textarea.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

```

## `src\components\ui\toggle-group.tsx`

```typescript
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

```

## `src\components\ui\toggle.tsx`

```typescript
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

```

## `src\components\ui\tooltip.tsx`

```typescript
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

```

## `src\context\AuthContext.tsx`

```typescript
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  apiFetch,
  getStoredUser,
  getToken,
  setStoredUser,
  setToken,
} from "@/lib/api";

export type UserRole = "citizen" | "collector" | "admin";

export interface User {
  id?: string | number;
  email: string;
  display_name?: string;
  full_name?: string;
  phone_number?: string;
  municipality?: string;
  zone?: string;
  role: UserRole;
}

export interface SignupPayload {
  email: string;
  password: string;
  display_name: string;
  phone_number?: string;
  municipality?: string;
  zone?: string;
  role: UserRole;
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<User>;
  signup: (payload: SignupPayload) => Promise<User | null>;
  logout: () => void;
  refreshMe: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTokenState(getToken());
    setUser(getStoredUser<User>());
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setError(null);
    setLoading(true);
    try {
      const res = await apiFetch<{ access_token: string; user: User; role?: UserRole }>(
        "/auth/login",
        { method: "POST", body: { email, password }, auth: false }
      );
      const u: User = res.user ?? ({ email, role: res.role ?? "citizen" } as User);
      setToken(res.access_token);
      setStoredUser(u);
      setTokenState(res.access_token);
      setUser(u);
      return u;
    } catch (e: any) {
      setError(e?.message || "Login failed");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (payload: SignupPayload) => {
    setError(null);
    setLoading(true);
    try {
      const res = await apiFetch<any>("/auth/signup", {
        method: "POST",
        body: payload,
        auth: false,
      });
      if (res?.access_token && res?.user) {
        setToken(res.access_token);
        setStoredUser(res.user);
        setTokenState(res.access_token);
        setUser(res.user);
        return res.user as User;
      }
      return (res?.user as User) ?? null;
    } catch (e: any) {
      setError(e?.message || "Signup failed");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setStoredUser(null);
    setTokenState(null);
    setUser(null);
  }, []);

  const refreshMe = useCallback(async () => {
    if (!getToken()) return;
    try {
      const me = await apiFetch<User>("/users/me");
      setStoredUser(me);
      setUser(me);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, token, loading, error, login, signup, logout, refreshMe }),
    [user, token, loading, error, login, signup, logout, refreshMe]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

```

## `src\hooks\use-mobile.tsx`

```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

```

## `src\hooks\useApi.ts`

```typescript
import { useCallback, useEffect, useRef, useState } from "react";
import { apiFetch, type ApiOptions } from "@/lib/api";

export function useApi<T = any>(
  path: string | null,
  options: ApiOptions = {},
  deps: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!!path);
  const [error, setError] = useState<string | null>(null);
  const optsRef = useRef(options);
  optsRef.current = options;

  const fetcher = useCallback(async () => {
    if (!path) return;
    setLoading(true);
    setError(null);
    try {
      const res = await apiFetch<T>(path, optsRef.current);
      setData(res);
    } catch (e: any) {
      setError(e?.message || "Request failed");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, ...deps]);

  return { data, loading, error, refetch: fetcher, setData };
}

```

## `src\hooks\useSocket.ts`

```typescript
import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";

const URL = (import.meta as any).env?.VITE_REALTIME_URL || "http://localhost:4000";

export function useSocket(
  events: Record<string, (payload: any) => void> = {},
  enabled: boolean = true
) {
  const ref = useRef<Socket | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const socket = io(URL, { transports: ["websocket"], autoConnect: true });
    ref.current = socket;
    Object.entries(events).forEach(([evt, fn]) => socket.on(evt, fn));
    return () => {
      Object.entries(events).forEach(([evt, fn]) => socket.off(evt, fn));
      socket.disconnect();
      ref.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
  return ref;
}

```

## `src\lib\api.ts`

```typescript
export const API_URL =
  (import.meta as any).env?.VITE_API_URL || "http://localhost:8000";

const TOKEN_KEY = "cc_token";
const USER_KEY = "cc_user";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}
export function setToken(token: string | null) {
  if (typeof window === "undefined") return;
  if (token) window.localStorage.setItem(TOKEN_KEY, token);
  else window.localStorage.removeItem(TOKEN_KEY);
}
export function getStoredUser<T = any>(): T | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw) as T; } catch { return null; }
}
export function setStoredUser(user: any | null) {
  if (typeof window === "undefined") return;
  if (user) window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  else window.localStorage.removeItem(USER_KEY);
}

export class ApiError extends Error {
  status: number;
  data: any;
  constructor(message: string, status: number, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export interface ApiOptions extends Omit<RequestInit, "body"> {
  body?: any;
  auth?: boolean;
}

export async function apiFetch<T = any>(
  path: string,
  options: ApiOptions = {}
): Promise<T> {
  const { body, headers, auth = true, ...rest } = options;
  const url = path.startsWith("http") ? path : `${API_URL}${path}`;

  const finalHeaders: Record<string, string> = { ...(headers as any) };
  let finalBody: BodyInit | undefined;

  if (body instanceof FormData) {
    finalBody = body;
  } else if (body !== undefined && body !== null) {
    finalHeaders["Content-Type"] = finalHeaders["Content-Type"] || "application/json";
    finalBody = typeof body === "string" ? body : JSON.stringify(body);
  }

  if (auth) {
    const token = getToken();
    if (token) finalHeaders["Authorization"] = `Bearer ${token}`;
  }

  let res: Response;
  try {
    res = await fetch(url, { ...rest, headers: finalHeaders, body: finalBody });
  } catch (e: any) {
    throw new ApiError(e?.message || "Network error", 0);
  }

  let data: any = null;
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    data = await res.json().catch(() => null);
  } else if (res.status !== 204) {
    data = await res.text().catch(() => null);
  }

  if (!res.ok) {
    if (res.status === 401) {
      setToken(null);
      setStoredUser(null);
      if (typeof window !== "undefined" && !window.location.pathname.startsWith("/login")) {
        window.location.href = "/login";
      }
    }
    const msg =
      (data && (data.detail || data.message)) ||
      `Request failed (${res.status})`;
    throw new ApiError(typeof msg === "string" ? msg : "Request failed", res.status, data);
  }
  return data as T;
}

```

## `src\lib\error-capture.ts`

```typescript
// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

```

## `src\lib\error-page.ts`

```typescript
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}

```

## `src\lib\lovable-error-reporting.ts`

```typescript
type LovableErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovableEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: LovableErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: LovableEvents;
  }
}

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}

```

## `src\lib\utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

## `src\routes\admin.analytics.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BarChart3, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { StatCard } from "@/components/portal/StatCard";
import { Card } from "@/components/portal/Card";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { useApi } from "@/hooks/useApi";
import { classNames } from "@/utils/helpers";

export const Route = createFileRoute("/admin/analytics")({
  component: Analytics,
});

const PERIODS = [
  { key: "7d", label: "7 days" },
  { key: "30d", label: "30 days" },
  { key: "90d", label: "90 days" },
  { key: "1y", label: "1 year" },
];

function Analytics() {
  const [period, setPeriod] = useState("30d");
  const { data, loading, error } = useApi<any>(`/admin/analytics?period=${period}`, {}, [period]);
  const summary = data?.summary ?? {};
  const overTime: { date: string; count: number }[] = data?.reports_over_time ?? [];
  const byCategory: { label: string; count: number }[] = data?.by_category ?? [];
  const byStatus: { label: string; count: number }[] = data?.by_status ?? [];
  const byZone: { label: string; count: number }[] = data?.by_zone ?? [];
  const topCollectors: { name: string; count: number }[] = data?.top_collectors ?? [];

  const maxOverTime = useMemo(() => Math.max(1, ...overTime.map((d) => d.count)), [overTime]);
  const maxZone = useMemo(() => Math.max(1, ...byZone.map((d) => d.count)), [byZone]);
  const maxCollector = useMemo(() => Math.max(1, ...topCollectors.map((d) => d.count)), [topCollectors]);

  return (
    <>
      <PageHeader title="Analytics" subtitle="Operational performance across the city.">
        <div className="flex flex-wrap gap-1.5">
          {PERIODS.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={classNames(
                "px-3 py-1.5 rounded-full text-xs font-medium border",
                period === p.key
                  ? "bg-forest-700 text-sand-50 border-forest-700"
                  : "bg-card text-muted-foreground border-border hover:bg-sand-100"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </PageHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total reports" value={loading ? "—" : summary.total ?? 0} icon={<BarChart3 className="w-5 h-5" />} />
        <StatCard label="Resolved" value={loading ? "—" : summary.resolved ?? 0} icon={<CheckCircle2 className="w-5 h-5" />} accent="forest" />
        <StatCard label="Avg. resolution" value={loading ? "—" : summary.avg_resolution ?? "—"} icon={<Clock className="w-5 h-5" />} accent="yellow" />
        <StatCard
          label="Resolution rate"
          value={loading ? "—" : summary.resolution_rate != null ? `${Math.round(summary.resolution_rate)}%` : "—"}
          icon={<TrendingUp className="w-5 h-5" />}
          accent="blue"
        />
      </div>

      {error ? (
        <div className="mt-6">
          <EmptyState title="Couldn't load analytics" body={error} />
        </div>
      ) : null}

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        {/* Reports over time */}
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold">Reports over time</h3>
            <span className="text-xs text-muted-foreground">{overTime.length} buckets</span>
          </div>
          {loading ? (
            <Skeleton className="h-48 w-full" />
          ) : overTime.length === 0 ? (
            <EmptyState title="No data" body="No reports in this window." />
          ) : (
            <div className="h-48 flex items-end gap-1">
              {overTime.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className="w-full bg-forest-500/80 hover:bg-forest-600 rounded-t transition-colors relative"
                    style={{ height: `${(d.count / maxOverTime) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 bg-ink-950 text-sand-50 px-1.5 py-0.5 rounded">
                      {d.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Top collectors */}
        <Card className="p-5">
          <h3 className="font-display font-semibold mb-4">Top collectors</h3>
          {loading ? (
            <div className="space-y-2">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}</div>
          ) : topCollectors.length === 0 ? (
            <EmptyState title="No data" body="No completions yet." />
          ) : (
            <ul className="space-y-3">
              {topCollectors.slice(0, 5).map((c, i) => (
                <li key={i}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium truncate">{c.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{c.count}</span>
                  </div>
                  <div className="h-1.5 mt-1 rounded-full bg-sand-200 overflow-hidden">
                    <div className="h-full bg-forest-500" style={{ width: `${(c.count / maxCollector) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        {/* By category */}
        <Card className="p-5">
          <h3 className="font-display font-semibold mb-4">By category</h3>
          {loading ? <Skeleton className="h-40 w-full" /> : <DonutList items={byCategory} />}
        </Card>

        {/* By status */}
        <Card className="p-5">
          <h3 className="font-display font-semibold mb-4">By status</h3>
          {loading ? <Skeleton className="h-40 w-full" /> : <DonutList items={byStatus} />}
        </Card>

        {/* By zone */}
        <Card className="p-5">
          <h3 className="font-display font-semibold mb-4">By zone</h3>
          {loading ? (
            <Skeleton className="h-40 w-full" />
          ) : byZone.length === 0 ? (
            <EmptyState title="No zones" body="Set up zones to see distribution." />
          ) : (
            <ul className="space-y-3">
              {byZone.slice(0, 6).map((z, i) => (
                <li key={i}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium truncate">{z.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">{z.count}</span>
                  </div>
                  <div className="h-1.5 mt-1 rounded-full bg-sand-200 overflow-hidden">
                    <div className="h-full bg-sand-600" style={{ width: `${(z.count / maxZone) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}

const palette = ["#1e7e2a", "#4db857", "#aeae6a", "#969654", "#7dd183", "#114a19", "#d8d8ae"];

function DonutList({ items }: { items: { label: string; count: number }[] }) {
  const total = items.reduce((a, b) => a + b.count, 0);
  if (total === 0) return <EmptyState title="No data" />;

  let cum = 0;
  const stops = items.map((it, i) => {
    const start = (cum / total) * 360;
    cum += it.count;
    const end = (cum / total) * 360;
    return `${palette[i % palette.length]} ${start}deg ${end}deg`;
  });
  const gradient = `conic-gradient(${stops.join(", ")})`;

  return (
    <div className="flex items-center gap-4">
      <div
        className="w-28 h-28 rounded-full shrink-0 relative"
        style={{ background: gradient }}
      >
        <div className="absolute inset-3 rounded-full bg-card grid place-items-center">
          <div className="text-center">
            <div className="text-lg font-display font-semibold">{total}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">total</div>
          </div>
        </div>
      </div>
      <ul className="flex-1 space-y-1.5 min-w-0">
        {items.slice(0, 6).map((it, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: palette[i % palette.length] }} />
            <span className="flex-1 truncate capitalize">{it.label}</span>
            <span className="font-mono text-xs text-muted-foreground">{it.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

```

## `src\routes\admin.index.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { StatCard } from "@/components/portal/StatCard";
import { Card } from "@/components/portal/Card";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const analytics = useApi<any>("/admin/analytics?period=30d", {}, []);
  const recent = useApi<any>("/reports/?limit=6", {}, []);
  const summary = analytics.data?.summary ?? {};
  const reports: any[] = Array.isArray(recent.data) ? recent.data : recent.data?.items ?? [];

  return (
    <>
      <PageHeader title="Operations overview" subtitle="Live snapshot of the last 30 days.">
        <Link to="/admin/analytics"><Button variant="secondary">Full analytics</Button></Link>
      </PageHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Reports (30d)"
          value={analytics.loading ? "—" : summary.total ?? 0}
          icon={<FileText className="w-5 h-5" />}
        />
        <StatCard
          label="Resolved"
          value={analytics.loading ? "—" : summary.resolved ?? 0}
          accent="forest"
          icon={<CheckCircle2 className="w-5 h-5" />}
        />
        <StatCard
          label="Avg. resolution"
          value={analytics.loading ? "—" : summary.avg_resolution ?? "—"}
          accent="yellow"
          icon={<Clock className="w-5 h-5" />}
        />
        <StatCard
          label="Resolution rate"
          value={
            analytics.loading
              ? "—"
              : summary.resolution_rate != null
              ? `${Math.round(summary.resolution_rate)}%`
              : "—"
          }
          accent="blue"
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-semibold text-lg">Recent reports</h2>
          <Link to="/admin/reports" className="text-sm text-forest-700 hover:underline">
            View all
          </Link>
        </div>
        {recent.loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
          </div>
        ) : recent.error ? (
          <EmptyState title="Couldn't load reports" body={recent.error} />
        ) : reports.length === 0 ? (
          <EmptyState icon={<FileText className="w-5 h-5" />} title="No reports yet" />
        ) : (
          <div className="space-y-2">
            {reports.slice(0, 6).map((r) => (
              <Card key={r.id} className="p-4 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      #{String(r.id).slice(0, 6)}
                    </span>
                    <StatusBadge status={r.priority || "medium"} />
                    <StatusBadge status={r.status} />
                  </div>
                  <div className="font-semibold text-foreground mt-1">
                    {r.category || r.tags?.[0] || "Report"}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {r.address || r.block || "—"}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground shrink-0">
                  {formatDate(r.created_at)}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

```

## `src\routes\admin.reports.tsx`

```typescript
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
import { apiFetch } from "@/lib/api";
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
    </>
  );
}

```

## `src\routes\admin.tsx`

```typescript
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

```

## `src\routes\admin.users.tsx`

```typescript
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

```

## `src\routes\admin.zones.tsx`

```typescript
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

```

## `src\routes\citizen.index.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Clock, Loader2, CheckCircle2, Plus } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { StatCard } from "@/components/portal/StatCard";
import { Table, Th, Td } from "@/components/portal/Table";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/")({
  component: CitizenDashboard,
});

interface Report {
  id: number | string;
  category?: string;
  tags?: string[];
  priority?: string;
  address?: string;
  block?: string;
  status?: string;
  created_at?: string;
}

function CitizenDashboard() {
  const { data, loading, error } = useApi<{ items?: Report[] } | Report[]>(
    "/reports/?limit=5",
    {},
    []
  );
  const reports: Report[] = Array.isArray(data) ? data : data?.items ?? [];

  const count = (s: string) =>
    reports.filter((r) => (r.status ?? "").toLowerCase() === s).length;

  return (
    <>
      <PageHeader title="Welcome back" subtitle="Here's what's happening with your reports">
        <Link to="/citizen/new">
          <Button><Plus className="w-4 h-4" /> New report</Button>
        </Link>
      </PageHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total" value={reports.length} icon={<FileText className="w-5 h-5" />} />
        <StatCard label="Pending" value={count("pending")} icon={<Clock className="w-5 h-5" />} accent="yellow" />
        <StatCard label="In progress" value={count("in_progress")} icon={<Loader2 className="w-5 h-5" />} accent="blue" />
        <StatCard label="Resolved" value={count("resolved")} icon={<CheckCircle2 className="w-5 h-5" />} accent="forest" />
      </div>

      <div className="mt-8">
        <h2 className="font-display font-semibold text-lg mb-3">Recent reports</h2>
        {loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
          </div>
        ) : error ? (
          <EmptyState
            title="Couldn't load reports"
            body={error}
            action={<Link to="/citizen/new"><Button>Create your first report</Button></Link>}
          />
        ) : reports.length === 0 ? (
          <EmptyState
            icon={<FileText className="w-5 h-5" />}
            title="No reports yet"
            body="Spotted a problem in your neighborhood? File your first report."
            action={<Link to="/citizen/new"><Button>New report</Button></Link>}
          />
        ) : (
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Category</Th>
                <Th>Priority</Th>
                <Th>Address</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {reports.slice(0, 5).map((r) => (
                <tr key={r.id} className="hover:bg-sand-50">
                  <Td className="font-mono text-xs">#{String(r.id).slice(0, 6)}</Td>
                  <Td>{r.category || r.tags?.[0] || "—"}</Td>
                  <Td><StatusBadge status={r.priority || "medium"} /></Td>
                  <Td className="max-w-[240px] truncate">{r.address || r.block || "—"}</Td>
                  <Td className="text-muted-foreground">{formatDate(r.created_at)}</Td>
                  <Td><StatusBadge status={r.status} /></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
}

```

## `src\routes\citizen.new.tsx`

```typescript
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Image as ImageIcon, X, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { SelectField } from "@/components/portal/SelectField";
import { TextareaField } from "@/components/portal/TextareaField";
import { Button } from "@/components/portal/Button";
import { Card } from "@/components/portal/Card";
import { apiFetch } from "@/lib/api";
import { hasErrors, validateFields, validators } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/new")({
  component: NewReport,
});

const categories = ["overflow", "litter", "illegal_dump", "missed_pickup", "hazard", "other"];
const priorities = ["low", "medium", "high", "urgent"];

function NewReport() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    category: "overflow",
    priority: "medium",
    description: "",
    address: "",
    latitude: "",
    longitude: "",
    block: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);

  const set = (k: string) => (e: any) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const detect = () => {
    if (!navigator.geolocation) {
      setSubmitError("Geolocation not supported by this browser");
      return;
    }
    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setValues((v) => ({
          ...v,
          latitude: String(pos.coords.latitude.toFixed(6)),
          longitude: String(pos.coords.longitude.toFixed(6)),
        }));
        setGeoLoading(false);
      },
      (err) => {
        setSubmitError(err.message || "Couldn't fetch your location");
        setGeoLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setPhotos((cur) => [...cur, ...files].slice(0, 4));
    e.target.value = "";
  };
  const removePhoto = (i: number) => setPhotos((cur) => cur.filter((_, j) => j !== i));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateFields(
      {
        description: [validators.required, validators.minLength(10)],
        address: validators.required,
        latitude: validators.required,
        longitude: validators.required,
      },
      values
    );
    setErrors(errs);
    if (hasErrors(errs)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const fd = new FormData();
      fd.append("message_text", values.description);
      fd.append("latitude", values.latitude);
      fd.append("longitude", values.longitude);
      fd.append("tags", [values.category, values.priority].join(","));
      if (values.block) fd.append("block", values.block);
      if (values.address) fd.append("address", values.address);
      photos.forEach((p) => fd.append("photo", p));
      await apiFetch("/reports/", { method: "POST", body: fd });
      setSuccess(true);
    } catch (err: any) {
      setSubmitError(err?.message || "Failed to submit report");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-lg mx-auto py-12">
        <Card className="p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-forest-100 text-forest-700 grid place-items-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="mt-4 font-display font-bold text-2xl">Report submitted</h2>
          <p className="mt-2 text-muted-foreground">
            Your report is in the queue. You'll be notified as it's assigned and
            resolved.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="secondary" onClick={() => { setSuccess(false); setValues((v) => ({ ...v, description: "", address: "" })); setPhotos([]); }}>
              File another
            </Button>
            <Button onClick={() => navigate({ to: "/citizen/reports" })}>
              View my reports
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <PageHeader title="New report" subtitle="Tell us what's happening — be as specific as possible." />

      {submitError ? (
        <div className="mb-4 border border-red-200 bg-red-50 p-3 text-sm text-red-700 rounded-lg">
          {submitError}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <SelectField label="Category" value={values.category} onChange={set("category")}>
              {categories.map((c) => (
                <option key={c} value={c}>{c.replace(/_/g, " ")}</option>
              ))}
            </SelectField>
            <SelectField label="Priority" value={values.priority} onChange={set("priority")}>
              {priorities.map((p) => <option key={p} value={p}>{p}</option>)}
            </SelectField>
          </div>
          <TextareaField
            label="Description"
            value={values.description}
            onChange={set("description")}
            error={errors.description}
            placeholder="What did you see? When?"
          />
          <FormField
            label="Address"
            value={values.address}
            onChange={set("address")}
            error={errors.address}
            placeholder="123 Maple St"
          />
          <div className="grid sm:grid-cols-3 gap-4 items-end">
            <FormField label="Latitude" value={values.latitude} onChange={set("latitude")} error={errors.latitude} />
            <FormField label="Longitude" value={values.longitude} onChange={set("longitude")} error={errors.longitude} />
            <Button type="button" variant="secondary" onClick={detect} loading={geoLoading}>
              <MapPin className="w-4 h-4" /> Auto-detect
            </Button>
          </div>
          <FormField label="Block (optional)" value={values.block} onChange={set("block")} placeholder="e.g. B-12" />
        </Card>

        <Card className="p-6 space-y-4">
          <div>
            <div className="text-sm font-medium">Photos</div>
            <div className="text-xs text-muted-foreground">Up to 4 images</div>
          </div>
          <label className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sand-50">
            <ImageIcon className="w-6 h-6 text-muted-foreground" />
            <div className="mt-2 text-sm font-medium">Click to upload</div>
            <div className="text-xs text-muted-foreground">PNG, JPG up to 10MB</div>
            <input type="file" accept="image/*" multiple className="hidden" onChange={onFiles} />
          </label>
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {photos.map((p, i) => {
                const url = URL.createObjectURL(p);
                return (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                    <img src={url} alt={p.name} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      className="absolute top-1 right-1 bg-ink-950/70 text-white rounded-full p-1"
                      aria-label="Remove"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}

          <Button type="submit" loading={submitting} className="w-full" size="lg">
            Submit report
          </Button>
        </Card>
      </form>
    </>
  );
}

```

## `src\routes\citizen.notifications.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Bell, CheckCheck } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { Button } from "@/components/portal/Button";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { useApi } from "@/hooks/useApi";
import { useSocket } from "@/hooks/useSocket";
import { classNames, formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/notifications")({
  component: Notifications,
});

interface Notice {
  id: string;
  title: string;
  body: string;
  status?: string;
  ts: string;
  read: boolean;
}

function Notifications() {
  const { data, loading, error } = useApi<any>("/reports/?limit=20", {}, []);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const [extra, setExtra] = useState<Notice[]>([]);
  const [read, setRead] = useState<Record<string, boolean>>({});

  const synthesised: Notice[] = useMemo(() => {
    return items.map((r) => ({
      id: `r-${r.id}`,
      title: `Report #${String(r.id).slice(0, 6)} — ${(r.status ?? "updated").replace(/_/g, " ")}`,
      body: r.address || r.block || r.category || "Status updated",
      status: r.status,
      ts: r.updated_at || r.created_at || new Date().toISOString(),
      read: false,
    }));
  }, [items]);

  useSocket(
    {
      "report:status_changed": (payload: any) => {
        setExtra((cur) => [
          {
            id: `w-${payload.id}-${Date.now()}`,
            title: `Report #${String(payload.id).slice(0, 6)} — ${(payload.status ?? "updated").replace(/_/g, " ")}`,
            body: payload.address || "Status changed",
            status: payload.status,
            ts: new Date().toISOString(),
            read: false,
          },
          ...cur,
        ]);
      },
    },
    true
  );

  const all = useMemo(() => {
    return [...extra, ...synthesised].map((n) => ({ ...n, read: !!read[n.id] }));
  }, [extra, synthesised, read]);

  const unread = all.filter((n) => !n.read).length;

  useEffect(() => {
    // no-op, just to silence unused warnings if any
  }, []);

  const markAllRead = () => {
    const map: Record<string, boolean> = {};
    all.forEach((n) => (map[n.id] = true));
    setRead(map);
  };
  const toggle = (id: string) => setRead((r) => ({ ...r, [id]: !r[id] }));

  return (
    <>
      <PageHeader title="Notifications" subtitle={unread ? `${unread} unread` : "You're all caught up"}>
        {unread > 0 ? (
          <Button variant="secondary" onClick={markAllRead}>
            <CheckCheck className="w-4 h-4" /> Mark all read
          </Button>
        ) : null}
      </PageHeader>

      {loading ? (
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load notifications" body={error} />
      ) : all.length === 0 ? (
        <EmptyState icon={<Bell className="w-5 h-5" />} title="No notifications" body="We'll let you know when anything changes." />
      ) : (
        <div className="space-y-2">
          {all.map((n) => (
            <Card
              key={n.id}
              onClick={() => toggle(n.id)}
              className={classNames(
                "p-4 flex items-start gap-3 cursor-pointer transition-colors",
                n.read ? "" : "bg-forest-50/60 border-forest-200"
              )}
            >
              <div className={classNames(
                "w-2 h-2 rounded-full mt-2 shrink-0",
                n.read ? "bg-sand-300" : "bg-forest-500"
              )} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="font-semibold text-foreground">{n.title}</div>
                  {n.status ? <StatusBadge status={n.status} /> : null}
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">{n.body}</div>
                <div className="text-xs text-muted-foreground mt-1">{formatDate(n.ts)}</div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

```

## `src\routes\citizen.reports.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, FileText } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { Table, Th, Td } from "@/components/portal/Table";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { classNames, formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/reports")({
  component: MyReports,
});

const STATUSES = ["all", "pending", "assigned", "in_progress", "resolved", "cancelled"];
const PAGE_SIZE = 10;

function MyReports() {
  const [status, setStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    p.set("skip", String(page * PAGE_SIZE));
    p.set("limit", String(PAGE_SIZE));
    if (status !== "all") p.set("status", status);
    if (search.trim()) p.set("search", search.trim());
    return p.toString();
  }, [status, search, page]);

  const { data, loading, error } = useApi<any>(`/reports/?${qs}`, {}, [qs]);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const total: number = data?.total ?? items.length;

  return (
    <>
      <PageHeader title="My reports" subtitle="Track everything you've reported.">
        <Link to="/citizen/new"><Button>New report</Button></Link>
      </PageHeader>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <FormField
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            placeholder="Search address or description"
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
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load reports" body={error} />
      ) : items.length === 0 ? (
        <EmptyState
          icon={<FileText className="w-5 h-5" />}
          title="No reports match"
          body="Try adjusting filters, or file a new one."
          action={<Link to="/citizen/new"><Button>New report</Button></Link>}
        />
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Category</Th>
                <Th>Priority</Th>
                <Th>Address</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {items.map((r) => (
                <tr key={r.id} className="hover:bg-sand-50">
                  <Td className="font-mono text-xs">#{String(r.id).slice(0, 6)}</Td>
                  <Td>{r.category || r.tags?.[0] || "—"}</Td>
                  <Td><StatusBadge status={r.priority || "medium"} /></Td>
                  <Td className="max-w-[260px] truncate">{r.address || r.block || "—"}</Td>
                  <Td className="text-muted-foreground">{formatDate(r.created_at)}</Td>
                  <Td><StatusBadge status={r.status} /></Td>
                </tr>
              ))}
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
    </>
  );
}

```

## `src\routes\citizen.schedule.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { useApi } from "@/hooks/useApi";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/citizen/schedule")({
  component: CitizenSchedule,
});

function CitizenSchedule() {
  const { data, loading, error } = useApi<any>("/reports/?limit=50", {}, []);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const upcoming = items.filter((r) => ["assigned", "in_progress"].includes((r.status || "").toLowerCase()));

  return (
    <>
      <PageHeader title="Pickup schedule" subtitle="Upcoming collection visits for your reports." />
      {loading ? (
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load schedule" body={error} />
      ) : upcoming.length === 0 ? (
        <EmptyState
          icon={<Calendar className="w-5 h-5" />}
          title="Nothing scheduled"
          body="When your reports are assigned to a collector, they'll show up here."
        />
      ) : (
        <div className="space-y-3">
          {upcoming.map((r) => (
            <Card key={r.id} className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-forest-100 text-forest-700 grid place-items-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="font-semibold text-foreground">
                    {r.category || r.tags?.[0] || "Pickup"}
                  </div>
                  <StatusBadge status={r.status} />
                </div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {r.address || r.block || "Address not provided"}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Reported {formatDate(r.created_at)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

```

## `src\routes\citizen.tsx`

```typescript
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

```

## `src\routes\collector.history.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, History, CheckCircle2, Clock, Calendar } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { StatCard } from "@/components/portal/StatCard";
import { Table, Th, Td } from "@/components/portal/Table";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { classNames, formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/collector/history")({
  component: JobHistory,
});

const PERIODS: { key: string; label: string; days: number | null }[] = [
  { key: "7d", label: "7 days", days: 7 },
  { key: "30d", label: "30 days", days: 30 },
  { key: "90d", label: "90 days", days: 90 },
  { key: "all", label: "All time", days: null },
];

function JobHistory() {
  const [period, setPeriod] = useState("30d");
  const [search, setSearch] = useState("");
  const { data, loading, error } = useApi<any>(
    "/collector/tasks?status=resolved&limit=200",
    {},
    []
  );
  const all: any[] = Array.isArray(data) ? data : data?.items ?? [];

  const filtered = useMemo(() => {
    const days = PERIODS.find((p) => p.key === period)?.days;
    const cutoff = days ? Date.now() - days * 86400000 : 0;
    const q = search.trim().toLowerCase();
    return all.filter((t) => {
      const ts = new Date(t.resolved_at || t.updated_at || t.created_at || 0).getTime();
      if (cutoff && ts < cutoff) return false;
      if (q) {
        const hay = `${t.address || ""} ${t.block || ""} ${t.category || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [all, period, search]);

  const avgResolution = useMemo(() => {
    const durations = filtered
      .map((t) => {
        const start = new Date(t.created_at || 0).getTime();
        const end = new Date(t.resolved_at || t.updated_at || 0).getTime();
        return end > start ? (end - start) / 3600000 : null;
      })
      .filter((v): v is number => v != null);
    if (durations.length === 0) return "—";
    const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
    return avg >= 24 ? `${(avg / 24).toFixed(1)}d` : `${avg.toFixed(1)}h`;
  }, [filtered]);

  const thisMonth = useMemo(() => {
    const now = new Date();
    return all.filter((t) => {
      const d = new Date(t.resolved_at || t.updated_at || t.created_at || 0);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
  }, [all]);

  return (
    <>
      <PageHeader title="Job history" subtitle="Everything you've completed." />

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <StatCard label="Total completed" value={filtered.length} icon={<CheckCircle2 className="w-5 h-5" />} accent="forest" />
        <StatCard label="Avg. resolution" value={avgResolution} icon={<Clock className="w-5 h-5" />} accent="yellow" />
        <StatCard label="This month" value={thisMonth} icon={<Calendar className="w-5 h-5" />} accent="blue" />
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <FormField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search address or category"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PERIODS.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={classNames(
                "px-3 py-1.5 rounded-full text-xs font-medium border",
                period === p.key
                  ? "bg-forest-700 text-sand-50 border-forest-700"
                  : "bg-card text-muted-foreground border-border hover:bg-sand-100"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load history" body={error} />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={<History className="w-5 h-5" />}
          title="No completed jobs"
          body="Once you finish tasks, they'll show up here."
          action={<Button variant="secondary" onClick={() => setPeriod("all")}>View all time</Button>}
        />
      ) : (
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Category</Th>
              <Th>Address</Th>
              <Th>Completed</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="hover:bg-sand-50">
                <Td className="font-mono text-xs">#{String(t.id).slice(0, 6)}</Td>
                <Td>{t.category || t.tags?.[0] || "—"}</Td>
                <Td className="max-w-[280px] truncate">{t.address || t.block || "—"}</Td>
                <Td className="text-muted-foreground">{formatDate(t.resolved_at || t.updated_at || t.created_at)}</Td>
                <Td><StatusBadge status={t.status} /></Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

```

## `src\routes\collector.index.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ListChecks, Clock, Loader2, CheckCircle2, Play, Check } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { StatCard } from "@/components/portal/StatCard";
import { Card } from "@/components/portal/Card";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { apiFetch } from "@/lib/api";
import { formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/collector/")({
  component: CollectorDashboard,
});

interface Task {
  id: string | number;
  category?: string;
  tags?: string[];
  priority?: string;
  address?: string;
  block?: string;
  status?: string;
  created_at?: string;
  assigned_at?: string;
}

function CollectorDashboard() {
  const { data, loading, error, refetch } = useApi<any>("/collector/tasks?limit=20", {}, []);
  const items: Task[] = Array.isArray(data) ? data : data?.items ?? [];
  const [updating, setUpdating] = useState<string | number | null>(null);

  const count = (s: string) =>
    items.filter((r) => (r.status ?? "").toLowerCase() === s).length;

  const update = async (id: string | number, status: string) => {
    setUpdating(id);
    try {
      await apiFetch(`/collector/tasks/${id}`, { method: "PATCH", body: { status } });
      await refetch();
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(null);
    }
  };

  const active = items.filter((t) =>
    ["assigned", "in_progress"].includes((t.status || "").toLowerCase())
  );

  return (
    <>
      <PageHeader title="Your shift today" subtitle="Active assignments and quick actions">
        <Link to="/collector/tasks"><Button variant="secondary">View all tasks</Button></Link>
      </PageHeader>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total" value={items.length} icon={<ListChecks className="w-5 h-5" />} />
        <StatCard label="Assigned" value={count("assigned")} icon={<Clock className="w-5 h-5" />} accent="yellow" />
        <StatCard label="In progress" value={count("in_progress")} icon={<Loader2 className="w-5 h-5" />} accent="blue" />
        <StatCard label="Completed" value={count("resolved")} icon={<CheckCircle2 className="w-5 h-5" />} accent="forest" />
      </div>

      <div className="mt-8">
        <h2 className="font-display font-semibold text-lg mb-3">Active tasks</h2>
        {loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)}
          </div>
        ) : error ? (
          <EmptyState title="Couldn't load tasks" body={error} />
        ) : active.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="w-5 h-5" />}
            title="All clear"
            body="Nothing active right now. New assignments will appear here."
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-3">
            {active.slice(0, 6).map((t) => {
              const isAssigned = (t.status || "").toLowerCase() === "assigned";
              const isInProgress = (t.status || "").toLowerCase() === "in_progress";
              return (
                <Card key={t.id} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs text-muted-foreground">#{String(t.id).slice(0, 6)}</span>
                        <StatusBadge status={t.priority || "medium"} />
                        <StatusBadge status={t.status} />
                      </div>
                      <div className="font-display font-semibold text-foreground mt-1">
                        {t.category || t.tags?.[0] || "Task"}
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5 truncate">
                        {t.address || t.block || "Address unavailable"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Assigned {formatDate(t.assigned_at || t.created_at)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {isAssigned ? (
                      <Button size="sm" loading={updating === t.id} onClick={() => update(t.id, "in_progress")}>
                        <Play className="w-3.5 h-3.5" /> Start
                      </Button>
                    ) : null}
                    {isInProgress ? (
                      <Button size="sm" loading={updating === t.id} onClick={() => update(t.id, "resolved")}>
                        <Check className="w-3.5 h-3.5" /> Complete
                      </Button>
                    ) : null}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

```

## `src\routes\collector.map.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Navigation, Map as MapIcon } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { Button } from "@/components/portal/Button";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { useApi } from "@/hooks/useApi";
import { classNames } from "@/utils/helpers";

export const Route = createFileRoute("/collector/map")({
  component: TaskMap,
});

interface Task {
  id: string | number;
  category?: string;
  tags?: string[];
  address?: string;
  status?: string;
  latitude?: number;
  longitude?: number;
}

function TaskMap() {
  const { data, loading, error } = useApi<any>("/collector/tasks?limit=50", {}, []);
  const items: Task[] = Array.isArray(data) ? data : data?.items ?? [];
  const mapped = items.filter((t) => t.latitude != null && t.longitude != null);
  const [selected, setSelected] = useState<Task | null>(null);

  const bounds = useMemo(() => {
    if (mapped.length === 0) return null;
    const lats = mapped.map((t) => Number(t.latitude));
    const lngs = mapped.map((t) => Number(t.longitude));
    return {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
    };
  }, [mapped]);

  const project = (t: Task) => {
    if (!bounds) return { x: 50, y: 50 };
    const { minLat, maxLat, minLng, maxLng } = bounds;
    const w = maxLng - minLng || 1;
    const h = maxLat - minLat || 1;
    const x = ((Number(t.longitude) - minLng) / w) * 90 + 5;
    const y = 95 - ((Number(t.latitude) - minLat) / h) * 90;
    return { x, y };
  };

  const navigateTo = (t: Task) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${t.latitude},${t.longitude}`;
    if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHeader title="Task map" subtitle="Plotted by location for your route planning." />

      {loading ? (
        <Skeleton className="h-[520px] w-full" />
      ) : error ? (
        <EmptyState title="Couldn't load map" body={error} />
      ) : mapped.length === 0 ? (
        <EmptyState
          icon={<MapIcon className="w-5 h-5" />}
          title="No mapped tasks"
          body="Tasks need a latitude and longitude to appear here."
        />
      ) : (
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Map canvas placeholder */}
          <Card className="lg:col-span-2 relative overflow-hidden h-[520px] bg-gradient-to-br from-forest-50 to-sand-100">
            <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(10,15,10,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,15,10,0.06) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {mapped.map((t) => {
              const { x, y } = project(t);
              const active = selected?.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelected(t)}
                  className={classNames(
                    "absolute -translate-x-1/2 -translate-y-full transition-transform",
                    active ? "scale-125 z-10" : "hover:scale-110"
                  )}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={`Task #${t.id}`}
                >
                  <div className={classNames(
                    "w-6 h-6 rounded-full border-2 border-ink-950 grid place-items-center shadow-md",
                    active ? "bg-forest-500" : "bg-sand-50"
                  )}>
                    <MapPin className="w-3.5 h-3.5 text-ink-950" />
                  </div>
                  <div className={classNames(
                    "w-1 h-2 mx-auto",
                    active ? "bg-forest-500" : "bg-ink-950"
                  )} />
                </button>
              );
            })}
            <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur border border-border rounded-lg px-3 py-2 text-xs font-mono">
              {mapped.length} task{mapped.length === 1 ? "" : "s"} plotted
            </div>
          </Card>

          {/* Sidebar list */}
          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
            {selected ? (
              <Card className="p-4 border-forest-300 bg-forest-50/40">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-xs text-muted-foreground">#{String(selected.id).slice(0, 6)}</span>
                  <StatusBadge status={selected.status} />
                </div>
                <div className="font-display font-semibold">
                  {selected.category || selected.tags?.[0] || "Task"}
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {selected.address || "Address unavailable"}
                </div>
                <Button size="sm" className="mt-3" onClick={() => navigateTo(selected)}>
                  <Navigation className="w-3.5 h-3.5" /> Navigate
                </Button>
              </Card>
            ) : (
              <Card className="p-4 text-sm text-muted-foreground">
                Select a marker to see details.
              </Card>
            )}
            {mapped.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelected(t)}
                className={classNames(
                  "w-full text-left rounded-xl border p-3 transition-colors",
                  selected?.id === t.id
                    ? "border-forest-400 bg-forest-50"
                    : "border-border bg-card hover:bg-sand-50"
                )}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs text-muted-foreground">#{String(t.id).slice(0, 6)}</span>
                  <StatusBadge status={t.status} />
                </div>
                <div className="text-sm font-medium mt-0.5">{t.category || t.tags?.[0] || "Task"}</div>
                <div className="text-xs text-muted-foreground truncate">{t.address || "—"}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

```

## `src\routes\collector.schedule.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Navigation, Route as RouteIcon, Clock } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Card } from "@/components/portal/Card";
import { StatCard } from "@/components/portal/StatCard";
import { Button } from "@/components/portal/Button";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { useApi } from "@/hooks/useApi";

export const Route = createFileRoute("/collector/schedule")({
  component: CollectorSchedule,
});

interface Task {
  id: string | number;
  category?: string;
  tags?: string[];
  address?: string;
  status?: string;
  latitude?: number;
  longitude?: number;
  priority?: string;
}

function CollectorSchedule() {
  const { data, loading, error } = useApi<any>("/collector/tasks?limit=50", {}, []);
  const items: Task[] = Array.isArray(data) ? data : data?.items ?? [];
  const stops = items.filter((t) =>
    ["assigned", "in_progress"].includes((t.status || "").toLowerCase())
  );

  // placeholder estimates (real impl would call Routes API)
  const estDistanceKm = (stops.length * 1.6).toFixed(1);
  const estDurationMin = stops.length * 12;

  const navigateTo = (t: Task) => {
    if (t.latitude != null && t.longitude != null) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${t.latitude},${t.longitude}`;
      if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <PageHeader title="Today's route" subtitle="Stops ordered for your shift." />

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <StatCard label="Stops" value={stops.length} icon={<Calendar className="w-5 h-5" />} />
        <StatCard label="Est. distance" value={`${estDistanceKm} km`} icon={<RouteIcon className="w-5 h-5" />} accent="blue" />
        <StatCard label="Est. duration" value={`${estDurationMin} min`} icon={<Clock className="w-5 h-5" />} accent="yellow" />
      </div>

      {loading ? (
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load schedule" body={error} />
      ) : stops.length === 0 ? (
        <EmptyState
          icon={<Calendar className="w-5 h-5" />}
          title="No stops scheduled"
          body="When tasks are assigned to you, they'll appear here as an ordered route."
        />
      ) : (
        <div className="space-y-2">
          {stops.map((t, i) => (
            <Card key={t.id} className="p-4 flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-forest-100 text-forest-800 font-display font-bold grid place-items-center shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="font-semibold text-foreground">
                    {t.category || t.tags?.[0] || "Stop"}
                  </div>
                  <StatusBadge status={t.priority || "medium"} />
                  <StatusBadge status={t.status} />
                </div>
                <div className="text-sm text-muted-foreground mt-0.5 truncate">
                  {t.address || "Address unavailable"}
                </div>
              </div>
              {t.latitude != null && t.longitude != null ? (
                <Button size="sm" variant="secondary" onClick={() => navigateTo(t)}>
                  <Navigation className="w-3.5 h-3.5" /> Navigate
                </Button>
              ) : null}
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

```

## `src\routes\collector.tasks.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Play, Check, XCircle, ListChecks } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { Table, Th, Td } from "@/components/portal/Table";
import { StatusBadge } from "@/components/portal/StatusBadge";
import { Skeleton } from "@/components/portal/Skeleton";
import { EmptyState } from "@/components/portal/EmptyState";
import { Button } from "@/components/portal/Button";
import { useApi } from "@/hooks/useApi";
import { apiFetch } from "@/lib/api";
import { classNames, formatDate } from "@/utils/helpers";

export const Route = createFileRoute("/collector/tasks")({
  component: TaskList,
});

const STATUSES = ["all", "assigned", "in_progress", "resolved"];
const PAGE_SIZE = 10;

function TaskList() {
  const [status, setStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [updating, setUpdating] = useState<string | number | null>(null);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    p.set("page", String(page + 1));
    p.set("limit", String(PAGE_SIZE));
    if (status !== "all") p.set("status", status);
    if (search.trim()) p.set("search", search.trim());
    return p.toString();
  }, [status, search, page]);

  const { data, loading, error, refetch } = useApi<any>(`/collector/tasks?${qs}`, {}, [qs]);
  const items: any[] = Array.isArray(data) ? data : data?.items ?? [];
  const total: number = data?.total ?? items.length;

  const update = async (id: string | number, next: string) => {
    setUpdating(id);
    try {
      await apiFetch(`/collector/tasks/${id}`, { method: "PATCH", body: { status: next } });
      await refetch();
    } finally {
      setUpdating(null);
    }
  };

  return (
    <>
      <PageHeader title="Tasks" subtitle="Everything assigned to you." />

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <FormField
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            placeholder="Search address or category"
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
          {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
        </div>
      ) : error ? (
        <EmptyState title="Couldn't load tasks" body={error} />
      ) : items.length === 0 ? (
        <EmptyState
          icon={<ListChecks className="w-5 h-5" />}
          title="No tasks match"
          body="Try clearing filters or check back soon."
        />
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Category</Th>
                <Th>Priority</Th>
                <Th>Address</Th>
                <Th>Assigned</Th>
                <Th>Status</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {items.map((t) => {
                const st = (t.status || "").toLowerCase();
                return (
                  <tr key={t.id} className="hover:bg-sand-50">
                    <Td className="font-mono text-xs">#{String(t.id).slice(0, 6)}</Td>
                    <Td>{t.category || t.tags?.[0] || "—"}</Td>
                    <Td><StatusBadge status={t.priority || "medium"} /></Td>
                    <Td className="max-w-[260px] truncate">{t.address || t.block || "—"}</Td>
                    <Td className="text-muted-foreground">{formatDate(t.assigned_at || t.created_at)}</Td>
                    <Td><StatusBadge status={t.status} /></Td>
                    <Td>
                      <div className="flex justify-end gap-1.5">
                        {st === "assigned" ? (
                          <Button size="sm" loading={updating === t.id} onClick={() => update(t.id, "in_progress")}>
                            <Play className="w-3.5 h-3.5" /> Start
                          </Button>
                        ) : null}
                        {st === "in_progress" ? (
                          <>
                            <Button size="sm" loading={updating === t.id} onClick={() => update(t.id, "resolved")}>
                              <Check className="w-3.5 h-3.5" /> Complete
                            </Button>
                            <Button size="sm" variant="ghost" loading={updating === t.id} onClick={() => update(t.id, "cancelled")}>
                              <XCircle className="w-3.5 h-3.5" /> Cancel
                            </Button>
                          </>
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
    </>
  );
}

```

## `src\routes\collector.tsx`

```typescript
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LayoutDashboard, ListChecks, Map, Calendar, History } from "lucide-react";
import { PortalLayout, type NavItem } from "@/components/PortalLayout";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/collector")({
  ssr: false,
  head: () => ({ meta: [{ title: "Collector — CleanCity" }] }),
  component: CollectorPortal,
});

const items: NavItem[] = [
  { to: "/collector", label: "Dashboard", icon: LayoutDashboard },
  { to: "/collector/tasks", label: "Tasks", icon: ListChecks },
  { to: "/collector/map", label: "Map", icon: Map },
  { to: "/collector/schedule", label: "Schedule", icon: Calendar },
  { to: "/collector/history", label: "Job history", icon: History },
];

function CollectorPortal() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate({ to: "/login" });
    else if (user.role !== "collector") navigate({ to: "/unauthorized" });
  }, [user, loading, navigate]);

  if (loading || !user || user.role !== "collector") {
    return (
      <div className="min-h-screen grid place-items-center bg-sand-50">
        <div className="h-8 w-8 border-2 border-ink-950 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <PortalLayout role="collector" items={items} brandLabel="Collector" />;
}

```

## `src\routes\index.tsx`

```typescript
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

```

## `src\routes\login.tsx`

```typescript
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

```

## `src\routes\README.md`

```markdown
# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
is a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.

```

## `src\routes\signup.tsx`

```typescript
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

```

## `src\routes\unauthorized.tsx`

```typescript
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

```

## `src\routes\__root.tsx`

```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CleanCity — Urban waste management" },
      { name: "description", content: "Role-based platform for citizens, collectors, and admins to keep cities clean." },
      { name: "author", content: "CleanCity" },
      { property: "og:title", content: "CleanCity — Urban waste management" },
      { property: "og:description", content: "Report, dispatch, resolve. CleanCity connects citizens, collectors, and admins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { AuthProvider } from "@/context/AuthContext";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  );
}

```

## `src\utils\helpers.ts`

```typescript
export const classNames = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export type Validator = (v: any) => string | null;

export const validators = {
  required: (v: any): string | null =>
    v != null && v.toString().trim() ? null : "Required",
  email: (v: any): string | null =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v ?? "").trim()) ? null : "Invalid email",
  password: (v: any): string | null =>
    (v ?? "").length >= 8 ? null : "Min 8 characters",
  confirmPassword: (pw: string): Validator => (v) =>
    v === pw ? null : "Passwords do not match",
  phone: (v: any): string | null =>
    !v || /^\+?[\d\s\-()]{7,15}$/.test(v.trim()) ? null : "Invalid phone",
  minLength: (min: number): Validator => (v) =>
    (v ?? "").trim().length >= min ? null : `Min ${min} characters`,
};

export function validateFields(
  rules: Record<string, Validator | Validator[]>,
  values: Record<string, any>
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const key of Object.keys(rules)) {
    const rule = rules[key];
    const list = Array.isArray(rule) ? rule : [rule];
    for (const fn of list) {
      const err = fn(values[key]);
      if (err) {
        errors[key] = err;
        break;
      }
    }
  }
  return errors;
}

export const hasErrors = (errors: Record<string, string>) =>
  Object.values(errors).some(Boolean);

export const getRoleColors = (role: string) => {
  switch (role) {
    case "admin":
      return { bg: "bg-ink-950", text: "text-sand-50", accent: "bg-sand-400" };
    case "collector":
      return { bg: "bg-forest-600", text: "text-forest-50", accent: "bg-forest-300" };
    case "citizen":
    default:
      return { bg: "bg-forest-100", text: "text-forest-900", accent: "bg-forest-500" };
  }
};

export const formatDate = (iso?: string | null) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

```

