import Image, { type ImageProps } from 'next/image'

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import theme from 'tailwindcss/defaultTheme'

import { type CTAProps } from '@/types/ctaType'
import type { ImageObjectFit, StaticImageProps } from '@/types/imageType'

import { buildImageSizeProp } from '@/utils/buildImageSizeProp'
import { isExternalLink } from '@/utils/linkUtils'

import { AvatarGroup, type AvatarGroupProps } from '@/components/AvatarGroup'
import { BaseLink } from '@/components/BaseLink'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { Meta, type MetaDataType } from '@/components/Meta'
import {
  type TagGroupProps,
  TagGroup,
} from '@/components/TagComponents/TagGroup'

type CardImageProps = (StaticImageProps | ImageProps) & {
  objectFit?: ImageObjectFit
  padding?: boolean
  priority?: boolean
  sizes?: string
}

type CardProps = {
  title: string | React.ReactNode
  tags?: TagGroupProps['tags']
  metaData?: MetaDataType
  description?: string
  cta?: CTAPropsWithSpacing
  image?: CardImageProps
  borderColor?: 'brand-300' | 'brand-400' | 'brand-500' | 'brand-600'
  textIsClamped?: boolean
  as?: React.ElementType
  avatars?: AvatarGroupProps['authors']
}

type SpacingValue = keyof typeof theme.spacing
type BreakpointValue = keyof typeof theme.screens

type LeftProperty = `left-${SpacingValue}`
type ResponsiveLeftProperty = `${BreakpointValue}:${LeftProperty}`

type CTAPropsWithSpacing = {
  left?: LeftProperty | [LeftProperty, ResponsiveLeftProperty]
} & CTAProps

const borderStyles = {
  'brand-300': 'border-brand-300',
  'brand-400': 'border-brand-400',
  'brand-500': 'border-brand-500',
  'brand-600': 'border-brand-600',
}

export function Card({
  title,
  tags,
  metaData,
  description,
  cta,
  image,
  borderColor = 'brand-500',
  textIsClamped = false,
  as: Tag = 'li',
  avatars,
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'relative h-full rounded-lg border bg-brand-700 bg-opacity-30 backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      {image && <Card.Image image={image} />}
      <div className="flex flex-col gap-3 p-4">
        {tags && <TagGroup tags={tags} />}
        {metaData && <Meta metaData={metaData} />}
        <Card.Title title={title} />
        <div className={clsx(cta && 'mb-10')}>
          {description && (
            <Card.Description
              description={description}
              textIsClamped={textIsClamped}
            />
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
      'rounded-lg px-1 pt-1',
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
  description,
  textIsClamped,
}: Required<Pick<CardProps, 'description' | 'textIsClamped'>>) {
  return (
    <p className={clsx(textIsClamped && 'line-clamp-3 text-ellipsis')}>
      {description}
    </p>
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

Card.Link = function Link({
  href,
  ariaLabel,
  icon,
  text,
  left = 'left-4',
}: NonNullable<CardProps['cta']>) {
  const isExternal = isExternalLink(href)
  const textElement = <span key="text">{text}</span>

  const textIcon = icon
    ? [<Icon key="custom" component={icon} />, textElement]
    : isExternal
      ? [textElement, <Icon key="arrow" component={ArrowUpRight} />]
      : textElement

  return (
    <BaseLink
      href={href}
      aria-label={ariaLabel}
      className="absolute inset-0 rounded-lg focus:brand-outline"
    >
      <span
        className={clsx(
          'absolute bottom-4 inline-flex items-center gap-2 text-brand-300',
          left,
        )}
      >
        {textIcon}
      </span>
    </BaseLink>
  )
}
