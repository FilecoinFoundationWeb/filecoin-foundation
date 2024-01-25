import { createMetadata } from '@/utils/createMetadata'

import { attributes, react as Content } from '@/content/pages/terms.md'

const { title, seo } = attributes

import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.TERMS)

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
