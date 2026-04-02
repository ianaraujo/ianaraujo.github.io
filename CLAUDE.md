# CLAUDE.md — Project Context for AI Agents

## Overview

This is **ianaraujo.com**, a personal blog and portfolio website for Ian Vaz Araujo, a data scientist based in Brazil. The site supports both **Portuguese (pt-BR)** and **English (en)** via a custom i18n system. Portuguese is the primary language.

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
│   ├── layout.tsx               # Root layout: <html lang="pt"><body>. No metadata here.
│   ├── page.tsx                 # Root redirect: <meta http-equiv="refresh" content="0;url=/pt">
│   └── [lang]/
│       ├── layout.tsx           # Language-aware metadata + generateStaticParams([{lang:'pt'},{lang:'en'}])
│       ├── page.tsx             # Homepage (bio, experience, latest posts, contact)
│       └── blog/
│           ├── page.tsx         # Blog listing (posts grouped by year)
│           └── [slug]/
│               └── page.tsx     # Individual blog post (generateStaticParams over all lang×slug combos)
├── components/
│   ├── Header.tsx               # Shared header: name + social links + PT/EN switcher
│   ├── Footer.tsx               # Footer with copyright year
│   └── Clock.tsx                # SVG clock icon for reading time display
├── i18n/
│   ├── config.ts                # locales = ["pt","en"], defaultLocale = "pt", Lang type
│   └── dictionaries.ts          # All UI strings for PT and EN; getDictionary(lang) function
├── lib/
│   └── posts.ts                 # Data layer: getPostSlugs(lang), getAllPosts(lang), getPostBySlug(slug, lang)
├── posts/
│   ├── pt/                      # Portuguese markdown files (6 posts)
│   └── en/                      # English markdown files (empty — translations added over time)
├── styles/
│   └── globals.css              # Tailwind directives + highlight.js + KaTeX CSS imports
└── types/
    └── index.d.ts               # PostMeta and Post interfaces
public/
└── posts/                       # Post images organized by slug (shared across languages)
```

---

## Internationalization (i18n)

This is a **custom static i18n system** — no next-intl, no i18next, no middleware. It works entirely at build time.

### URL structure

- Portuguese: `ianaraujo.com/pt`, `ianaraujo.com/pt/blog`, `ianaraujo.com/pt/blog/<slug>`
- English: `ianaraujo.com/en`, `ianaraujo.com/en/blog`, `ianaraujo.com/en/blog/<slug>`
- Root `/` redirects to `/pt` via meta refresh

### How pages receive the language

Every page under `src/app/[lang]/` receives `params.lang` (type `Lang = "pt" | "en"`). Pages call `getDictionary(lang)` to get their UI strings and pass `lang` down to `<Header>` and `<Footer>` as a prop.

### UI strings

All translatable UI strings are in **`src/i18n/dictionaries.ts`**. Structure:

```ts
{
  meta: { description },
  home: { bio, experience, latestPosts, contact, contactText, viewAll, current },
  jobs: [{ title, company }],   // experience timeline; first entry is always "current"
  blog: { minutes },
}
```

To change any UI text, edit the relevant key in both `pt` and `en` blocks. **Never hardcode Portuguese or English strings directly in page/component files.**

### Blog posts

Posts are language-specific Markdown files. Same slug in both folders = same URL pattern in both languages. If a slug exists only in `pt/`, it won't appear on the EN site.

```
src/posts/pt/my-post.md   ← appears at /pt/blog/my-post
src/posts/en/my-post.md   ← appears at /en/blog/my-post (add when translated)
```

The `generateStaticParams` in `[lang]/blog/[slug]/page.tsx` iterates all locales and their slugs to produce the cartesian product of valid paths.

### Language switcher

`Header.tsx` receives `lang` and an optional `currentPath` (e.g. `"/blog/some-slug"`). It constructs switcher links as `/${otherLang}${currentPath}`. Pages pass `currentPath` as the path segment after the lang prefix.

---

## Content System

### Adding a new blog post

1. Create `src/posts/pt/<slug>.md` (and optionally `src/posts/en/<slug>.md` for the translation)
2. Required frontmatter:
   ```yaml
   ---
   title: "Post Title"
   description: "Short description for cards and SEO"
   image: "/posts/<slug>/image-name.png"
   date: "DD/MM/YYYY"
   tag: "Category Name"
   ---
   ```
3. Place images in `public/posts/<slug>/`
4. Post appears automatically in listings and (if latest 3) on the homepage

### Changing UI text / section headings

Edit `src/i18n/dictionaries.ts`. Update both `pt` and `en` blocks.

### Changing experience entries

Edit the `jobs` array in both `pt` and `en` blocks of `src/i18n/dictionaries.ts`. The first entry is rendered as the current position.

### Adding a new homepage section

1. Add the section label to `dictionaries.ts` under `home` for both languages
2. Add the section JSX to `src/app/[lang]/page.tsx` using the dictionary value
3. Follow the existing pattern: `<h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">{dict.home.newSection}</h2>`

### Date format

Dates use **DD/MM/YYYY** format. Parsed by `parseDateString()` in `src/lib/posts.ts`.

### Markdown processing pipeline

Content goes through this pipeline (see `src/app/[lang]/blog/[slug]/page.tsx`):
1. `gray-matter` — extracts frontmatter metadata
2. `remark` → `remark-gfm` — GitHub Flavored Markdown
3. `remark-math` — LaTeX math blocks (`$$...$$` and `$...$`)
4. `remark-rehype` → `rehype-highlight` — syntax highlighting
5. `rehype-katex` — renders math to KaTeX HTML
6. `rehype-stringify` — final HTML string

Rendered via `dangerouslySetInnerHTML` styled with Tailwind `prose` classes.

---

## Design Patterns

- **Minimal, clean aesthetic:** zinc color palette, generous whitespace
- **Section headings:** `text-base font-semibold uppercase tracking-wider text-zinc-400`
- **Post cards:** `border border-zinc-200 rounded-md px-5 py-4 hover:bg-zinc-50 transition-colors`
- **Link hover animation:** sliding underline via `group`/`max-w-0 → max-w-full` pattern
- **Typography-first:** `@tailwindcss/typography` prose classes for blog content
- **No external CMS:** all content lives in the repo as Markdown files
- **Path aliases:** `@/*` maps to `./src/*` (configured in tsconfig.json)

---

## Configuration Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Static export config, unoptimized images |
| `tailwind.config.ts` | Content paths, typography plugin customization (code blocks, KaTeX) |
| `postcss.config.mjs` | PostCSS with Tailwind plugin |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `.eslintrc.json` | ESLint with next/core-web-vitals |
| `.github/workflows/deploy.yml` | GitHub Actions deploy pipeline |

---

## Common Tasks

### Run locally
```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /pt)
```

### Build (same as deploy)
```bash
npm run build      # Produces ./out directory
```

### Test the static export locally
```bash
npx serve out
```

### Add a third language

1. Add the locale to `src/i18n/config.ts`: `export const locales = ["pt", "en", "es"] as const;`
2. Add a matching dictionary block in `src/i18n/dictionaries.ts`
3. Create `src/posts/es/` for content
4. `generateStaticParams` in all `[lang]` routes will automatically pick it up
