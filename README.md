# Filecoin Foundation Website

## Overview

This project is developed for the Filecoin Foundation, aiming to provide comprehensive information and resources about Filecoin's initiatives and contributions to the decentralized web. Utilizing Next.js for server-side rendering and static site generation, Tailwind CSS for styling, and other dependencies for Markdown processing and validation, this project aims to offer an accessible and user-friendly website for the Filecoin community.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-repository/filecoin-foundation.git
cd filecoin-foundation
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This command starts a local development server on `http://localhost:3000`. The server will automatically reload if any of the source files are changed.

### Building for Production

The build process includes a pre-build step that converts the CMS configuration file (`public/admin/config.yml`) to JSON (located at ).

```bash
npm run build
```

This command generates a `.next` folder with the production build. To start the production server:

```bash
npm run start
```

### Linting

To lint and fix issues in the codebase:

```bash
npm run lint
```

#### Import Order

We maintain a specific order for import statements to make our code easier to read and to ensure that similar imports are grouped. Our ordering rules are as follows:

- Node.js built-in modules (e.g., `fs`, `path`)
- External modules (e.g., `react`, `next/**`)
- Internal aliases (e.g., `@/components/**`, `@/styles/**`)

See `tailwind.config.js`

## Technologies

- **Next.js 13.4.19**: For server-side rendering, static site generation, and routing.
- **Tailwind CSS**: For utility-first CSS styling.
- **React 18**: For building the user interface.
- **clsx**: For conditionally joining `classNames` together.

## Integrations and Configurations

This project is built with specific integrations to enhance its functionality and user experience. Below are details about our content management system (CMS) and authentication solution.

### Decap CMS Integration

We utilize Decap CMS for content management, allowing non-technical team members to update website content easily. The CMS is configured to interact seamlessly with our project's file structure.

- **CMS Configuration**: The CMS configuration file is located at public/admin/config.yml. This file contains all the settings related to the CMS, including content types, fields, and authentication settings. Please refer to this file for adjusting the CMS interface and functionality according to the project's needs.
- **Content Directory**: All the content managed through Decap CMS is stored in src/app/content/. This directory includes various markdown files that the CMS edits. Each file represents a different section or page of the website, structured for easy editing and updates

### Authenticating with Netlify Identity and Git Gateway

Our project integrates with Netlify Identity and Git Gateway for user authentication and content management. This integration allows authorized users to access the CMS and make changes to the website content. The authentication process is handled through Netlify Identity, while Git Gateway provides secure access to the Git repository. For more information, please refer to the Decap CMS documentation on [Git Gateway](https://decapcms.org/docs/git-gateway-backend/).

### Working with the Local Git Repository

You can connect Decap CMS to the local Git repository. To do this, follow these steps:

1. Run `npx decap-server`
2. Run `npm run dev`
3. Open http://localhost:3000/admin/index.html

Please refer to the Decap CMS documentation for more information and detailed instructions on [working with a local Git repository](https://decapcms.org/docs/working-with-a-local-git-repository/).

## Continuous Integration and Deployment

Our project leverages GitHub Actions for Continuous Integration (CI) to automate the testing and linting of code. This ensures that every push and pull request to the `main` branch meets our quality standards and passes all tests. Below are the key workflows integrated into our CI process:

### Cypress Tests

Our CI pipeline includes running end-to-end (E2E) tests with Cypress on every push and pull request to the `main` branch. This workflow ensures that the application behaves as expected from a user's perspective.

### Lint Code Base

We enforce code quality standards through a linting workflow that runs ESLint on every push and pull request to the `main` branch. This workflow identifies and reports patterns found in ECMAScript/JavaScript code, to make code more consistent and avoid bugs.

### Contributing

Contributors are encouraged to ensure their code passes these checks before submitting pull requests. Local setup instructions are provided to run these tests and linters, mimicking the CI environment to catch and resolve issues early in the development process.

## End-to-End Testing with Cypress

To ensure the highest quality of user experience, we employ Cypress for end-to-end (E2E) testing. These tests simulate real user interactions within the application to catch any potential issues before they affect our users.

### Running Tests Locally

To run Cypress tests on your local machine:

1. Ensure the development server is running (`npm run dev`).
2. Open Cypress Test Runner with `npx cypress open` for interactive testing.
3. Alternatively, run `npx cypress run` to execute tests in headless mode directly from the terminal.

### Writing and Modifying Tests

Cypress tests are located in the `cypress/integration` directory.

This hands-on approach to testing complements our CI/CD pipeline, allowing developers to verify changes locally before committing them. For more information on Cypress and E2E testing strategies, visit [Cypress Documentation](https://docs.cypress.io).

## Development Guidelines

To maintain the quality and consistency of our codebase, we have established a set of development guidelines. Contributors are encouraged to follow these practices when making contributions to the project.

### Component Organization

Store all React components in the `_components` directory, including page-specific ones.

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
  path: PATHS.ABOUT.path
})
```

This can be further customized based on the page's content and structure. Example:

````javascript
const aboutPageStructuredData: WithContext<WebPage> = {
  ...aboutPageBaseData,
  about: {
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Media and collaboration inquiries',
        email: FILECOIN_FOUNDATION_URLS.email,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Ecosystem grants inquiries',
        email: FILECOIN_URLS.grants.email,
      },
    ],
  },
  sameAs: Object.values(FILECOIN_FOUNDATION_URLS.social).map(
    (link) => link.href
  ),
}
```

1. **Testing**: Ensure that tests are added to verify the presence of metadata and structured data on the new page. These tests are crucial for maintaining the integrity of the site's SEO and ensuring that all pages meet our standards for content visibility.

2. **Updating the Sitemap**: When adding new dynamic content (such as blog posts, case studies, ecosystem projects, or events) that isn't automatically included in the sitemap through static routing, it's essential to manually update the sitemap with the new page's details. This step is crucial for SEO, helping ensure that search engines can easily discover and index these new pages.

Following these guidelines helps ensure that our website remains consistent, accessible, and search engine friendly.

## Contributing

We welcome contributions to the Filecoin Foundation website!

## License

This project is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
````
