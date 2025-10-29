import type { ComponentType } from 'react'

import clsx from 'clsx'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

import { Badge, type BadgeProps } from './Badge'
import { type CTALinkProps } from './CTALink'

type CTALinkComponentProps = {
  href: CTALinkProps['href']
  inset: CTALinkProps['inset']
  textClassName: CTALinkProps['textClassName']
  children: CTALinkProps['children']
}

export type SimpleCardProps = {
  title: string
  description: string
  as: 'li' | 'div'
  badge?: {
    variant: BadgeProps['variant']
    text: BadgeProps['children']
  }
  border?: BorderKey
  cta?: {
    href: CTALinkComponentProps['href']
    text: CTALinkComponentProps['children']
  }
  CTALinkComponent: ComponentType<CTALinkComponentProps>
}

export type SimpleCardData = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  cta: NonNullable<SimpleCardProps['cta']>
}

type CardLayoutStyles = Record<
  BorderKey,
  { inner: string; content: string; cta: string }
>

type CardContentProps = Pick<SimpleCardProps, 'title' | 'description'> & {
  layout: CardLayoutStyles[BorderKey]
}

type BorderKey = keyof typeof borderStyles

const borderStyles = {
  all: 'rounded-2xl border border-[var(--color-border-base)]',
  'only-top': 'border-t border-[var(--color-border-base)]',
} as const

const interactiveStyles: Partial<Record<BorderKey, string>> = {
  all: 'focus-within:brand-outline focus-within:bg-[var(--color-card-background-hover)] hover:bg-[var(--color-card-background-hover)]',
}

const cardLayoutStyles: CardLayoutStyles = {
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
  CTALinkComponent,
}: SimpleCardProps) {
  const layout = cardLayoutStyles[border]

  return (
    <Tag
      className={clsx(
        'group h-full w-full overflow-hidden',
        cta && 'relative',
        borderStyles[border],
        interactiveStyles[border],
      )}
    >
      <div className={clsx('flex flex-col gap-6', layout.inner)}>
        {badge && (
          <div className="flex">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}
        <CardContent title={title} description={description} layout={layout} />
        {cta && (
          <CTALinkComponent inset href={cta.href} textClassName={layout.cta}>
            {cta.text}
          </CTALinkComponent>
        )}
      </div>
    </Tag>
  )
}

function CardContent({ title, description, layout }: CardContentProps) {
  return (
    <div className={clsx('flex flex-col gap-3', layout.content)}>
      <span className="group-focus-within:text-[var(--color-card-heading-hover)] group-hover:text-[var(--color-card-heading-hover)]">
        <Heading tag="h3" variant="card-heading">
          {title}
        </Heading>
      </span>
      <p className="text-[var(--color-paragraph-text)]">{description}</p>
    </div>
  )
}
