import clsx from 'clsx'

import type { IconProps } from '@filecoin-foundation/ui/Icon'

import { Heading } from './Heading'
import { IconBadge } from './IconBadge'
import type { SectionProps } from './Section'

type CardProps = {
  as: 'li' | 'article' | 'div'
  backgroundVariant: SectionProps['backgroundVariant']
  title: string
  description: string
  icon?: IconProps['component']
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
      {icon && <IconBadge className="flex-shrink-0" icon={icon} size={'md'} />}

      <div className="space-y-3">
        <Heading tag="h3" variant="xl-medium">
          {title}
        </Heading>

        <p
          className={clsx(
            'text-xl',
            backgroundVariant === 'dark' ? 'text-zinc-400' : 'text-zinc-600',
          )}
        >
          {description}
        </p>
      </div>
    </Tag>
  )
}
