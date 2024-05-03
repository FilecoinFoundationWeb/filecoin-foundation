import { Button } from '@/components/Button'
import ErrorMessage from '@/components/ErrorMessage'

import { PATHS } from '@/constants/paths'

export default function NotFound() {
  return (
    <ErrorMessage statusCode="404" title="Page Not Found">
      <p>We&apos;re sorry, but the page you were looking for is not here.</p>
      <Button href={PATHS.HOME.path}>Return Home</Button>
    </ErrorMessage>
  )
}
