import Image, { type ImageProps } from 'next/image'

import { type BadgeProps, Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import {
  CTALink,
  type CTALinkProps,
} from '@filecoin-foundation/ui-filecoin/CTALink'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

export type SimpleCardWithImageProps = {
  title: string
  description: string
  badge: {
    variant: BadgeProps['variant']
    text: BadgeProps['children']
  }
  image: ImageProps
  cta: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
}

export function SimpleCardWithImage({
  title,
  description,
  badge,
  image,
  cta,
}: SimpleCardWithImageProps) {
  return (
    <li className="group focus-within:brand-outline relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border-base)]">
      <Image src={image.src} alt={image.alt} />

      <div className="relative flex h-full w-full flex-col gap-6 p-8 group-focus-within:bg-(--color-card-background-hover) group-hover:bg-(--color-card-background-hover)">
        <div className="flex">
          <Badge variant={badge.variant}>{badge.text}</Badge>
        </div>

        <div className="mb-12 flex flex-col gap-3">
          <span className="group-focus-within:text-(--color-card-heading-hover) group-hover:text-(--color-card-heading-hover)">
            <Heading tag="h3" variant="card-heading">
              {title}
            </Heading>
          </span>
          <p className="text-(--color-paragraph-text)">{description}</p>
        </div>

        <CTALink inset href={cta.href} textClassName="bottom-8 left-8">
          {cta.text}
        </CTALink>
      </div>
    </li>
  )
}
