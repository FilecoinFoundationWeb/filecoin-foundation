import { WebPage, WithContext } from 'schema-dts'

import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { SectionDeepDive } from '@/components/SectionDeepDive'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'
import { VideoArticle } from '@/components/VideoArticle'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/about.md'

import { PATHS } from '@/constants/paths'
import {
  CONTACT_EMAIL,
  FILECOIN_URLS,
  GRANTS_EMAIL,
  ORGANIZATION_NAME,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ABOUT.path)

const aboutPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ABOUT.path,
})

const aboutPageStructuredData: WithContext<WebPage> = {
  ...aboutPageBaseData,
  about: {
    '@type': 'Organization',
    name: ORGANIZATION_NAME,
    founder: [
      {
        '@type': 'Person',
        name: 'Marta Belcher', // Adjust
      },
    ],
    foundingDate: '2024-01-01', // Adjust
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Media and collaboration inquiries',
        email: CONTACT_EMAIL,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Ecosystem grants inquiries',
        email: GRANTS_EMAIL,
      },
    ],
  },
  sameAs: Object.values(FILECOIN_FOUNDATION_URLS),
}

export default function About() {
  return (
    <>
      <StructuredDataScript structuredData={aboutPageStructuredData} />
      <PageHeader title={title} description={description} />

      <section>
        <h2>Our Mission</h2>
        <p>
          The Foundation&apos;s key role is to find ways for the Filecoin
          community to solve the problems we face as a community, and help
          facilitate collective action.
        </p>
      </section>

      <Section
        kicker="Internet of Everyone"
        title="Filecoin Foundation does not own Filecoin, operate it, or manage it."
        content={[
          'It is one of many organizations that cares deeply about Filecoin — its potential, and the values it represents',
          'However, the foundation has a unique position within that ecosystem to help cultivate research, development, and community engagement.',
        ]}
        link={{ href: PATHS.GET_INVOLVED.path, text: 'Join the Community' }}
      />

      <section>
        <p>
          In addition to providing funding, The Filecoin Foundation supports a
          vibrant, decentralized ecosystem with many independent organizations
          that provide funding, coordination, and leadership to support
          Filecoin&apos;s long-term success.
        </p>
      </section>

      <Section
        kicker="Collective Action"
        title="The Foundation helps the Filecoin community solve problems and facilitates collective action."
        content="
          This means resisting the natural tendency of organizations to grow and accumulate value within themselves, and instead cultivating value creation outside the Foundation in the broader Filecoin ecosystem."
      />

      <section>
        <h2>Board of Directors</h2>
        <p>
          The Filecoin Foundation (FF) is an independent organization that
          facilitates governance of the Filecoin network, funds critical
          development projects, supports the growth of the Filecoin ecosystem,
          and advocates for Filecoin and the decentralized web.
        </p>
        <ul>
          <li>Marta Belcher</li>
          <li>Marcia Hofmann</li>
          <li>Brian Behlendorf</li>
          <li>Nicole Wong</li>
        </ul>
      </section>

      <Section
        kicker="Advisors"
        title="The Filecoin Foundation is guided by an extraordinary and accomplished group of advisors."
        content={
          <>
            <p>
              Leaders from across Web3 and the open-source technology
              communities have come together to foster the Filecoin ecosystem.
            </p>
            <p>
              Watch our{' '}
              <TextLink href={FILECOIN_FOUNDATION_URLS.youtube}>talks</TextLink>{' '}
              featuring contributions from our advisory panel and be part of the
              conversation on{' '}
              <TextLink href={FILECOIN_URLS.slack}>
                Filecoin&apos;s Slack
              </TextLink>
              .
            </p>
          </>
        }
      >
        <ul>
          <li>
            <span className="block">Veronica McGregor</span>
            <span>‍Chief Legal Officer, Exodus</span>
          </li>
          <li>
            <span className="block">Katie Biber</span>
            <span>General Counsel, Brex</span>
          </li>
          <li>
            <span className="block">Alex Feerst</span>
            <span>CEO, Murmuration Labs</span>
          </li>
          <li>
            <span className="block">Wendy Hanamura</span>
            <span>Director of Partnerships, Internet Archive</span>
          </li>
          <li>
            <span className="block">Brewster Kahle</span>
            <span>Founder, Internet Archive</span>
          </li>
          <li>
            <span className="block">Joe Lubin</span>
            <span>Founder of ConsenSys and Co-Founder of Ethereum</span>
          </li>
          <li>
            <span className="block">Georgia Quinn</span>
            <span>General Counsel, Anchorage</span>
          </li>
          <li>
            <span className="block">Sandra Ro</span>
            <span>CEO, ‍Global Blockchain Business Council</span>
          </li>
        </ul>
      </Section>

      <SectionDeepDive>
        <VideoArticle
          title="Humanity's Most Important Records"
          description="This session highlights the amazing work Starling Labs has done in Ukraine and Syria, with the support of the Filecoin Foundation."
          href="https://www.youtube.com/watch?v=S91iwPGuV7A"
        />
        <VideoArticle
          title="Fil+ State of the Union 2022"
          description="Learn about Filecoin Plus, a program designed to incentivize useful storage on the Filecoin network."
          href="https://www.youtube.com/watch?v=d_ey6CHjGys"
        />
      </SectionDeepDive>
    </>
  )
}
