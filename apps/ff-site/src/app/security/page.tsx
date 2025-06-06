import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/security/security.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { ExploreSectionCard } from '@/components/ExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { developerSupportData } from './data/developerSupportData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default function Security() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.security}
      >
        <CTAButtonGroup
          cta={[
            {
              href: PATHS.BUG_BOUNTY.path,
              text: 'Bug Bounty Program',
            },
            {
              href: PATHS.MATURITY_MODEL.path,
              text: 'Web3 Security Maturity Model',
            },
          ]}
        />
      </PageHeader>

      <PageSection
        kicker="What We Do"
        title="Incident Response and Monitoring"
        description="Filecoin Foundation facilitates a collaborative approach to network security for the Filecoin network. This includes monitoring and network-wide responders, spanning multiple organizations and projects, to facilitate 24/7 monitoring of the chain across time zones&mdash;setting the ecosystem apart in fostering a secure and resilient network."
        image={graphicsData.security2}
      />

      <PageSection kicker="Secure Your Project" title="Developer Support">
        <CardGrid as="ul" cols="smTwo">
          {developerSupportData.map((card) => {
            const {
              heading: { title, icon },
              description,
            } = card

            return (
              <ExploreSectionCard
                key={title}
                heading={{
                  tag: 'h3',
                  variant: 'lg',
                  children: title,
                  iconProps: {
                    component: icon,
                  },
                }}
              >
                {description}
              </ExploreSectionCard>
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="Report Bugs"
        title="Bug Bounty Program"
        description="Filecoin Foundation offers bug bounties for reported security vulnerabilities on the Filecoin protocol. Earn up to 150,000 USD, paid in USD/USDC, for reporting critical vulnerabilities. Since launching our Bug Bounty program, we’ve paid out more than $600,000 in rewards."
        image={graphicsData.security4}
        cta={[
          {
            href: PATHS.BUG_BOUNTY.path,
            text: 'Learn More About the Program',
          },
          {
            href: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
            text: 'Coordinated Disclosure Policy',
          },
        ]}
      />

      <PageSection
        kicker="Maturity Model"
        title="Web3 Security Maturity Model"
        description="The Web3 Security Maturity Model, developed by Filecoin Foundation’s security team, is a comprehensive framework designed for organizations and projects building decentralized technology. It allows organizations to perform a structured self-assessment with the goal of helping Filecoin and Web3 contributions better evaluate and enhance their security posture across all aspects of development and operations."
        image={graphicsData.security5}
        cta={{
          href: PATHS.MATURITY_MODEL.path,
          text: 'Learn More About the Maturity Model',
        }}
      />

      <CTASection
        title="Engage with Our Security Team"
        description={[
          'Filecoin Foundation security team is always looking to better understand the perspectives and needs of the Filecoin ecosystem. Feedback is invaluable!',
          'Don’t hesitate to contact us or meet our team at upcoming Foundation-hosted and community events.',
        ]}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.security.emails.main.href,
          text: FILECOIN_FOUNDATION_URLS.security.emails.main.label,
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  image: graphicsData.security.data.src,
  path: PATHS.SECURITY.path,
})
