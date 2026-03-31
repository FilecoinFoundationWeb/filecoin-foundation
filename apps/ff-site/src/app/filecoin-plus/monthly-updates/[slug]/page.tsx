import { ArticleHeader } from '@filecoin-foundation/ui/Article/ArticleHeader'
import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { type SlugParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import {
  getMonthlyUpdateData,
  getMonthlyUpdatesData,
} from '../utils/getMonthlyUpdateData'

import { generateStructuredData } from './utils/generateStructuredData'

type MonthlyUpdateProps = {
  params: Promise<SlugParams>
}

export default async function MonthlyUpdatePost(props: MonthlyUpdateProps) {
  const { slug } = await props.params
  const data = await getMonthlyUpdateData(slug)

  const { title, image, content, publishedOn, addTableOfContents } = data

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(data)} />
      <ArticleLayout>
        <ArticleHeader
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        >
          <ArticleHeader.Title>{title}</ArticleHeader.Title>
          <span>{formatDate(publishedOn)}</span>
        </ArticleHeader>

        <MarkdownContent addTableOfContents={addTableOfContents}>
          {content}
        </MarkdownContent>

        <ShareArticle
          articleTitle={title}
          path={`${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${slug}`}
          sectionTitle="Share Update"
          baseUrl={BASE_URL}
        />
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const entries = await getMonthlyUpdatesData()
  return entries.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(props: MonthlyUpdateProps) {
  const { slug } = await props.params
  const data = await getMonthlyUpdateData(slug)

  return createMetadata({
    title: data.seo.title,
    description: data.seo.description,
    image: data.image?.src || graphicsData.filPlus.data.src,
    path: `${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${data.slug}`,
    openGraph: { type: 'article' },
  })
}
