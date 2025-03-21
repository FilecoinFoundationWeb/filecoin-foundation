import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { Card } from '@/components/Card'

import type { EcosystemProject } from '@/ecosystem-explorer/types/ecosystemProjectType'

type FeaturedEcosystemProjectsProps = {
  ecosystemProjects: Array<EcosystemProject>
}

export function FeaturedEcosystemProjects({
  ecosystemProjects,
}: FeaturedEcosystemProjectsProps) {
  return (
    <CardGrid as="section" cols="smTwoLgThree">
      {ecosystemProjects.map(({ slug, title, description, image }) => (
        <Card
          key={slug}
          as="article"
          title={title}
          description={{ text: description, isClamped: true }}
          borderColor="lighter"
          cta={{
            href: `${PATHS.ECOSYSTEM_EXPLORER.path}/${slug}`,
            text: 'Learn More',
            icon: {
              component: MagnifyingGlass,
            },
          }}
          image={{
            ...(image || graphicsData.imageFallback.data),
            alt: '',
            objectFit: 'contain',
            padding: Boolean(image),
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
