# User Experience Improvement Team (UXIT)

This project is the home of the [Filecoin Foundation](https://fil.org/) User Experience Improvement Team (UXIT), live at [uxit.fil.org](https://uxit.fil.org). UXIT is dedicated to creating thoughtful, user-centered solutions that drive the evolution of the Filecoin ecosystem.

## Getting Started

This Next.js project is part of a monorepo managed by [Turborepo](https://turborepo.com/docs). To get started, refer to the [root README](../../README.md#getting-started) for installation and development instructions.

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

## License

This project is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
