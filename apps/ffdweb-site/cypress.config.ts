import fs from 'fs/promises'
import path from 'path'

import { defineConfig } from 'cypress'
import fg from 'fast-glob'
import matter from 'gray-matter'

import { CONTENT_ROOT, MARKDOWN_EXTENSION } from './src/app/_constants/paths'

type ContentFolder = 'blog' | 'digest' | 'projects'

type GetEntryOptions = {
  folder: ContentFolder
  slug: string
}

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    setupNodeEvents(on) {
      on('task', {
        getRandomSlug: async function getRandomSlug(folder: ContentFolder) {
          const files = await fg(`**/*${MARKDOWN_EXTENSION}`, {
            cwd: path.join(process.cwd(), CONTENT_ROOT, folder),
          })

          const randomIndex = Math.floor(Math.random() * files.length)
          const randomFile = files[randomIndex]
          return randomFile.replace(MARKDOWN_EXTENSION, '')
        },
        getEntryFrontmatter: async function getEntryFrontmatter(
          options: GetEntryOptions,
        ) {
          const { folder, slug } = options
          const fileName = `${slug}${MARKDOWN_EXTENSION}`

          const filePath = path.join(
            process.cwd(),
            CONTENT_ROOT,
            folder,
            fileName,
          )

          const file = await fs.readFile(filePath, 'utf8')
          return matter(file).data
        },
      })
    },
  },
})
