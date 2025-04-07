import { getDigestArticleData } from '../getDigestArticleData'

export type DigestArticleData = Awaited<ReturnType<typeof getDigestArticleData>>
