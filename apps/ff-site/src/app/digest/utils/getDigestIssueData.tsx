import { buildIssuePath } from '@filecoin-foundation/utils/buildDigestPath'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import { digestIssueCollection } from '@/qino/collections/digestIssues'

import { assertEntryExists } from '@/utils/assertEntryExists'
import { camelcaseEntry } from '@/utils/camelcaseEntry'

type DigestIssueEntry = Awaited<
  ReturnType<typeof digestIssueCollection.getEntry>
>

export async function getDigestIssueData(issueNumber: number) {
  const slug = issueNumber.toString()
  await assertEntryExists(digestIssueCollection, slug)
  const issue = await digestIssueCollection.getEntry(slug)
  return transformDigestIssueData(issue)
}

export async function getDigestIssuesData() {
  const issues = await digestIssueCollection.getEntries()

  return issues
    .map(transformDigestIssueData)
    .sort((a, b) => b.issueNumber - a.issueNumber)
}

function transformDigestIssueData(entry: DigestIssueEntry) {
  const issue = camelcaseEntry(entry)

  return {
    ...issue,
    issuePath: buildIssuePath({ issueNumber: issue.issueNumber }),
    kicker: `Issue ${issue.issueNumber} - ${formatDate(issue.publishedOn, 'MMM yyyy')}`,
    seo: {
      ...issue.seo,
      title: issue.seo.title || issue.title,
    },
  }
}

export type DigestIssueData = Awaited<ReturnType<typeof getDigestIssueData>>
