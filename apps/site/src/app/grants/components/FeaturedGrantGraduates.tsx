import { BookOpen } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

import { Card } from '@/components/Card'
import { CardGrid } from '@/components/CardGrid'

import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

type FeaturedGrantsGraduatesProps = {
  grantGraduates: Array<EcosystemProject>
}

export function FeaturedGrantGraduates({
  grantGraduates,
}: FeaturedGrantsGraduatesProps) {
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
          image={
            image && {
              src: image.src,
              alt: image.alt || '',
              objectFit: 'contain',
              padding: Boolean(image),
              sizes: buildImageSizeProp({
                startSize: '100vw',
                sm: '175px',
                md: '250px',
              }),
            }
          }
        />
      ))}
    </CardGrid>
  )
}
