import { Card } from '@filecoin-foundation/ui/Card/Card'
import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/security/bug-bounty/bug-bounty.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { Button } from '@/components/Button'
import { CardWithBadge } from '@/components/CardWithBadge'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
// import { PointsAndRewardsCard } from '@/components/StatisticCard/PointsAndRewardsCard'

import { CTAPageSection } from './components/CTAPageSection'
import { Leaderboard } from './components/Leaderboard'
import { bugBountyProgramData } from './data/bugBountyProgramData'
// import { pointsAndRewardsData } from './data/pointsAndRewardsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default function BugBounty() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.security4}
      >
        <Button href={PATHS.SECURITY_BUG_BOUNTY_LEADERBOARD.path}>
          View Leaderboard
        </Button>
      </PageHeader>

      <PageSection kicker="How It Works" title="How to Participate">
        <BadgeCardGrid cols="smThree">
          {bugBountyProgramData.map((item) => {
            const { step, title, description } = item

            return (
              <CardWithBadge key={step} title={title} description={description}>
                <Badge number={step} />
              </CardWithBadge>
            )
          })}
        </BadgeCardGrid>
      </PageSection>

      <PageSection
        kicker="Points System"
        title="How Points Are Calculated"
        description="We reward more than just payouts – we recognize meaningful contributirons that enhance security across the Filecoin nework. Your total score is a combination of two components: Bounty Points and Reputation Points."
      >
        <CardGrid as="section" cols="smTwo">
          <Card
            as="div"
            title={{
              text: 'Bounty Points',
              tag: 'h3',
            }}
            description={{
              text: 'Earned for valid, in-scope reports, Bounty Points are calculated by dividing the bounty amount (in USD) by 100. A bounty of $1,000 = 10 Bounty Points.',
            }}
          />
          <Card
            as="div"
            title={{
              text: 'Reputation Points',
              tag: 'h3',
            }}
            description={{
              text: 'Earned for valid, out-of-scope reports, Reputation Points are based on the severity level: 5 points for low severity, 20 points for medium severity, 50 points for high severity, and 100 points for critical severity.',
            }}
          />
        </CardGrid>
      </PageSection>

      <PageSection kicker="Leaderboard" title="Top Security Researchers">
        <Leaderboard limit={5} />
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-center">
          <Button
            href={PATHS.SECURITY_BUG_BOUNTY_LEADERBOARD.path}
            variant="ghost"
          >
            View Full Leaderboard
          </Button>
        </div>
      </PageSection>

      {/* <PageSection
        kicker="Redeem Points"
        title="Unlock Exclusive Swag"
        description="Your points can be exchanged for limited-edition Filecoin and security-themed merch."
      >
        <CardGrid as="ul" cols="smThree">
          {pointsAndRewardsData.map((data, index) => (
            <PointsAndRewardsCard key={index} {...data} />
          ))}
        </CardGrid>

        <div className="mt-4 flex flex-col sm:flex-row sm:justify-center">
          <Button href="" variant="ghost">
            Redeem Points for Swag
          </Button>
        </div>
      </PageSection> */}

      <PageSection
        kicker="Disclosure Guidelines"
        title="Coordinated Disclosure Policy"
        image={graphicsData.securityCoordinatedDisclosurePolicy}
        description={[
          'We believe in responsible, coordinated vulnerability disclosure. By working together with the security community, we can resolve issues quickly and safeguard the Filecoin ecosystem.',
          'Before submitting a report, please review our disclosure guidelines to understand expectations around timelines, confidentiality, and communication, and the Filecoin Foundation privacy policy.',
        ]}
        cta={[
          {
            href: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
            text: 'Read the Disclosure Guidelines',
          },
          {
            href: PATHS.PRIVACY_POLICY.path,
            text: 'Read the Privacy Policy',
          },
        ]}
      />

      <CTAPageSection />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: seo.title,
  description: seo.description,
  image: graphicsData.security4.data.src,
  path: PATHS.BUG_BOUNTY.path,
})
