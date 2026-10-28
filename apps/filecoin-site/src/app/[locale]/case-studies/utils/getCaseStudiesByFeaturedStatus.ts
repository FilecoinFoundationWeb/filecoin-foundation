import type { Locale } from '@/i18n/types'

import { caseStudyCollections } from '@/qino/collections/caseStudies'

import { getLogoData } from './getLogoData'

export async function getCaseStudiesByFeaturedStatus(locale: Locale) {
  const caseStudies = await caseStudyCollections[locale].getEntries()

  const allCaseStudies = caseStudies.map((caseStudy) => ({
    ...caseStudy,
    logo: getLogoData(caseStudy._meta.slug),
  }))

  return {
    all: allCaseStudies,
    featured: allCaseStudies.filter((item) => item.featured),
    upcoming: allCaseStudies.filter((item) => !item.featured),
  }
}
