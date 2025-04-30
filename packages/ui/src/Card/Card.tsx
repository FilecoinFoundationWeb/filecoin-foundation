import { clsx } from 'clsx'

import {
  AvatarGroup,
  type AvatarGroupProps,
} from '@filecoin-foundation/ui/Avatar/AvatarGroup'
import {
  type TagGroupProps,
  TagGroup,
} from '@filecoin-foundation/ui/TagComponents'
import { type ExtendedCTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { Meta, type MetaDataType } from '../Meta'

import { type CardDescriptionProps, CardDescription } from './CardDescription'
import { type CardImageProps, CardImage } from './CardImage'
import { CardLink } from './CardLink'
import { type CardTitleProps, CardTitle } from './CardTitle'

export type CardProps = {
  as: 'li' | 'article' | 'div'
  title: {
    text: CardTitleProps['children']
    tag?: CardTitleProps['tag']
  }
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
      aria-label={title.text}
      title={title.text}
      className={clsx(
        'card relative h-full border backdrop-blur-xl',
        borderStyles[borderColor],
      )}
    >
      {image && <CardImage image={image} />}

      <div className="flex flex-col gap-4 p-4">
        {tags && <TagGroup tags={tags} />}
        {metaData && <Meta metaData={metaData} />}
        <CardTitle tag={title.tag}>{title.text}</CardTitle>

        <div className={clsx(cta && 'mb-10')}>
          {description && <CardDescription {...description} />}

          {avatars && (
            <div className="mt-6">
              <AvatarGroup authors={avatars} />
            </div>
          )}

          {cta && <CardLink {...cta} />}
        </div>
      </div>
    </Tag>
  )
}
