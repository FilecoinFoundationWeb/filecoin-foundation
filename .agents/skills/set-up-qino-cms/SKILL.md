---
name: set-up-qino-cms
description: Use when adding Qino (@qino/cms) to a JavaScript or TypeScript project, when asked to install, set up, or configure Qino as the Markdown/JSON content layer of an app, when starting a new blog or content site with Qino, or when `qino build` or `qino check` fails during setup.
---

# Set up Qino CMS

## Overview

Qino is a flat-file CMS: content lives as `.md`, `.mdx`, `.markdown`, or `.json` files, definitions live in a `qino/` folder, and a `qino` CLI validates everything and generates slug types.

**Done means:** `qino build` exits 0 and, in TypeScript projects, `tsc --noEmit` passes. Don't stop before both.

Written for `@qino/cms` 0.4. If the installed version is newer and an API here doesn't match, the live docs win.

Match the target project's code style (quotes, semicolons, import paths, validator).

## 1. Detect the setup

Before writing anything, find:

- **Package manager** from the lockfile:

  | Lockfile            | Install                        | Run CLI           |
  | ------------------- | ------------------------------ | ----------------- |
  | `pnpm-lock.yaml`    | `pnpm add @qino/cms@latest`    | `pnpm qino build` |
  | `package-lock.json` | `npm install @qino/cms@latest` | `npx qino build`  |
  | `bun.lock(b)`       | `bun add @qino/cms@latest`     | `bunx qino build` |
  | `yarn.lock`         | `yarn add @qino/cms@latest`    | `yarn qino build` |

- **Package root.** In a monorepo, work inside the package that owns the app. The CLI resolves `qino/` from the working directory.
- **Requirements.** Node 22+. If TypeScript is used, 5.9+ with `strict: true`. If these aren't met, stop and tell the user.
- **Validator.** Any [Standard Schema](https://standardschema.dev) library works. If the project already has one (zod, valibot, arktype), use it. Otherwise also install `zod`.
- **Framework.** Look for `next.config.*` or similar.
- **Existing content.** Look for folders of `.md`/`.mdx`/`.markdown`/`.json` content, and a static folder (`public/`) for `mediaFolder`.

### Starting point

- **Content found:** model it (step 3).
- **A project, no content:** offer a starter blog (below). If declined, create one `posts` collection with `src/content/posts/hello-world.md`.
- **No `package.json`:** ask whether to scaffold an app first (e.g. `create-next-app`) and with which framework. Don't pick one yourself. Then continue as "a project, no content".

**Starter blog**, based on https://www.qino.works/docs/examples/next-js:

- `posts/*.md`: `title`, `date`, `author`, `categories`, body
- `authors/*.json` and `categories/*.json`, linked from posts as relations (see "Shared entities and relations")
- `pages/home.md` item with `title` and `tagline`
- A default view with `resolveRelations: 1` on posts
- Two or three sample files per collection

## 2. Install and create the instance

Install `@qino/cms@latest`, plus `zod@latest` if the project has no validator. Keep the `@latest` tag: pnpm's minimum release age otherwise resolves the previous version for a day after each release, and the docs describe the latest one. Then create `qino/index.ts` with a default export:

```ts
import { initQino } from "@qino/cms";

export default initQino({
  contentFolder: "src/content", // the existing content root
  mediaFolder: "public",
});
```

Both paths are relative to the package root and must be existing directories. Create them only if the project has none.

## 3. Model the content

Write one definition per primitive under `qino/collections/`, `qino/trees/`, or `qino/items/`, each exported by name and created from the default instance:

```ts
import { z } from "zod";

import qino from "../";

export const postCollection = qino.defineCollection({
  directory: "/posts",
  extension: ".md",
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    markdown: z.string(),
  }),
});
```

For new content, follow the starting point chosen in step 1. For existing content, model what exists.

### Choosing a file type (new content only)

| Content needs                   | Use     |
| ------------------------------- | ------- |
| A prose body                    | `.md`   |
| A body with components          | `.mdx`  |
| Only structured fields, no body | `.json` |

- Use `.mdx` only if the app already renders MDX (e.g. `next-mdx-remote`, `@next/mdx`, `@mdx-js/*`) or the user asks for it. Qino returns the body as a string; the app does the rendering.
- JSON suits relation targets such as authors, categories, and settings.
- Existing content keeps its extension. If `.md` files never have a body, suggest JSON, but don't convert without the user's agreement.

### Folder → primitive

| On disk                    | Primitive  | Options                                |
| -------------------------- | ---------- | -------------------------------------- |
| Flat folder, one extension | Collection | `directory`, `extension`               |
| Nested folder with anchors | Tree       | `directory`, `extension`, `titleField` |
| One file at a fixed path   | Item       | `file` (with extension)                |

All three also take `schema`, and optionally `relations` and `views`.

- Collections read only direct children; nested files are ignored.
- A tree folder `guides/` needs an anchor file `guides.md` next to it. Qino has no index files. Details: `/guide/content-folder`.
- Items suit one-off files such as the home page or site settings.
- One primitive owns one extension. For mixed folders, use the dominant extension and flag the rest.

### Layouts that don't fit

Don't move, rename, or restructure files without the user's agreement. Model what fits, and report what you skipped and why.

**`index.md` layouts** (`guides/index.md` instead of `guides.md`): offer to convert them. If the user agrees:

1. Show the planned moves.
2. Move each `<folder>/index.<ext>` to `<folder>.<ext>` beside the folder, deepest first, with `git mv` if in git.
3. Turn a root `index.md` into a regular node (e.g. `introduction.md`) or an item.
4. Update app code that relies on `index.md` paths.
5. Add `_order.json` where the existing order isn't alphabetical.

If they decline, skip the folder and flag it.

### Inferring schemas

- **Read every file**, not a sample. A field missing from some files becomes `.optional()`. One that's sometimes `null` becomes `.nullable()`.
- **Markdown bodies:** declare `markdown: z.string()`. Only declare `raw: z.string()` if the app needs the untouched source.
- **Use a plain `z.object`.** Strict objects reject the undeclared `markdown` and `raw` that Qino supplies.
- **YAML is 1.2 core:** unquoted dates arrive as strings (use `z.string()` or `z.iso.date()`, never `z.date()`), and `yes`/`no` are strings. See `/guide/frontmatter`.
- **Reserved keys:** a top-level `_meta`, or `markdown`/`raw` in frontmatter, is an error. Tell the user; don't rename them.

### Shared entities and relations

When several files repeat the same entity (e.g. `author_name` + `author_title` on every post), move it into its own collection and link it:

1. Create one JSON file per distinct entity: `authors/jane-doe.json` → `{ "name": "Jane Doe", "title": "Editor" }`. If the same entity has conflicting values across files, flag them instead of picking one.
2. Replace the fields in each file with a content path: `author: "authors/jane-doe.json"`.
3. Declare the relation and a view that resolves it; without one, getters return the path string:

   ```ts
   relations: { author: authorCollection, "categories[*]": categoryCollection },
   views: (view) => ({ default: view({ resolveRelations: 1 }) }),
   ```

Do this directly for new content. For existing content, offer it first and list the app code that reads the old fields. If the user declines, keep the fields as they are. Values that are already content paths can be linked as relations without restructuring. Bare slugs (`author: jane`) stay `z.string()`.

## 4. Wire it up

- **`package.json`.** Add `"prebuild": "qino build"`. If a `prebuild` already exists, chain onto it (`qino build && <existing>`). Never replace it. Run the build once and confirm `qino build` output appears: Yarn 2+ doesn't run `pre*` scripts, so if it didn't run, chain it into `build` instead (`qino build && <existing build>`).
- **`.gitignore`.** Add `qino/_generated/`.
- **`tsconfig.json`.** `include` must cover `qino/`. If it's narrowed (e.g. `["src"]`), add `"qino"`.
- **Next.js.** Merge `transpilePackages: ["@qino/cms"]` into the existing `next.config.*`.
- **Other frameworks.** See the framework examples at https://www.qino.works/docs/examples. If yours isn't listed, don't invent config.
- **Runtime.** Qino reads the file system. Call getters only in server code, never in client components or edge runtimes. If pages render on request, the deployed server needs the content folder; see `/guide/installation#runtime`.

## 5. Verify

Run the CLI's `build` command. Fix each reported error and rerun until it exits 0. Then run `tsc --noEmit` if the project uses TypeScript.

Look up each error message at https://www.qino.works/docs/api/errors. The ones setup usually hits:

- `Tree: folder "<path>" is missing its sibling file…`: add the anchor file, or convert the `index.md` layout.
- `Validation failed for <filePath>:`: make the field optional or fix its type. Don't edit content to fit the schema.
- `…fields reserved for Qino cannot appear…`: `_meta`, `markdown`, or `raw` in frontmatter. Flag it to the user.
- `Relation "<key>"…expected value under "<dir>/"…`: the value is a bare slug. Keep it as `z.string()`, or convert it to a path.

Report back:

- the primitives you defined and their paths
- the files and fields you made optional
- anything you flagged and left alone

## Quick reference

| CLI          | Does                                                           |
| ------------ | -------------------------------------------------------------- |
| `qino lint`  | Config, paths, overlaps, relations. Reads no content           |
| `qino check` | Validates every content file against its schema                |
| `qino build` | `lint`, then `check`, then writes `qino/_generated/types.d.ts` |

## Common mistakes

| Mistake                                         | Fix                                                         |
| ----------------------------------------------- | ----------------------------------------------------------- |
| `directory: "posts"`                            | Start with a slash: `"/posts"`                              |
| Overwrote an existing `prebuild`                | Chain it                                                    |
| `import qino from "../"` fails under `NodeNext` | Use the project's convention, e.g. `"../index.js"`          |
| Collection pointed at a nested folder           | Nested files are ignored; use a tree or several collections |

## Docs

If something isn't covered here, check https://www.qino.works/docs:

- guide: `/guide/installation`, `/guide/project-structure`, `/guide/content-folder`, `/guide/frontmatter`, `/guide/cli`
- concepts: `/concepts/schemas`, `/concepts/relations`, `/concepts/trees`
- API: `/api`, `/api/errors`
- examples: `/examples`
