import { CardLayout } from '@/components/CardLayout'
import { GovernanceCalendarCard } from '@/components/GovernanceCalendarCard'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { Social } from '@/components/Social'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/governance.md'

import { PageSection } from '@/_components/PageSection'
import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { communityCallsData } from './data/communityCallsData'

const { header, seo } = attributes
export const metadata = createMetadata(seo, PATHS.GOVERNANCE.path)

const governancePageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GOVERNANCE.path,
})

export default function Governance() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={governancePageBaseData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{
          href: '#',
          text: 'Learn More',
        }}
      />

      <section>
        <Heading tag="h2" variant="xl">
          Improving Filecoin
        </Heading>
        <article>
          <Heading tag="h3" variant="lg">
            What exactly is a FIP
          </Heading>
          <p>
            FIPs are standards specifying potential new features or processes
            for Filecoin.
          </p>
          <p>
            FIPs play a central role in how changes happen and are documented on
            Filecoin. FIPs allow the community to propose, debate, and adopt
            changes.
          </p>
          <p>
            Along with providing a technical specification for changes, FIPs are
            the unit around which governance happens in Filecoin.
          </p>
        </article>
        <article>
          <Heading tag="h3" variant="lg">
            How are FIPs prioritized?
          </Heading>
          <p>
            There are different types of FIPs, such as core FIPs for low-level
            protocol changes that affect consensus and require a network
            upgrade.
          </p>
          <p>
            Every network upgrade consists of a set of FIPs that need to be
            implemented by each Filecoin client on the network. This implies
            that to stay in consensus with other clients on the Filecoin
            mainnet, client developers need to make sure they have all
            implemented the required FIPs.
          </p>
          <p>
            Non-core FIPs don’t have to be adopted by all applications, but core
            FIPs must be widely adopted (because all nodes must upgrade to stay
            part of the same network) — therefore core FIPs require broader
            consensus within the community than non-core FIPs.
          </p>
        </article>
        <article>
          <Heading tag="h3" variant="lg">
            Can I submit an FIP?
          </Heading>
          <p>
            Yes, anyone is free to propose one, and then various stakeholders in
            the community will discuss to determine whether it should be adopted
            as a standard or included in a network upgrade.
          </p>
          <p>
            To participate, head over to the FIPs section of the Filecoin
            Project repo or connect with the community on Slack.
          </p>
        </article>
      </section>

      <PageSection
        kicker="About"
        title="Understanding Governance"
        description={[
          'In the Filecoin ecosystem – which is decentralized and open source – governance refers to the rights, rules, processes, and norms that empower community members to collectively determine the development of the protocol.',
          'The Foundation’s role includes developing and implementing processes and policies for decision-making and managing community engagement and feedback – all to support the development of the ecosystem at large. ',
        ]}
      />

      <PageSection kicker="Upcoming Events" title="Community Calls">
        <CardLayout type="blogPost">
          {communityCallsData.map((card) => {
            const { title, startDate, durationInMinutes, cta } = card

            return (
              <GovernanceCalendarCard
                key={title}
                title={title}
                startDate={startDate}
                durationInMinutes={durationInMinutes}
                cta={cta}
              />
            )
          })}
        </CardLayout>
      </PageSection>

      <section>
        <Heading tag="h2" variant="xl">
          Get Involved
        </Heading>
        <Social />
        <p>Community governance calls happen every other Tuesday.</p>
        <p>
          Visit the{' '}
          <TextLink href={PATHS.EVENTS.path}>
            Filecoin community events hub
          </TextLink>{' '}
          and join the conversation in the{' '}
          <TextLink href={FIL_PLUS_URLS.slack}>
            #fil-plus Slack channel
          </TextLink>
          .
        </p>
        <TextLink href={PATHS.GET_INVOLVED.path}>Get Involved</TextLink>
      </section>
    </PageLayout>
  )
}
