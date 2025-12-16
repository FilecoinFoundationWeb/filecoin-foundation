import type { ReactNode } from 'react'

import { clsx } from 'clsx'

import { CTALink, type CTALinkProps } from '../CTALink'
import { Heading } from '../Heading'
import { IconBadge, type IconBadgeProps } from '../IconBadge'

import { CardImage, type CardImageProps } from './CardImage'

type CardBaseProps = {
  as: 'li' | 'article' | 'div'
  title: string
  description: ReactNode
  isCentered?: boolean
  cta?: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
}

type IconVariant = {
  icon: IconBadgeProps['component']
  image?: never
}

type ImageVariant = {
  image: CardImageProps
  icon?: never
}

type TextVariant = {
  icon?: never
  image?: never
}

export type CardProps = CardBaseProps &
  (IconVariant | ImageVariant | TextVariant)

export type CardData = Pick<
  CardProps,
  'title' | 'description' | 'icon' | 'image' | 'cta'
>

export function Card({
  as: Tag,
  title,
  description,
  icon,
  image,
  isCentered = false,
  cta,
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'relative flex flex-col gap-6',
        isCentered && 'items-center text-center',
      )}
    >
      {icon && <IconBadge component={icon} size="md" />}
      {image && <CardImage {...image} />}

      <div className="space-y-12">
        <div className="space-y-2">
          <Heading tag="h3" variant="card-heading">
            {title}
          </Heading>

          <p className="text-xl/7 text-(--color-paragraph-text)">
            {description}
          </p>
        </div>

        {cta && (
          <CTALink
            inset
            href={cta.href}
            textClassName="absolute bottom-0 left-0"
          >
            {cta.text}
          </CTALink>
        )}
      </div>
    </Tag>
  )
}
