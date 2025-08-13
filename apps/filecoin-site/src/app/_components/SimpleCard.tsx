import clsx from 'clsx'

import { Badge, type BadgeProps } from '@/components/Badge'
import { CTALink, type CTALinkProps } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

export type SimpleCardProps = {
  title: string
  description: string
  as: 'li' | 'div'
  badge?: BadgeProps['children']
  border?: keyof typeof borderClasses
  cta?: {
    href: CTALinkProps['href']
    text: CTALinkProps['children']
  }
}

export type SimpleCardData = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  cta: NonNullable<SimpleCardProps['cta']>
}

const borderClasses = {
  none: 'border-none',
  all: 'border card-border-color',
  'only-top': 'border-t card-border-color',
}

export function SimpleCard({
  as: Tag,
  title,
  description,
  cta,
  badge,
  border = 'all',
}: SimpleCardProps) {
  const hasOnlyTopBorder = border === 'only-top'

  return (
    <Tag
      className={clsx(
        'simple-card h-full w-full',
        cta && 'relative',
        borderClasses[border],
      )}
    >
      <div
        className={clsx(
          'flex flex-col gap-6',
          hasOnlyTopBorder ? 'pt-8 pb-6' : 'p-6',
        )}
      >
        {badge && (
          <div className="flex">
            <Badge>{badge}</Badge>
          </div>
        )}
        <div
          className={clsx(
            'flex flex-col gap-3',
            hasOnlyTopBorder ? 'mb-6' : 'mb-12',
          )}
        >
          <Heading tag="h3" variant="card-heading">
            {title}
          </Heading>
          <p className="tracking-tight text-[var(--text-color-paragraph-muted)]">
            {description}
          </p>
        </div>
        {cta && (
          <CTALink
            inset
            href={cta.href}
            textClassName={clsx(
              'absolute',
              hasOnlyTopBorder ? 'bottom-0' : 'bottom-6 left-6',
            )}
          >
            {cta.text}
          </CTALink>
        )}
      </div>
    </Tag>
  )
}
