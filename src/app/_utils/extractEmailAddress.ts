type EmailURL = string

export function extractEmailAddress(emailURL: EmailURL) {
  return emailURL.replace('mailto:', '')
}
