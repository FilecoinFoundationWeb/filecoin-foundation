import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { Social } from '@filecoin-foundation/ui/Social'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { socialLinksWithIcons } from '@/utils/socialConfig'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'

export default function Digest() {
  return (
    <PageLayout gap={32}>
      <PageHeader
        title="The Go-to Publication for Exploring DWeb Ideas and Principles"
        image={graphicsData.digest}
      />

      <CTASection
        kicker="Social Media"
        title="Follow us and join the conversation."
      >
        <Social linksWithIcons={socialLinksWithIcons} />
      </CTASection>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW DWeb Digest | In-Depth Exploration of the Decentralized Web',
  metaDescription:
    'Explore FFDW DWeb Digest for expert insights on cognitive liberty, privacy, and crypto policy. Discover the evolving landscape of digital autonomy and blockchain.',
  overrideTitle: true,
})
