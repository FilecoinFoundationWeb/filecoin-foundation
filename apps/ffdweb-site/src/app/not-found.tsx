import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export default function NotFound() {
  return (
    <>
      <ErrorMessage
        kicker="404"
        title="Page Not Found"
        baseDomain={BASE_DOMAIN}
      >
        We&apos;re sorry, but the page you were looking for is not here.
      </ErrorMessage>
    </>
  )
}
