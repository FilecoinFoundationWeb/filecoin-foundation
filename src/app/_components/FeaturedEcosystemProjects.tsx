import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardLayout } from '@/components/CardLayout'

import { getEcosystemProjectsData } from '@/utils/getEcosystemProjectData'
import { shuffleArray } from '@/utils/shuffleArray'

import { PATHS } from '@/constants/paths'

const ecosystemProjects = getEcosystemProjectsData()
const FEATURED_PROJETS_LIMIT = 6

export function FeaturedEcosystemProjects() {
  const featuredEcosystemProjects = shuffleArray(ecosystemProjects).slice(
    0,
    FEATURED_PROJETS_LIMIT,
  )

  if (featuredEcosystemProjects.length < FEATURED_PROJETS_LIMIT) {
    return <p>No featured projects available.</p>
  }

  return (
    <CardLayout>
      {featuredEcosystemProjects.map(({ slug, title, description, image }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          entryType="featuredEcosystemProject"
          image={image}
          borderColor="brand-300"
          textIsClamped={true}
          cta={{
            href: `${PATHS.ECOSYSTEM.path}/${slug}`,
            text: 'Learn More',
            icon: <MagnifyingGlass size={24} aria-hidden={true} />,
          }}
        />
      ))}
    </CardLayout>
  )
}
