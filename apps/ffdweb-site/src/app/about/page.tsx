import { KeyMemberCard } from '@filecoin-foundation/ui/KeyMemberCard'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FFDW_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTALink } from '@/components/CTALink'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { BoardMemberGrid } from './components/BoardMemberGrid'
import { IconCard } from './components/IconCard'
import { IconCardGrid } from './components/IconCardGrid'
import { boardMembers } from './constants/boardMembers'
import { impactAreas } from './constants/impactAreas'
import { priorities } from './constants/priorities'
import { generateStructuredData } from './utils/generateStructuredData'

const ABOUT_SEO = {
  title: 'About FFDW | Building and Supporting the Decentralized Community',
  description:
    'Discover how Filecoin Foundation for the Decentralized Web (FFDW) accelerates open, decentralized technologies and safeguards vital data. Learn about our mission to empower communities, preserve cultural knowledge, and shape a fairer, more resilient internet for everyone.',
} as const

export default function About() {
  return (
    <PageLayout gap="large">
      <StructuredDataScript
        structuredData={generateStructuredData(ABOUT_SEO)}
      />
      <PageHeader
        kicker="About"
        title="Building and Supporting the Decentralized Web Community"
        image={graphicsData.about}
      />

      <PageSection
        kicker="FFDW Priorities"
        title="Our mission is to preserve humanity's most important information."
        description="We do this through:"
      >
        <IconCardGrid>
          {priorities.map(({ icon, title, description }) => (
            <IconCard
              key={title}
              icon={{ src: icon, style: 'regular' }}
              title={title}
              description={description}
            />
          ))}
        </IconCardGrid>
      </PageSection>

      <PageSection
        kicker="Impact Areas"
        title="Empowering Change Through Decentralization"
        description="FFDW’s efforts span the critical areas listed below. Each of these domains is vital in its own right, and FFDW’s breadth of work reflects its commitment to driving meaningful change not just in one industry but across the expanse of the web."
      >
        <IconCardGrid>
          {impactAreas.map(({ icon, title, description }) => (
            <IconCard
              key={title}
              icon={{ src: icon, style: 'fill' }}
              title={title}
              description={description}
            />
          ))}
        </IconCardGrid>

        <CTALink href={PATHS.PROJECTS.path}>View All Projects</CTALink>
      </PageSection>

      <PageSection
        isCentered
        kicker="Board of Directors"
        title="FFDW Board of Directors"
      >
        <BoardMemberGrid>
          {boardMembers.map(({ name, title, company, linkedin, image }) => (
            <KeyMemberCard
              key={name}
              name={name}
              title={title}
              company={company}
              linkedin={linkedin}
              image={image}
            />
          ))}
        </BoardMemberGrid>
      </PageSection>

      <CTASection
        kicker="Get Involved"
        title="Join the Conversation and Help Us Build a Better Internet"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: ABOUT_SEO.title },
  description: ABOUT_SEO.description,
  path: PATHS.ABOUT.path,
})
