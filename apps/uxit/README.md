# User Experience Improvement Team (UXIT)

This project is the home of the [Filecoin Foundation](https://fil.org/) User Experience Improvement Team (UXIT), live at [uxit.fil.org](https://uxit.fil.org). UXIT is dedicated to creating thoughtful, user-centered solutions that drive the evolution of the Filecoin ecosystem.

## Getting Started

This Next.js project is part of a monorepo managed by [Turborepo](https://turborepo.com/docs). To get started, refer to the [root README](../../README.md#getting-started) for installation and development instructions.

### Useful commands

The following commands are specific to the `uxit` workspace and should be run from the root of the monorepo.

| Command                          | Action                        |
| -------------------------------- | ----------------------------- |
| `npx turbo uxit#dev`             | Starts the development server |
| `npx turbo uxit#build`           | Builds the application        |
| `npx turbo uxit#start`           | Starts the production server  |
| `npx turbo uxit#lint`            | Lints the code                |
| `npm i <package> -w 'apps/uxit'` | Installs a dependency         |

## Technologies

This project uses the following open-source technologies:

- [Next.js (App Router)](https://nextjs.org/) for server-side rendering, static site generation, and routing.
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS styling.
- [Unlighthouse](https://unlighthouse.dev/) for performance and accessibility audits.

## Lighthouse Reports

On [/site-audit-reports](https://uxit.fil.org/site-audit-reports), you will find [Lighthouse audit](https://developer.chrome.com/docs/lighthouse/overview) reports for an ever-growing list of Filecoin ecosystem projects, including Filecoin Foundation websites.

These reports are generated using [Unlighthouse](https://unlighthouse.dev/integrations/ci) and are stored in the `public/site-audit-reports` directory. They include performance metrics, accessibility scores, best practices analysis, and SEO recommendations.

Reports are currently NOT updated automatically. To update them, run the `generateSiteAuditReports` script in the `scripts` directory using:

```bash
npm run unlighthouse
```

Then commit the changes and push them to the repository.

## Development Guidelines

Check out the [development guidelines](../../README.md#development-guidelines) in the root README for more information.

## Contributing

We welcome contributions to the UXIT website!

### GitHub Workflow

We try to keep each pull request small and focused. If the work requires large file changes, we break it down into smaller pieces as outlined in this article on [GitHub Protips from Sarah Vessels](https://github.blog/developer-skills/github/github-protips-tips-tricks-hacks-and-secrets-from-sarah-vessels/).

## License

This project is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
