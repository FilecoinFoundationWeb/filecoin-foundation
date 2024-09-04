import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/security/bug-bounty.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { Leaderboard } from './components/Leaderboard'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
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
        cta={{
          text: 'Learn More About the Program',
          href: FILECOIN_FOUNDATION_URLS.security.bugBountyProgram,
        }}
      />

      <PageSection kicker="Bug Hunters" title="Leaderboard">
        <Leaderboard />
      </PageSection>
    </PageLayout>
  )
}
