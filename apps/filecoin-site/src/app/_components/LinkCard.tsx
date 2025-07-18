import clsx from 'clsx'

import { BaseLink } from '@filecoin-foundation/ui/BaseLink'
import type { IconProps } from '@filecoin-foundation/ui/Icon'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Heading } from './Heading'
import { IconBadge } from './IconBadge'
import type { SectionProps } from './Section'

type LinkCardProps = {
  as: 'li' | 'article' | 'div'
  backgroundVariant: SectionProps['backgroundVariant']
  title: string
  description?: string
  href: string
  icon: IconProps['component']
}

export type LinkCardData = Pick<
  LinkCardProps,
  'title' | 'description' | 'href' | 'icon'
>

export function LinkCard({
  as: Tag,
  backgroundVariant,
  title,
  description,
  href,
  icon,
}: LinkCardProps) {
  const styles = getVariantClasses(backgroundVariant === 'dark')

  return (
    <Tag
      className={clsx(
        'relative flex flex-row border-t',
        description && 'items-start gap-6 pt-8',
        !description && 'items-center gap-5 pt-6',
        styles.border,
      )}
    >
      <IconBadge className="flex-shrink-0" icon={icon} size="sm" />

      {description && (
        <div className="space-y-5">
          <Heading tag="h3" variant="xl-medium" className={styles.heading}>
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
