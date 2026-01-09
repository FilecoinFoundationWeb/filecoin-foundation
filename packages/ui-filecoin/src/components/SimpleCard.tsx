import { cva } from 'class-variance-authority'

import { Badge, type BadgeProps } from './Badge'
import { CTALink, type CTALinkProps } from './CTALink'
import { Heading, type HeadingProps } from './Heading'

type borderVariants = 'all' | 'only-top'

export type SimpleCardProps = {
  title: string
  headingTag: HeadingProps['tag']
  description: string
  as: 'li' | 'div'
  badge?: {
    variant: BadgeProps['variant']
    text: BadgeProps['children']
  }
  border?: borderVariants
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

export type CardContentProps = Pick<
  SimpleCardProps,
  'title' | 'description' | 'border' | 'headingTag'
>

const cardOuter = cva(
  'group h-full w-full overflow-hidden border-(--color-border-base) bg-(--color-card-background)',
  {
    variants: {
      border: {
        all: 'rounded-2xl border',
        'only-top': 'border-t',
      },
      hasCta: {
        true: 'focus-within:brand-outline focus-within:bg-(--color-card-background-hover) hover:bg-(--color-card-background-hover) relative',
        false: null,
      },
    },
    defaultVariants: {
      border: 'all',
      hasCta: false,
    },
  },
)

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

const ctaLink = cva('', {
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
  headingTag,
  description,
  cta,
  badge,
  border = 'all',
}: SimpleCardProps) {
  return (
    <Tag
      className={cardOuter({
        border,
        hasCta: Boolean(cta),
      })}
    >
      <div className={cardInner({ border })}>
        {badge && (
          <div className="flex">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}

        <CardContent
          title={title}
          description={description}
          border={border}
          headingTag={headingTag}
        />

        {cta && (
          <CTALink inset href={cta.href} textClassName={ctaLink({ border })}>
            {cta.text}
          </CTALink>
        )}
      </div>
    </Tag>
  )
}

export function CardContent({
  title,
  description,
  border,
  headingTag,
}: CardContentProps) {
  return (
    <div className={cardContent({ border })}>
      <span className="group-focus-within:text-(--color-card-heading-hover) group-hover:text-(--color-card-heading-hover)">
        <Heading tag={headingTag} variant="card-heading">
          {title}
        </Heading>
      </span>
      <p className="text-(--color-paragraph-text)">{description}</p>
    </div>
  )
}
