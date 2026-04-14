# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for a car service station (СТО) in Kyiv, Ukraine. Features a landing page with service listings, pricing, and a contact form that sends submissions to Telegram via a bot.

Language: Ukrainian (uk). All UI text is in Ukrainian.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

## Code Quality Standards

Write code as a Senior Frontend Developer with deep expertise in the tech stack below. Follow professional architecture practices to keep the codebase maintainable and extensible:

- Prefer Server Components by default; use `"use client"` only when client interactivity is required
- Extract reusable UI into `src/components/ui/`, page-level sections into `src/components/sections/`
- Keep business logic in `src/lib/`, constants/config in `src/config/`
- Use strict TypeScript — explicit types for props, API responses, and shared data structures
- Tailwind-only styling — no inline styles or CSS modules; extract repeated class combinations via Tailwind `@apply` or component composition
- Semantic HTML (proper heading hierarchy, landmarks, form labels) for accessibility and SEO
- Colocate related code: keep route-specific logic inside `app/` route segments, shared logic in `lib/`

## Tech Stack

- **Next.js 16** (App Router, `src/` directory)
- **TypeScript** (strict)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **React 19**

## Architecture

```
src/
  app/
    layout.tsx        — root layout (lang="uk", Geist font, metadata/SEO)
    page.tsx          — landing page, composes all section components
    api/contact/      — POST endpoint: validates form data, sends to Telegram
  components/         — page sections: Header, Hero, Advantages, Services, Pricing, ContactForm, Footer
  lib/
    telegram.ts       — sendToTelegram() — formats message and calls Telegram Bot API
```

**Data flow for contact form:** `ContactForm` (client) → `POST /api/contact` → `lib/telegram.ts` → Telegram Bot API → user's Telegram chat.

## Security

- **NEVER read, open, or display the contents of `.env.local`** — it contains secrets (API keys, tokens). Use `.env.example` as reference for variable names.

## Environment Variables

Defined in `.env.local` (not committed), see `.env.example`:

- `TELEGRAM_BOT_TOKEN` — Telegram bot token from @BotFather
- `TELEGRAM_CHAT_ID` — target chat/group ID for receiving submissions
