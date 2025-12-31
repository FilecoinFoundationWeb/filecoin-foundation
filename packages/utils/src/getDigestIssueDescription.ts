import type { DigestIssueData } from './getDigestIssueData'

export function getDigestIssueDescription(
  description: DigestIssueData['description'],
  guestEditor: DigestIssueData['guestEditor'],
) {
  return [
    `Featuring Guest Editor ${guestEditor.fullName}, ${guestEditor.title}.`,
    description,
  ]
}
