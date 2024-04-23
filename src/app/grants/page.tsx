import { CardLayout } from '@/components/CardLayout'
import { CTASection } from '@/components/CTASection'
import { GrantsSectionCard } from '@/components/GrantsSectionCard'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/grants.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { opportunitiesData } from './data/opportunitiesData'
import { submissionCriteriaData } from './data/submissionCriteriaData'

const { header, seo } = attributes
export const metadata = createMetadata(seo, PATHS.GRANTS.path)

const grantsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GRANTS.path,
})

export default function Grants() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={grantsPageBaseData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{ href: FILECOIN_URLS.grants.email, text: 'Apply Now' }}
      />

      <PageSection
        kicker="Opportunities"
        title="Grants and Funding Opportunities"
        description="The Foundation is seeking proposals for developer and data tooling, integrations, research and protocols, storage, retrieval, and the Filecoin Virtual Machine (FVM). These grants fall under the following categories:"
      >
        <CardLayout>
          {opportunitiesData.map((card) => {
            const { title, description, icon } = card

            return (
              <GrantsSectionCard
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
              </GrantsSectionCard>
            )
          })}
        </CardLayout>
      </PageSection>

      <section>
        <Heading tag="h2" variant="xl">
          Our Mission
        </Heading>
        <p>
          The Foundation&apos;s key role is to find ways for the Filecoin
          community to solve the problems we face as a community, and help
          facilitate collective action.
        </p>
      </section>

      <section>
        <Heading tag="h2" variant="xl">
          Community Grants
        </Heading>
        <p>
          The Filecoin Foundation and its sister organization the Filecoin
          Foundation for the Decentralized Web (FFDW) provide funding to build
          the greater decentralized web and open-source communities. Our
          initiatives seek to:
        </p>
        <ul>
          <li>
            <p>Accelerate the adoption of open, decentralized technologies</p>
          </li>
          <li>
            <p>
              Build communities that are mutually supportive and self-sustaining
            </p>
          </li>
          <li>
            <p>
              Communicate the benefits of decentralization and open sourcing to
              wider audiences
            </p>
          </li>
        </ul>
        <p>
          For more information on grants,{' '}
          <TextLink href={FILECOIN_URLS.grants.email}>email us</TextLink>.
        </p>
      </section>

      <section>
        <ul>
          <li>
            <Heading tag="h3" variant="lg">
              Support
            </Heading>
            <p>
              There are stakeholders in the Filecoin ecosystem: Storage
              Providers, Developers, Researchers, Token Holders, Clients, Users.
              We want to support them all.
            </p>
          </li>
          <li>
            <Heading tag="h3" variant="lg">
              Growth
            </Heading>
            <p>
              We accelerate the growth of the Filecoin ecosystem through
              partnerships and collaborations.
            </p>
          </li>
          <li>
            <Heading tag="h3" variant="lg">
              Governance
            </Heading>
            <p>
              As an open-source project, it is vital that Filecoin has
              transparent, community-driven governance. The Foundation
              facilitates the governance process, including the Filecoin
              Improvement Proposals process.
            </p>
          </li>
        </ul>
      </section>

      <PageSection
        kicker="Criteria"
        title="Submission Criteria"
        description="Generally, all projects must meet the following requirements:"
      >
        <CardLayout>
          {submissionCriteriaData.map((data) => {
            const { title, description, icon } = data

            return (
              <GrantsSectionCard
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
              </GrantsSectionCard>
            )
          })}
        </CardLayout>
      </PageSection>

      <CTASection
        title="Ready to Apply?"
        description={
          <>
            Please visit our{' '}
            <TextLink href={FILECOIN_URLS.grants.github}>GitHub repo</TextLink>{' '}
            to learn more about the proposal process, review process, timeline
            guidance, and more. For other questions, email{' '}
            <TextLink href={FILECOIN_URLS.grants.email}>
              {FILECOIN_URLS.grants.email.replace('mailto:', '')}
            </TextLink>{' '}
            or join our monthly office hours!
          </>
        }
        cta={{
          href: FILECOIN_URLS.grants.email,
          text: 'Apply Now',
        }}
      />
    </PageLayout>
  )
}
