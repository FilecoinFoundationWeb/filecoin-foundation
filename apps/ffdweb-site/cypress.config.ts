import { defineConfig } from 'cypress'

import { getEntryFrontmatter } from './cypress/tasks/get-frontmatter'
import { getRandomSlug } from './cypress/tasks/get-random-slug'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on) {
      on('task', {
        getRandomSlug,
        getEntryFrontmatter,
      })
    },
  },
})
