import { cva } from 'class-variance-authority'

import { getUIConfig } from '../config/ui-config'

import { BaseLink, type BaseLinkProps } from './BaseLink'
import { Icon, type IconProps } from './Icon'

const cardVariants = cva(
  'relative flex gap-5 rounded-2xl border border-(--color-border-base) p-6',
  {
    variants: {
      interactive: {
        true: 'has-[a:focus]:border-brand-600 has-[a]:hover:bg-zinc-50 has-[a:focus]:bg-zinc-50',
      },
    },
    defaultVariants: {
      interactive: false,
    },
  },
)

type InfoCardBaseProps = {
  label: string
  text: string
  icon?: IconProps['component']
}

type InfoCardWithoutLink = InfoCardBaseProps & {
  href?: undefined
  ariaLabel?: undefined
}

type InfoCardWithLink = InfoCardBaseProps & {
  href: BaseLinkProps['href']
  ariaLabel: string
}

export type InfoCardProps = InfoCardWithoutLink | InfoCardWithLink

export function InfoCard({
  label,
  text,
  icon,
  href,
  ariaLabel,
}: InfoCardProps) {
  const { baseDomain } = getUIConfig()
  const hasLink = href && baseDomain && ariaLabel

  return (
    <div className={cardVariants({ interactive: Boolean(hasLink) })}>
      {icon && (
        <span className="border-brand-500 text-brand-500 grid size-15 place-items-center rounded-full border">
          <Icon component={icon} size={30} />
        </span>
      )}

      <div className="flex flex-col gap-1.5">
        <span className="text-(--color-paragraph-text)">{label}</span>
        {hasLink ? (
          <BaseLink
            href={href}
            aria-label={ariaLabel}
            className="after:absolute after:inset-0 focus:outline-none"
          >
            <span className="text-brand-800 font-medium">{text}</span>
          </BaseLink>
        ) : (
          <span className="text-2xl font-bold text-(--color-text-base)">
            {text}
          </span>
        )}
      </div>
    </div>
  )
}
