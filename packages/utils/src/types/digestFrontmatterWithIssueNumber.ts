import type { GenericEntryFrontmatter } from '@filecoin-foundation/utils/types/genericEntryFrontmatterType'

export type DigestFrontmatterWithIssueNumber = GenericEntryFrontmatter & {
  'issue-number': number
}
