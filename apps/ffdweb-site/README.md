# Filecoin Foundation for the Decentralized Web Website

This project contains the website of Filecoin Foundation for the Decentralized Web, Filecoin Foundation's sister nonprofit. It's available at [ffdweb.org](https://ffdweb.org/).

## Getting Started

This Next.js project is part of a monorepo managed by [Turborepo](https://turborepo.com/docs). To get started, refer to the [root README](../../README.md#getting-started) for installation and development instructions.

### Useful commands

| Command                                 | Action                        |
| --------------------------------------- | ----------------------------- |
| `npx turbo ffdweb-site#dev`             | Starts the development server |
| `npx turbo ffdweb-site#build`           | Builds the application        |
| `npx turbo ffdweb-site#start`           | Starts the production server  |
| `npx turbo ffdweb-site#lint`            | Lints the code                |
| `npm i <package> -w 'apps/ffdweb-site'` | Installs a dependency         |

## Technologies

This project uses the following open-source technologies:

- [Next.js (App Router)](https://nextjs.org/) for server-side rendering, static site generation, and routing.
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS styling.
- [Zod](https://zod.dev/) for data validation.

## Content Management

We use [Decap CMS](https://decapcms.org/docs/intro/), formerly known as Netlify CMS, for content management, allowing non-technical team members to update website content easily.

For more information on how to update content, refer to the [ff-site README](../ff-site/README.md#decap-cms-integration). The setup and workflow are the same for both websites, except that there's no encryption required for this project.

## Continuous Integration and Deployment

We use GitHub Actions for Continuous Integration (CI) to automate testing. Every pull request to the `main` branch must pass all tests and meet our quality standards. The workflows are the same as for the Filecoin Foundation website. For more information, refer to the [ff-site README](../ff-site/README.md#continuous-integration-and-deployment).

## Development Guidelines

Check out the [development guidelines](../../README.md#development-guidelines) in the root README for more information.

## Contributing

We welcome contributions to the Filecoin Foundation for the Decentralized Web website!

### GitHub Workflow

We try to keep each pull request small and focused. If the work requires large file changes, we break it down into smaller pieces as outlined in this article on [GitHub Protips from Sarah Vessels](https://github.blog/developer-skills/github/github-protips-tips-tricks-hacks-and-secrets-from-sarah-vessels/).

## License

This project is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
