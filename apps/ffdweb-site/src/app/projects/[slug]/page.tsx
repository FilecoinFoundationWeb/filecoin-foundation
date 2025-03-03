import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'

import { createMetadata } from '@/utils/createMetadata'

export default function Project() {
  return (
    <PageLayout gap={32}>
      <header>
        <h1></h1>
      </header>

      <section>
        <h2>About the Project</h2>
        <p></p>
      </section>

      <section>
        <h2>Partnership Details</h2>
        <p></p>
      </section>

      <div>
        <InternalTextLink href="#">Website</InternalTextLink>
        <InternalTextLink href="#">Read Blog Post</InternalTextLink>
      </div>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  metaTitle: '', // [Name of Project] | FFDW
  metaDescription: '', // [Description of project]
})
