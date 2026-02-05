---
"@filecoin-foundation/ui-filecoin": minor
"@filecoin-foundation/next-config": minor
---

Enable JIT compilation for ui-filecoin with dual-mode support

- Add transpilePackages support for Just-In-Time compilation from source files
- Configure Next.js to transpile ui-filecoin on-the-fly during development
- Add tsup build tool for ESM/CJS npm publishing
- Update package exports to point to source .tsx files for better type inference
- Add .npmignore to include both src/ and dist/ in npm package
- Make transpilePackages configurable via parameter in createNextConfig

Changes to ui-filecoin components now appear instantly in filecoin-site without manual rebuild.
