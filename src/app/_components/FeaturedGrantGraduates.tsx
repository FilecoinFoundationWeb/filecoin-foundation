import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { graphicsData } from '@/data/graphicsData'

import { PATHS } from '@/constants/paths'

type FeaturedGrantsGraduatesProps = {
  grantGraduates: EcosystemProjectData[]
}

export function FeaturedGrantsGraduates({
  grantGraduates,
}: FeaturedGrantsGraduatesProps) {
  if (grantGraduates.length === 0) {
    return <p>No featured grants graduates available.</p>
  }

  return (
    <CardGrid cols="smTwo">
      {grantGraduates.map(({ title, description, slug, image }) => (
        <Card
          key={slug}
          title={title}
          description={description}
          textIsClamped={true}
          cta={{
            href: `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
            text: 'Read More',
            icon: BookOpen,
          }}
          image={{
            ...image,
            fallback: graphicsData.imageFallback,
            objectFit: 'contain',
            padding: true,
            sizes: buildImageSizeProp({
              startSize: '100vw',
              sm: '175px',
              md: '250px',
            }),
          }}
        />
      ))}
    </CardGrid>
  )
}
