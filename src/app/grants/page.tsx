import { GetInvolvedList } from '@/components/GetInvolvedList'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'
import { UpcomingEvents } from '@/components/UpcomingEvents'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/grants.md'

import { PATHS } from '@/constants/paths'
import { GRANTS_EMAIL } from '@/constants/siteMetadata'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.GRANTS.path)

const grantsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.GRANTS.path,
})

export default function Grants() {
  return (
    <>
      <StructuredDataScript structuredData={grantsPageBaseData} />
      <PageHeader
        title={title}
        description={description}
        link={{ url: `mailto:${GRANTS_EMAIL}`, text: 'Email for more info' }}
      />

      <section>
        <header>
          <h2>Developer Grants</h2>
          <p>
            The Foundation funds talented and eager teams that want to work with
            us to build a more robust, efficient, and decentralized web.
          </p>
        </header>
        <ul>
          <li>
            <h3>Open Grants</h3>
            <p>
              Have an idea for pushing the Filecoin ecosystem forward? Grants
              are available to support projects that advance the Filecoin
              ecosystem, scale users, or directly advance Filecoin’s mission to
              preserve humanity’s most important information.
            </p>
          </li>
          <li>
            <h3>Requests for Proposal</h3>
            <p>
              These grants generally have clearly scoped deliverables,
              milestones, and funding limits. While there is some flexibility in
              RFP deliverables, we expect teams will deliver what is in scope in
              the RFP.
            </p>
          </li>
          <li>
            <h3>Microgrants</h3>
            <p>
              The Filecoin Foundation awards grants to early-stage projects that
              have developed initial protocols using Filecoin.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          The Foundation&apos;s key role is to find ways for the Filecoin
          community to solve the problems we face as a community, and help
          facilitate collective action.
        </p>
      </section>

      <section>
        <header>
          <h2>Community Grants</h2>
          <p>
            The Filecoin Foundation and its sister organization the Filecoin
            Foundation for the Decentralized Web (FFDW) provide funding to build
            the greater decentralized web and open-source communities. Our
            initiatives seek to:
          </p>
        </header>
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
        <p>For more information on grants, email us.</p>
      </section>

      <section>
        <ul>
          <li>
            <h3>Support</h3>
            <p>
              There are stakeholders in the Filecoin ecosystem: Storage
              Providers, Developers, Researchers, Token Holders, Clients, Users.
              We want to support them all.
            </p>
          </li>
          <li>
            <h3>Growth</h3>
            <p>
              We accelerate the growth of the Filecoin ecosystem through
              partnerships and collaborations.
            </p>
          </li>
          <li>
            <h3>Governance</h3>
            <p>
              As an open-source project, it is vital that Filecoin has
              transparent, community-driven governance. The Foundation
              facilitates the governance process, including the Filecoin
              Improvement Proposals process.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <header>
          <h2>What We Do</h2>
          <p>Filecoin Plus: Incentivize Useful Storage on Filecoin</p>
        </header>
        <p>
          A brief overview of the motivation, principles, and mechanisms of
          Filecoin Plus, and how it incentivizes useful storage on the network.
        </p>
        <TextLink href="https://docs.filecoin.io/basics/how-storage-works/filecoin-plus/">
          Learn More
        </TextLink>
      </section>

      <section>
        <header>
          <h2>How to get involved in the Filecoin community</h2>
          <p>
            The Filecoin community includes thousands of developers,
            technologists, users, and enthusiasts all over the world.
          </p>
          <TextLink href="https://filecoin.io/slack">Learn More</TextLink>
        </header>
        <GetInvolvedList />
      </section>

      <section>
        <h2>Events & Hackathons</h2>
        <UpcomingEvents />
      </section>
    </>
  )
}
