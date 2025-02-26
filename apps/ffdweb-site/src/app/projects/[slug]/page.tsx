import { InternalTextLink } from '@filecoin-foundation/ui/TextLink/InternalTextLink'

import { createMetadata } from '@/utils/createMetadata'

export default function Project() {
  return (
    <>
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
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: '', // [Name of Project] | FFDW
  metaDescription: '', // [Description of project]
})
