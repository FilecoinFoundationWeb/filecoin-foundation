import clsx from 'clsx'

import { Heading } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'
import type { SectionProps } from './Section'

type CardProps = {
  as: 'li' | 'article' | 'div'
  backgroundVariant: SectionProps['backgroundVariant']
  title: string
  description: string
  icon?: IconBadgeProps['component']
}

export type CardData = Pick<CardProps, 'title' | 'description' | 'icon'>

export function Card({
  as: Tag,
  backgroundVariant,
  title,
  description,
  icon,
}: CardProps) {
  return (
    <Tag className="flex flex-col gap-6">
      {icon && <IconBadge component={icon} size="md" />}

      <div className="space-y-3">
        <Heading tag="h3" className="card-heading">
          {title}
        </Heading>

        <p
          className={clsx(
            'text-xl/6',
            backgroundVariant === 'dark' ? 'text-zinc-400' : 'text-zinc-600',
          )}
        >
          {description}
        </p>
      </div>
    </Tag>
  )
}
