import clsx from 'clsx'

import type { IconProps } from '@filecoin-foundation/ui/Icon'

import { Heading } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'
import type { SectionProps } from './Section'

type IconPosition = 'top' | 'side'

type CardProps = {
  as: 'li' | 'article' | 'div'
  backgroundVariant: SectionProps['backgroundVariant']
  title: string
  description: string
  icon?: {
    component: IconProps['component']
    size?: IconBadgeProps['size']
    position: IconPosition
  }
}

export function Card({
  as: Tag,
  backgroundVariant,
  title,
  description,
  icon,
}: CardProps) {
  return (
    <Tag className="flex flex-col gap-6">
      {icon && (
        <IconBadge
          className="flex-shrink-0"
          icon={icon.component}
          size={icon?.size || 'md'}
        />
      )}

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
