import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import victorChangLogo from '@/assets/logos/victor-chang-icon-logo.svg'

import type { SVGLogoProps } from '@/components/SimpleCardWithLogo'

import { CaseStudyFrontmatterSchema } from '../schemas/CaseStudyFrontmatterSchema'

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
  const logoMap: Record<string, SVGLogoProps['src']> = {
    'victor-chang': victorChangLogo,
  }

  const logo: SVGLogoProps = {
    type: 'svg' as const,
    src: logoMap[caseStudy.slug],
    bgColor: (caseStudy.logo.bgColor || '#ffffff') as `#${string}`,
    color: (caseStudy.logo.color || '#000000') as `#${string}`,
  }

  return {
    ...caseStudy,
    logo,
    seo: {
      title: caseStudy.seo?.title || caseStudy.title,
      description: caseStudy.seo?.description || caseStudy.headerDescription,
    },
  }
}

function getDirectoryPathForLocale(locale: string) {
  return PATHS.CASE_STUDIES.entriesPath + `/${locale}`
}
