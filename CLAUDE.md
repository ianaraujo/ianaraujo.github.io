# CLAUDE.md — Project Context for AI Agents

## Overview

This is **ianaraujo.com**, a personal blog and portfolio website for Ian Araujo, a data scientist based in Brazil. The site is written primarily in **Portuguese (pt-BR)**.

---

## Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4 with `@tailwindcss/typography` plugin
- **Content:** Markdown files processed at build time (gray-matter + remark/rehype pipeline)
- **Code Highlighting:** highlight.js (atom-one-light theme)
- **Math Rendering:** KaTeX via remark-math + rehype-katex
- **Hosting:** GitHub Pages (static export)
- **Domain/DNS:** Cloudflare (custom domain ianaraujo.com)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)

---

## ⚠️ CRITICAL: Static Export Constraints

This site is deployed to **GitHub Pages**, which serves only static files. The Next.js config uses `output: "export"` which generates a fully static site into the `./out` directory. This is the **single most important architectural constraint**.

### What this means in practice

The site uses **Static Site Generation (SSG)** — NOT Server-Side Rendering (SSR), NOT a Single-Page Application (SPA). All pages are pre-rendered to HTML at build time. There is no Node.js server at runtime.

### Unsupported features (do NOT use)

- **Server Actions** — requires a server
- **API Routes** that read dynamic request data — no server to handle them
- **Middleware** (`middleware.ts`) — requires a server
- **Dynamic server functions** (`cookies()`, `headers()`, `next/headers`) — no server at runtime
- **Incremental Static Regeneration (ISR)** — requires a server for revalidation
- **`revalidatePath` / `revalidateTag`** — ISR features
- **`next/image` with default loader** — image optimization requires a server (this project sets `images: { unoptimized: true }` as a workaround)
- **Draft Mode** — requires a server
- **Dynamic routes without `generateStaticParams()`** — every dynamic route MUST enumerate all possible params at build time

### What IS supported

- Server Components (pre-rendered to static HTML during build)
- Client Components (with `'use client'` directive)
- Static data fetching (`fetch` in Server Components runs at build time)
- `generateStaticParams()` for dynamic routes
- `generateMetadata()` for SEO metadata
- CSS Modules, Tailwind CSS, styled-jsx
- `next/image` with `unoptimized: true`
- `next/link` for client-side navigation

### Build & Deploy Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Checks out the repo
2. Detects package manager (npm)
3. Installs dependencies (`npm ci`)
4. Runs `next build` — this produces the `./out` directory
5. Uploads `./out` as a GitHub Pages artifact
6. Deploys to GitHub Pages

**Any change that breaks `next build` with `output: "export"` will break the deploy.**

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (html, body, global CSS)
│   ├── page.tsx            # Homepage (bio, experience, latest posts)
│   └── blog/
│       ├── page.tsx        # Blog listing page (all posts by year)
│       └── [slug]/
│           └── page.tsx    # Individual blog post page (includes generateStaticParams)
├── components/
│   ├── Header.tsx          # Shared header (avatar, name, social links)
│   ├── Footer.tsx          # Shared footer (copyright with build-time year)
│   └── Clock.tsx           # SVG clock icon for reading time
├── lib/
│   └── posts.ts            # Data access layer (getAllPosts, getPostBySlug, parseDateString)
├── posts/                  # Markdown blog posts (content source)
│   ├── bert-sentiment-analysis.md
│   ├── credit-card-fraud.md
│   ├── dual-momentum.md
│   ├── ml-class-imbalance.md
│   ├── ntnb-ibov-backtest.md
│   └── pipeline-ans-databricks.md
├── styles/
│   └── globals.css         # Tailwind directives + highlight.js + KaTeX CSS
└── types/
    └── index.d.ts          # TypeScript interfaces (PostMeta, Post)
public/
├── avatar.png              # Profile photo
└── posts/                  # Blog post images organized by slug
    ├── bert-sentiment-analysis/
    ├── credit-card-fraud/
    ├── dual-momentum/
    ├── ml-class-imbalance/
    ├── ntnb-ibov-backtest/
    └── pipeline-ans-databricks/
```

---

## Content System

### Adding a new blog post

1. Create a new `.md` file in `src/posts/` (the filename becomes the URL slug)
2. Add frontmatter with these required fields:
   ```yaml
   ---
   title: "Post Title"
   description: "Short description for cards and SEO"
   image: "/posts/<slug>/image-name.png"
   date: "DD/MM/YYYY"
   tag: "Category Name"
   ---
   ```
3. Place any images in `public/posts/<slug>/`
4. The post will automatically appear on the homepage (latest 3) and the blog listing page

### Date format

Dates use **DD/MM/YYYY** format (Brazilian convention). The `parseDateString()` utility in `src/utils/getPostImage.ts` handles parsing.

### Markdown processing pipeline

Content goes through this pipeline (see `src/app/blog/[slug]/page.tsx`):
1. `gray-matter` — extracts frontmatter metadata
2. `remark` — parses Markdown to MDAST
3. `remark-gfm` — GitHub Flavored Markdown (tables, strikethrough, etc.)
4. `remark-math` — LaTeX math blocks (`$$...$$` and `$...$`)
5. `remark-rehype` — converts MDAST to HAST
6. `rehype-highlight` — syntax highlighting for code blocks
7. `rehype-katex` — renders math to KaTeX HTML
8. `rehype-stringify` — serializes HAST to HTML string

The rendered HTML is injected via `dangerouslySetInnerHTML` and styled with Tailwind's `prose` classes.

---

## Design Patterns

- **Minimal, clean aesthetic:** zinc color palette, generous whitespace, no heavy UI frameworks
- **Typography-first:** relies on `@tailwindcss/typography` prose classes for blog content
- **Component reuse:** shared `Header` component across all pages
- **Static generation everywhere:** all data (posts) is read from the filesystem at build time using `fs.readFileSync`
- **Path aliases:** `@/*` maps to `./src/*` (configured in tsconfig.json)
- **No basePath:** the site is served from the root domain (ianaraujo.com), not a subpath, so no `basePath` is set in next.config.mjs
- **No external CMS:** content lives in the repo as Markdown files

---

## Configuration Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Static export config, unoptimized images |
| `tailwind.config.ts` | Content paths, typography plugin customization |
| `postcss.config.mjs` | PostCSS with Tailwind plugin |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `.eslintrc.json` | ESLint with next/core-web-vitals |
| `.github/workflows/deploy.yml` | GitHub Actions deploy pipeline |

---

## Common Tasks

### Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

### Build (same as deploy)
```bash
npm run build      # Produces ./out directory
```

### Test the static export locally
```bash
npx serve out      # Serves the built static site
```
