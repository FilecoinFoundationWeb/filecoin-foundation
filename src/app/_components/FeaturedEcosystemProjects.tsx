import { Badge } from '@/components/Badge'
import { TextLink } from '@/components/TextLink'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

const ecosystemProjects: EcosystemProjectData[] = getMarkdownData(
  PATHS.ECOSYSTEM.entriesContentPath as string
)

const featuredProjects = ecosystemProjects.filter(
  (project) => project.f_featured
)

export function FeaturedEcosystemProjects() {
  if (featuredProjects.length === 0) {
    return <p>No featured projects available.</p>
  }

  return (
    <ul className="gap-8 sm:gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 list-none">
      {featuredProjects.map((ecosystemProject) => (
        <li key={ecosystemProject.slug} className="ml-0">
          <Badge featured />
          <h3>{ecosystemProject.title}</h3>
          <p>{ecosystemProject['f_card-text-truncated']}</p>
          <TextLink href={`${PATHS.ECOSYSTEM.path}/${ecosystemProject.slug}`}>
            See More
          </TextLink>
        </li>
      ))}
    </ul>
  )
}
