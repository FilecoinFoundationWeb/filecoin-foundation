import Link from 'next/link'

import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

export default function LearningResources() {
  return (
    <>
      <header>
        <span>Learning Resources</span>
        <h1>Explore Decentralized Tech with Content from FFDW and Beyond</h1>
      </header>

      <section>
        <h2>Contribute</h2>
        <h3>Add to FFDW&apos;s Learning Resources Page</h3>
        <Link href={FFDW_URLS.newResourceForm}>Submit a Resource</Link>
      </section>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW Learning Resources | Decentralized Tech & Social Impact',
  metaDescription:
    'Discover case studies, tutorials, and tools on decentralized technologies driving social change. Learn, share, and help shape the future with FFDW.',
  overrideTitle: true,
})
