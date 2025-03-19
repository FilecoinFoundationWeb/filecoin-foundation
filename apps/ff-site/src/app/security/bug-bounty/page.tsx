import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/security/bug-bounty.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
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
        description={{ text: header.description }}
        image={graphicsData.security4}
      >
        <Button href={FILECOIN_FOUNDATION_URLS.security.bugBountyProgram}>
          Learn More About the Program
        </Button>
      </PageHeader>

      <PageSection kicker="Bug Hunters" title="Leaderboard">
        <Leaderboard />
      </PageSection>
    </PageLayout>
  )
}
