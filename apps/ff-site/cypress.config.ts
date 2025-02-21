import fs from 'fs'
import path from 'path'

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        readDir(directoryPath) {
          return new Promise((resolve, reject) => {
            fs.readdir(directoryPath, (err, files) => {
              if (err) {
                return reject(err)
              }
              resolve(files.filter((file) => path.extname(file) === '.md'))
            })
          })
        },
        readFile(filePath) {
          return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, content) => {
              if (err) {
                return reject(err)
              }
              resolve(content)
            })
          })
        },
      })
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
