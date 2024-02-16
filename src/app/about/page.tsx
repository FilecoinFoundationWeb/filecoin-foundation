import { WebPage, WithContext } from 'schema-dts'

import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { VideoArticle } from '@/components/VideoArticle'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/about.md'

import { PATHS } from '@/constants/paths'
import {
  CONTACT_EMAIL,
  GRANTS_EMAIL,
  ORGANIZATION_NAME,
  SOCIAL_MEDIA_URLS,
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
  sameAs: Object.values(SOCIAL_MEDIA_URLS),
}

export default function About() {
  return (
    <>
      <StructuredDataScript structuredData={aboutPageStructuredData} />
      <PageHeader title={title} description={description} />

      <Section
        title="Our Mission"
        content="The Foundation's key role is to find ways for the Filecoin community to solve the problems we face as a community, and help facilitate collective action."
      />

      <Section
        title="Internet of Everyone"
        content={[
          'Filecoin Foundation does not own Filecoin, operate it, or manage it.',
          'It is one of many organizations that cares deeply about Filecoin — its potential, and the values it represents',
          'However, the foundation has a unique position within that ecosystem to help cultivate research, development, and community engagement.',
        ]}
        link={{ url: '/get-involved', text: 'Join the Community' }}
      />

      <Section
        title="Collective Action"
        content={[
          'The Foundation helps the Filecoin community solve problems and facilitates collective action.',
          'This means resisting the natural tendency of organizations to grow and accumulate value within themselves, and instead cultivating value creation outside the Foundation in the broader Filecoin ecosystem.',
        ]}
      />

      <Section
        title="Boards of Directors"
        content="The Filecoin Foundation (FF) is an independent organization that facilitates governance of the Filecoin network, funds critical development projects, supports the growth of the Filecoin ecosystem, and advocates for Filecoin and the decentralized web."
      >
        <ul>
          <li>Marta Belcher</li>
          <li>Marcia Hofmann</li>
          <li>Brian Behlendorf</li>
          <li>Nicole Wong</li>
        </ul>
      </Section>

      <Section
        title="Advisors"
        content={[
          'The Filecoin Foundation is guided by an extraordinary and accomplished group of advisors',
          'Leaders from across web3 and the open-source technology communities have come together to foster the Filecoin ecosystem.',
          "Watch our talks featuring contributions from our advisory panel and be part of the conversation on Filecoin's Slack.",
        ]}
      >
        <ul>
          <li>Veronica McGregor</li>
          <li>Katie Biber</li>
          <li>Alex Feerst</li>
          <li>Wendy Hanamura</li>
          <li>Brewster Kahle</li>
          <li>Joe Lubin</li>
          <li>Georgia Quinn</li>
          <li>Sandra Ro</li>
        </ul>
      </Section>

      <Section
        title="Dive Deeper"
        content="Join our talks, community meetings, and other events. To explore them, visit our Youtube channel."
        link={{
          url: 'https://www.youtube.com/channel/UCeM5ezNgFM1Sle_gIz-KMMA',
          text: 'Visit our Youtube Channel',
        }}
      >
        <VideoArticle
          title="Humanity's Most Important Records"
          content="This session highlights the amazing work Starling Labs has done in Ukraine and Syria, with the support of the Filecoin Foundation."
          link="https://www.youtube.com/watch?v=S91iwPGuV7A"
        />
        <VideoArticle
          title="Fil+ State of the Union 2022"
          content="Learn about Filecoin Plus, a program designed to incentivize useful storage on the Filecoin network."
          link="https://www.youtube.com/watch?v=d_ey6CHjGys"
        />
      </Section>
    </>
  )
}
