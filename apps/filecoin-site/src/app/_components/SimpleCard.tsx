import clsx from 'clsx'

import { Badge, type BadgeProps } from '@/components/Badge'
import { CTALink, type CTALinkProps } from '@/components/CTALink'
import { Heading } from '@/components/Heading'

export type SimpleCardProps = {
  title: string
  description: string
  as: 'li' | 'div'
  badge?: BadgeProps['children']
  border?: BorderKey
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

type BorderKey = keyof typeof borderStyles

const borderStyles = {
  all: 'simple-card-border-all border border-[var(--color-border-base)] rounded-2xl',
  'only-top':
    'simple-card-border-only-top border-t border-[var(--color-border-base)]',
} as const

const interactiveStyles: Partial<Record<BorderKey, string>> = {
  all: 'focus-within:bg-[var(--color-card-background-hover)] hover:bg-[var(--color-card-background-hover)]',
}

const cardLayoutStyles: Record<
  BorderKey,
  { inner: string; content: string; cta: string }
> = {
  all: {
    inner: 'p-8',
    content: 'mb-12',
    cta: 'bottom-8 left-8',
  },
  'only-top': {
    inner: 'pt-8 pb-6',
    content: 'mb-6',
    cta: 'bottom-0',
  },
}

export function SimpleCard({
  as: Tag,
  title,
  description,
  cta,
  badge,
  border = 'all',
}: SimpleCardProps) {
  const layout = cardLayoutStyles[border]

  return (
    <Tag
      className={clsx(
        'group h-full w-full',
        cta && 'relative',
        borderStyles[border],
        interactiveStyles[border],
      )}
    >
      <div className={clsx('flex flex-col gap-6', layout.inner)}>
        {badge && (
          <div className="flex">
            <Badge>{badge}</Badge>
          </div>
        )}
        <CardContent title={title} description={description} layout={layout} />
        {cta && (
          <CTALink
            inset
            href={cta.href}
            textClassName={clsx('absolute', layout.cta)}
          >
            {cta.text}
          </CTALink>
        )}
      </div>
    </Tag>
  )
}

function CardContent({
  title,
  description,
  layout,
}: Pick<SimpleCardProps, 'title' | 'description'> & {
  layout: (typeof cardLayoutStyles)[BorderKey]
}) {
  return (
    <div className={clsx('flex flex-col gap-3', layout.content)}>
      <span className="group-focus-within:text-[var(--color-card-heading-hover)] group-hover:text-[var(--color-card-heading-hover)]">
        <Heading tag="h3" variant="card-heading">
          {title}
        </Heading>
      </span>
      <p className="text-[var(--color-text-paragraph)]">{description}</p>
    </div>
  )
}
