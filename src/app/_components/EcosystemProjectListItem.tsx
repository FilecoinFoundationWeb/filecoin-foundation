import Image from 'next/image'

import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

import { PATHS } from '@/constants/paths'

export function EcosystemProjectListItem({
  project,
}: {
  project: EcosystemProjectData
}) {
  const { slug, image, category, title, description } = project

  return (
    <li key={slug} className="ml-0 flex flex-col justify-between">
      <div>
        <div className="relative mb-4 size-56 border">
          {image.url && (
            <Image
              fill
              priority
              src={image.url}
              alt={image.alt}
              className="object-contain p-2"
            />
          )}
        </div>

        <span className="mb-3 inline-block">{category}</span>

        <Heading tag="h3" variant="lg">
          {title}
        </Heading>

        <p>{description}</p>
      </div>

      <TextLink href={`${PATHS.ECOSYSTEM.path}/${slug}`}>More</TextLink>
    </li>
  )
}
