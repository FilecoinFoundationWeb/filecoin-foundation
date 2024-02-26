import Link from 'next/link'

import { FeaturedCaseStudies } from '@/components/FeaturedCaseStudies'
import { FeaturedEcosystemProjects } from '@/components/FeaturedEcosystemProjects'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { createMetadata } from '@/utils/createMetadata'
import { getMarkdownData } from '@/utils/getMarkdownData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { EcosystemClient } from './EcosystemClient'

const { title, description, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemProjects: EcosystemProjectData[] = getMarkdownData(
  PATHS.ECOSYSTEM.entriesContentPath as string
)

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

export default function Ecosystem() {
  return (
    <>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
      <PageHeader
        title={title}
        description={description}
        link={{
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />

      <section>
        <h2>Featured Partners</h2>
        <div>Logo Logo Logo Logo</div>
      </section>

      <section>
        <FeaturedEcosystemProjects />
      </section>

      <section>
        <h2>Ecosystem Projects</h2>
        <p className="mb-6">
          Discover the diverse landscape of Filecoin projects
        </p>

        <EcosystemClient projects={ecosystemProjects} />
      </section>

      <section>
        <a href={FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm}>
          <h2>Become Part of the Expanding Ecosystem</h2>
          <p>
            If you&apos;re building on Filecoin and don&apos;t see your project
            or want to edit your listing, share your details.
          </p>
          <span>Submit or Update Your Project</span>
        </a>

        <Link href={PATHS.EVENTS.path}>
          <h2>Join Us IRL</h2>
          <p>
            Engage in inspiring conversation, participate in hands-on workshops,
            and learn from industry leaders at our events.
          </p>
        </Link>

        <a href={FILECOIN_FOUNDATION_URLS.newsletter}>
          <h2>Dive Deeper</h2>
          <p>
            Subscribe to our newsletter for big ideas and news about the
            Filecoin ecosystem and the decentralized web.
          </p>
        </a>
      </section>

      <section>
        <header>
          <h2>Case Studies</h2>
          <p>
            Learn about leading projects using Filecoin solutions to preserve
            humanity&apos;s most important information.
          </p>
        </header>

        <FeaturedCaseStudies />
      </section>
    </>
  )
}
