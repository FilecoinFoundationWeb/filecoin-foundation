import { Button } from '@filecoin-foundation/ui/Button'
import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'
import { NotFoundAnalytics } from '@filecoin-foundation/ui/NotFoundAnalytics'

type PageNotFoundProps = {
  cta?: React.ReactElement<typeof Button>
}

export function PageNotFound({ cta }: PageNotFoundProps) {
  return (
    <>
      <NotFoundAnalytics />
      <ErrorMessage
        kicker="404"
        title="Page Not Found"
        message="We're sorry, but the page you were looking for is not here."
        cta={cta}
      />
    </>
  )
}
