import type { LocaleParams } from '@/i18n/types'

import { setRequestLocale } from 'next-intl/server'

import { MarkdownContent as BaseMarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { getCaseStudyData, getCaseStudiesData } from '../utils/getCaseStudyData'

import { PageHeader } from './components/PageHeader'
import { TextCard } from './components/TextCard'

type CaseStudyArticleProps = {
  params: Promise<SlugParams & LocaleParams>
}

export default async function CaseStudyArticle(props: CaseStudyArticleProps) {
  const { slug, locale } = await props.params
  setRequestLocale(locale)

  const data = await getCaseStudyData(slug, locale)
  const {
    title,
    pageDescription,
    content,
    image,
    challenge,
    solution,
    results,
  } = data

  const sections = [
    {
      title: 'Challenge',
      description: challenge,
    },
    {
      title: 'Solution',
      description: solution,
    },
    {
      title: 'Results',
      description: results,
    },
  ]

  return (
    <>
      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
        <PageHeader
          title={title}
          description={pageDescription}
          image={{
            src: image?.src || '',
            alt: image?.alt || '',
          }}
        />
      </PageSection>

      <PageSection backgroundVariant="dark" paddingVariant="compact">
        <ul className="grid grid-cols-1 gap-15 md:grid-cols-3">
          {sections.map((section) => (
            <TextCard
              key={section.title}
              title={section.title}
              description={section.description}
            />
          ))}
        </ul>
      </PageSection>

      <PageSection backgroundVariant="light" paddingVariant="medium">
        <div className="mx-auto max-w-3xl">
          <BaseMarkdownContent>{content}</BaseMarkdownContent>
        </div>
      </PageSection>
    </>
  )
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudiesData('en')
  return caseStudies.map(({ slug }: { slug: string }) => ({ slug }))
}

export async function generateMetadata(props: CaseStudyArticleProps) {
  const { slug } = await props.params
  const { seo, image } = await getCaseStudyData(slug, 'en')

  return createMetadata({
    path: `${PATHS.CASE_STUDIES.path}/${slug}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME}` },
    description: seo.description || '',
    image: image?.src,
    openGraph: { type: 'article' },
  })
}
