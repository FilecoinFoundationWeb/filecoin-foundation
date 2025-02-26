import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/_components/CTASection'

export default function LearningResources() {
  return (
    <>
      <header>
        <span>Learning Resources</span>
        <h1>Explore Decentralized Tech with Content from FFDW and Beyond</h1>
      </header>

      <CTASection
        kicker="Contribute"
        title="Add to FFDW's Learning Resources Page"
        cta={{
          href: FFDW_URLS.newResourceForm,
          text: 'Submit a Resource',
        }}
      />
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW Learning Resources | Decentralized Tech & Social Impact',
  metaDescription:
    'Discover case studies, tutorials, and tools on decentralized technologies driving social change. Learn, share, and help shape the future with FFDW.',
  overrideTitle: true,
})
