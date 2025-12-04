import { getDigestArticleData } from '../getDigestArticleData'
import { getDigestIssueData } from '../getDigestIssueData'

export type DigestArticleData = Awaited<ReturnType<typeof getDigestArticleData>>

export type DigestIssueData = Awaited<ReturnType<typeof getDigestIssueData>>
