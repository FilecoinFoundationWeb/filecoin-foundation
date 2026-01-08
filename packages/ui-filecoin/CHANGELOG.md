# @filecoin-foundation/ui-filecoin

## 0.7.0

### Minor Changes

- 76f791f: Add striped rows to tables
- d2faf77: Add pinned header bar to tables
- 49c9bfd: Adds support for dynamic heading tags to the SectionContent component

## 0.6.0

### Minor Changes

- 44db793: Add BreakoutContainer component for full-width content

## 0.5.10

### Patch Changes

- 590001d: Add new capitalize util function and refactor export
- f963e9f: Refactor CardImage and types

## 0.5.9

### Patch Changes

- ffc4ad8: Refactor and review PageSection spacings
- 65979ec: Add highContrast variant to PageHeader

## 0.5.8

### Patch Changes

- 6757cb1: Migrate network selection to URL query params

## 0.5.7

### Patch Changes

- 1bb531f: Refactors PageHeader component to apply consistent strong text styling to descriptions

## 0.5.6

### Patch Changes

- 6871d92: Misc fixes in `TanstackTable` and `listbox-button` class

## 0.5.5

### Patch Changes

- 5cc5835: This PR improves type safety and flexibility for image and page header components across the codebase.

## 0.5.4

### Patch Changes

- 70529f4: Refactor the useBackground hook to return a richer object with computed properties

## 0.5.3

### Patch Changes

- adcd0b6: export FilterButtonProps and enable prop spreading

## 0.5.2

### Patch Changes

- 5a2f844: Fix form components

## 0.5.1

### Patch Changes

- 0547e7e: Add form components

## 0.5.0

### Minor Changes

- b1ad495: Introduces a reusable `Search` component and `useSearch` hook in `ui-filecoin`

## 0.4.1

### Patch Changes

- bc892f8: This PR refactors the `NavigationMainLink` component to properly differentiate between external and internal links, ensuring consistent link behavior across the navigation system. Previously, `NavigationMainLink` used `SmartTextLink` for all links, while `NavigationMenuLink` already had logic to distinguish between external and internal links.

## 0.4.0

### Minor Changes

- d3be96e: Refactors several UI components in the @filecoin-foundation/ui-filecoin package to improve type safety and simplify component logic.

## 0.3.1

### Patch Changes

- a9648aa: Add UI config in ui-filecoin

## 0.3.0

### Minor Changes

- e87ba66: Add sorting functionality to TanstackTable headers

## 0.2.1

### Patch Changes

- 9a7fb01: Refactor TanstackTable component to accept pre-configured table instances

## 0.2.0

### Minor Changes

- bce38c6: Add date formatting utility and integrate into SoftwareVersion component. New dateUtils module provides ISO string validation and US locale formatting, and SoftwareVersion now displays formatted dates for improved readability.
