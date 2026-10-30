
import { CHINESE_LOCALE, ENGLISH_LOCALE } from '@/i18n/locales'
import type { Locale } from '@/i18n/types'

import type { Infer } from '@qino/cms'

import qino from '../'

import { CaseStudyFrontmatterSchema } from '@/case-studies/schemas/CaseStudyFrontmatterSchema'

function defineCaseStudyCollection<L extends Locale>(locale: L) {
  return qino.defineCollection({
    directory: `case-studies/${locale}`,
    extension: '.md',
    schema: CaseStudyFrontmatterSchema.transform((caseStudy) => ({
      ...caseStudy,
      seo: {
        title: caseStudy.seo?.title || caseStudy.title,
        description: caseStudy.seo?.description || caseStudy.cardDescription,
      },
    })),
  })
}

export const caseStudyEnCollection = defineCaseStudyCollection(ENGLISH_LOCALE)
export const caseStudyZhCnCollection = defineCaseStudyCollection(CHINESE_LOCALE)

export const caseStudyCollections = {
  [ENGLISH_LOCALE]: caseStudyEnCollection,
  [CHINESE_LOCALE]: caseStudyZhCnCollection,
} satisfies Record<Locale, unknown>

export type CaseStudy = Infer<typeof caseStudyEnCollection>['output']
