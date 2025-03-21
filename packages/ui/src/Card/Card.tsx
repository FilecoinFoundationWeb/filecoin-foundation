import Image from 'next/image'

import {
  AvatarGroup,
  type AvatarGroupProps,
} from '@filecoin-foundation/ui/Avatar/AvatarGroup'
import { BaseLink } from '@filecoin-foundation/ui/BaseLink'
import { Icon } from '@filecoin-foundation/ui/Icon'
import {
  type TagGroupProps,
  TagGroup,
} from '@filecoin-foundation/ui/TagComponents'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { type CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Meta, type MetaDataType } from '../Meta'

import { type CardDescriptionProps, CardDescription } from './CardDescription'
import { type CardTitleProps, CardTitle } from './CardTitle'
import { type CardImageProps, CardImage } from './CardImage'

export type ExtendedCTAProps = CTAProps & {
  baseDomain: string
}

export type CardProps = {
  as: 'li' | 'article' | 'div'
  title: CardTitleProps['children']
  tags?: TagGroupProps['tags']
  metaData?: MetaDataType
  description?: CardDescriptionProps
  cta?: ExtendedCTAProps
  image?: CardImageProps
  borderColor?: keyof typeof borderStyles
  avatars?: AvatarGroupProps['authors']
}

const borderStyles = {
  lighter: 'card-border--lighter',
  light: 'card-border--light',
  base: 'card-border--base',
  dark: 'card-border--dark',
}

export function Card({
  as: Tag,
  title,
  tags,
  metaData,
  description,
  cta,
  image,
  borderColor = 'base',
  avatars,
}: CardProps) {
  return (
    <Tag
      aria-label={title}
      title={title}
      className={clsx(
        'card relative h-full border backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      {image && <CardImage image={image} />}

      <div className="flex flex-col gap-4 p-4">
        {tags && <TagGroup tags={tags} />}
        {metaData && <Meta metaData={metaData} />}
        <CardTitle>{title}</CardTitle>

        <div className={clsx(cta && 'mb-10')}>
          {description && <CardDescription {...description} />}

          {avatars && (
            <div className="mt-6">
              <AvatarGroup authors={avatars} />
            </div>
          )}

          {cta && <Card.Link {...cta} />}
        </div>
      </div>
    </Tag>
  )
}

Card.Link = function Link(props: NonNullable<CardProps['cta']>) {
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
}: NonNullable<CardProps['cta']>) {
  const isExternal = isExternalLink(href, baseDomain)
  const textElement = <span key="text">{text}</span>

  if (!icon) {
    return isExternal
      ? [textElement, <Icon key="arrow" component={ArrowUpRight} />]
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
