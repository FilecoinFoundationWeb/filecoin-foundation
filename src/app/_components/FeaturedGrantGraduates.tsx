import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import type { EcosystemProject } from '@/types/ecosystemProjectType'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

type FeaturedGrantsGraduatesProps = {
  grantGraduates: Array<EcosystemProject>
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
            alt: '',
            src: image?.src || '',
            padding: true,
            objectFit: 'contain',
            ...image,
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
