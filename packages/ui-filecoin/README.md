# @filecoin-foundation/ui-filecoin

Filecoin branded UI components for the Filecoin ecosystem created by Filecoin Foundation.

## Description

Component library providing reusable React components with Filecoin branding, built with TypeScript and Tailwind CSS. Includes navigation, tables, cards, forms, and utility components designed for Filecoin Foundation web properties.

## Development

### Testing

Run tests:

```bash
npm test
```

Watch mode:

```bash
npm test -- --watch
```

Coverage:

```bash
npm test -- --coverage
```

### Building

Build the package:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Publishing

This package uses [Changesets](https://github.com/changesets/changesets) for version management.

### 1. Create Changeset

```bash
npm run changeset
```

Select the package and change type (patch/minor/major), then provide a description.

### 2. Version Packages

```bash
npm run changeset version
```

This updates package versions and CHANGELOG.md.

### 3. Publish

```bash
npm run changeset publish
```

Builds and publishes to npm registry.

## License

MIT
