import { KeyMemberCard } from '@filecoin-foundation/ui/KeyMemberCard'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { ContactCTA } from '@/components/ContactCTA'
import { CTALink } from '@/components/CTALink'
import { PageSection } from '@/components/PageSection'

import { BoardMemberGrid } from './components/BoardMemberGrid'
import { IconCard } from './components/IconCard'
import { IconCardGrid } from './components/IconCardGrid'
import { boardMembers } from './constants/boardMembers'
import { impactAreas } from './constants/impactAreas'
import { priorities } from './constants/priorities'
import { ABOUT_SEO } from './constants/seo'
import { generateStructuredData } from './utils/generateStructuredData'

import { PageHeader } from '@/_components/PageHeader/PageHeader'

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

      <ContactCTA />
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: { absolute: ABOUT_SEO.title },
  description: ABOUT_SEO.description,
  image: graphicsData.about.data.src,
  path: PATHS.ABOUT.path,
})
