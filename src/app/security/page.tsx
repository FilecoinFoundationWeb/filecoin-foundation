import { Envelope } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { HomeExploreSectionCard } from '@/components/HomeExploreSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StaticImage } from '@/components/StaticImage'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { createMetadata } from '@/utils/createMetadata'
import { extractEmailAddress } from '@/utils/extractEmailAddress'

import { graphicsData } from '@/data/graphicsData'

import { attributes } from '@/content/pages/security/security.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { securityResourcesData } from './data/securityResourcesData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes
export const metadata = createMetadata({
  seo,
  path: PATHS.SECURITY.path,
  overrideDefaultTitle: true,
})

export default function Security() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.security}
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

      <PageSection
        kicker="What We Do"
        title="Incident Response and Monitoring"
        description="Filecoin Foundation facilitates a collaborative approach to network security for the Filecoin network. This includes monitoring and network-wide responders, spanning multiple organizations and projects, to facilitate 24/7 monitoring of the chain across time zones&mdash;setting the ecosystem apart in fostering a secure and resilient network."
        image={graphicsData.security2}
      />

      <PageSection kicker="Audits" title="Security Audits">
        <CardGrid cols="smTwo" hasGridAutoRows={false}>
          <StaticImage
            {...graphicsData.security3}
            className="h-full w-full rounded-lg"
            sizes={buildImageSizeProp({
              startSize: '100vw',
              lg: '50vw',
            })}
          />
          <HomeExploreSectionCard
            cta={{
              href: FILECOIN_FOUNDATION_URLS.security.emails.audits.href,
              text: 'Email us',
              icon: Envelope,
            }}
            heading={{
              tag: 'h3',
              variant: 'lg',
              children: 'Get Your Project Audited',
            }}
          >
            Filecoin Foundation supports a security auditor network for
            developers in the Filecoin ecosystem. Interested in having your
            project audited? Contact the Foundation’s security team at{' '}
            {extractEmailAddress(
              FILECOIN_FOUNDATION_URLS.security.emails.audits.href,
            )}
            .
          </HomeExploreSectionCard>
        </CardGrid>
      </PageSection>

      <PageSection kicker="Resources" title="Security Resources">
        <CardGrid cols="smTwo">
          {securityResourcesData.map((card) => {
            const { title, cta } = card

            return (
              <HomeExploreSectionCard
                key={title}
                cta={cta}
                heading={{
                  tag: 'h3',
                  variant: 'lg',
                  children: title,
                }}
              />
            )
          })}
        </CardGrid>
      </PageSection>

      <PageSection
        kicker="Report Bugs"
        title="Bug Bounty Program"
        description="Filecoin Foundation offers bug bounties for reported security vulnerabilities on the Filecoin protocol. Earn up to 150,000 USD, paid in USD/USDC, for reporting critical vulnerabilities. Since launching our Bug Bounty program, we’ve paid out more than $400,000 in rewards."
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
          <>
            Don’t hesitate to{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.security.emails.main.href}>
              {extractEmailAddress(
                FILECOIN_FOUNDATION_URLS.security.emails.main.href,
              )}{' '}
            </TextLink>{' '}
            or meet our team at upcoming Foundation-hosted and community events.
          </>,
        ]}
      />
    </PageLayout>
  )
}
