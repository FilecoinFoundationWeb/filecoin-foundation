import type { ComponentType } from 'react'

import { clsx } from 'clsx'

import { Heading, type HeadingProps } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'

type LinkComponentProps = {
  href: string
  className: string
  'aria-label': string
}

export type LinkCardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  headingTag: HeadingProps['tag']
  description?: string
  href: string
  icon: {
    component: IconBadgeProps['component']
    variant?: IconBadgeProps['variant']
  }
  BaseLinkComponent: ComponentType<LinkComponentProps>
}

export type LinkCardData = Pick<
  LinkCardProps,
  'title' | 'description' | 'href'
> & {
  icon: IconBadgeProps['component']
}

export function LinkCard({
  as: Tag,
  title,
  headingTag,
  description,
  href,
  icon,
  BaseLinkComponent,
}: LinkCardProps) {
  return (
    <Tag
      className={clsx(
        'group relative flex flex-row border-t border-[var(--color-border-muted)] pt-8',
        description ? 'items-start gap-6' : 'items-center gap-5',
      )}
    >
      <IconBadge component={icon.component} size="sm" variant={icon.variant} />

      <div className={clsx(description && 'space-y-5')}>
        <span className="block group-focus-within:text-[var(--color-card-heading-hover)] group-hover:text-[var(--color-card-heading-hover)]">
          <Heading tag={headingTag} variant="card-heading">
            {title}
          </Heading>
        </span>

        {description && (
          <p className="text-[var(--color-paragraph-text)]">{description}</p>
        )}
      </div>

      <BaseLinkComponent
        href={href}
        className="focus:brand-outline absolute inset-0"
        aria-label={`Read more about ${title}`}
      />
    </Tag>
  )
}
