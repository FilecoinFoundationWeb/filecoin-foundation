# Filecoin Foundation Monorepo

This monorepo contains the web projects for [Filecoin Foundation](https://fil.org) and [Filecoin Foundation for the Decentralized Web](https://ffdweb.org). It is managed using [Turborepo](https://turborepo.com/docs).

## Overview

This codebase includes multiple [workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) for applications and internal packages. Applications are deployed projects while packages centralize shared code used across applications.

### Applications

You can find the applications in the `apps` directory, which include:

- [ff-site](apps/ff-site): The Filecoin Foundation website, live at [fil.org](https://fil.org)
- [ffdweb-site](apps/ffdweb-site): The Filecoin Foundation for the Decentralized Web website, live at [ffdweb.org](https://ffdweb.org)
- [uxit](apps/uxit): The public dashboard of the Filecoin Foundation User Experience Improvement Team, live at [uxit.fil.org](https://uxit.fil.org)

### Packages

You can find the packages in the `packages` directory. These packages include components, hooks, types, utility functions and configuration shared across the applications.

> [!NOTE]
> They are [just-in-time](https://turborepo.com/docs/core-concepts/internal-packages#just-in-time-packages) packages, meaning they are built by the application that uses them. They do not produce a compiled JavaScript output and are not published anywhere.

## Getting Started

### Installation

To get started, clone the repository:

```bash
git clone https://github.com/FilecoinFoundationWeb/filecoin-foundation.git
cd filecoin-foundation
```

Then, install the dependencies:

```bash
npm install
```

At this point you should be able to run the development server for any of the applications.

> [!NOTE]
> We use `npx turbo <commands>` instead of relying on npm scripts or globally installed Turbo. This ensures the correct version defined in the project is used and avoids script indirection.

### Development

Running `npx turbo dev` from the root of the monorepo will call the `dev` script for all applications and packages in the monorepo, as defined in each `package.json`. In our case, this will start the development server for all applications in our monorepo, packages do not have a `dev` script.

In 99% of cases, you only want to start the development server for one application at a time. To do so, you should run `npx turbo dev` with a filter flag.

For instance, to start the development server of the `ffdweb-site` application, run:

```bash
npx turbo dev --filter=ffdweb-site
```

You can also use the shorthand syntax:

```bash
npx turbo ffdweb-site#dev
```

> [!IMPORTANT]
> When using npm commands, such as `npm install`, the `--workspace` flag refers to the path of the application or package workspace, relative to the root of the monorepo. When using turbo commands, such as `turbo dev`, the `--filter` flag refers to the name of the application or package, as defined in each workspace `package.json`.

### Adding npm dependencies

The `npm install <dependency>` command will install dependencies for all applications and packages in the monorepo. Generally, you want to add a dependency inside a specific application or package. To do so, run:

```bash
npm install <dependency> --workspace=<application/package>
```

> [!IMPORTANT]
> The install commands should be run from the root of the monorepo. Do not install dependencies inside the application or package directory, otherwise Turborepo will not be aware of it and will not resolve the dependencies properly.

For example, to add `jest` to the `ff-site` application, run:

```bash
npm install jest --workspace 'apps/ff-site'
```

Or the shorthand syntax:

```bash
npm i jest -w 'apps/ff-site'
```

This will update both the `apps/ff-site/package.json` and the root `package-lock.json` file.

We also use [syncpack](https://www.npmjs.com/package/syncpack) to check and fix version mismatch across the monorepo with the following commands:

```bash
npm run check:versions
npm run fix:versions
```

`npm run check:versions` is already set as a pre-push hook with [husky](https://typicode.github.io/husky/), so it runs automatically before every push. `npm run fix:versions` should be run manually when necessary, usually after adding/updating a dependency or reviewing Dependabot PRs.

### Adding internal dependencies (packages)

Packages in the monorepo can be viewed as private npm dependencies. To add a package, create a directory in the `packages` directory and add a `package.json` file. The name of the package should start with `@filecoin-foundation/`.

Then, create a `src` directory in the package directory and add your source files. The local `package.json` should export some or all of the source files:

```json
"exports": {
  "./Button": "./src/Button.tsx",
}
```

_packages/ui/package.json_

Finally, to use the newly-created package in an application, add it as a dependency manually in the application's `package.json` file and run `npm install` from the root of the monorepo.

For instance, to use the `@filecoin-foundation/ui` package in the `ff-site` application, add the following line to the `dependencies` section of the `apps/ff-site/package.json` file:

```json
"dependencies": {
  "@filecoin-foundation/ui": "0.0.0",
}
```

_apps/ff-site/package.json_

> [!TIP]
> As noted above, internal packages use [just-in-time compilation](https://turborepo.com/docs/core-concepts/internal-packages#just-in-time-packages). They don’t include a build step — the consuming application compiles them directly.

For more information, read the [Anatomy of a package](https://turborepo.com/docs/crafting-your-repository/structuring-a-repository#anatomy-of-a-package) section of the Turborepo docs.

### Building for production

Similar to the development command, running `npx turbo build` from the root of the monorepo will call the `build` script for all applications and packages in the monorepo, as defined in each `package.json`. In our case, this will build all applications in our monorepo, packages do not have a `build` script.

To build a specific application, the `ffdweb-site` one for example, you can use the filter flag:

```bash
npx turbo build --filter=ffdweb-site
```

or the shorthand syntax:

```bash
npx turbo ffdweb-site#build
```

Once the build is complete, you might want to start the production server by running `npx turbo start --filter=ffdweb-site` or `npx turbo ffdweb-site#start`.

### Remote caching

We use Turborepo’s [remote caching](https://turborepo.com/docs/core-concepts/remote-caching) feature to speed up local development. This lets everyone share and access the same build cache on Vercel and speed up development.

To opt in, run `npx turbo login` to authenticate with Vercel and `npx turbo link` to link your local repo to the Vercel cache. You will need to be added to our Vercel organization to be able to do so.

Once the project is successfully linked, you should see `Remote caching enabled` in the logs the next time you run `npx turbo dev` or `npx turbo build` locally.

## Development Guidelines

To maintain the quality and consistency of our codebase, we have established a set of development guidelines. Contributors are encouraged to follow these practices when making contributions to the project. These guidelines apply to all `apps` in the monorepo.

### Component Organization

Reusable React components should be stored in the general `_components` directory. Page-specific components should live closer to the page they are used on.

### Component Exports

Use named exports for React components to maintain consistency and support efficient tree shaking. This practice facilitates easier and more predictable imports across the project.

### Naming Props

When defining props for components, explicitly name the props type rather than using a generic `Props` type. For example,

```typescript
type BadgeProps = {
  featured: boolean
  children?: string
}
```

### Paths and URLs

- **Centralized Paths**: Utilize the `PATHS` object for defining and accessing paths throughout the application. See `_constants/paths.ts`

- **Site Metadata and URLs**: Reference site metadata and URLs using centralized constants to ensure consistency and ease of maintenance. See `_constants/siteMetadata.ts`

### Adding New Pages

When adding a new page to the project, please ensure the following:

1. **Update PATHS Configuration**: Ensure the `PATHS` object includes configurations for new content types, specifying paths, labels, and content directory paths. See `_constants/paths.ts`

2. **Metadata and SEO**: Each new page should have associated metadata and SEO tags defined. Use the `createMetadata` function to set up a page's metadata correctly. Example:

   ```javascript
   export const metadata = createMetadata(seo, PATHS.ABOUT.path)
   ```

3. **Structured Data**: Include structured data for the new page to enhance search engine visibility and accessibility. Use the `generateWebPageStructuredData` function to create structured data for the page, which provides the base structured data. Example:

   ```javascript
   const aboutPageBaseData = generateWebPageStructuredData({
     title: seo.title,
     description: seo.description,
     path: PATHS.ABOUT.path,
   })
   ```

   This can be further customized based on the page's content and structure. Example:

   ```javascript
   const aboutPageStructuredData: WithContext<WebPage> = {
     ...aboutPageBaseData,
     about: {
       '@type': 'Organization',
       name: ORGANIZATION_NAME,
       contactPoint: [
         {
           '@type': 'ContactPoint',
           contactType: FILECOIN_FOUNDATION_URLS.email.label,
           email: FILECOIN_FOUNDATION_URLS.email.href,
         },
         {
           '@type': 'ContactPoint',
           contactType:  FILECOIN_FOUNDATION_URLS.grants.email.label,
           email: FILECOIN_FOUNDATION_URLS.grants.email.href,
         },
       ],
     },
     sameAs: Object.values(FILECOIN_FOUNDATION_URLS.social).map(
       (link) => link.href
     ),
   }
   ```

4. **Testing**: Ensure that tests are added to verify the presence of metadata and structured data on the new page. These tests are crucial for maintaining the integrity of the site's SEO and ensuring that all pages meet our standards for content visibility.

5. **Updating the Sitemap**: When adding new dynamic content (such as blog posts, ecosystem projects, or events) that isn't automatically included in the sitemap through static routing, it's essential to manually update the sitemap with the new page's details. This step is crucial for SEO, helping ensure that search engines can easily discover and index these new pages.

Following these guidelines helps ensure that our website remains consistent, accessible, and search engine friendly.
