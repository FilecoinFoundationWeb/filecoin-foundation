import {
  CardImage,
  type CardImageProps,
} from '@filecoin-foundation/ui/Card/CardImage'
import { CardLink } from '@filecoin-foundation/ui/Card/CardLink'
import { DescriptionText } from '@filecoin-foundation/ui/DescriptionText'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { type ExtendedCTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { Heading } from '@/components/Heading'
import { TagGroup } from '@/components/TagGroup/TagGroup'

import { type BlogPost } from '../schemas/BlogPostFrontmatterSchema'

export type BlogCardProps = {
  title: BlogPost['title']
  tags?: BlogPost['categories']
  description?: BlogPost['excerpt']
  cta?: ExtendedCTAProps
  image?: CardImageProps
  author?: BlogPost['author']
  date?: BlogPost['date']
}

export function BlogCard({
  title,
  tags,
  date,
  description,
  cta,
  image,
  author,
}: BlogCardProps) {
  return (
    <article
      aria-label={title}
      title={title}
      data-with-link={Boolean(cta)}
      className="relative h-full"
    >
      {image && <CardImage image={image} />}

      <div className="flex flex-col gap-4 py-4">
        {tags && <TagGroup tags={tags} />}
        <Heading tag="h3" variant="xl-medium" className="leading-tight">
          {title}
        </Heading>

        {description && <DescriptionText>{description}</DescriptionText>}

        {(author || date) && (
          <div className="flex items-center gap-2 font-mono text-sm text-zinc-600">
            {author && <span>{author}</span>}
            {author && date && <span className="text-zinc-400">|</span>}
            {date && <span>{formatDate(date, 'MMM d, yyyy')}</span>}
          </div>
        )}

        {cta && <CardLink {...cta} />}
      </div>
    </article>
  )
}
