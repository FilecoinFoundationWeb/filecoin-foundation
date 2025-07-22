import clsx from 'clsx'

import { Badge, type BadgeProps } from '@/components/Badge'
import { CTALink, type CTALinkProps } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

export type SimpleCardProps = {
  title: string
  description: string
  as?: 'li' | 'div'
  badge?: BadgeProps['children']
  border?: keyof typeof borderClasses
  cta?: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
}

export type SimpleCardData = Pick<
  SimpleCardProps,
  'title' | 'description' | 'cta'
>

const borderClasses = {
  none: 'border-none',
  all: 'border card-border-color',
  'only-top': 'border-t card-border-color',
  'only-left': 'border-l card-border-color',
}

export function SimpleCard({
  as: Component = 'li',
  title,
  description,
  cta,
  badge,
  border = 'all',
}: SimpleCardProps) {
  return (
    <Component
      className={clsx(
        'h-full w-full',
        cta && 'relative',
        borderClasses[border],
      )}
    >
      <div className={clsx('flex flex-col gap-6 p-6')}>
        {badge && (
          <div className="flex">
            <Badge>{badge}</Badge>
          </div>
        )}
        <div className="mb-12 flex flex-col gap-3">
          <Heading tag="h3" variant="xl-medium">
            {title}
          </Heading>
          <p className="text-zinc-600">{description}</p>
        </div>
        {cta && (
          <CTALink
            inset
            href={cta.href}
            aria-label={cta.text}
            textClassName="absolute bottom-6 left-6"
          >
            {cta.text}
          </CTALink>
        )}
      </div>
    </Component>
  )
}
