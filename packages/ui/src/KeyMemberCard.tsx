import Image from 'next/image'

import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon } from '@filecoin-foundation/ui/Icon'
import type {
  StaticImageProps,
  ImageProps,
} from '@filecoin-foundation/utils/types/imageType'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

type KeyMemberCardProps = {
  name: string
  title: string
  company?: string
  linkedin: string
  image: StaticImageProps['data'] | ImageProps['src']
  as?: React.ElementType
}

export function KeyMemberCard({
  name,
  title,
  company,
  linkedin,
  image,
  as: Tag = 'li',
}: KeyMemberCardProps) {
  const fullTitle = [title, company].filter(Boolean).join(', ')

  return (
    <Tag className="key-member-card relative flex">
      <KeyMemberImage image={image} name={name} />

      <div className="m-3 grow">
        <Heading tag="h3" variant="lg" className="key-member-card-name">
          {name}
        </Heading>

        <p className="key-member-card-title mb-10 mt-1">{fullTitle}</p>

        <a
          aria-label={`Visit ${name}'s LinkedIn profile.`}
          href={linkedin}
          rel="noopener noreferrer"
          className="key-member-card-link focus:brand-outline absolute inset-0"
        >
          <span className="absolute bottom-4 left-36 inline-flex items-center gap-2">
            <Icon component={LinkedinLogo} />
            LinkedIn
          </span>
        </a>
      </div>
    </Tag>
  )
}

function KeyMemberImage({
  image,
  name,
}: Pick<KeyMemberCardProps, 'image' | 'name'>) {
  const commonProps = {
    src: image,
    alt: `Photo of ${name}`,
    quality: 100,
    sizes: '150px',
    className: 'key-member-card-image object-cover',
  }

  const containerClass = 'aspect-3/4 w-32 shrink-0'
  const isStaticImage = typeof image === 'object'

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, containerClass)}
        alt={commonProps.alt}
      />
    )
  }

  return (
    <div className={clsx('relative', containerClass)}>
      <Image fill {...commonProps} alt={commonProps.alt} />
    </div>
  )
}
