import { CardImage } from '@filecoin-foundation/ui/Card/CardImage'
import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import { Heading } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'

type BaseCardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  description: string
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

export function Card({ as: Tag, title, description, icon, image }: CardProps) {
  return (
    <Tag className="flex flex-col gap-6">
      {icon && <IconBadge component={icon} size="md" />}
      {image && <CardImage image={image} />}

      <div className="space-y-2">
        <Heading tag="h3" variant="card-heading">
          {title}
        </Heading>

        <p className="text-xl/7 text-[var(--color-paragraph-text)]">
          {description}
        </p>
      </div>
    </Tag>
  )
}
