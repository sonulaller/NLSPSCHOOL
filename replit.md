# DAV Public School Kaithal — School Website

A full-stack school website for **NLSPS Kasan** (New Little Star Public School), built with React + Vite on the frontend and an Express API server on the backend.

## Stack

- **Frontend** (`artifacts/dav-school`): React 19, Vite, Tailwind CSS v4, shadcn/ui, Wouter, TanStack Query, Framer Motion
- **API Server** (`artifacts/api-server`): Express 5, Drizzle ORM, Pino logging
- **Monorepo**: pnpm workspaces

## Pages

- Home, About, Teachers, SMC, Fee Structure, Facilities, Gallery, Admissions, Contact, Notice Board

## Running locally

Both services start automatically via Replit workflows:

| Workflow | Command |
|---|---|
| `artifacts/dav-school: web` | `pnpm --filter @workspace/dav-school run dev` |
| `artifacts/api-server: API Server` | `pnpm --filter @workspace/api-server run dev` |

Install dependencies: `pnpm install`

## User preferences
