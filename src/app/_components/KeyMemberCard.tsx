import Image from 'next/image'

import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import type { StaticImageProps, ImageProps } from '@/types/imageType'

import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'

type KeyMemberCardProps = {
  name: string
  title: string
  company?: string
  linkedin: string
  image: StaticImageProps['data'] | ImageProps['src']
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

        <p className="mt-1 text-brand-300">
          {title}
          {company && `, ${company}`}
        </p>

        <Card.Link
          href={linkedin}
          icon={LinkedinLogo}
          text="LinkedIn"
          ariaLabel={`Visit ${name}'s LinkedIn profile.`}
          left="left-36"
        />
      </div>
    </li>
  )
}

function KeyMemberImage({
  image,
  name,
}: Pick<KeyMemberCardProps, 'image' | 'name'>) {
  const isStaticImage = typeof image === 'object'

  const commonProps = {
    alt: `Photo of ${name}`,
    quality: 100,
    sizes: '150px',
    className: 'rounded object-cover',
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, 'aspect-[3/4] w-32 shrink-0')}
        src={image}
        alt={commonProps.alt}
      />
    )
  }

  return (
    <div className="relative aspect-[3/4] w-32 shrink-0">
      <Image
        fill
        {...commonProps}
        className={commonProps.className}
        src={image}
        alt={commonProps.alt}
      />
    </div>
  )
}
