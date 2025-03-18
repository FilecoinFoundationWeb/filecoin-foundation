import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'
import { NotFoundAnalytics } from '@filecoin-foundation/ui/NotFoundAnalytics'

type PageNotFoundProps = {
  baseDomain: string
}

export function PageNotFound({ baseDomain }: PageNotFoundProps) {
  return (
    <>
      <NotFoundAnalytics />
      <ErrorMessage kicker="404" title="Page Not Found" baseDomain={baseDomain}>
        We&apos;re sorry, but the page you were looking for is not here.
      </ErrorMessage>
    </>
  )
}
