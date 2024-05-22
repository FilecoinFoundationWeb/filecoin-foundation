import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { PATHS } from '@/constants/paths'

type FeaturedEcosystemProjectsProps = {
  ecosystemProjects: EcosystemProjectData[]
}

export function FeaturedEcosystemProjects({
  ecosystemProjects,
}: FeaturedEcosystemProjectsProps) {
  if (ecosystemProjects.length === 0) {
    return <p>No featured ecosystem projects available.</p>
  }

  return (
    <CardGrid cols="smTwoLgThree">
      {ecosystemProjects.map(({ slug, title, description, image }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          entryType="ecosystemProject"
          image={image}
          borderColor="brand-300"
          textIsClamped={true}
          cta={{
            href: `${PATHS.ECOSYSTEM.path}/${slug}`,
            text: 'Learn More',
            icon: MagnifyingGlass,
          }}
        />
      ))}
    </CardGrid>
  )
}
