import type { BlogPost } from '@/types/blogPostType'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { formatDate } from '@/utils/dateUtils'

import { ArticleHeader } from '@/components/ArticleHeader'
import { TagLabel } from '@/components/TagLabel'

type BlogPostHeaderProps = Pick<
  BlogPost,
  'title' | 'publishedOn' | 'image' | 'category'
>

export function BlogPostHeader({
  title,
  publishedOn,
  image,
  category,
}: BlogPostHeaderProps) {
  return (
    <ArticleHeader image={image && { src: image.src, alt: image.alt || '' }}>
      <TagLabel>
        {getCategoryLabel({ collectionName: 'blog_posts', category })}
      </TagLabel>
      <ArticleHeader.Title>{title}</ArticleHeader.Title>
      {publishedOn && (
        <span className="inline-block text-blue-300">
          {formatDate(publishedOn)}
        </span>
      )}
    </ArticleHeader>
  )
}
