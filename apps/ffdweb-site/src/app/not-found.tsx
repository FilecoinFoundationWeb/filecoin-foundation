import { PageNotFound } from '@filecoin-foundation/ui/PageNotFound'

import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <PageNotFound>
      <Button href="/">Return Home</Button>
    </PageNotFound>
  )
}
