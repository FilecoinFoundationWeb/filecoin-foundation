import { TagLabel } from '@filecoin-foundation/ui/TagComponents'

import { createMetadata } from '@/utils/createMetadata'

export default function Blog() {
  return (
    <>
      <section>
        <TagLabel variant="secondary">Featured</TagLabel>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <time>Lorem ipsum dolor sit amet.</time>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>Read Featured Post</button>
      </section>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW Blog | Latest Web3 Insights & Updates',
  metaDescription:
    'Stay informed on the newest advancements in decentralized tech, human rights data preservation, and social impact. Discover fresh perspectives from FFDW.',
  overrideTitle: true,
})
