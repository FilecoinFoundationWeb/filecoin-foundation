import clsx from 'clsx'

import { BaseLink } from '@filecoin-foundation/ui/BaseLink'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Heading } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'
import type { SectionProps } from './Section'

type LinkCardProps = {
  as: 'li' | 'article' | 'div'
  backgroundVariant: SectionProps['backgroundVariant']
  title: string
  titleAs?: 'h2' | 'h3'
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
  backgroundVariant,
  title,
  titleAs = 'h3',
  description,
  href,
  icon,
}: LinkCardProps) {
  const styles = getVariantClasses(backgroundVariant === 'dark')

  return (
    <Tag
      className={clsx(
        'relative flex flex-row border-t pt-8',
        description && 'items-start gap-6',
        !description && 'items-center gap-5',
        styles.border,
      )}
    >
      <IconBadge component={icon.component} size="sm" variant={icon.variant} />

      {description && (
        <div className="space-y-5">
          <Heading tag={titleAs} variant="xl-medium" className={styles.heading}>
            {title}
          </Heading>
          <p className={styles.description}>{description}</p>
        </div>
      )}

      {!description && <p className={styles.heading}>{title}</p>}

      <BaseLink
        href={href}
        baseDomain={BASE_DOMAIN}
        className="focus:brand-outline absolute inset-0"
        aria-label={`Read more about ${title}`}
      />
    </Tag>
  )
}

function getVariantClasses(isDark: boolean) {
  return {
    border: isDark ? 'border-zinc-50/10' : 'border-zinc-950/10',
    description: isDark ? 'text-zinc-400' : 'text-zinc-600',
    heading: isDark ? 'text-zinc-50' : 'text-zinc-950',
  }
}
