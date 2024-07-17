import path from 'path'

import matter from 'gray-matter'

import { PathConfig } from '../../src/app/_constants/paths'
import {
  CategoryOption,
  CategorizableBy,
} from '../../src/app/_types/categoryTypes'

import { verifyLinks } from './verifyLinksUtil'

interface CreateCategoryTestsParams {
  pathConfig: PathConfig
  categories: CategoryOption[]
  categoryType: keyof CategorizableBy
}

interface VerifyCategoryLinksParams {
  pathConfig: PathConfig
  category: CategoryOption
  categoryType: keyof CategorizableBy
}

interface GetAllSlugsByCategoryTypeParams {
  directoryPath: string
  category: CategoryOption
  categoryType: keyof CategorizableBy
}

export function getAllSlugsByCategoryType({
  directoryPath,
  category,
  categoryType,
}: GetAllSlugsByCategoryTypeParams): Cypress.Chainable<string[]> {
  return cy.task<string[]>('readDir', directoryPath).then((files) => {
    const slugs: string[] = []

    const fileReadPromises = files.map((file) => {
      const filePath = path.join(directoryPath, file)

      return cy.task('readFile', filePath).then((content) => {
        const parsedContent = matter(content as string)
        if (parsedContent.data[categoryType] === category) {
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
  categoryType,
}: VerifyCategoryLinksParams) {
  getAllSlugsByCategoryType({
    directoryPath: entriesContentPath as string,
    category,
    categoryType,
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
  categoryType,
}: CreateCategoryTestsParams) {
  describe(`All Entries for ${pathConfig.path}`, () => {
    categories.forEach((category) => {
      it(`should check links with ${category} category`, () => {
        verifyCategoryLinks({ pathConfig, category, categoryType })
      })
    })
  })
}
