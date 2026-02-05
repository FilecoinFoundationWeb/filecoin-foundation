import type { DigestArticleData } from './types/digestType'

type GetDigestArticleStaticParamsInput = {
  articles: Array<DigestArticleData>
}

export function getDigestArticleStaticParams({
  articles,
}: GetDigestArticleStaticParamsInput) {
  return articles.map(({ articlePath }) => {
    const [issue, slug] = articlePath.split('/')
    return { issue, slug }
  })
}
