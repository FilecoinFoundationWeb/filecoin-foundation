import { LOCALES } from '@/i18n/locales'
import type { LocaleParams } from '@/i18n/types'

import { getTranslations, setRequestLocale } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { MarkdownContent as BaseMarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import type { SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'


import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'

import { Navigation } from '@/components/Navigation/Navigation'

import { PageHeader } from '../components/PageHeader'
import { getCaseStudyData, getCaseStudiesData } from '../utils/getCaseStudyData'

import { TextCard } from './components/TextCard'
import { generateStructuredData } from './utils/generateStructuredData'

type CaseStudyArticleProps = {
  params: Promise<SlugParams & LocaleParams>
}

export default async function CaseStudyArticle(props: CaseStudyArticleProps) {
  const { slug, locale } = await props.params
  setRequestLocale(locale)

  const t = await getTranslations(PATHS.CASE_STUDIES.path)

  // #todo: Add all case studies and make challenge, solution, and results required
  const data = await getCaseStudyData(slug, locale)

  const {
    title,
    cardDescription,
    pageDescription,
    content,
    image,
    challenge,
    solution,
    results,
  } = data

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
        <PageHeader
          title={title}
          description={pageDescription || cardDescription}
          label={t('article.label')}
          image={{
            src: image?.src || '',
            alt: image?.alt || '',
          }}
        />
      </PageSection>

      {challenge && solution && results && (
        <PageSection backgroundVariant="dark" paddingVariant="topNone">
          <ul className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3">
            <TextCard title={t('article.challenge')} description={challenge} />
            <TextCard title={t('article.solution')} description={solution} />
            <TextCard title={t('article.results')} description={results} />
          </ul>
        </PageSection>
      )}

      {content && pageDescription && (
        <PageSection backgroundVariant="light">
          <div className="mx-auto max-w-3xl">
            <BaseMarkdownContent>{content}</BaseMarkdownContent>
          </div>
        </PageSection>
      )}
    </>
  )
}

export async function generateStaticParams() {
  const params = await Promise.all(
    LOCALES.map(async (locale) => {
      const caseStudies = await getCaseStudiesData(locale)
      return caseStudies.map(({ slug }) => ({ slug, locale }))
    }),
  )

  return params.flat()
}

export async function generateMetadata(props: CaseStudyArticleProps) {
  const { slug, locale } = await props.params
  const { seo, image } = await getCaseStudyData(slug, locale)

  return createMetadata({
    path: await getLocalePath(`${PATHS.CASE_STUDIES.path}/${slug}`),
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME}` },
    description: seo.description || '',
    image: image?.src,
    openGraph: { type: 'article' },
  })
}
