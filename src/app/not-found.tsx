import ErrorMessage from '@/components/ErrorMessage'

export default function NotFound() {
  return (
    <ErrorMessage kicker="404" title="Page Not Found">
      We&apos;re sorry, but the page you were looking for is not here.
    </ErrorMessage>
  )
}
