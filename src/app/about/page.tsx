import { Files, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import { WebPage, WithContext } from 'schema-dts'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/about.md'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_URLS,
  ORGANIZATION_NAME,
  FILECOIN_FOUNDATION_URLS,
} from '@/constants/siteMetadata'

const { header, seo } = attributes

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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Media and collaboration inquiries',
        email: FILECOIN_FOUNDATION_URLS.email,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Ecosystem grants inquiries',
        email: FILECOIN_URLS.grants.email,
      },
    ],
  },
  sameAs: Object.values(FILECOIN_FOUNDATION_URLS.social).map(
    (link) => link.href,
  ),
}

const focusAreasData = [
  {
    title: 'Governance',
    description:
      'As an open-source project, the Foundation governs the Filecoin ecosystem in a way that’s transparent, community-driven, and in line with the community’s open-source ethos.',
  },
  {
    title: 'Research & Development',
    description:
      'The Foundation funds research and development projects for decentralized web technologies, including projects and teams building on the network and advancing our mission to preserve humanity’s most important information.',
  },
  {
    title: 'Growth',
    description:
      'The Foundation hosts, sponsors, and supports events around the world, leading conversations around decentralization web technology and bringing new builders, clients, and storage providers into the ecosystem.',
  },
]

const boardMembersData = [
  {
    name: 'Marta Belcher',
    title: 'President & Chair, Filecoin',
    linkedIn: 'https://www.linkedin.com/in/martabelcher/',
  },
  {
    name: 'Marcia Hofmann',
    title: 'Electronic Privacy Attorney',
    linkedIn: 'https://www.linkedin.com/in/marciahofmann/',
  },
  {
    name: 'Brian Behlendorf',
    title: 'Chief AI Strategist, Linux Foundation',
    linkedIn: 'https://www.linkedin.com/in/brianbehlendorf/',
  },

  {
    name: 'Nicole Wong',
    title: 'Former Deputy U.S. Chief',
    linkedIn: 'https://www.linkedin.com/in/nicole-wong-96b4335/',
  },
]

const advisorsData = [
  {
    name: 'Brewster Kahle',
    title: 'Founder, Internet Archive',
    linkedIn: 'https://www.linkedin.com/in/brewster-kahle-2a647652/',
  },
  {
    name: 'Veronica McGregor',
    title: 'Chief Legal Officer, Exodus',
    linkedIn: 'https://www.linkedin.com/in/vemcgregor/',
  },
  {
    name: 'Denelle Dixon',
    title: 'CEO, Stellar Development Foundation',
    linkedIn: 'https://www.linkedin.com/in/denelle-dixon-967a236/',
  },
  {
    name: 'Rye Barcott',
    title: 'CEO, With Honor',
    linkedIn: 'https://www.linkedin.com/in/ryebarcott/',
  },
  {
    name: 'Wendy Hanamura',
    title: 'Director of Partnerships, Internet Archive',
    linkedIn: 'https://www.linkedin.com/in/wendyhanamura/',
  },
  {
    name: 'Catherine Stihler',
    title:
      'Former CEO, Creative Commons & Former Member of European Parliament',
    linkedIn: 'https://www.linkedin.com/in/catherine-stihler/',
  },
  {
    name: 'Georgia Quinn',
    title: 'Former General Counsel, Anchorage and CoinList ',
    linkedIn: 'https://www.linkedin.com/in/georgia-quinn-287bb733/',
  },
  {
    name: 'Joe Lubin',
    title: 'Founder, Consensys & Cofounder, Ethereum',
    linkedIn: 'https://www.linkedin.com/in/joseph-lubin-48406489/',
  },
  {
    name: 'Alex Feerst',
    title: 'CEO, Murmuration Labs & Former General Counsel, Medium',
    linkedIn: 'https://www.linkedin.com/in/feerst/',
  },
  {
    name: 'Sandra Ro',
    title: 'CEO, Global Blockchain Business Council',
    linkedIn: 'https://www.linkedin.com/in/sandraro/',
  },
  {
    name: 'Katie Biber',
    title: 'Chief Legal Officer, Paradigm',
    linkedIn: 'https://www.linkedin.com/in/katiebiber/',
  },
]

const reportsData = [
  {
    title: 'Filecoin Foundation 2023 Annual Report',
    description:
      'To get a broader and deeper context on our journey, read the full report.',
    link: FILECOIN_FOUNDATION_URLS.annualReports.latest,
  },
  {
    title: 'Filecoin Foundation 2022 Annual Report',
    description:
      'To get a broader and deeper context on our journey, read the full report.',
    link: FILECOIN_FOUNDATION_URLS.annualReports.previous,
  },
  {
    title: 'Cryptoeconomics Report',
    description:
      'Engage with fellow Web3 builders on Filecoin, exchange insights, and initiate collaborations on future ventures.',
    link: '',
  },
]

type NameWithLinkedInLinkProps = {
  name: string
  linkedIn: string
}

function NameWithLinkedInLink({ name, linkedIn }: NameWithLinkedInLinkProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <Heading tag="h3" variant="lg">
        {name}
      </Heading>
      <a
        href={linkedIn}
        className="text-brand-300 outline-white hover:text-brand-100 focus:text-brand-100 focus:outline-2"
        aria-label={`Find ${name} on LinkedIn (opens in new window)`}
      >
        <LinkedinLogo size={24} aria-hidden={true} />
      </a>
    </span>
  )
}

export default function About() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={aboutPageStructuredData} />
      <PageHeader
        title={header.title}
        description={header.description}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.annualReports.latest,
          text: 'Learn More in Our Annual Report',
        }}
      />

      <PageSection
        kicker="About"
        title="Our Mission"
        description="The Foundation’s mission is to preserve humanity’s most important information."
      />

      <PageSection kicker="What We Do" title="Focus Areas">
        <CardLayout>
          {focusAreasData.map(({ title, description }) => (
            <Card
              key={title}
              title={title}
              description={description}
              borderColor="brand-300"
            />
          ))}
        </CardLayout>
      </PageSection>

      <PageSection kicker="Who We Are" title="Board Members">
        <CardLayout type="blogPost">
          {boardMembersData.map(({ name, title, linkedIn }) => (
            <Card
              key={name}
              title={<NameWithLinkedInLink name={name} linkedIn={linkedIn} />}
            >
              <p className="text-brand-300">{title}</p>
            </Card>
          ))}
        </CardLayout>
      </PageSection>

      <PageSection
        kicker="Advisors"
        title="Advisors"
        description="Leaders from across web3 and the open-source technology communities have come together to foster the Filecoin ecosystem."
      >
        <CardLayout type="blogPost">
          {advisorsData.map(({ name, title, linkedIn }) => (
            <Card
              key={name}
              title={<NameWithLinkedInLink name={name} linkedIn={linkedIn} />}
            >
              <p className="text-brand-300">{title}</p>
            </Card>
          ))}
        </CardLayout>
      </PageSection>

      <PageSection kicker="Reports" title="Reports">
        <CardLayout type="reports">
          {reportsData.map(({ title, description, link }, index) => (
            <div
              key={title}
              className={clsx({
                'lg:row-span-2': index === 0,
              })}
            >
              <Card
                title={title}
                description={description}
                cta={{
                  href: link,
                  text: 'View Report',
                  icon: <Files />,
                }}
              />
            </div>
          ))}
        </CardLayout>
      </PageSection>
    </PageLayout>
  )
}
