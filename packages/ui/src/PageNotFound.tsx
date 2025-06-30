import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'
import { NotFoundAnalytics } from '@filecoin-foundation/ui/NotFoundAnalytics'

type PageNotFoundProps = {
  children?: React.ReactNode
}

export function PageNotFound({ children }: PageNotFoundProps) {
  return (
    <>
      <NotFoundAnalytics />
      <ErrorMessage
        kicker="404"
        title="Page Not Found"
        message="We're sorry, but the page you were looking for is not here."
      >
        {children}
      </ErrorMessage>
    </>
  )
}
