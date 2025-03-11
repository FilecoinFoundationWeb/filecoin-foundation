import { Button } from '@filecoin-foundation/ui/Button'
import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { BASE_DOMAIN, FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/security/bug-bounty.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { PageSection } from '@/components/PageSection'

import { Leaderboard } from './components/Leaderboard'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.security4.data.src,
  },
  path: PATHS.BUG_BOUNTY.path,
})

export default function BugBounty() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.security4}
      >
        <Button
          href={FILECOIN_FOUNDATION_URLS.security.bugBountyProgram}
          baseDomain={BASE_DOMAIN}
        >
          Learn More About the Program
        </Button>
      </PageHeader>

      <PageSection kicker="Bug Hunters" title="Leaderboard">
        <Leaderboard />
      </PageSection>
    </PageLayout>
  )
}
