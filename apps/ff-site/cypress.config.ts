import { defineConfig } from 'cypress'

import { getEntryFrontmatter } from './cypress/tasks/getEntryFrontmatter'
import { getPageFrontmatterSeo } from './cypress/tasks/getPageFrontmatterSeo'
import { getRandomSlug } from './cypress/tasks/getRandomSlug'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on) {
      on('task', {
        getPageFrontmatterSeo,
        getRandomSlug,
        getEntryFrontmatter,
      })
    },
  },
})
