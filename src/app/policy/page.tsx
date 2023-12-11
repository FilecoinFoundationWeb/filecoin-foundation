import { createMetadata } from '@/utils/createMetadata'

import { attributes, react as Content } from '@/content/pages/policy.md'

const { title, seo } = attributes

export const metadata = createMetadata(seo.title, seo.description)

export default function Policy() {
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
