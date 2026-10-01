import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { leaderboardPageItem } from '@/qino/items/leaderboardPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { BugBountyCTASection } from '../components/BugBountyCTASection'
import { Leaderboard as LeaderboardComponent } from '../components/Leaderboard'

import { generateStructuredData } from './utils/generateStructuredData'

export default async function Leaderboard() {
  const { header, seo } = await leaderboardPageItem.getEntry()

  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
      />
      <LeaderboardComponent />
      <BugBountyCTASection />
    </PageLayout>
  )
}

export async function generateMetadata() {
  const { seo } = await leaderboardPageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    image: graphicsData.security4.data.src,
    path: PATHS.SECURITY_BUG_BOUNTY_LEADERBOARD.path,
  })
}
