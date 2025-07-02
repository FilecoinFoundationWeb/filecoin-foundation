import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'

import { BaseLink } from '@filecoin-foundation/ui/BaseLink'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { type CTAProps } from '@filecoin-foundation/utils/types/ctaType'

export type CardLinkProps = CTAProps & {
  baseDomain: string
}

export function CardLink(props: CardLinkProps) {
  const { href, ariaLabel, baseDomain } = props

  return (
    <BaseLink
      href={href}
      baseDomain={baseDomain}
      aria-label={ariaLabel}
      className="card-link focus:brand-outline absolute inset-0"
    >
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2">
        {renderCardLinkContent(props)}
      </span>
    </BaseLink>
  )
}

function renderCardLinkContent({
  href,
  icon,
  text,
  baseDomain,
}: CardLinkProps) {
  const isExternal = isExternalLink(href, baseDomain)
  const textElement = <span key="text">{text}</span>

  if (!icon) {
    return isExternal
      ? [textElement, <Icon key="arrow" component={ArrowUpRightIcon} />]
      : textElement
  }

  const { component, size, position = 'leading', weight } = icon
  const iconElement = (
    <Icon key="custom-icon" component={component} size={size} weight={weight} />
  )

  return position === 'leading'
    ? [iconElement, textElement]
    : [textElement, iconElement]
}
