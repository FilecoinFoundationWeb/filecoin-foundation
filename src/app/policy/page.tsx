import { createMetadata } from '@/utils/createMetadata'

import { attributes, react as Content } from '@/content/pages/policy.md'

const { title, seo } = attributes

import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.POLICY)

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
