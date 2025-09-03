import { Heading } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'

type CardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  description: string
  icon?: IconBadgeProps['component']
}

export type CardData = Pick<CardProps, 'title' | 'description' | 'icon'>

export function Card({ as: Tag, title, description, icon }: CardProps) {
  return (
    <Tag className="flex flex-col gap-6">
      {icon && <IconBadge component={icon} size="md" />}

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
