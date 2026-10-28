type GuestEditor = {
  fullName: string
  title: string
}

export function getDigestIssueDescription(
  description: string,
  guestEditor: GuestEditor,
) {
  return [
    `Featuring Guest Editor ${guestEditor.fullName}, ${guestEditor.title}.`,
    description,
  ]
}
