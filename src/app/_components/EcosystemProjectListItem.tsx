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
  const {
    slug,
    title,
    f_brand: image,
    ['f_card-text-truncated']: description,
  } = project

  return (
    <li key={project.slug} className="flex flex-col justify-between ml-0">
      <div>
        <div className="relative size-56 border mb-4">
          {image.url && (
            <Image
              fill
              priority
              src={project.f_brand.url}
              alt={project.f_brand.alt}
              className="object-contain p-2"
            />
          )}
        </div>
        <span className="inline-block mb-3">{project.f_topic.label}</span>
        <Heading tag="h3" variant="lg">
          {title}
        </Heading>
        <p>{description}</p>
      </div>

      <TextLink href={`${PATHS.ECOSYSTEM.path}/${slug}`}>More</TextLink>
    </li>
  )
}
