import removeMarkdown from 'remove-markdown'

import { buildArticlePath } from '@filecoin-foundation/utils/buildDigestPath'
import { validateUniqueArticleNumbers } from '@filecoin-foundation/utils/validateUniqueArticleNumbers'

import { digestArticleCollection } from '@/qino/collections/digestArticles'

import { assertEntryExists } from '@/utils/assertEntryExists'
import { camelcaseEntry } from '@/utils/camelcaseEntry'

type DigestArticleEntry = Awaited<
  ReturnType<typeof digestArticleCollection.getEntry>
>

export async function getDigestArticleData(slug: string) {
  await assertEntryExists(digestArticleCollection, slug)
  const article = await digestArticleCollection.getEntry(slug)
  return transformDigestArticleData(article)
}

export async function getDigestArticlesData() {
  const entries = await digestArticleCollection.getEntries()
  const articles = entries.map(transformDigestArticleData)

  validateUniqueArticleNumbers(articles)

  return articles.sort((a, b) => a.articleNumber - b.articleNumber)
}

function transformDigestArticleData(entry: DigestArticleEntry) {
  const article = camelcaseEntry(entry)

  return {
    ...article,
    description: removeMarkdown(article.markdown),
    articlePath: buildArticlePath({
      issueNumber: article.issueNumber,
      articleSlug: article._meta.slug,
    }),
    seo: {
      ...article.seo,
      title: article.seo.title || article.title,
    },
  }
}

export type DigestArticleData = Awaited<ReturnType<typeof getDigestArticleData>>
