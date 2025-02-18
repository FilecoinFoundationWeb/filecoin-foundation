import { getDigestArticleData } from '@/digest/utils/getDigestArticleData'

export type DigestArticleData = Awaited<ReturnType<typeof getDigestArticleData>>
