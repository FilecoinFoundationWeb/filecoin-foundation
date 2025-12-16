import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { CaseStudyFrontmatterSchema } from '../schemas/CaseStudyFrontmatterSchema'

import { getLogoData } from './getLogoData'

export async function getCaseStudyData(slug: string, locale: string) {
  const data = await getCaseStudyMarkdownData(slug, locale)
  return transformCaseStudyData(data)
}

export async function getCaseStudiesData(locale: string) {
  const allCaseStudies = await getAllMarkdownData({
    zodSchema: CaseStudyFrontmatterSchema,
    directoryPath: getDirectoryPathForLocale(locale),
  })

  return allCaseStudies.map(transformCaseStudyData)
}

function getCaseStudyMarkdownData(slug: string, locale: string) {
  return getMarkdownData({
    slug,
    zodSchema: CaseStudyFrontmatterSchema,
    directoryPath: getDirectoryPathForLocale(locale),
  })
}

function transformCaseStudyData(
  caseStudy: Awaited<ReturnType<typeof getCaseStudyMarkdownData>>,
) {
  const logo = getLogoData(caseStudy.slug)

  return {
    ...caseStudy,
    logo,
    seo: {
      title: caseStudy.seo?.title || caseStudy.title,
      description: caseStudy.seo?.description || caseStudy.cardDescription,
    },
  }
}

function getDirectoryPathForLocale(locale: string) {
  return PATHS.CASE_STUDIES.entriesPath + `/${locale}`
}

export async function getCaseStudiesByFeaturedStatus(locale: string) {
  const allCaseStudies = await getCaseStudiesData(locale)

  return {
    featured: allCaseStudies.filter((item) => item.featured),
    upcoming: allCaseStudies.filter((item) => !item.featured),
  }
}
