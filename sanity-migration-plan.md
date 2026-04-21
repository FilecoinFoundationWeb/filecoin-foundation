# Migration Plan: Decap CMS & TinaCMS → Sanity CMS (Monorepo)

> **Scope:** Replace Decap CMS on `ff-site` and `ffdweb-site`, and TinaCMS on `filecoin-site`, with Sanity as the content management system for all three sites. Each site is treated as a separate migration with its own Sanity project, timeline, and cutover. The migrations share tooling conventions and can be sequenced to reduce risk.

---

## Table of Contents

1. [Background & Motivation](#1-background--motivation)
2. [Why Sanity](#2-why-sanity)
3. [Monorepo Architecture](#3-monorepo-architecture)
4. [Shared Infrastructure Decisions](#4-shared-infrastructure-decisions)
5. [ff-site (fil.org) — Migration Plan](#5-ff-site-filorg--migration-plan)
6. [ffdweb-site (ffdweb.org) — Migration Plan](#6-ffdweb-site-ffdweborg--migration-plan)
7. [filecoin-site (filecoin.io) — Migration Plan](#7-filecoin-site-filecoinio--migration-plan)
8. [Sequencing & Combined Timeline](#8-sequencing--combined-timeline)
9. [Ongoing Maintenance & Engineering Involvement](#9-ongoing-maintenance--engineering-involvement)
10. [Open Questions](#10-open-questions)

---

## 1. Background & Motivation

This monorepo contains three public-facing sites, each with a different CMS:

| App | Domain | CMS | Content volume |
|---|---|---|---|
| `apps/ff-site` | fil.org | Decap CMS (git backend) | 531 markdown files |
| `apps/ffdweb-site` | ffdweb.org | Decap CMS (git backend) | 185 markdown files |
| `apps/filecoin-site` | filecoin.io | TinaCMS (git backend) | 737 markdown files (bilingual) |

**The shared problem.** Both Decap CMS and TinaCMS use GitHub as their storage backend. Every content change — publishing a blog post, updating a project profile, editing a page — creates a branch, triggers a CI pipeline, and merges a commit to `main`. The ISR window means published content may not be visible for up to 24 hours without manual intervention.

This forces editorial teams into a quasi-engineering workflow. In practice, they cannot publish content without understanding git concepts, without CI succeeding, and often without engineering support when something goes wrong. The Decap CMS fork also carries maintenance debt that the team must absorb.

**What is not changing on any site:** the Next.js framework, the React components, the visual design, the URL structure, or the Tailwind configuration.

---

## 2. Why Sanity

See the reasoning documented in the original `ff-site`-specific plan. The summary:

- **No git required for publishing.** Content is stored in Sanity's hosted Content Lake. There is no git commit at any point in the publishing flow for either Decap or TinaCMS today.
- **Covers all content types.** Sanity's schema system supports arbitrarily complex document types across all three sites' content models, including i18n for `filecoin-site`.
- **On-demand revalidation.** Sanity webhooks trigger Next.js `revalidatePath()` calls on document publish. Content is live within ~10 seconds of the editor clicking "Publish."
- **TypeScript-first.** `sanity typegen` generates types from schemas, replacing manual Zod type layers.
- **Embedded Studio.** Sanity Studio deploys as a Next.js route at `/studio` on each site.
- **Pricing.** The free tier (3 non-admin users, 500k API requests/month, unlimited documents) is sufficient per site. Each site gets its own Sanity project.

---

## 3. Monorepo Architecture

```
filecoin-foundation/
├── apps/
│   ├── ff-site/          ← fil.org       (Decap → Sanity)
│   ├── ffdweb-site/      ← ffdweb.org    (Decap → Sanity)
│   ├── filecoin-site/    ← filecoin.io   (TinaCMS → Sanity)
│   └── uxit/
├── packages/
│   ├── ui/               ← shared React components (unchanged)
│   ├── utils/            ← shared utilities (unchanged)
│   └── ...
├── scripts/
│   └── migrate-to-sanity/  ← NEW: shared migration script utilities
└── docs/
    └── sanity-migration-plan.md  ← this document
```

**Shared migration tooling.** Migration scripts for all three sites live in `scripts/migrate-to-sanity/`. A common `lib/` within that directory holds utilities for reading markdown files, converting markdown bodies to Portable Text, and batch-uploading documents via the Sanity client. Each site has its own subdirectory of collection-specific scripts.

**Separate Sanity projects per site.** Each site gets its own Sanity project ID and dataset. Editorial teams, content models, and publishing cadences differ between sites. A shared project would complicate role management and create schema coupling between independent teams. Under a shared Sanity organization, billing and user management are still centralised.

---

## 4. Shared Infrastructure Decisions

### 4.1 Sanity Studio placement

Each site embeds Sanity Studio as a Next.js App Router route at `/studio`. This keeps the admin interface on the same domain without separate hosting.

### 4.2 On-demand revalidation

All three sites use the same webhook → revalidation pattern:

1. Sanity document published
2. Sanity POST to `/api/revalidate` on the respective site
3. Next.js `revalidateTag()` clears the affected cache entries
4. Pages update within ~10 seconds, no rebuild required

### 4.3 Images

Existing images in each site's `public/assets/` directory are not migrated. They are stored as plain URL string fields in Sanity documents and continue to be served from Vercel CDN. New images uploaded post-migration go to Sanity's asset pipeline (`cdn.sanity.io`).

### 4.4 TypeScript types

Each site runs `sanity typegen` against its own schema to generate `src/sanity/types.ts`. These generated types replace the manual Zod content type layers in each app.

### 4.5 Sequencing recommendation

Migrate in this order:

1. **`ffdweb-site` first.** Smallest, simplest content model, no external API integrations, no encryption. Proves the shared tooling and workflow before touching the larger sites.
2. **`ff-site` second.** More complex content model, external integrations, encryption widget. Benefits from lessons learned on `ffdweb-site`.
3. **`filecoin-site` last.** Most complex: large content volume (737 files), bilingual i18n, TinaCMS → Sanity migration path (different from Decap), case studies not yet in any CMS.

---

## 5. ff-site (fil.org) — Migration Plan

### 5.1 Current Architecture Snapshot

| Dimension | Current |
|---|---|
| Framework | Next.js 15 (App Router, React 19, TypeScript) |
| CMS | Decap CMS (custom fork, git backend, `main` branch) |
| Content format | Markdown + YAML frontmatter, read from filesystem at build time |
| Content volume | 531 files: 228 blog posts, 173 ecosystem projects, 98 events, 22 pages, 7 digest articles + 1 digest issue, 2 filecoin-plus monthly updates |
| Routing | ~530+ static pages |
| Data loading | `getMarkdownData()` utility, reads `src/content/**/*.md` via `gray-matter` |
| Revalidation | ISR, `revalidate = 86400` (24 hours) on root layout |
| API routes | `/api/subscribe` (newsletter), `/api/encryption` (AES encrypt/decrypt for ecosystem project PII) |
| External data | Airtable (Orbit events), GitHub API (ecosystem project form), YouTube oEmbed |
| Analytics | Plausible |
| Error tracking | Sentry |
| CI/CD | GitHub Actions + Turborepo |
| Hosting | Vercel |

### 5.2 Target Architecture

```
┌──────────────────────────────────────────────────────────┐
│              SANITY CONTENT LAKE — ff-site project       │
│                                                          │
│  Document types:                                         │
│  • post (228 blog posts)                                 │
│  • ecosystemProject (173 projects)                       │
│  • event (98 events)                                     │
│  • digestArticle (7 articles) + digestIssue (1 issue)    │
│  • filechainPlusUpdate (2 monthly updates)               │
│  • page singletons (22 static pages)                     │
│                                                          │
│  Sanity Studio → deployed at fil.org/studio              │
│  Webhooks → trigger Next.js on-demand revalidation       │
└──────────────────────┬───────────────────────────────────┘
                       │ GROQ queries
                       ▼
┌──────────────────────────────────────────────────────────┐
│          NEXT.JS 15 (App Router — unchanged)             │
│                                                          │
│  getMarkdownData() → sanityFetch() via GROQ              │
│  Sanity webhook → /api/revalidate → revalidatePath()     │
│  All components, routes, and integrations: unchanged     │
└──────────────────────────────────────────────────────────┘
```

### 5.3 Content Schema Design

#### Blog posts (`post`) — 228 files

| Frontmatter field | Sanity field | Type |
|---|---|---|
| `title` | `title` | `string` |
| `published-on` | `publishedAt` | `datetime` |
| `created-on`, `updated-on` | `createdAt`, `updatedAt` | `datetime` |
| `category` | `category` | `string` (list) |
| `description` | `description` | `text` |
| `image.src`, `image.alt` | `image.src`, `image.alt` | `string`, `string` |
| `add-table-of-contents` | `addTableOfContents` | `boolean` |
| Body (markdown) | `body` | `array` (Portable Text) |
| `seo.*` | `seo.*` | `object` |
| Filename stem | `slug.current` | `slug` |

#### Ecosystem projects (`ecosystemProject`) — 173 files

Same fields as the original plan. Key field: `email` and `full-name` stored AES-encrypted with `encrypted::` prefix. A custom Sanity Studio input component (`EncryptedField`) calls `/api/encryption` to display decrypted values and encrypt on save.

#### Events (`event`) — 98 files

Deeply nested schema (program, schedule, speakers, sponsors tiers). Most complex migration due to schema depth.

#### Digest articles (`digestArticle`) + digest issues (`digestIssue`) — 7 articles + 1 issue

The issue document (in `src/content/digest/issues/1.md`) is modelled as a separate singleton-like `digestIssue` type referenced by articles. Articles have the same schema as before: `issueNumber`, `articleNumber`, `authors[]`, `body`, `image`, `seo`.

#### Filecoin Plus monthly updates (`filecoinPlusUpdate`) — 2 files

New collection not in the original plan. Simple schema: `title`, `publishedAt`, `body` (Portable Text), `seo`. Served at `/filecoin-plus/monthly-updates/[slug]`.

#### Static page singletons — 22 files

Pages across `pages/`, `pages/security/`, `pages/filecoin-plus/`, `pages/governance/`, `pages/ecosystem-explorer/`. Each is a Sanity singleton with a fixed `_id`. The breakdown: 5 security sub-pages, 3 filecoin-plus, 2 governance, 2 ecosystem-explorer, plus 10 top-level pages.

### 5.4 Migration Phases

#### Phase 0 — Spike & Validation (1 week)

- Provision Sanity project for ff-site.
- Define `post` schema only. Import 5 blog posts. Confirm slugs, dates, Portable Text conversion.
- Replace blog page data fetch with GROQ on a feature branch. Confirm identical render.
- Validate webhook revalidation end-to-end via ngrok.
- Confirm Studio embeds at `localhost:3000/studio`.
- **Go/No-Go sign-off.**

#### Phase 1 — Schema Design & Studio Setup (1 week)

- Define all document type schemas in `apps/ff-site/src/sanity/schemas/`.
- Implement `EncryptedField` custom input component (`apps/ff-site/src/sanity/components/EncryptedField.tsx`), calling `/api/encryption`.
- Configure desk structure: collections by type, singletons pinned at top.
- Configure document preview.
- Run `sanity typegen` → `src/sanity/types.ts`.
- Deploy Studio to staging at `[staging-url]/studio`.
- Marketing team walkthrough.

#### Phase 2 — Migration Scripts (1 week)

Scripts in `scripts/migrate-to-sanity/ff-site/`:

- `migrate-blog.ts` — 228 posts, markdown → Portable Text
- `migrate-ecosystem.ts` — 173 projects, preserve `encrypted::` values verbatim
- `migrate-events.ts` — 98 events, deeply nested arrays
- `migrate-digest.ts` — 7 articles + 1 issue
- `migrate-filecoin-plus-updates.ts` — 2 monthly updates
- `migrate-pages.ts` — 22 singleton pages, slug-based relation resolution
- `validate-migration.ts` — count checks + 10 random spot-checks per type

#### Phase 3 — Next.js Data Layer (2 weeks)

- Create `src/sanity/client.ts`, `src/sanity/queries/` per collection.
- Replace `getMarkdownData()` in all 25+ page files with GROQ queries.
- Replace `generateStaticParams()` and `generateMetadata()` implementations.
- Replace `react-markdown` / rehype pipeline with `@portabletext/react`.
- Implement `portableTextComponents` for custom blocks (video, audio).
- Remove `predev`/`prebuild` scripts and webpack markdown/yaml loaders.

#### Phase 4 — On-Demand Revalidation (3 days)

- Remove `export const revalidate = 86400` from `layout.tsx`.
- Add cache tags to Sanity fetches (`post`, `post-[slug]`, etc.).
- Create `/api/revalidate/route.ts` with webhook signature validation.
- Configure Sanity webhooks to fire on publish, unpublish, delete.
- Test: publish → live within 10 seconds.

#### Phase 5 — Studio Configuration & Editorial Handover (1 week)

- Media plugin, live preview (Draft Mode), document actions.
- Write editorial guide. Record walkthrough with marketing team.
- Confirm: team can publish blog post, event, and edit static page without engineering.

#### Phase 6 — Production Content Migration (1 week)

- Run all migration scripts against production Sanity project.
- Validate: zero count mismatches. Spot-check 5 posts, 5 ecosystem projects, 3 events.
- Verify PII encryption: 3+ decrypt round-trips in Studio.
- Switch production environment variables to production Sanity project.
- Full production build from Sanity — confirm all 530+ pages generate.

#### Phase 7 — QA & Cutover (1 week)

- Percy visual regression across all pages, mobile + desktop.
- Cypress E2E suite passes.
- Broken link checker, Lighthouse audit.
- Smoke tests: newsletter subscribe, ecosystem project encryption round-trip.
- Deploy. Monitor Sentry for 48 hours.
- **Rollback:** previous Vercel deployment (markdown-backed) re-promotable in under 2 minutes. Trigger: Sentry error rate >2× baseline.

#### Phase 8 — Cleanup (3 days)

- Archive `src/content/` → `src/content-archive/` (keep 90 days, then delete).
- Delete `public/admin/` (Decap CMS UI).
- Remove `gray-matter`, `react-markdown`, `rehype-*`, `remark-*`, `frontmatter-markdown-loader` from `package.json`.
- Remove webpack markdown and yaml loaders from `next.config.js`.
- Remove `cms/*` and `ecosystem-submission/*` branch triggers from GitHub Actions.

### 5.5 New Files

| File | Purpose |
|---|---|
| `src/sanity/client.ts` | Sanity client configuration |
| `src/sanity/queries/*.ts` | GROQ queries per collection |
| `src/sanity/schemas/` | All document type schemas |
| `src/sanity/components/EncryptedField.tsx` | PII field Studio component |
| `src/sanity/types.ts` | Generated by `sanity typegen` |
| `src/app/studio/[[...tool]]/page.tsx` | Embedded Studio route |
| `src/app/api/revalidate/route.ts` | Webhook receiver |
| `scripts/migrate-to-sanity/ff-site/` | One-time migration scripts |

### 5.6 Third-Party Integrations

All external integrations are unchanged: Plausible, Sentry, Vercel Speed Insights, Airtable (Orbit), YouTube oEmbed, GitHub API (ecosystem project form), `/api/subscribe`, `/api/encryption`.

### 5.7 Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Markdown → Portable Text loses formatting | Medium | High | Validate rendered HTML for 20 sampled posts before cutover |
| Slug mismatch causes 404s | Low | High | Migration script enforces `slug.current = filename stem`; link checker catches mismatches |
| PII fields corrupted during migration | Low | High | Script copies encrypted strings verbatim; validate 5 decrypt round-trips in staging |
| Event nested schema fails to migrate cleanly | Medium | Medium | Phase 0 spike includes 3 event documents |
| `filecoinPlusUpdate` collection missed | Low | Low | New collection not in original plan; verify page `/filecoin-plus/monthly-updates/[slug]` generates correctly |

### 5.8 Success Criteria

- All 530+ pages render identically (Percy zero visual diff on static content).
- A new blog post published in Studio appears live within 10 seconds.
- Marketing team can publish any content type without engineering involvement.
- PII encryption/decryption works correctly in Studio.
- Sentry: zero new error types in 48 hours post-cutover.
- `public/admin/` removed from codebase.

### 5.9 Estimate

| Phase | Duration |
|---|---|
| Phase 0 — Spike | 1 week |
| Phase 1 — Schema Design | 1 week |
| Phase 2 — Migration Scripts | 1 week |
| Phase 3 — Data Layer | 2 weeks |
| Phase 4 — Revalidation | 3 days |
| Phase 5 — Editorial Handover | 1 week |
| Phase 6 — Production Migration | 1 week |
| Phase 7 — QA & Cutover | 1 week |
| Phase 8 — Cleanup | 3 days |
| **Total** | **~9–10 weeks** |

---

## 6. ffdweb-site (ffdweb.org) — Migration Plan

### 6.1 Current Architecture Snapshot

| Dimension | Current |
|---|---|
| Framework | Next.js 15 (App Router, React 19, TypeScript) — same stack as ff-site |
| CMS | Decap CMS (git backend) |
| Content format | Markdown + YAML frontmatter |
| Content volume | 185 files: 83 learning resources, 50 blog posts, 30 projects, 22 digest articles |
| Routing | ~200 static pages |
| Data loading | `getMarkdownData()` — same shared utility as ff-site |
| Revalidation | ISR, 24-hour window |
| API routes | **None** |
| External services | Plausible, Sentry only |
| Shared packages | Same `@filecoin-foundation/*` packages as ff-site |
| CI/CD | GitHub Actions + Turborepo |
| Hosting | Vercel |

`ffdweb-site` is architecturally identical to `ff-site` — same framework, same data loading pattern, same shared packages — but with a simpler content model and no external API integrations or PII encryption. It is the lowest-risk site to migrate first.

### 6.2 Target Architecture

```
┌──────────────────────────────────────────────────────────┐
│           SANITY CONTENT LAKE — ffdweb-site project      │
│                                                          │
│  Document types:                                         │
│  • post (50 blog posts)                                  │
│  • project (30 partner projects)                         │
│  • learningResource (83 resources)                       │
│  • digestArticle (22 articles)                           │
│  • page singletons (utility + layout pages)              │
│                                                          │
│  Sanity Studio → deployed at ffdweb.org/studio           │
│  Webhooks → trigger Next.js on-demand revalidation       │
└──────────────────────┬───────────────────────────────────┘
                       │ GROQ queries
                       ▼
┌──────────────────────────────────────────────────────────┐
│          NEXT.JS 15 (App Router — unchanged)             │
│                                                          │
│  getMarkdownData() → sanityFetch() via GROQ              │
│  Sanity webhook → /api/revalidate → revalidatePath()     │
│  All components, routes, and integrations: unchanged     │
└──────────────────────────────────────────────────────────┘
```

### 6.3 Content Schema Design

#### Blog posts (`post`) — 50 files

| Frontmatter field | Sanity field | Type | Notes |
|---|---|---|---|
| `title` | `title` | `string` | |
| `created-on`, `updated-on`, `published-on` | `createdAt`, `updatedAt`, `publishedAt` | `datetime` | |
| `category` | `category` | `string` (list) | updates, projects |
| `image.src` | `image.src` | `string` | URL path |
| `seo.description` | `seo.description` | `text` | |
| Body (markdown) | `body` | `array` (Portable Text) | |
| Filename stem | `slug.current` | `slug` | |

#### Projects (`project`) — 30 files

| Frontmatter field | Sanity field | Type |
|---|---|---|
| `title` | `title` | `string` |
| `created-on`, `updated-on`, `published-on` | `createdAt`, `updatedAt`, `publishedAt` | `datetime` |
| `category` | `category` | `string` (list) |
| `description` | `description` | `text` |
| `website` | `website` | `url` |
| `active-partnership` | `activePartnership` | `boolean` |
| `image.src` | `image.src` | `string` |
| `seo.*` | `seo.*` | `object` |
| Body (markdown) | `body` | `array` (Portable Text) |

#### Learning resources (`learningResource`) — 83 files

| Frontmatter field | Sanity field | Type |
|---|---|---|
| `title` | `title` | `string` |
| `description` | `description` | `text` |
| `organization` | `organization` | `string` |
| `category` | `category` | `string` (list) |
| `resource-type` | `resourceType` | `string` (list) |
| `technicality` | `technicality` | `string` (1–3 scale) |
| `length` | `length` | `string` |
| `keywords` | `keywords` | `text` |
| `link` | `link` | `url` |
| `seo.*` | `seo.*` | `object` |

Learning resources have no markdown body — they are pure metadata pointing to an external URL. This makes the migration script simpler: no Portable Text conversion required.

#### Digest articles (`digestArticle`) — 22 files

Same structure as ff-site digest articles: `issueNumber`, `articleNumber`, `authors[]`, `body` (Portable Text), `image`, `seo`. There are more articles here (22 vs 7 on ff-site) and they are organised across multiple issues.

#### Static page singletons

ffdweb-site has fewer bespoke page templates than ff-site. Pages in `cms/pages/layouts/` and `cms/pages/utility/` that have editable copy fields are modelled as singletons. Pages whose layout is entirely code-driven (e.g. `faqs`) can be added if editors need to manage content, or left as code.

### 6.4 Migration Phases

Because `ffdweb-site` shares its stack with `ff-site`, the migration scripts and data layer approach are nearly identical. The tooling built here becomes the template for ff-site.

#### Phase 0 — Spike & Validation (1 week)

Same approach as ff-site Phase 0 but on the simpler `post` collection. Key validation goal: confirm the `@filecoin-foundation/utils` `getMarkdownData` abstraction can be cleanly replaced in ffdweb-site's page files with GROQ queries, which validates the same pattern for ff-site.

#### Phase 1 — Schema Design & Studio Setup (3–4 days)

- Define schemas: `post.ts`, `project.ts`, `learningResource.ts`, `digestArticle.ts`, singletons.
- No encryption widget needed.
- `sanity typegen` → `src/sanity/types.ts`.
- Deploy Studio to staging.

#### Phase 2 — Migration Scripts (3–4 days)

Scripts in `scripts/migrate-to-sanity/ffdweb-site/`:

- `migrate-blog.ts` — 50 posts
- `migrate-projects.ts` — 30 projects (no Portable Text conversion for body)
- `migrate-learning-resources.ts` — 83 resources (metadata only, no body)
- `migrate-digest.ts` — 22 articles
- `validate-migration.ts`

Learning resources have no body content to convert, making `migrate-learning-resources.ts` the simplest migration script across all three sites.

#### Phase 3 — Next.js Data Layer (1 week)

Same approach as ff-site Phase 3. Fewer page files to update (~12 routes vs 25+ for ff-site). No encryption or external service integrations to work around.

#### Phase 4 — On-Demand Revalidation (1 day)

Identical to ff-site Phase 4.

#### Phase 5 — Studio Configuration & Editorial Handover (1 week)

Write the editorial guide for the FFDW editorial team. Walkthrough and sign-off.

#### Phase 6 — Production Content Migration (3–4 days)

Run migration scripts against production Sanity project. 185 files vs 531 for ff-site — validation runs faster.

#### Phase 7 — QA & Cutover (1 week)

Percy visual regression, Cypress E2E, broken link check, Lighthouse. Deploy. Monitor 48 hours.

**Rollback:** same as ff-site — previous Vercel deployment re-promotable in under 2 minutes.

#### Phase 8 — Cleanup (2 days)

Same as ff-site: archive markdown files, remove Decap CMS admin directory, remove markdown processing packages.

### 6.5 New Files

| File | Purpose |
|---|---|
| `src/sanity/client.ts` | Sanity client |
| `src/sanity/queries/*.ts` | GROQ queries per collection |
| `src/sanity/schemas/` | Document type schemas |
| `src/sanity/types.ts` | Generated by `sanity typegen` |
| `src/app/studio/[[...tool]]/page.tsx` | Embedded Studio route |
| `src/app/api/revalidate/route.ts` | Webhook receiver |
| `scripts/migrate-to-sanity/ffdweb-site/` | Migration scripts |

### 6.6 Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| `learningResource` filter/search breaks with Sanity data shape | Low | Medium | Learning resources use client-side filtering via `nuqs`; confirm filter params still resolve against Sanity-fetched data in staging |
| Digest issue grouping logic breaks | Low | Medium | Digest articles are grouped by `issueNumber` in the template; GROQ query returns same field, verify grouping renders correctly |
| Shared `@filecoin-foundation/utils` functions assume filesystem | Low | High | Audit all imported utilities for filesystem assumptions before Phase 3 |

### 6.7 Success Criteria

- All ~200 pages render identically (Percy zero visual diff).
- A new blog post or project appears live within 10 seconds of publishing in Studio.
- FFDW editorial team can publish all content types without engineering.
- Sentry: zero new error types in 48 hours post-cutover.

### 6.8 Estimate

| Phase | Duration |
|---|---|
| Phase 0 — Spike | 1 week |
| Phase 1 — Schema Design | 3–4 days |
| Phase 2 — Migration Scripts | 3–4 days |
| Phase 3 — Data Layer | 1 week |
| Phase 4 — Revalidation | 1 day |
| Phase 5 — Editorial Handover | 1 week |
| Phase 6 — Production Migration | 3–4 days |
| Phase 7 — QA & Cutover | 1 week |
| Phase 8 — Cleanup | 2 days |
| **Total** | **~6–7 weeks** |

---

## 7. filecoin-site (filecoin.io) — Migration Plan

### 7.1 Current Architecture Snapshot

| Dimension | Current |
|---|---|
| Framework | Next.js (App Router, TypeScript) with `next-intl` for i18n |
| CMS | **TinaCMS** (git backend; blog only — not case studies) |
| Content format | Markdown + YAML frontmatter |
| Content volume | 737 files: 461 English blog posts, 263 Chinese (zh-cn) blog posts, 10 case studies (en + zh-cn), 3 pending-approval case studies |
| Routing | `[locale]/(homepage)`, `[locale]/blog`, `[locale]/blog/[slug]`, `[locale]/case-studies`, `[locale]/case-studies/[slug]`, plus 6 static marketing pages |
| i18n | `next-intl`, locale prefix in URL (`/en/`, `/zh-cn/`), content split by locale subfolder |
| CMS coverage | TinaCMS covers blog only. Case studies are not in TinaCMS — they are edited directly in git |
| API routes | `/api/hubspot/provide-storage`, `/api/hubspot/store-data`, `/api/mailchimp` |
| External services | HubSpot (two form endpoints), Mailchimp, Plausible, Sentry |
| CI/CD | GitHub Actions + Turborepo |
| Hosting | Vercel |

`filecoin-site` differs from the other two sites in three important ways:

1. **TinaCMS, not Decap.** TinaCMS uses a different schema format (TypeScript objects in `tina/config.ts`) and has its own blog schema already defined. The migration path is CMS-to-CMS rather than markdown-to-CMS from an editorial perspective, but the underlying data is still markdown on disk, so the migration scripts follow the same approach.

2. **Bilingual content.** Blog posts exist in `en` and `zh-cn` locale subfolders. Some posts exist in both languages; others exist in only one. Case studies similarly have locale-split content.

3. **Case studies are not CMS-managed.** The `content/case-studies/` directory is not in TinaCMS's schema. Sanity provides the opportunity to bring case studies under CMS control for the first time.

### 7.2 TinaCMS Schema Reference

The current TinaCMS `post` collection (the only configured collection) has these fields:

| TinaCMS field | Type | Notes |
|---|---|---|
| `title` | `string` | |
| `excerpt` | `string` | ~160 char summary, used for social metadata |
| `share_image` | `image` | Social/OG image |
| `image.url`, `image.alt` | `image`, `string` | Header image |
| `author` | `string` | |
| `date` | `datetime` | |
| `categories` | `string[]` (list) | updates, interviews, awards, events |
| `draft` | `boolean` | If true, not published |
| `body` | `rich-text` | Markdown body with YouTube shortcode template |
| `double_column_mode`, `double_column_inverted`, `dim_image`, `main_feature_inverted` | `boolean` | Layout flags |
| `related_article_1/2/3` | `reference` | Relations to other posts |
| `seo.description` | `string` | |

The YouTube shortcode uses a custom TinaCMS template (`{{< youtube id="..." title="..." >}}`). This is replaced by a Portable Text custom block type (`youtubeBlock`) in Sanity, with the same render logic.

### 7.3 Target Architecture

```
┌──────────────────────────────────────────────────────────┐
│         SANITY CONTENT LAKE — filecoin-site project      │
│                                                          │
│  Document types (locale-aware):                          │
│  • post (461 en + 263 zh-cn blog posts)                  │
│  • caseStudy (5 en + 5 zh-cn, brought under CMS)         │
│                                                          │
│  i18n strategy: separate documents per locale,           │
│  linked via @sanity/document-internationalization plugin  │
│                                                          │
│  Sanity Studio → deployed at filecoin.io/[locale]/studio │
│  Webhooks → trigger Next.js on-demand revalidation       │
└──────────────────────┬───────────────────────────────────┘
                       │ GROQ queries (filtered by locale)
                       ▼
┌──────────────────────────────────────────────────────────┐
│          NEXT.JS (App Router + next-intl — unchanged)    │
│                                                          │
│  TinaCMS data fetching → sanityFetch() via GROQ          │
│  Locale filtering in GROQ: *[_type == "post"             │
│    && language == $locale && ...]                        │
│  Sanity webhook → /api/revalidate → revalidatePath()     │
└──────────────────────────────────────────────────────────┘
```

### 7.4 i18n Schema Strategy

**Approach: separate documents per locale, linked via the `@sanity/document-internationalization` plugin.**

Each blog post exists as two separate Sanity documents — one with `language: "en"` and one with `language: "zh-cn"`. The internationalization plugin provides a side-by-side translation UI in Studio, allowing editors to see the English and Chinese versions of a post next to each other and mark translation status.

This matches `next-intl`'s routing model (locale prefix in URL) and keeps GROQ queries simple:

```groq
*[_type == "post" && language == $locale && !(_id in path("drafts.**"))]
  | order(date desc)
```

**Posts that exist in only one language** are valid: a document with `language: "en"` and no corresponding `zh-cn` document simply won't appear in Chinese routes. This matches the current behaviour where `en`-only posts are absent from `zh-cn` routes.

### 7.5 Content Schema Design

#### Blog posts (`post`) — 724 files (461 en + 263 zh-cn)

| TinaCMS / file field | Sanity field | Type | Notes |
|---|---|---|---|
| `title` | `title` | `string` | |
| `excerpt` | `excerpt` | `text` | Used for OG/social meta |
| `share_image` | `shareImage` | `string` | URL path |
| `image.url`, `image.alt` | `image.url`, `image.alt` | `string`, `string` | |
| `author` | `author` | `string` | |
| `date` | `date` | `datetime` | |
| `categories[]` | `categories[]` | `array of string` | updates, interviews, awards, events |
| `draft` | `draft` | `boolean` | |
| `double_column_mode`, etc. | `doubleColumnMode`, etc. | `boolean` | Layout flags preserved |
| `related_article_1/2/3` | `relatedArticles[]` | `array of reference` | 3 references consolidated into one array |
| `seo.description` | `seo.description` | `text` | |
| Body (markdown with YouTube shortcode) | `body` | `array` (Portable Text) | YouTube shortcode → `youtubeBlock` custom type |
| Locale subfolder | `language` | `string` | `"en"` or `"zh-cn"` |
| Filename stem | `slug.current` | `slug` | Preserves URL |

**YouTube shortcode conversion.** The current body contains shortcodes of the form `{{< youtube id="abc123" title="..." >}}`. During migration, these are detected by regex in the migration script, extracted, and replaced with Portable Text `youtubeBlock` objects before uploading to Sanity. The Portable Text renderer maps `youtubeBlock` to the existing `react-lite-youtube-embed` component.

#### Case studies (`caseStudy`) — 10 files + 3 pending (NEW to CMS)

Case studies are currently not managed through TinaCMS — they exist as markdown files edited directly in git. Migrating to Sanity brings them under editorial control for the first time.

| File field | Sanity field | Type |
|---|---|---|
| `title` | `title` | `string` |
| `publishedOn` | `publishedOn` | `datetime` |
| `updatedOn` | `updatedOn` | `datetime` |
| `cardDescription` | `cardDescription` | `text` |
| `website` | `website` | `url` |
| Body (markdown) | `body` | `array` (Portable Text) |
| Locale subfolder | `language` | `string` |

The 3 pending-approval case studies in `content/case-studies/pending-approvals/` are imported with `draft: true` in Sanity (stored as draft documents), visible only in Studio until an editor publishes them.

### 7.6 Migration Phases

#### Phase 0 — Spike & Validation (1 week)

- Provision Sanity project for filecoin-site.
- Install `@sanity/document-internationalization` plugin. Confirm locale-aware Studio UI.
- Define `post` schema with `language` field.
- Write a small script to import 5 English and 5 Chinese blog posts. Confirm slugs, locale assignment, date parsing, YouTube shortcode extraction.
- Replace blog page data fetch on a feature branch. Confirm locale-filtered GROQ queries return correct posts for each locale.
- Validate webhook revalidation.
- **Go/No-Go sign-off.** Key question: does `next-intl` routing work correctly when page slugs come from GROQ rather than filenames?

#### Phase 1 — Schema Design & Studio Setup (1 week)

- Define `post` schema (with all layout flags, `youtubeBlock` Portable Text template, related articles as references, `language` field).
- Define `caseStudy` schema.
- Configure `@sanity/document-internationalization` with `en` and `zh-cn` locales.
- Configure desk structure: Blog and Case Studies as top-level sections, with locale filtering visible in Studio.
- `sanity typegen` → `src/sanity/types.ts`.
- Deploy Studio to staging. Walk through with editorial team.

#### Phase 2 — Migration Scripts (1.5 weeks)

Scripts in `scripts/migrate-to-sanity/filecoin-site/`:

- `migrate-blog-en.ts` — 461 English posts
- `migrate-blog-zh-cn.ts` — 263 Chinese posts
- `link-translations.ts` — after both locale scripts run, create translation metadata links between paired documents using the `@sanity/document-internationalization` document structure
- `migrate-case-studies.ts` — 10 published + 3 pending (imported as Sanity drafts)
- `validate-migration.ts` — count checks by locale

The larger content volume (724 blog posts) and the two-phase migration (import by locale, then link translations) make Phase 2 longer here than on the other sites. The `link-translations.ts` script matches posts by slug across locales to create translation pairs.

Related article TinaCMS references (e.g. `content/blog/posts/filecoin-news-85.en.md`) must be resolved to Sanity document `_id`s during migration. The script builds a slug→`_id` map per locale before resolving references.

#### Phase 3 — Next.js Data Layer (2 weeks)

- Create `src/sanity/client.ts`, `src/sanity/queries/blog.ts`, `src/sanity/queries/caseStudies.ts`.
- Replace TinaCMS data fetching in `[locale]/blog/page.tsx` and `[locale]/blog/[slug]/page.tsx` with locale-parameterised GROQ queries.
- Replace `[locale]/case-studies/page.tsx` and `[locale]/case-studies/[slug]/page.tsx` — these currently read markdown directly (no TinaCMS abstraction), so the change is straightforward.
- Update `generateStaticParams()` for blog and case study routes to pull slugs from Sanity per locale.
- Replace markdown rendering with `@portabletext/react`; implement `youtubeBlock` Portable Text component.
- Remove TinaCMS client import from pages. Keep `tina/config.ts` until Phase 8.
- Static marketing pages (`/build-on-filecoin`, `/learn`, `/store-data`, etc.) are currently code-only with no CMS content — no changes needed.

#### Phase 4 — On-Demand Revalidation (3 days)

Same pattern as ff-site and ffdweb-site. The revalidation endpoint must handle locale-aware `revalidateTag()` calls:

```typescript
revalidateTag(`post-${body.language}-${body.slug?.current}`)
revalidateTag(`post-${body.language}`) // invalidate list pages for this locale
```

#### Phase 5 — Studio Configuration & Editorial Handover (1 week)

- Configure locale switcher in Studio for editors working across English and Chinese content.
- Media plugin.
- Live preview with locale context.
- Write editorial guide covering: how to publish a new post in English, how to add a Chinese translation, how to add a case study, how to promote a pending case study.
- Walkthrough with editorial team.

#### Phase 6 — Production Content Migration (1.5 weeks)

Run all migration scripts against production Sanity project. Larger volume (737 files) and two-phase blog migration (import + link translations) make this longer. Validate:
- Blog count per locale (461 en, 263 zh-cn).
- Translation links: sample 20 paired posts and confirm Studio shows both locale versions linked.
- Case studies: 10 published documents visible, 3 as drafts.
- YouTube shortcodes: render correctly in staging build.
- Related article references: 3 sampled posts show correct related article titles in Studio.

#### Phase 7 — QA & Cutover (1 week)

Percy visual regression (both `/en/` and `/zh-cn/` routes), Cypress E2E, broken link check across both locales, Lighthouse. Deploy. Monitor Sentry for 48 hours.

**Rollback:** previous Vercel deployment re-promotable in under 2 minutes.

#### Phase 8 — Cleanup (3 days)

- Archive `content/blog/`, `content/case-studies/` → `content-archive/`.
- Remove `tinacms`, `@tinacms/cli` from `package.json`.
- Delete `tina/` directory.
- Remove `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN` environment variables from Vercel.
- Remove TinaCMS GitHub Actions workflow step (if any).
- Update `README.md`.

### 7.7 New Files

| File | Purpose |
|---|---|
| `src/sanity/client.ts` | Sanity client |
| `src/sanity/queries/blog.ts` | GROQ queries for blog (locale-parameterised) |
| `src/sanity/queries/caseStudies.ts` | GROQ queries for case studies |
| `src/sanity/schemas/post.ts` | Blog post schema with `language` field |
| `src/sanity/schemas/caseStudy.ts` | Case study schema with `language` field |
| `src/sanity/types.ts` | Generated by `sanity typegen` |
| `src/app/[locale]/studio/[[...tool]]/page.tsx` | Studio route (locale-aware path) |
| `src/app/api/revalidate/route.ts` | Webhook receiver (locale-aware tags) |
| `scripts/migrate-to-sanity/filecoin-site/` | Migration scripts |

### 7.8 API Routes — Unchanged

All three API routes are unchanged: `/api/hubspot/provide-storage`, `/api/hubspot/store-data`, `/api/mailchimp`. These handle form submissions unrelated to CMS content.

### 7.9 Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Translation linking script fails to match en↔zh-cn pairs | Medium | Medium | Match by slug only where both exist; posts with no translation pair are left as locale-only documents (valid state) |
| YouTube shortcode regex misses edge cases | Medium | Medium | Run shortcode extractor on all 724 posts in staging; compare rendered output count of `<iframe>` tags against baseline |
| `next-intl` routing breaks when slugs come from GROQ instead of filenames | Low | High | Validate in Phase 0 spike; `next-intl` is slug-agnostic — data source does not affect routing |
| 724-post migration volume causes Sanity API rate limits | Low | Medium | Use batch mutations (100 docs/batch) with exponential backoff; migration runs overnight if needed |
| Related article references resolve incorrectly across locales | Medium | Medium | Migration script builds per-locale slug→`_id` map before resolving references; validate 10 sampled posts |
| Case studies in `pending-approvals/` go live accidentally | Low | High | Import as Sanity draft documents; confirm they are not returned by published-document queries in staging |
| Static marketing pages (`/learn`, `/build-on-filecoin`) have hardcoded i18n strings | Low | Low | These pages are not CMS-managed; no change required for this migration |

### 7.10 Success Criteria

- All blog pages render identically in both `/en/` and `/zh-cn/` routes (Percy zero visual diff).
- New blog post published in Studio for one locale appears within 10 seconds; does not appear in the other locale unless a translation document is also published.
- Case studies page renders the 10 published case studies; 3 pending-approval studies are not visible.
- YouTube embeds render correctly across a sample of 10 posts.
- HubSpot and Mailchimp form submissions continue to work.
- TinaCMS (`tina/` directory) removed from codebase.

### 7.11 Estimate

| Phase | Duration |
|---|---|
| Phase 0 — Spike (i18n validation focus) | 1 week |
| Phase 1 — Schema Design | 1 week |
| Phase 2 — Migration Scripts (bilingual + translation linking) | 1.5 weeks |
| Phase 3 — Data Layer (two routes × two locales) | 2 weeks |
| Phase 4 — Revalidation (locale-aware tags) | 3 days |
| Phase 5 — Editorial Handover | 1 week |
| Phase 6 — Production Migration (737 files + translation linking) | 1.5 weeks |
| Phase 7 — QA & Cutover (two locale paths) | 1 week |
| Phase 8 — Cleanup | 3 days |
| **Total** | **~10–11 weeks** |

---

## 8. Sequencing & Combined Timeline

### Recommended order: ffdweb-site → ff-site → filecoin-site

| Site | Rationale |
|---|---|
| `ffdweb-site` first | Simplest content model, no external integrations, no encryption. Proves shared tooling and the `getMarkdownData` → GROQ replacement pattern before applying it to larger sites. |
| `ff-site` second | Same stack as ffdweb-site — lessons apply directly. More complex schema and integrations, but the shared migration script utilities are already validated. |
| `filecoin-site` last | Most complex: largest content volume, bilingual i18n, different CMS (TinaCMS), case studies not yet in any CMS. Benefits from all prior learning. |

Migrations can be run **sequentially with no overlap** (most conservative) or with **partial overlap** (e.g., ff-site Phase 3 starts while filecoin-site Phase 0 runs in parallel). The table below shows the conservative sequential schedule.

### Sequential schedule

| Milestone | Calendar week |
|---|---|
| ffdweb-site kicks off | Week 1 |
| ffdweb-site cutover | Week 7 |
| ff-site kicks off | Week 8 |
| ff-site cutover | Week 17 |
| filecoin-site kicks off | Week 18 |
| filecoin-site cutover | Week 28 |
| All cleanup complete | Week 30 |

**Total duration (sequential): ~30 weeks (~7 months).**

### Parallel schedule (if two engineers available)

| Track | Weeks | Duration |
|---|---|---|
| Track A: ffdweb-site | 1–7 | 6–7 weeks |
| Track A: ff-site (starts after ffdweb-site cutover) | 8–17 | 9–10 weeks |
| Track B: filecoin-site (starts at Week 8, parallel to ff-site) | 8–18 | 10–11 weeks |

**Total duration (parallel tracks): ~18 weeks (~4.5 months).**

The filecoin-site migration is independent of ff-site and ffdweb-site. It can start as soon as one engineer is available, provided the shared migration script utilities in `scripts/migrate-to-sanity/lib/` are written and stable (established during ffdweb-site Phase 2).

---

## 9. Ongoing Maintenance & Engineering Involvement

### 9.1 What Sanity requires from engineering post-migration

**Schema changes — the main ongoing cost.** Any time the editorial team needs a new field, a new content type, or a structural change to an existing type, an engineer must update the TypeScript schema file, run `sanity typegen`, and deploy. This is not a Sanity-specific limitation — it is inherent to any typed CMS with code-defined schemas. Rough cost: 30 minutes for a simple field addition, 1–3 days for a new collection.

**GROQ query updates.** If a schema change affects the shape of data returned to a page, the corresponding query and any TypeScript types that consume it need updating. This is tightly coupled to schema changes — it is the same engineering touch, not an additional one.

**Dependency updates.** `@sanity/client`, `next-sanity`, `@portabletext/react` are npm packages updated at the same cadence as any other dependency in the monorepo. No different from updating `tailwindcss` or `next`.

**Webhook monitoring.** The `/api/revalidate` endpoint needs to stay healthy. If it silently breaks, content still publishes in Studio but pages serve stale cache indefinitely. This needs a Sentry alert on the endpoint from day one — it cannot be assumed to be working. Low-touch once instrumented, but cannot be ignored.

**The `EncryptedField` component (ff-site only).** The custom Studio component that calls `/api/encryption` is bespoke code. If the encryption endpoint contract changes, this component needs updating. Narrow surface area, but engineering-owned.

**What requires zero engineering post-migration:**
- Routine publishing (blog posts, events, projects, pages) — this is the whole point
- Server maintenance, uptime, backups, SSL — Sanity is fully managed SaaS
- Security patches on the Content Lake — Sanity's responsibility
- Storage scaling — handled by Sanity

---

### 9.2 Why Ghost is not a complete alternative

Ghost is often cited as the low-maintenance alternative to a headless CMS. For a blog-only site, that reputation is deserved: Ghost Pro is essentially zero ongoing engineering. But Ghost has no support for custom content types. It can model posts and pages. It cannot model the structured content these sites require:

| Content type | ff-site | ffdweb-site | filecoin-site | Ghost can model? |
|---|---|---|---|---|
| Blog posts | 228 | 50 | 724 | ✓ |
| Digest articles | 7 | 22 | — | ✓ (as posts) |
| Ecosystem projects (20-option taxonomy, nested tech fields) | 173 | — | — | ✗ |
| Events (nested program / schedule / speakers / sponsors) | 98 | — | — | ✗ |
| Learning resources (structured metadata, no body) | — | 83 | — | ✗ |
| Projects (category, active-partnership, external URL) | — | 30 | — | ✗ |
| Static page singletons (22 bespoke per-page schemas) | 22 | ✓ subset | — | ✗ |
| Bilingual posts (en + zh-cn, translation-linked) | — | — | 724 | ✗ |

For **ff-site**, Ghost covers 235 of 531 content files (228 blog + 7 digest). The remaining 296 files — ecosystem projects, events, pages, filecoin-plus updates — still need a separate CMS. Running two content systems simultaneously means two editorial workflows, two webhook surfaces, and two dependency chains to maintain. The combined maintenance burden would likely exceed Sanity alone.

For **ffdweb-site**, Ghost covers 72 of 185 files. Learning resources and projects remain either in the git-backed workflow or in a second system.

For **filecoin-site**, Ghost has no i18n support. The Chinese blog would need separate handling, and Ghost has no equivalent for the TinaCMS `related_article` reference fields.

A Ghost-only approach does not eliminate engineering from the publishing workflow — it eliminates it for blog posts while leaving the majority of content on the git-backed workflow that caused the problem in the first place.

---

### 9.3 Engineering involvement: before vs after

| Task | Decap / TinaCMS today | Sanity post-migration |
|---|---|---|
| Publish a blog post | Engineer sometimes needed (CI failure, branch conflict, git confusion) | Zero engineering |
| Publish an event or project | Engineer sometimes needed | Zero engineering |
| Add a field to an existing collection | Engineer required (schema + code change) | Engineer required (schema + code change + typegen) |
| Add a new content type | Engineer required | Engineer required (schema + queries + migration script) |
| CMS platform outage | Engineering investigates (custom Decap fork) | Sanity's problem |
| Infrastructure / server maintenance | Netlify / Vercel managed | Vercel managed (Sanity hosted) |
| Content visible within seconds of publishing | No (24-hour ISR, or manual cache bust) | Yes (~10s via webhook revalidation) |
| Rollback a content mistake | Git revert — engineer required | Sanity revision history — editor self-service |

---

### 9.4 Honest assessment

**Sanity reduces engineering involvement in routine publishing to zero.** That is the primary goal and it is fully achieved. The ongoing engineering cost is schema maintenance: new fields and new content types require a code change. This is true of any headless CMS with a typed content model and is not meaningfully more than Decap or TinaCMS require for the same changes today.

**The one genuine Sanity maintenance risk** is the webhook-to-revalidation path. If `/api/revalidate` breaks silently, editors see their changes in Studio but the live site serves stale content, with no obvious error. This is mitigated by adding a Sentry alert on the endpoint from day one and by Sanity's own webhook delivery retry logic. Ghost has the same risk if used for revalidation — it is not a Sanity-specific concern.

**If editorial content needs are expected to be stable** (no new collections, infrequent field additions), Sanity's post-migration maintenance burden is low. **If the sites are in active product development** with frequent schema evolution, that schema-change engineering cost is real and should be factored into the decision. It is not eliminated by choosing any other headless CMS.

---

## 10. Open Questions

1. **Sanity organization.** Should the three Sanity projects be created under a shared Sanity organization for centralised billing and user management? Recommendation: yes — create a `filecoin-foundation` organization in Sanity and provision all three projects under it.

2. **Sanity plan per site.** The free tier (3 non-admin users) may be insufficient if multiple team members across FF and FFDW need editorial access simultaneously. Confirm the editorial team size per site before provisioning.

3. **Studio URL for filecoin-site.** Given the `[locale]` prefix in the App Router, the Studio route should be at `/[locale]/studio/[[...tool]]/` or at a locale-agnostic `/studio/` path. The locale-agnostic path is simpler. Confirm with the team.

4. **Case studies workflow post-migration.** Once case studies are in Sanity, who is the editorial owner? Is the current `pending-approvals` folder pattern replaced by Sanity's draft/publish workflow?

5. **zh-cn content ownership.** Who authors and edits the Chinese blog posts on filecoin-site? Confirm they will have Sanity Editor access and understand the translation linking workflow before Phase 5 editorial handover.

6. **Image migration.** All three plans leave existing `public/assets/` images in place, serving them from Vercel CDN. If a unified image library across sites is desired, a separate image migration phase can be scoped after the content migration is stable.

7. **Shared Sanity schema packages.** `post`, `digestArticle`, and `seo` schemas are very similar across ff-site and ffdweb-site. A shared `packages/sanity-schemas/` package in the monorepo could reduce duplication. This is an optimisation — not required for the migration — but worth discussing before Phase 1 schema work starts.

8. **filecoin-site static page copy.** The marketing pages (`/learn`, `/build-on-filecoin`, `/provide-storage`, `/community-hub`) have hardcoded copy in React components and i18n JSON files. These are not covered by this migration. A subsequent phase could model them as Sanity singletons, following the ff-site static pages pattern.

---

*Last updated: 2026-04-21*
*Status: Draft — pending Phase 0 spike sign-off on ffdweb-site*
