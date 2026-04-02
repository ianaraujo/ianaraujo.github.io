# ianaraujo.com

Personal blog and portfolio. Built with Next.js 14, Tailwind CSS, and deployed to GitHub Pages as a fully static site.

## Running locally

```bash
npm install
npm run dev       # http://localhost:3000/pt
npm run build     # produces ./out (same as deploy)
npx serve out     # test the static build locally
```

---

## Content

### Changing UI text

All user-facing strings live in a single file:

```
src/i18n/dictionaries.ts
```

This file exports both the Portuguese and English versions of every label, heading, bio, and section text used across the site. To change any text — the bio paragraph, section headings, contact message, job titles — edit the appropriate entry in `dictionaries.ts`.

Example: to update the homepage bio in Portuguese, find and edit `dictionaries.pt.home.bio`.

### Adding / editing experience entries

Experience entries are also in `src/i18n/dictionaries.ts`, under the `jobs` array for each language. Each entry has a `title` and `company`. The first entry is always shown as "current" with a badge.

```ts
jobs: [
  { title: "Data Analyst", company: "Turim MFO" },      // shown as current
  { title: "Data Analyst", company: "Ágora Advocacy" },
  ...
]
```

Add, remove, or reorder entries directly in this array. Update both `pt` and `en` blocks to keep both languages in sync.

---

## Blog posts

Posts are Markdown files. Each language has its own folder:

```
src/posts/pt/    ← Portuguese posts
src/posts/en/    ← English posts
```

A post only appears on the site for the language whose folder it's in. A post that exists only in `pt/` will not show up on the English blog listing.

### Adding a new post

1. Create a `.md` file in `src/posts/pt/` (or `en/`). The filename becomes the URL slug.
2. Add the required frontmatter:

```yaml
---
title: "Post title"
description: "Short description shown in cards and used for SEO"
image: "/posts/<slug>/cover.png"
date: "DD/MM/YYYY"
tag: "Category"
---
```

3. Place any images in `public/posts/<slug>/`.
4. The post automatically appears in the blog listing and (if it's one of the latest 3) on the homepage.

### Adding a translated version of a post

Create a file with the **exact same filename** in the other language's folder. The slug must match for the language switcher to work correctly (it links between `/pt/blog/<slug>` and `/en/blog/<slug>`).

```
src/posts/pt/my-post.md   ← original
src/posts/en/my-post.md   ← translation (same filename)
```

If a translation doesn't exist yet, the language switcher on that post will link to a page that doesn't exist — this is expected and acceptable while translations are pending.

### Date format

Dates use `DD/MM/YYYY` (e.g. `28/04/2025`). This is parsed by `parseDateString()` in `src/lib/posts.ts`.

---

## Adding a new page section

Sections live in `src/app/[lang]/page.tsx`. Each section follows the same pattern:

```tsx
<section>
  <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">
    {dict.home.yourNewSection}
  </h2>
  {/* section content */}
</section>
```

1. Add the section heading string to both `pt` and `en` blocks in `src/i18n/dictionaries.ts`.
2. Add the section JSX to `src/app/[lang]/page.tsx`.

---

## Internationalization (i18n)

The site supports Portuguese (`/pt/...`) and English (`/en/...`). Visiting `/` redirects to `/pt`.

### How it works

- All routes live under `src/app/[lang]/`. The `[lang]` segment is either `pt` or `en`.
- UI strings are loaded from `src/i18n/dictionaries.ts` at build time using `getDictionary(lang)`.
- Blog posts are language-specific Markdown files in `src/posts/<lang>/`.
- The Header renders a PT / EN switcher that links to the equivalent page in the other language.

### Supported locales

Locales are defined in `src/i18n/config.ts`:

```ts
export const locales = ["pt", "en"] as const;
```

To add a third language, add it to this array, add a matching block in `dictionaries.ts`, and create `src/posts/<lang>/`.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (html, body, global CSS import)
│   ├── page.tsx                 # Root redirect → /pt
│   └── [lang]/
│       ├── layout.tsx           # Language-aware metadata (generateStaticParams)
│       ├── page.tsx             # Homepage
│       └── blog/
│           ├── page.tsx         # Blog listing
│           └── [slug]/
│               └── page.tsx     # Individual blog post
├── components/
│   ├── Header.tsx               # Nav + language switcher (receives lang prop)
│   ├── Footer.tsx               # Copyright footer
│   └── Clock.tsx                # SVG reading-time icon
├── i18n/
│   ├── config.ts                # Locale list and Lang type
│   └── dictionaries.ts          # All UI strings in PT and EN
├── lib/
│   └── posts.ts                 # Data layer (getAllPosts, getPostBySlug — all accept lang)
├── posts/
│   ├── pt/                      # Portuguese markdown files
│   └── en/                      # English markdown files
├── styles/
│   └── globals.css              # Tailwind + highlight.js + KaTeX
└── types/
    └── index.d.ts               # PostMeta and Post interfaces
public/
└── posts/                       # Post images, organized by slug
```
