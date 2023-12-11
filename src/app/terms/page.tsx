import { createMetadata } from '@/utils/createMetadata'

import { attributes, react as Content } from '@/content/pages/terms.md'

const { title, seo } = attributes

export const metadata = createMetadata(seo.title, seo.description)

export default function Terms() {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>

      <div>
        <Content />
      </div>
    </>
  )
}
