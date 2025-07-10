import clsx from 'clsx'

import { BaseLink } from '@filecoin-foundation/ui/BaseLink'
import type { IconProps } from '@filecoin-foundation/ui/Icon'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Heading } from './Heading'
import { IconBadge, type IconBadgeProps } from './IconBadge'
import type { SectionProps } from './Section'

type IconPosition = 'top' | 'side'

type CardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  description: string
  backgroundVariant: SectionProps['backgroundVariant']
  cta?: CTAProps
  topBorder?: boolean
  icon?: {
    component: IconProps['component']
    size?: IconBadgeProps['size']
    position: IconPosition
  }
}

export function Card({
  as: Tag,
  title,
  description,
  backgroundVariant,
  cta,
  topBorder = false,
  icon,
}: CardProps) {
  const styles = getVariantClasses(backgroundVariant === 'dark')

  return (
    <Tag className={getLayoutClasses(icon, topBorder)}>
      {icon && (
        <IconBadge
          className="flex-shrink-0"
          icon={icon.component}
          size={icon?.size || 'md'}
        />
      )}

      <div className="space-y-10">
        <div className="space-y-3">
          <Heading tag="h3" variant="xl-medium">
            {title}
          </Heading>
          <p className={clsx('text-xl', styles.description)}>{description}</p>
        </div>

        {cta && (
          <BaseLink
            href={cta.href}
            baseDomain={BASE_DOMAIN}
            className={clsx('font-semibold', styles.ctaText)}
          >
            {cta.text}
          </BaseLink>
        )}
      </div>
    </Tag>
  )
}

function getVariantClasses(isDark: boolean) {
  return {
    description: isDark ? 'text-zinc-400' : 'text-zinc-600',
    ctaText: isDark ? 'text-white' : 'text-zinc-600',
  }
}

function getLayoutClasses(icon?: CardProps['icon'], topBorder?: boolean) {
  if (!icon) return ''

  return icon.position === 'top'
    ? 'flex flex-col gap-6'
    : clsx(
        'flex flex-row items-start gap-6',
        topBorder && 'border-t border-zinc-200 pt-8',
      )
}
