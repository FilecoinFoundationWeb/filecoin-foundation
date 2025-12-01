import type { LocaleParams } from '@/i18n/types'

import { setRequestLocale } from 'next-intl/server'

import { MarkdownContent } from '@filecoin-foundation/ui-filecoin/Markdown/MarkdownContent'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

import { Navigation } from '@/components/Navigation/Navigation'

import { getCaseStudyData, getCaseStudiesData } from '../utils/getCaseStudyData'

type CaseStudyArticleProps = {
  params: Promise<SlugParams & LocaleParams>
}

export default async function CaseStudyArticle(props: CaseStudyArticleProps) {
  const { slug, locale } = await props.params
  setRequestLocale(locale)

  const data = await getCaseStudyData(slug, locale)
  const { title, pageDescription, content } = data

  return (
    <>
      <Navigation backgroundVariant="dark" />
      <PageSection backgroundVariant="dark">
        <PageHeader title={title} description={pageDescription} />
      </PageSection>
      <PageSection backgroundVariant="light" paddingVariant="medium">
        <div className="mx-auto max-w-3xl">
          <MarkdownContent>{content}</MarkdownContent>
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
