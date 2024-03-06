import { Badge } from '@/components/Badge'
import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { legacyGetMarkdownData } from '@/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

const ecosystemProjects: EcosystemProjectData[] = legacyGetMarkdownData(
  PATHS.ECOSYSTEM.entriesContentPath as string
)

const featuredEcosystemProjects = ecosystemProjects.filter(
  (project) => project.featured
)

export function FeaturedEcosystemProjects() {
  if (featuredEcosystemProjects.length === 0) {
    return <p>No featured projects available.</p>
  }

  return (
    <ul className="gap-8 sm:gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none">
      {featuredEcosystemProjects.map(({ slug, title, description }) => (
        <li key={slug} className="ml-0">
          <Badge featured />
          <Heading tag="h3" variant="lg">
            {title}
          </Heading>
          <p>{description}</p>
          <TextLink href={`${PATHS.ECOSYSTEM.path}/${slug}`}>See More</TextLink>
        </li>
      ))}
    </ul>
  )
}
