import { ArticleLayout } from '@filecoin-foundation/ui/Article/ArticleLayout'
import { DigestArticleHeader } from '@filecoin-foundation/ui/DigestArticleHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { ShareArticle } from '@filecoin-foundation/ui/ShareArticle'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { getEntryOrNotFound } from '@filecoin-foundation/utils/getEntryOrNotFound'
import type { DigestArticleParams } from '@filecoin-foundation/utils/types/paramsTypes'

import { PATHS } from '@/constants/paths'
import { BASE_URL, ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

import { digestArticleCollection } from '@/qino/collections/digestArticles'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'

import { getDigestArticlesData } from '../../utils/getDigestArticleData'

import { AuthorBio } from './components/AuthorBio'
import { generateStructuredData } from './utils/generateStructuredData'

type DigestArticleProps = {
  params: Promise<DigestArticleParams>
}

export default async function DigestArticle(props: DigestArticleProps) {
  const { slug: articleSlug } = await props.params
  const article = await getEntryOrNotFound(digestArticleCollection, articleSlug)
  const {
    title,
    issueNumber,
    articlePath,
    articleNumber,
    image,
    authors,
    markdown,
  } = article

  const atLeastOneAuthorHasBio = authors.some((author) => author.bio)

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(article)} />
      <ArticleLayout>
        <DigestArticleHeader
          title={title}
          issueNumber={issueNumber}
          articleNumber={articleNumber}
          authors={authors}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
          }}
        />

        {markdown && <MarkdownContent>{markdown}</MarkdownContent>}

        {atLeastOneAuthorHasBio && (
          <aside className="flex flex-col gap-5 sm:w-2/3">
            {authors.map((author) => (
              <AuthorBio key={author.firstName} author={author} />
            ))}
          </aside>
        )}

        <ShareArticle
          sectionTitle="Share Article"
          articleTitle={title}
          path={`${PATHS.DIGEST.path}/${articlePath}`}
          baseUrl={BASE_URL}
        />
      </ArticleLayout>
    </PageLayout>
  )
}

export async function generateStaticParams() {
  const articles = await getDigestArticlesData()

  return articles.map(({ articlePath }) => {
    const [issue, slug] = articlePath.split('/')
    return { issue, slug }
  })
}

export async function generateMetadata(props: DigestArticleProps) {
  const { slug: articleSlug } = await props.params
  const { seo, image, articlePath } = await getEntryOrNotFound(
    digestArticleCollection,
    articleSlug,
  )

  return createMetadata({
    path: `${PATHS.DIGEST.path}/${articlePath}`,
    title: { absolute: `${seo.title} | ${ORGANIZATION_NAME_SHORT}` },
    description: seo.description,
    image: image?.src || graphicsData.digest.data.src,
    openGraph: { type: 'article' },
  })
}
