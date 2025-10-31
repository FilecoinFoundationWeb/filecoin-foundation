import type { ComponentType } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

import { Badge, type BadgeProps } from './Badge'
import { type CTALinkProps } from './CTALink'

type CTALinkComponentProps = {
  href: CTALinkProps['href']
  inset: CTALinkProps['inset']
  textClassName: CTALinkProps['textClassName']
  children: CTALinkProps['children']
}

export type CardOuterVariants = VariantProps<typeof cardOuter>

export type SimpleCardProps = {
  title: string
  description: string
  as: 'li' | 'div'
  badge?: {
    variant: BadgeProps['variant']
    text: BadgeProps['children']
  }
  border?: CardOuterVariants['border']
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

type CardContentProps = Pick<SimpleCardProps, 'title' | 'description'> & {
  border: CardOuterVariants['border']
}

const cardOuter = cva(['group h-full w-full overflow-hidden'], {
  variants: {
    border: {
      all: 'rounded-2xl border border-[var(--color-border-base)]',
      'only-top': 'border-t border-[var(--color-border-base)]',
    },
    interactive: {
      true: 'focus-within:brand-outline focus-within:bg-[var(--color-card-background-hover)] hover:bg-[var(--color-card-background-hover)] relative',
      false: null,
    },
  },
  defaultVariants: {
    border: 'all',
    interactive: false,
  },
})

const cardInner = cva('flex flex-col gap-6', {
  variants: {
    border: {
      all: 'p-8',
      'only-top': 'pt-8 pb-6',
    },
  },
  defaultVariants: {
    border: 'all',
  },
})

const cardContent = cva('flex flex-col gap-3', {
  variants: {
    border: {
      all: 'mb-12',
      'only-top': 'mb-6',
    },
  },
  defaultVariants: {
    border: 'all',
  },
})

const ctaPosition = cva('', {
  variants: {
    border: {
      all: 'bottom-8 left-8',
      'only-top': 'bottom-0',
      none: 'bottom-0',
    },
  },
  defaultVariants: {
    border: 'all',
  },
})

export function SimpleCard({
  as: Tag,
  title,
  description,
  cta,
  badge,
  border = 'all',
  CTALinkComponent,
}: SimpleCardProps) {
  return (
    <Tag
      className={cardOuter({
        border,
        interactive: Boolean(cta),
      })}
    >
      <div className={cardInner({ border })}>
        {badge && (
          <div className="flex">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}
        <CardContent title={title} description={description} border={border} />
        {cta && (
          <CTALinkComponent
            inset
            href={cta.href}
            textClassName={ctaPosition({ border })}
          >
            {cta.text}
          </CTALinkComponent>
        )}
      </div>
    </Tag>
  )
}

export function CardContent({ title, description, border }: CardContentProps) {
  return (
    <div className={cardContent({ border })}>
      <span className="group-focus-within:text-[var(--color-card-heading-hover)] group-hover:text-[var(--color-card-heading-hover)]">
        <Heading tag="h3" variant="card-heading">
          {title}
        </Heading>
      </span>
      <p className="text-[var(--color-paragraph-text)]">{description}</p>
    </div>
  )
}
