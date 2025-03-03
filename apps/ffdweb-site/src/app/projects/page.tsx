import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { FFDW_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'

import { generateStructuredData } from './utils/generateStructuredData'

export default function Projects() {
  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        kicker="Projects"
        title="Discover Current and Past FFDW Project Partners"
        image={graphicsData.projects}
      />

      <CTASection
        kicker="Work with FFDW"
        title="Help FFDW Build a Better Web for Everyone"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </>
  )
}

const seo = {
  metaTitle:
    'FFDW Projects | Explore Partnerships Advancing the Decentralized Web',
  metaDescription:
    'Explore how FFDW collaborates with nonprofits to build open-source solutions, preserve vital data, and shape a decentralized internet. See our partners in action.',
}

export const metadata = createMetadata({
  ...seo,
  overrideTitle: true,
})
