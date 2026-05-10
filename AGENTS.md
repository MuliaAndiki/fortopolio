# AGENTS.md — AI agent instructions for this repository

Purpose

- Help AI coding agents (Copilot/Chat) quickly understand the project layout, common commands, and where to make safe changes.

Quick commands

- Development: `bun run next dev` (`package.json` `dev` script)
- Build: `bun run next build` (`package.json` `build` script)
- Start (production): `bun run next start` (`package.json` `start` script)
- Lint: `npx eslint "src/**/*.{ts,tsx,js,jsx}"`
- Format: `npx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"`

Key facts & conventions

- Framework: Next.js (app directory). See [next.config.ts](next.config.ts) and [next-env.d.ts](next-env.d.ts).
- Runtime: repo uses `bun` for dev/build commands (scripts in [package.json](package.json)).
- Styling: Tailwind + PostCSS (see [postcss.config.mjs](postcss.config.mjs) and [src/styles/globals.css](src/styles/globals.css)).
- i18n: `next-i18next` + `i18n` config in [src/pkg/i18n](src/pkg/i18n) and [config/i18n.config.ts](config/i18n.config.ts).
- State + data: `@reduxjs/toolkit` slices under [src/store](src/store) and React Query in [src/pkg/react-query](src/pkg/react-query).

Important files to read before editing

- App entry & layouts: [src/app/layout.tsx](src/app/layout.tsx), [src/app/providers.tsx](src/app/providers.tsx), [src/app/composeProvinders.tsx](src/app/composeProvinders.tsx)
- Global components: [src/components](src/components) (atoms/molecules/organisms)
- Core utilities and providers: [src/core](src/core)
- Store and auth: [src/store](src/store)
- Theme & config: [config/theme.config.ts](config/theme.config.ts), [config/app.config.ts](config/app.config.ts)

Agent guidance and safety

- Link, don't embed: reference existing docs (README.md) rather than copying large sections.
- Small, focused changes: prefer separate commits for unrelated concerns (UI, state, config).
- When modifying runtime or build scripts, run a local `bun run dev` or `bun run build` to validate.
- Tests: there are no dedicated test scripts in `package.json`; run linters and format checks before large changes.

Suggested follow-ups

- Add targeted instruction files under `.github/` or create smaller `AGENTS-frontend.md` for onboarding frontend tasks.
- Create skills for common agent tasks: `fix-lint`, `add-component`, `update-i18n`

Links

- README: [README.md](README.md)

If anything here looks wrong or you'd like more/less detail, tell me which area to refine.
