import path from 'path'

import matter from 'gray-matter'

import type { CategoryId } from '@/types/categoryTypes'

import type { PathConfig } from '@/constants/paths'

import { verifyLinks } from './verifyLinksUtil'

interface CreateCategoryTestsParams {
  categories: Array<CategoryId>
  pathConfig: PathConfig
}

interface VerifyCategoryLinksParams {
  category: CategoryId
  pathConfig: PathConfig
}

interface GetAllSlugsByCategoryTypeParams {
  category: CategoryId
  directoryPath: string
}

export function getAllSlugsByCategoryType({
  directoryPath,
  category,
}: GetAllSlugsByCategoryTypeParams): Cypress.Chainable<Array<string>> {
  return cy.task<Array<string>>('readDir', directoryPath).then((files) => {
    const slugs: Array<string> = []

    const fileReadPromises = files.map((file) => {
      const filePath = path.join(directoryPath, file)

      return cy.task('readFile', filePath).then((content) => {
        const parsedContent = matter(content as string)
        if (parsedContent.data.category === category) {
          slugs.push(file.replace('.md', ''))
        }
      })
    })

    return cy.wrap(Promise.all(fileReadPromises).then(() => slugs))
  })
}

function verifyCategoryLinks({
  pathConfig: { entriesContentPath, path },
  category,
}: VerifyCategoryLinksParams) {
  getAllSlugsByCategoryType({
    directoryPath: entriesContentPath as string,
    category,
  }).then((slugs) => {
    slugs.forEach((slug) => {
      cy.log('Testing Slug:', slug)
      verifyLinks(`${path}/${slug}`)
    })
  })
}

export function createCategoryTests({
  pathConfig,
  categories,
}: CreateCategoryTestsParams) {
  describe(`All Entries for ${pathConfig.path}`, () => {
    categories.forEach((category) => {
      it(`should check links with ${category} category`, () => {
        verifyCategoryLinks({ pathConfig, category })
      })
    })
  })
}
