import { getAllEventSlugs, getAllSlugs } from './getAllSlugsUtil'
import { verifyLinks } from './verifyLinksUtil'

export type EcosystemProjectCategoryType =
  | 'artificial-intelligence'
  | 'education-academia-health'
  | 'finance'
  | 'media-entertainment'
  | 'network'
  | 'public-goods-dweb'
  | 'science-climate-space'
  | 'storage'
  | 'tooling-productivity'

export type BlogPostCategoryType =
  | 'ecosystem'
  | 'events'
  | 'interview'
  | 'news'
  | 'reports'
  | 'use-case'

export function verifyAllBlogPostLinks(
  directoryPath: string,
  basePath: string,
  category: BlogPostCategoryType,
) {
  getAllSlugs(directoryPath, category).then((slugs) => {
    slugs.forEach((slug) => {
      cy.log('Testing Slug:', slug)
      verifyLinks(`${basePath}/${slug}`)
    })
  })
}

export function verifyAllEcosystemProjectLinks(
  directoryPath: string,
  basePath: string,
  category: EcosystemProjectCategoryType,
) {
  getAllSlugs(directoryPath, category).then((slugs) => {
    slugs.forEach((slug) => {
      cy.log('Testing Slug:', slug)
      verifyLinks(`${basePath}/${slug}`)
    })
  })
}

export function verifyAllEventLinks(directoryPath: string, basePath: string) {
  getAllEventSlugs(directoryPath).then((slugs) => {
    slugs.forEach((slug) => {
      cy.log('Testing Slug:', slug)
      verifyLinks(`${basePath}/${slug}`)
    })
  })
}
