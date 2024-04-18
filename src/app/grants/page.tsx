import { GetInvolvedList } from '@/components/GetInvolvedList'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { Section } from '@/components/Section'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/grants.md'

import { CardLayout } from '@/_components/CardLayout'
import { GrantsSectionCard } from '@/_components/GrantsSectionCard'
import { PageSection } from '@/_components/PageSection'
import { PATHS } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { grantsAndOpportunitiesData } from './data/grantsAndOpportunitiesData'

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
          {grantsAndOpportunitiesData.map((card) => {
            const { title, description, Icon } = card

            return (
              <GrantsSectionCard
                key={title}
                heading={{
                  icon: <Icon className="h-6 w-6 text-brand-300"></Icon>,
                  title,
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

      <Section
        kicker="What We Do"
        title="Filecoin Plus: Incentivize Useful Storage on Filecoin"
        content="A brief overview of the motivation, principles, and mechanisms of Filecoin Plus, and how it incentivizes useful storage on the network."
        link={{
          href: 'https://docs.filecoin.io/basics/how-storage-works/filecoin-plus/',
          text: 'Learn More',
        }}
      />

      <section>
        <Heading tag="h2" variant="xl">
          How to get involved in the Filecoin community
        </Heading>
        <p>
          The Filecoin community includes thousands of developers,
          technologists, users, and enthusiasts all over the world.
        </p>
        <TextLink href={FILECOIN_URLS.social.slack.href}>Learn More</TextLink>
        <GetInvolvedList />
      </section>
    </PageLayout>
  )
}
