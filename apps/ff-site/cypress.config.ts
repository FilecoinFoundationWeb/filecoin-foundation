import { defineConfig } from 'cypress'

import {
  getEntryFrontmatter,
  getPageFrontmatterSeo,
  getRandomSlug,
} from '@filecoin-foundation/cypress/tasks'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on) {
      on('task', {
        getEntryFrontmatter,
        getPageFrontmatterSeo,
        getRandomSlug,
      })
    },
  },
})
