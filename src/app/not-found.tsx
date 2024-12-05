import ErrorMessage from '@/components/ErrorMessage'

import { NotFoundAnalytics } from './not-found-analytics'

export default function NotFound() {
  return (
    <>
      <NotFoundAnalytics />
      <ErrorMessage kicker="404" title="Page Not Found">
        We&apos;re sorry, but the page you were looking for is not here.
      </ErrorMessage>
    </>
  )
}
