import { getDigestArticleData } from '@filecoin-foundation/utils/getDigestArticleData'

export type DigestArticleData = Awaited<ReturnType<typeof getDigestArticleData>>
