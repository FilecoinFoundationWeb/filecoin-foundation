import path from 'path'

import matter from 'gray-matter'

import { CategoryOption } from '@/types/categoryTypes'

import { PathConfig } from '@/constants/paths'

import { verifyLinks } from './verifyLinksUtil'

interface CreateCategoryTestsParams {
  pathConfig: PathConfig
  categories: CategoryOption[]
}

interface VerifyCategoryLinksParams {
  pathConfig: PathConfig
  category: CategoryOption
}

interface GetAllSlugsByCategoryTypeParams {
  directoryPath: string
  category: CategoryOption
}

export function getAllSlugsByCategoryType({
  directoryPath,
  category,
}: GetAllSlugsByCategoryTypeParams): Cypress.Chainable<string[]> {
  cy.log('HETE', directoryPath)
  return cy.task<string[]>('readDir', directoryPath).then((files) => {
    const slugs: string[] = []

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
