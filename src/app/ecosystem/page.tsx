import Image from 'next/image'

import { CTASection } from '@/components/CTASection'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/ecosystem.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { featuredPartners } from './data/featuredPartners'
import { EcosystemClient } from './EcosystemClient'

const { featured_post: featuredProjectSlug, header, seo } = attributes

export const metadata = createMetadata(seo, PATHS.ECOSYSTEM.path)

const ecosystemProjects = getEcosystemProjectsData()

const featuredProject = ecosystemProjects.find(
  (project) => project.slug === featuredProjectSlug,
)

const ecosystemPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.ECOSYSTEM.path,
})

export default function Ecosystem() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={ecosystemPageBaseData} />
      <PageHeader
        title={header.title}
        description={header.description}
        {...(featuredProject
          ? {
              image: {
                ...featuredProject?.image,
                imageStyle: 'object-contain',
              },
            }
          : {})}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />

      <section>
        <Heading tag="h2" variant="xl">
          Featured Partners
        </Heading>
        <ul className="flex list-none items-center gap-8">
          {featuredPartners.map(({ name, logo, url }) => (
            <li key={name} className="relative mb-0 ml-0 inline-flex size-24">
              <Image
                fill
                priority
                src={logo}
                alt={`${name} Logo`}
                className="object-contain"
              />
              <a
                href={url}
                className="absolute inset-0"
                title={`Visit ${name}`}
              >
                <span className="sr-only">Visit {name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <Heading tag="h2" variant="xl">
          Ecosystem Projects
        </Heading>
        <p className="mb-6">
          Discover the diverse landscape of Filecoin projects
        </p>

        <EcosystemClient projects={ecosystemProjects} />
      </section>

      <CTASection
        title="Become Part of the Expanding Ecosystem"
        description="If you’re building on Filecoin and don’t see your project or want to edit your listing, share your details."
        cta={{
          href: FILECOIN_FOUNDATION_URLS.ecosystem.submitOrUpdateProjectForm,
          text: 'Submit or Update Your Project',
        }}
      />
    </PageLayout>
  )
}
