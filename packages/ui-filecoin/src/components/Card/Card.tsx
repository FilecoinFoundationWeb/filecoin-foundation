import type { ReactNode } from 'react'

import { clsx } from 'clsx'

import type { StaticImageProps } from '../../types/imageType'
import { Heading } from '../Heading'
import { IconBadge, type IconBadgeProps } from '../IconBadge'

import { CardImage } from './CardImage'

type BaseCardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  description: ReactNode
  isCentered?: boolean
}

type CardWithIcon = BaseCardProps & {
  icon: IconBadgeProps['component']
  image?: never
}

type CardWithImage = BaseCardProps & {
  image: StaticImageProps
  icon?: never
}

type CardWithText = BaseCardProps & {
  icon?: never
  image?: never
}

type CardProps = CardWithIcon | CardWithImage | CardWithText

export type CardData = Pick<
  CardProps,
  'title' | 'description' | 'icon' | 'image'
>

export function Card({
  as: Tag,
  title,
  description,
  icon,
  image,
  isCentered = false,
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'flex flex-col gap-6',
        isCentered && 'items-center text-center',
      )}
    >
      {icon && <IconBadge component={icon} size="md" />}
      {image && <CardImage image={image} />}

      <div className="space-y-2">
        <Heading tag="h3" variant="card-heading">
          {title}
        </Heading>

        <p className="text-xl/7 text-(--color-paragraph-text)">{description}</p>
      </div>
    </Tag>
  )
}
