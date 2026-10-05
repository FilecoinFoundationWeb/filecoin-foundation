import type { Infer } from '@qino/cms'

import { buildIssuePath } from '@filecoin-foundation/utils/buildDigestPath'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { DigestIssueFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestIssueFrontmatterSchema'

import { camelcaseKeysDeep } from '@/utils/camelcaseKeysDeep'
import { withSeoTitleFallback } from '@/utils/withSeoTitleFallback'

import qino from '../'

export const digestIssueCollection = qino.defineCollection({
  directory: 'digest/issues',
  extension: '.md',
  schema: DigestIssueFrontmatterSchema.transform(camelcaseKeysDeep).transform(
    (issue) => ({
      ...withSeoTitleFallback(issue),
      issuePath: buildIssuePath({ issueNumber: issue.issueNumber }),
      kicker: `Issue ${issue.issueNumber} - ${formatDate(issue.publishedOn, 'MMM yyyy')}`,
    }),
  ),
  views: (view) => ({
    default: view({
      sort: (a, b) => b.issueNumber - a.issueNumber,
    }),
  }),
})

export type DigestIssueEntry = Infer<typeof digestIssueCollection>['output']
