import { Social } from '@filecoin-foundation/ui/Social'

import { createMetadata } from '@/utils/createMetadata'
import { socialLinksWithIcons } from '@/utils/socialConfig'

import { CTASection } from '@/_components/CTASection'

export default function Digest() {
  return (
    <>
      <header>
        <span>FFDW Digest</span>
        <h1>The Go-to Publication for Exploring DWeb Ideas and Principles</h1>
      </header>

      <CTASection
        kicker="Social Media"
        title="Follow us and join the conversation."
      >
        <Social socialLinksWithIcons={socialLinksWithIcons} />
      </CTASection>
    </>
  )
}

export const metadata = createMetadata({
  metaTitle: 'FFDW DWeb Digest | In-Depth Exploration of the Decentralized Web',
  metaDescription:
    'Explore FFDW DWeb Digest for expert insights on cognitive liberty, privacy, and crypto policy. Discover the evolving landscape of digital autonomy and blockchain.',
  overrideTitle: true,
})
