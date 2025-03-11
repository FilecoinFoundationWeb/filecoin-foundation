import Image, { type ImageProps } from 'next/image'

import {
  AvatarGroup,
  type AvatarGroupProps,
} from '@filecoin-foundation/ui/AvatarGroup'
import { BaseLink } from '@filecoin-foundation/ui/BaseLink'
import { Heading } from '@filecoin-foundation/ui/Heading'
import { Icon } from '@filecoin-foundation/ui/Icon'
import {
  type TagGroupProps,
  TagGroup,
} from '@filecoin-foundation/ui/TagComponents'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { isExternalLink } from '@filecoin-foundation/utils/linkUtils'
import { type CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import type {
  ImageObjectFit,
  StaticImageProps,
} from '@filecoin-foundation/utils/types/imageType'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Meta, type MetaDataType } from './Meta'

type CardDescriptionProps = {
  text: string
  isClamped?: boolean
}

type CardImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
  padding?: boolean
  priority?: boolean
  sizes?: string
}

export type ExtendedCTAProps = CTAProps & {
  baseDomain: string
}

export type CardProps = {
  title: string | React.ReactNode
  tags?: TagGroupProps['tags']
  metaData?: MetaDataType
  description?: string | CardDescriptionProps
  cta?: ExtendedCTAProps
  image?: CardImageProps
  borderColor?: keyof typeof borderStyles
  as?: React.ElementType
  avatars?: AvatarGroupProps['authors']
}

const borderStyles = {
  lighter: 'card-border--lighter',
  light: 'card-border--light',
  base: 'card-border--base',
  dark: 'card-border--dark',
}

export function Card({
  title,
  tags,
  metaData,
  description,
  cta,
  image,
  borderColor = 'base',
  as: Tag = 'li',
  avatars,
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'card relative h-full border backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      {image && <Card.Image image={image} />}
      <div className="flex flex-col gap-3 p-4">
        {tags && <TagGroup tags={tags} />}
        {metaData && <Meta metaData={metaData} />}
        <Card.Title title={title} />
        <div className={clsx(cta && 'mb-10')}>
          {description && typeof description === 'string' && (
            <Card.Description text={description} />
          )}
          {description && typeof description === 'object' && (
            <Card.Description {...description} />
          )}
          {avatars && <Card.Avatars avatars={avatars} />}
          {cta && <Card.Link {...cta} />}
        </div>
      </div>
    </Tag>
  )
}

Card.Image = function ImageComponent({
  image,
}: Required<Pick<CardProps, 'image'>>) {
  const isStaticImage = 'data' in image

  const commonProps = {
    alt: image.alt,
    priority: image.priority,
    quality: 100,
    sizes:
      image.sizes || buildImageSizeProp({ startSize: '100vw', lg: '490px' }),
    className: clsx(
      'card-image',
      image.objectFit === 'cover' && 'object-cover',
      image.objectFit === 'contain' && 'object-contain',
      image.padding && 'px-6 pt-4',
    ),
  }

  if (isStaticImage) {
    return (
      <Image
        {...commonProps}
        className={clsx(commonProps.className, 'aspect-video')}
        src={image.data}
        alt={commonProps.alt}
      />
    )
  }

  return (
    <div className="relative aspect-video">
      <Image
        fill
        {...commonProps}
        className={clsx(commonProps.className, 'h-full w-full')}
        src={image.src}
        alt={commonProps.alt}
      />
    </div>
  )
}

Card.Title = function Title({ title }: Pick<CardProps, 'title'>) {
  return typeof title === 'string' ? (
    <Heading isClamped tag="h3" variant="lg">
      {title}
    </Heading>
  ) : (
    title
  )
}

Card.Description = function Description({
  text,
  isClamped,
}: CardDescriptionProps) {
  return (
    <p className={clsx(isClamped && 'line-clamp-3 text-ellipsis')}>{text}</p>
  )
}

Card.Avatars = function Avatars({
  avatars,
}: Required<Pick<CardProps, 'avatars'>>) {
  return (
    <div className="mt-6">
      <AvatarGroup authors={avatars} />
    </div>
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
