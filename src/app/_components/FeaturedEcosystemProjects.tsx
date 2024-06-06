import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { PATHS } from '@/constants/paths'
import { graphicsData } from '@/data/graphicsData'

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
          borderColor="brand-300"
          textIsClamped={true}
          cta={{
            href: `${PATHS.ECOSYSTEM.path}/${slug}`,
            text: 'Learn More',
            icon: MagnifyingGlass,
          }}
          image={{
            src: image.url,
            alt: image.alt,
            fallback: graphicsData.imageFallback,
            padding: true,
            objectFit: 'contain',
            sizes: buildImageSizeProp({
              startSize: '100vw',
              sm: '320px',
              md: '440px',
              lg: '280px',
            }),
          }}
        />
      ))}
    </CardGrid>
  )
}
