import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import theme from 'tailwindcss/defaultTheme'

import { type Author, Avatar } from '@/components/Avatar'
import { CustomLink } from '@/components/CustomLink'
import { DynamicImage, type DynamicImageProps } from '@/components/DynamicImage'
import { Heading } from '@/components/Heading'
import { Icon } from '@/components/Icon'
import { Meta, type MetaDataType } from '@/components/Meta'
import { StaticImage, type StaticImageProps } from '@/components/StaticImage'
import { type TagGroupProps, TagGroup } from '@/components/TagGroup'

import { type CTAProps } from '@/types/sharedProps/ctaType'

import { isExternalLink } from '@/utils/linkUtils'

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
  avatar?: Array<Author>
}

type SpacingValue = keyof typeof theme.spacing
type BreakpointValue = keyof typeof theme.screens

type LeftProperty = `left-${SpacingValue}`
type ResponsiveLeftProperty = `${BreakpointValue}:${LeftProperty}`

type LinkProps = {
  left?: LeftProperty | [LeftProperty, ResponsiveLeftProperty]
} & CTAProps

function renderTextIcon({
  href,
  text,
  icon: IconComponent,
}: Pick<CTAProps, 'href' | 'text' | 'icon'>) {
  const isExternal = isExternalLink(href)
  const textElement = <span>{text}</span>

  if (IconComponent) {
    return [<Icon key="custom" component={IconComponent} />, textElement]
  }

  if (isExternal) {
    return [textElement, <Icon key="arrow" component={ArrowUpRight} />]
  }

  return textElement
}

function Link({ href, ariaLabel, icon, text, left = 'left-4' }: LinkProps) {
  const textIcon = renderTextIcon({ href, text, icon })

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

function CardAvatar({ authors }: { authors: Array<Author> }) {
  return (
    <div className="my-6">
      <Avatar authors={authors} />
    </div>
  )
}

const imageContainerBaseStyle = 'relative aspect-video'
const imageBaseStyle = 'rounded-lg px-1 pt-1'
const imagePaddingStyle = 'px-6 pt-4'

function CardImage({ image }: Pick<CardProps, 'image'>) {
  if (!image) return null

  const isDynamicImage = 'src' in image
  const isStaticImage = 'data' in image

  if (!isDynamicImage && !isStaticImage) return null

  const { padding, ...rest } = image

  const renderImage = (ImageComponent: React.ElementType) => (
    <div className={imageContainerBaseStyle}>
      <ImageComponent
        {...rest}
        fill
        className={clsx(imageBaseStyle, padding && imagePaddingStyle)}
      />
    </div>
  )

  return isDynamicImage ? renderImage(DynamicImage) : renderImage(StaticImage)
}

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
      <CardImage image={image} />

      <div className="flex flex-col gap-3 p-4">
        {tagLabel && <TagGroup label={tagLabel} />}

        {metaData && metaData.length > 0 && <Meta metaData={metaData} />}

        {title && typeof title === 'string' ? (
          <Heading isClamped tag="h3" variant="lg">
            {title}
          </Heading>
        ) : (
          title
        )}

        <div className={clsx(cta && 'mb-10')}>
          {description && (
            <p className={clsx(textIsClamped && 'line-clamp-3 text-ellipsis')}>
              {description}
            </p>
          )}

          {avatar && <Card.Avatar authors={avatar} />}

          {cta && <Link {...cta} />}
        </div>
      </div>
    </Tag>
  )
}

Card.Link = Link
Card.Avatar = CardAvatar
