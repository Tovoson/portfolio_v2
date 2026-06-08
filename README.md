# Portfolio v2

A modern React portfolio website built with Vite, TypeScript, Tailwind CSS, and Supabase. This project showcases an author's work, skills, projects, and includes a protected admin login/dashboard flow.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Entrypoints](#entrypoints)
- [Core Components](#core-components)
- [Pages & Layout](#pages--layout)
- [State & Data](#state--data)
- [Configuration Files](#configuration-files)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Project Overview

This repository contains a single-page React application built with Vite. It serves as a personal portfolio website with sections for hero content, expertise, tech stack, projects, education, contact information, and footer.

The app also includes an admin authentication flow backed by Supabase, where an authenticated admin can access a protected dashboard.

## Architecture

The project follows a component-based React architecture with routing, state management, and external data configuration.

- `src/main.tsx` boots the React application and renders the root component.
- `src/App.tsx` defines routing and conditional layout for the public portfolio and admin pages.
- `src/components` contains the reusable UI sections displayed on the portfolio page.
- `src/pages` contains authentication and dashboard pages for the admin area.
- `src/store` holds Zustand-based state management for admin auth and visitor data.
- `src/config` contains Supabase configuration for backend communication.
- `src/utils` contains utilities for visitor tracking, location, and device detection.
- `src/data` stores portfolio project definitions that drive the project listing.

## Entrypoints

### `src/main.tsx`

The main client-side entrypoint.

- Imports React and React DOM.
- Loads application styles from `src/index.css`.
- Renders `<App />` inside the DOM element with `id="root"`.

### `src/App.tsx`

The primary application component and router.

- Uses `react-router-dom` for client-side routing.
- Defines the public portfolio route at `/`.
- Defines the admin login route at `/admin`.
- Defines the protected admin dashboard route at `/admin/dashboard`.
- Uses a `ProtectedRoute` wrapper to block dashboard access if no admin token exists.

## Core Components

### `src/components/Navbar.tsx`
Top navigation bar for the portfolio.

### `src/components/Hero.tsx`
Hero section with the main introduction.

### `src/components/Expertise.tsx`
Section describing skills and services.

### `src/components/TechStack.tsx`
Tech stack section listing tools and frameworks.

### `src/components/Projects.tsx`
Project showcase section consuming data from `src/data/project-data.ts`.

### `src/components/Education.tsx`
Education and qualification section.

### `src/components/Contact.tsx`
Contact section for getting in touch.

### `src/components/Footer.tsx`
Page footer.

### `src/components/LoadingScreen.tsx`
Initial loading screen shown before the portfolio content.

## Pages & Layout

### `src/pages/AdminLogin.tsx`
Admin login page.

- Uses Supabase authentication via `src/config/supabase.ts`.
- Stores auth token and user information in `src/store/useAdminStore.ts`.

### `src/pages/AdminDashboard.tsx`
Admin dashboard page.

- Protected by `ProtectedRoute`.
- Intended for admin-only content and visitor analytics.

## State & Data

### `src/store/useAdminStore.ts`
Admin auth store using Zustand.

- Persisted state for `user` and `token`.
- `singIn()` authenticates with Supabase.
- `signOut()` clears the session.

### `src/store/useVisitorStore.ts`
Visitor data store using Zustand.

- `fetchVisitor()` gets visitor records from Supabase.

### `src/data/project-data.ts`
Structured list of portfolio projects.

- Each project includes title, description, tech stack, dates, image, and links.
- Used by the `Projects` component for rendering project cards.

## Utilities

### `src/utils/addVisitorData.ts`
Visitor tracking and device/location helpers.

- `getDeviceType()` classifies the user device.
- `getBrowserName()` and `getDeviceName()` parse browser/device details.
- `getLocation()` fetches location data from `https://ipapi.co/json/`.
- `trackVisit()` logs visitor session data to Supabase and updates duration.

## Configuration Files

### `package.json`

- `vite` and `@vitejs/plugin-react` for React development.
- `tailwindcss` and `@tailwindcss/vite` for styling.
- `react`, `react-dom`, `react-router-dom`, `zustand`, `lucide-react`, `recharts`, `uuid`, `motion`.
- `@supabase/supabase-js` for Supabase integration.
- `express`, `better-sqlite3` appear in dependencies but are not part of the current frontend bundle.

### `tsconfig.json`

- TypeScript targeting `ES2022`.
- JSX support via `react-jsx`.
- Path alias `@/*` mapped to project root.
- Module resolution set to `bundler`.

### `vite.config.ts`

- Adds `@vitejs/plugin-react` and Tailwind plugin.
- Defines `process.env.GEMINI_API_KEY` from environment variables.
- Sets alias `@` to the project root.
- Configures HMR based on `DISABLE_HMR`.

## Environment Variables

Required `.env` variables for local development:

- `VITE_SUPABASE_URL` — Supabase project URL.
- `VITE_SUPABASE_PUBLISHABLE_KEY` — Supabase public anon key.
- `GEMINI_API_KEY` — API key injected into the client via Vite.

> Note: Vite exposes only variables prefixed with `VITE_` to client code.

## Scripts

Available npm scripts in `package.json`:

- `npm run dev` — Start the Vite development server on `localhost:3000`.
- `npm run build` — Build the production bundle.
- `npm run preview` — Preview the production build locally.
- `npm run clean` — Remove the `dist` folder.
- `npm run lint` — Run TypeScript type checking without emitting build files.

## Project Structure

Key folders and files:

- `src/App.tsx` — Application router and page composition.
- `src/main.tsx` — App entrypoint.
- `src/index.css` — Global styles.
- `src/components/` — Portfolio UI components.
- `src/pages/` — Admin login and dashboard pages.
- `src/config/supabase.ts` — Supabase client configuration.
- `src/store/` — Zustand stores for auth and visitor data.
- `src/utils/` — Utilities for visitor tracking and device info.
- `src/data/project-data.ts` — Portfolio project content.
- `src/Types/Project-type.ts` — Type definitions used throughout the app.

## Notes

- The admin dashboard route is protected by `ProtectedRoute`.
- Visitor tracking is implemented but currently commented out in `src/App.tsx`.
- The project data includes sample projects and external repository links.
