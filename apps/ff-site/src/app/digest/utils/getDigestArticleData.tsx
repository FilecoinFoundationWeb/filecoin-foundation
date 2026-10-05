import { validateUniqueArticleNumbers } from '@filecoin-foundation/utils/validateUniqueArticleNumbers'

import { digestArticleCollection } from '@/qino/collections/digestArticles'

export async function getDigestArticlesData() {
  const articles = await digestArticleCollection.getEntries()
  validateUniqueArticleNumbers(articles)
  return articles
}
