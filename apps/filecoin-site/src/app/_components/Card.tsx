import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import { BaseLink } from '@filecoin-foundation/ui/BaseLink'
import type { IconProps } from '@filecoin-foundation/ui/Icon'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Heading } from './Heading'
import { IconBadge } from './IconBadge'

type IconPosition = 'top' | 'side'

type CardProps = {
  as: 'li' | 'article' | 'div'
  title: string
  description: string
  backgroundVariant: 'dark' | 'light'
  cta?: CTAProps
  icon?: {
    component: IconProps['component']
    position: IconPosition
  }
}

export function Card({
  as: Tag,
  title,
  description,
  backgroundVariant,
  cta,
  icon,
}: CardProps) {
  const styles = getVariantClasses(backgroundVariant === 'dark')

  return (
    <Tag className={getLayoutClasses(icon)}>
      {icon && <IconBadge className="flex-shrink-0" icon={icon.component} />}

      <div className="space-y-10">
        <div className="space-y-3">
          <Heading
            tag="h3"
            variant="xl-medium"
            backgroundVariant={backgroundVariant}
          >
            {title}
          </Heading>
          <p className={clsx('text-xl', styles.description)}>{description}</p>
        </div>

        {cta && (
          <BaseLink
            href={cta.href}
            baseDomain={BASE_DOMAIN}
            className="flex max-w-max items-center gap-6"
          >
            <IconBadge
              size="sm"
              className="flex-shrink-0"
              icon={cta.icon?.component || ArrowRightIcon}
            />
            <span className={clsx('font-semibold', styles.ctaText)}>
              {cta.text}
            </span>
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

function getLayoutClasses(icon?: CardProps['icon']) {
  if (!icon) return ''

  return icon.position === 'top'
    ? 'flex flex-col gap-6'
    : 'flex flex-row items-center gap-6'
}
