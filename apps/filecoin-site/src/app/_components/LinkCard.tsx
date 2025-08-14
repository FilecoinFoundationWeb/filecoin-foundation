import clsx from 'clsx'

import { BaseLink } from '@filecoin-foundation/ui/BaseLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Heading, type HeadingProps } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'

type LinkCardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  headingTag: HeadingProps['tag']
  description?: string
  href: string
  icon: {
    component: IconBadgeProps['component']
    variant?: IconBadgeProps['variant']
  }
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
}: LinkCardProps) {
  return (
    <Tag
      className={clsx(
        'relative flex flex-row border-t border-[var(--color-border-muted)] pt-8',
        description ? 'items-start gap-6' : 'items-center gap-5',
      )}
    >
      <IconBadge component={icon.component} size="sm" variant={icon.variant} />

      <div className={clsx(description && 'space-y-5')}>
        <Heading tag={headingTag} variant="card-heading">
          {title}
        </Heading>

        {description && (
          <p className="tracking-tight text-[var(--color-text-paragraph)]">
            {description}
          </p>
        )}
      </div>

      <BaseLink
        href={href}
        baseDomain={BASE_DOMAIN}
        className="focus:brand-outline absolute inset-0"
        aria-label={`Read more about ${title}`}
      />
    </Tag>
  )
}
