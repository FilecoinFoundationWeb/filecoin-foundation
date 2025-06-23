# Filecoin Foundation Monorepo

This monorepo contains the web projects for the [Filecoin Foundation](https://fil.org) and the [Filecoin Foundation for the Decentralized Web](https://ffdweb.org). It is managed using [Turborepo](https://turborepo.com/docs).

## Overview

This codebase includes multiple workspaces for applications and internal packages. Applications are deployed projects while packages centralise shared code used across applications.

### Applications

You can find the applications in the `apps` directory, which include:

- [ff-site](apps/ff-site): The Filecoin Foundation website, live at [fil.org](https://fil.org)
- [ffdweb-site](apps/ffdweb-site): The Filecoin Foundation for the Decentralized Web website, live at [ffdweb.org](https://ffdweb.org)
- [uxit](apps/uxit): The public dashboard of the The Filecoin Foundation User Experience Improvement Team, live at [uxit.fil.org](https://uxit.fil.org)

### Packages

You can find the packages in the `packages` directory. These packages include components, hooks, types, utility functions and configuration shared accross the applications.

> [!NOTE]
> They are are [just-in-time](https://turborepo.com/docs/core-concepts/internal-packages#just-in-time-packages) packages, meaning they are built by the application that uses them. They do not produce a compiled JavaScript output and are not published anywhere.

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

### Development

Running `npx turbo dev` from the root of the monorepo will call the `dev` script for all applications and packages in the monorepo, as defined in each `package.json`. In our case, this will start the development server for all applications in our monorepo, packages do not have a `dev` script.

In 99% of cases, you only want to start the development server for one application at a time. To so start do so, you should run `turbo dev` with a filter flag.

For instance, to start the development server of the `ffdweb-site` application, run:

```bash
npx turbo dev --filter=ffdweb-site
```

You can also use the shorthand syntax:

```bash
npx turbo ffdweb-site#dev
```

> [!NOTE]
> When using npm commands, such as `npm install`, the `--workspace` flag refers to the path of the application or package, relative to the root of the monorepo. When using turbo commands, such as `turbo dev`, the `--filter` flag refers to the name of the application or package, as defined in each `package.json` file.

### Adding npm dependencies

The `npm install <dependency>` command will install dependencies for all applications and packages in the monorepo. Generally, you want to add a dependency inside a specific application or package. To do so, run:

```bash
npm install <dependency> --workspace=<application/package>
```

> [!NOTE]
> The install commands should be run from the root of the monorepo. Do not install dependencies inside the application or package directory, otherwise Turborepo will not be not aware of it and will not resolve the dependencies properly.

For example, to add `jest` to the `ff-site` application, run:

```bash
npm install jest --w 'apps/ff-site'
```

This will update both the `apps/ff-site/package.json` and the root `package-lock.json` file.

We also use [syncpack](https://www.npmjs.com/package/syncpack) to occasionally check and fix version mismatch across the monorepo with the following commands:

```bash
npm run check:versions
npm run fix:versions
```

### Adding internal dependencies (packages)

Packages in the monorepo can be viewed as private npm dependencies. To add a package, create a directory in the `packages` directory and add a `package.json` file. The name of the package should start with `@filecoin-foundation/`.

Then, create a `src` directory in the package directory and add your source files. The local `package.json` should export some or all of the source files:

```json
// packages/ui/package.json
"exports": {
  "./Button": "./src/Button.tsx",
}
```

Finally, to use the newly-created package in an application, add it as a dependency `manually` in the application's `package.json` file and run `npm install` from the root of the monorepo.

For instance, to use the `@filecoin-foundation/ui` package in the `ff-site` application, add the following line to the `dependencies` section of the `apps/ff-site/package.json` file:

```json
// apps/ff-site/package.json
"dependencies": {
  "@filecoin-foundation/ui": "0.0.0",
  ...
}
```

For more information, read the [Anatomy of a package](https://turborepo.com/docs/crafting-your-repository/structuring-a-repository#anatomy-of-a-package) section of the Turborepo docs.

### Building for production

Similar to the development command, running `npx turbo build` from the root of the monorepo will call the `build` script for all applications and packages in the monorepo, as defined in each `package.json`. In our case, this will build all applications in our monorepo, packages do not have a `build` script.

To build a specific application, the `ffdweb-site` one for example, you can use the filter flag:

```bash
npx turbo build --filter=ffdweb-site`
```

or the shorthand syntax:

```bash
npx turbo ffdweb-site#build
```

Once the build is complete, you might want to start the production server by running `npx turbo start --filter=ffdweb-site` or `npx turbo ffdweb-site#start`.

## Remote caching

We use Turborepo’s [remote caching](https://turborepo.com/docs/core-concepts/remote-caching) feature to speed up local development. This lets everyone share and access the same build cache on Vercel and speed up development.

To opt in, run `npx turbo login` to authenticate with Vercel and `turbo link` to link your local repo to the Vercel cache. You will need to be added to our Vercel organization to be able to do so.

Once the project is successfully linked, you should see see `Remote caching enabled` in the logs the next time you run `turbo dev` or `turbo build` locally.
