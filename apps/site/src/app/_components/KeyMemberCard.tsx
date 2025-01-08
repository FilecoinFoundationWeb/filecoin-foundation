import Image from 'next/image'

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import type { StaticImageProps, ImageProps } from '@/types/imageType'

import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'

type KeyMemberCardProps = {
  image: StaticImageProps['data'] | ImageProps['src'],
  linkedin: string,
  name: string,
  title: string,
  company?: string
}

export function KeyMemberCard({
  name,
  title,
  company,
  linkedin,
  image,
}: KeyMemberCardProps) {
  return (
    <li className="relative flex rounded-lg border border-brand-500 p-1">
      <KeyMemberImage image={image} name={name} />

      <div className="m-3 grow">
        <Heading tag="h3" variant="lg">
          {name}
        </Heading>

        <p className="mb-10 mt-1 text-brand-300">
          {title}
          {company && `, ${company}`}
        </p>

        <a
          aria-label={`Visit ${name}'s LinkedIn profile.`}
          href={linkedin}
          rel="noopener noreferrer"
          className="absolute inset-0 rounded-lg focus:brand-outline"
        >
          <span className="absolute bottom-4 left-36 inline-flex items-center gap-2 text-brand-300">
            <Icon component={LinkedinLogo} />
            LinkedIn
          </span>
        </a>
      </div>
    </li>
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
    className: 'rounded object-cover',
  }

  const containerClass = 'aspect-[3/4] w-32 shrink-0'
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
