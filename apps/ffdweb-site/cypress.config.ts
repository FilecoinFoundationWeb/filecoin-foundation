import { defineConfig } from 'cypress'

import {
  getEntryFrontmatter,
  getRandomSlug,
} from '@filecoin-foundation/cypress/tasks'

import { getRandomDigestArticleSlug } from './cypress/utils/getRandomDigestArticleSlug'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on) {
      on('task', {
        getRandomSlug,
        getEntryFrontmatter,
        getRandomDigestArticleSlug,
      })
    },
  },
})
