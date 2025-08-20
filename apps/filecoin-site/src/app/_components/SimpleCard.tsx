import clsx from 'clsx'

import { Badge, type BadgeProps } from '@/components/Badge'
import { CTALink, type CTALinkProps } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

export type SimpleCardProps = {
  title: string
  description: string
  as: 'li' | 'div'
  badge?: BadgeProps['children']
  border?: keyof typeof borderStyles
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

const interactiveStyles = {
  direct:
    'focus-within:bg-[var(--color-card-background-hover)] hover:bg-[var(--color-card-background-hover)]',
  delagated:
    'group-focus-within:bg-[var(--color-card-background-hover)] group-hover:bg-[var(--color-card-background-hover)]',
}

const borderStyles = {
  none: 'border-none',
  all: 'border border-[var(--color-border-base)]',
  'only-top': 'border-t border-[var(--color-border-base)]',
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
        'group h-full w-full',
        cta && 'relative',
        borderStyles[border],
        border === 'all' && interactiveStyles.direct,
        border === 'none' && interactiveStyles.delagated,
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
          <span className="group-focus-within:text-[var(--color-card-heading-hover)] group-hover:text-[var(--color-card-heading-hover)]">
            <Heading tag="h3" variant="card-heading">
              {title}
            </Heading>
          </span>
          <p className="text-[var(--color-paragraph-text)]">{description}</p>
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
