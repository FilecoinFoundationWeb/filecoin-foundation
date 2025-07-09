import { clsx } from 'clsx'

import { type CardDescriptionProps } from '@filecoin-foundation/ui/Card/CardDescription'
import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'
import { CardLink } from '@filecoin-foundation/ui/Card/CardLink'
import { type CardTitleProps } from '@filecoin-foundation/ui/Card/CardTitle'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { type MetaDataType } from '@filecoin-foundation/ui/Meta'
import {
  type TagGroupProps,
  TagGroup,
} from '@filecoin-foundation/ui/TagComponents'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { type ExtendedCTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { Heading } from '@/components/Heading'

export type CardProps = {
  title: {
    text: CardTitleProps['children']
    tag?: CardTitleProps['tag']
  }
  tags?: TagGroupProps['tags']
  metaData?: MetaDataType
  description?: CardDescriptionProps
  cta?: ExtendedCTAProps
  image?: CardImageProps
  author?: string
  date?: string
}

export function BlogCard({
  title,
  tags,
  date,
  description,
  cta,
  image,
  author,
}: CardProps) {
  return (
    <article
      aria-label={title.text}
      title={title.text}
      data-with-link={Boolean(cta)}
      className="card relative h-full border backdrop-blur-xl"
    >
      {image && <CardImage image={image} />}

      <div className="card-content flex flex-col gap-4 py-4">
        {tags && <TagGroup tags={tags} />}
        <Heading tag="h3" variant="xl-medium">
          {title.text}
        </Heading>

        <div className={clsx(cta && 'mb-10')}>
          {description && <DescriptionText>{description.text}</DescriptionText>}

          {(author || date) && (
            <div className="mt-6 flex items-center gap-2 font-mono text-sm text-zinc-600">
              {author && <span>{author}</span>}
              {author && date && <span className="text-zinc-400">|</span>}
              {date && <span>{formatDate(date, 'MMM d, yyyy')}</span>}
            </div>
          )}

          {cta && <CardLink {...cta} />}
        </div>
      </div>
    </article>
  )
}
