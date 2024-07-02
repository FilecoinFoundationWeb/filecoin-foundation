import { Envelope } from '@phosphor-icons/react/dist/ssr'

import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { GrantsSectionCard } from '@/components/GrantsSectionCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/security.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { securityResourcesData } from './data/securityResourcesData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes
export const metadata = createMetadata({
  seo,
  path: PATHS.SECURITY.path,
  useAbsoluteTitle: true,
})

export default function Security() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.security}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.security.email.href,
          text: FILECOIN_FOUNDATION_URLS.security.email.label,
        }}
      />

      <PageSection
        kicker="What We Do"
        title="Incident Response and Monitoring"
        description="Filecoin Foundation facilitates a collaborative approach to network security for the Filecoin network. This includes monitoring and network-wide responders, spanning multiple organizations and projects, to facilitate 24/7 monitoring of the chain across time zones ––setting the ecosystem apart in fostering a secure and resilient network. "
      />
      <PageSection kicker="Audits" title="Security Audits">
        <CardGrid cols="smTwo">
          {/* placeholder for the image */}
          <div style={{ gridColumn: 'span 1' }}></div>
          <GrantsSectionCard
            cta={{
              text: 'Email us',
              icon: Envelope,
              href: 'mailto:audits@fil.og',
            }}
            heading={{
              tag: 'h3',
              variant: 'lg',
              children: 'Get Your Project Audited',
            }}
          >
            Filecoin Foundation supports a security auditor network for
            developers in the Filecoin ecosystem. Interested in having your
            project audited? Contact the Foundation’s security team at
            audits@fil.org.
          </GrantsSectionCard>
        </CardGrid>
      </PageSection>

      <PageSection kicker="Resources" title="Security Resources">
        <CardGrid cols="smTwo">
          {securityResourcesData.map((card) => {
            const { title, cta } = card

            return (
              <GrantsSectionCard
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
        title="Bug Bountry Program"
        image={graphicsData.security2}
        description="Filecoin Foundation offers bug bounties for reported security vulnerabilities on the Filecoin protocol. Earn up to 150,000 USD, paid in USD/USDC, for reporting critical vulnerabilities. Since launching our Bug Bounty program, we’ve paid out more than $400,000 in rewards."
        cta={{
          text: 'Filecoin Foundation Bug Bounty',
          href: FILECOIN_FOUNDATION_URLS.security.documents.bugBountyProgram,
        }}
      />

      <CTASection
        title="Engage with Our Security Team"
        description={[
          'Filecoin Foundation security team is always looking to better understand the perspectives and needs of the Filecoin ecosystem. Feedback is invaluable! ',
          <>
            Don’t hesitate to contact{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.security.email.href}>
              security@fil.org{' '}
            </TextLink>{' '}
            or meet our team at upcoming Foundation-hosted and community events.
          </>,
        ]}
      />
    </PageLayout>
  )
}
