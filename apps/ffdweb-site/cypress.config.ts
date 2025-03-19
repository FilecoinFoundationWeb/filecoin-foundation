import fs from 'fs/promises'
import path from 'path'

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on) {
      on('task', {
        readDir: async function getMarkdownFiles(directoryPath) {
          const files = await fs.readdir(directoryPath)
          return files.filter((file) => path.extname(file) === '.md')
        },
        readFile: fs.readFile,
      })
    },
  },
})
