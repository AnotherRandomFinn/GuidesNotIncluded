# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server

## Project Structure

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS.

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global styles
  - `page.tsx` - Homepage component
- `src/` - Other source code (components, utilities, _etc._)
- `public/` - Static assets (images, icons)
- Path aliases: `@/*` maps to `./src/*`

## Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: Strict mode enabled with ES2017 target
- **Package Manager**: pnpm (uses pnpm-lock.yaml)
- **Fonts**: Geist and Geist Mono from Google Fonts

## Development Environment

- Uses devenv.nix for development environment setup
- TypeScript configuration includes incremental compilation and Next.js plugin
- PostCSS configured for Tailwind CSS processing
