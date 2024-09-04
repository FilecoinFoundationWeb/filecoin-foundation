import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import theme from 'tailwindcss/defaultTheme'

import { type CTAProps } from '@/types/sharedProps/ctaType'

import { isExternalLink } from '@/utils/linkUtils'

import { AvatarGroup, type AvatarGroupProps } from '@/components/AvatarGroup'
import { CustomLink } from '@/components/CustomLink'
import { DynamicImage, type DynamicImageProps } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { Meta, type MetaDataType } from '@/components/Meta'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'
import { type TagGroupProps, TagGroup } from '@/components/TagGroup'

type CardProps = {
  title: string | React.ReactNode
  tagLabel?: TagGroupProps['label']
  metaData?: MetaDataType
  description?: string
  cta?: CTAProps
  image?: (DynamicImageProps | StaticImageProps) & { padding?: boolean }
  borderColor?: 'brand-300' | 'brand-400' | 'brand-500' | 'brand-600'
  textIsClamped?: boolean
  as?: React.ElementType
  avatar?: AvatarGroupProps['authors']
}

type SpacingValue = keyof typeof theme.spacing
type BreakpointValue = keyof typeof theme.screens

type LeftProperty = `left-${SpacingValue}`
type ResponsiveLeftProperty = `${BreakpointValue}:${LeftProperty}`

type LinkProps = {
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
  tagLabel,
  metaData,
  description,
  cta,
  image,
  borderColor = 'brand-500',
  textIsClamped = false,
  as: Tag = 'li',
  avatar,
}: CardProps) {
  return (
    <Tag
      className={clsx(
        'relative h-full rounded-lg border bg-brand-700 bg-opacity-30 backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      <Card.Image image={image} />
      <div className="flex flex-col gap-3 p-4">
        <Card.MetaAndTags tagLabel={tagLabel} metaData={metaData} />
        <Card.Title title={title} />
        <div className={clsx(cta && 'mb-10')}>
          <Card.Description
            description={description}
            textIsClamped={textIsClamped}
          />
          <Card.Avatar avatar={avatar} />
          {cta && <Card.Link {...cta} />}
        </div>
      </div>
    </Tag>
  )
}

Card.Image = function Image({ image }: Pick<CardProps, 'image'>) {
  if (!image) return null

  const { padding, ...rest } = image
  const isDynamicImage = 'src' in image
  const isStaticImage = 'data' in image

  if (!isDynamicImage && !isStaticImage) return null

  const renderImage = (ImageComponent: React.ElementType) => (
    <div className="relative aspect-video">
      <ImageComponent
        {...rest}
        fill
        className={clsx('rounded-lg px-1 pt-1', padding && 'px-6 pt-4')}
      />
    </div>
  )

  return isDynamicImage ? renderImage(DynamicImage) : renderImage(StaticImage)
}

Card.MetaAndTags = function MetaAndTags({
  tagLabel,
  metaData,
}: Pick<CardProps, 'tagLabel' | 'metaData'>) {
  return (
    <>
      {tagLabel && <TagGroup label={tagLabel} />}
      {metaData && metaData.length > 0 && <Meta metaData={metaData} />}
    </>
  )
}

Card.Title = function Title({ title }: Pick<CardProps, 'title'>) {
  if (!title) return null

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
}: Pick<CardProps, 'description' | 'textIsClamped'>) {
  if (!description) return null

  return (
    <p className={clsx(textIsClamped && 'line-clamp-3 text-ellipsis')}>
      {description}
    </p>
  )
}

Card.Avatar = function Avatar({
  avatar,
}: {
  avatar?: AvatarGroupProps['authors']
}) {
  if (!avatar) return null

  return (
    <div className="mt-6">
      <AvatarGroup authors={avatar} />
    </div>
  )
}

Card.Link = function Link({
  href,
  ariaLabel,
  icon,
  text,
  left = 'left-4',
}: LinkProps) {
  const isExternal = isExternalLink(href)
  const textElement = <span>{text}</span>

  const textIcon = icon
    ? [<Icon key="custom" component={icon} />, textElement]
    : isExternal
      ? [textElement, <Icon key="arrow" component={ArrowUpRight} />]
      : textElement

  return (
    <CustomLink
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
    </CustomLink>
  )
}
