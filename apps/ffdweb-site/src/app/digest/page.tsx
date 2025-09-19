import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { Social } from '@filecoin-foundation/ui/Social'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import { DIGEST_PATHS, PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { socialLinksWithIcons } from '@/utils/socialConfig'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSectionWithImage } from '@/components/PageSectionWithImage'

import { DIGEST_SEO } from './constants/seo'
import { digestIssues } from './data/issues'
import { generateStructuredData } from './utils/generateStructuredData'

export default async function Digest() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(DIGEST_SEO)}
      />

      <PageHeader
        kicker="DWeb Digest"
        title="A Publication Exploring DWeb Ideas and Principles"
        image={graphicsData.digest}
      />

      {digestIssues.map(({ number, date, title, description }) => (
        <PageSectionWithImage
          key={number}
          kicker={`Issue ${number} | ${formatDate(date, 'MMM yyyy')}`}
          title={`DWeb Digest: ${title}`}
          image={graphicsData.dWebDigestCover}
          description={description}
          cta={{
            href: `${PATHS.DIGEST.path}/${DIGEST_PATHS.issue(number)}`,
            children: `Read Issue ${number}`,
          }}
        />
      ))}

      <CTASection
        kicker="Social Media"
        title="Follow us and join the conversation."
      >
        <div className="text-brand-primary-300">
          <Social linksWithIcons={socialLinksWithIcons} size={40} />
        </div>
      </CTASection>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: DIGEST_SEO.title },
  description: DIGEST_SEO.description,
  path: PATHS.DIGEST.path,
  image: graphicsData.digest.data.src,
})
