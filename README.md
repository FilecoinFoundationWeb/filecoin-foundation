# Filecoin Foundation Monorepo

This monorepo contains the web projects for the [Filecoin Foundation](https://fil.org) and the [Filecoin Foundation for the Decentralized Web](https://ffdweb.org). It is managed using [Turborepo](https://turborepo.com/docs).

## Overview

This monorepo contains multiple workspaces for applications and packages. Applications are the projects meant to be deployed while our packages are internal-only and centralize code shared accross multiple applications.

### Applications

You can find the following applications in the `apps` directory:

- [ff-site](apps/ff-site): The main Filecoin Foundation website, live at [fil.org](https://fil.org)
- [ffdweb-site](apps/ffdweb-site): The Filecoin Foundation for the Decentralized Web website, live at [ffdweb.org](https://ffdweb.org)
- [uxit](apps/uxit): A UX/UI testing and auditing tool, live at [uxit.fil.org](https://uxit.fil.org)

### Packages

It also contains some shared packages, located in the `packages` directory. These packages are shared components, hooks, types, utility functions and configuration used accross the applications.

These packages are [just-in-time](https://turborepo.com/docs/core-concepts/internal-packages#just-in-time-packages) packages, meaning compiled by the application that uses it. They do not produce a compiled JavaScript output and are not published anywhere.

## Getting Started

### Installation

To get started, clone the repository:

```bash
git clone https://github.com/FilecoinFoundationWeb/filecoin-foundation.git
cd filecoin-foundation
```

Then, install the dependencies using `npm install` from the root of the monorepo. This will install dependencies for all applications and packages in the monorepo.

Should you need to add a dependency to a specific application or package, use `npm install <dependency> -w <application/package>` from the root of the monorepo. Do not install dependencies directly in the application or package directory, otherwise Turborepo will not be not aware of it and will not resolve the dependencies properly.

For example, to add `jest` to the `ff-site` application, run:

```bash
npm install jest --w 'apps/ff-site'
```

This will update both the `apps/ff-site/package.json` and the root `package-lock.json` file.

We also use [syncpack](https://www.npmjs.com/package/syncpack) to occasionally check and fix version mismatch across the monorepo with the following commands, also run from the root of the project:

```bash
npm run check:versions
npm run fix:versions
```

### Development

Running `npx turbo dev` from the root of the monorepo will call the `dev` script for all applications and packages in the monorepo, as defined in each `package.json`. In our case, this will start the development server for all applications in our monorepo, packages do not have a `dev` script.

In 99% of cases, you only want to start the development server for one application at a time. Let's say you want to start the `ffdweb-site` application. You can do so by running `turbo dev` with a filter flag `npx turbo dev --filter=ffdweb-site`, or the shorthand syntax `npx turbo ffdweb-site#dev`.

> [!NOTE]
> When using npm commands, such as `npm install`, the `--workspace` flag refers to the location of the application or package, relative to the root of the monorepo. When using turbo commands, such as `turbo dev`, the `--filter` flag refers to the name of the application or package, as defined in their respective `package.json` file.

### Building for production

Similar to the development command, running `npx turbo build` from the root of the monorepo will call the `build` script for all applications and packages in the monorepo, as defined in each `package.json`. In our case, this will build all applications in our monorepo, packages do not have a `build` script.

To build a specific application, you can use the filter flag `npx turbo build --filter=ffdweb-site`, or the shorthand syntax `npx turbo ffdweb-site#build`.

### Starting the production server

Once the build is complete, you can start the production server by running `npx turbo start --filter=ffdweb-site`, or the shorthand syntax `npx turbo ffdweb-site#start`.

## Remote caching

We use Turborepo’s [remote caching](https://turborepo.com/docs/core-concepts/remote-caching) feature to speed up local development. This lets everyone share and access the same build cache on Vercel and speed up development.

To opt in, run `npx turbo login` to authenticate with Vercel and `turbo link` to link your local repo to the Vercel cache. You will need to be added to our Vercel organization to be able to do so.

Once the project is successfully linked, you should see see `Remote caching enabled` in the logs the next time you run `turbo dev` or `turbo build` locally.
