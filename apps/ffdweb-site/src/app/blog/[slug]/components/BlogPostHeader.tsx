import { ArticleHeader } from '@filecoin-foundation/ui/ArticleHeader'
import { TagLabel } from '@filecoin-foundation/ui/TagComponents'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import { graphicsData } from '@/data/graphicsData'

// import { getCategoryLabel } from '@/utils/categoryUtils'

// import type { BlogPost } from '../../types/blogPostType'

// type BlogPostHeaderProps = Pick<
//   BlogPost,
//   'title' | 'publishedOn' | 'image' | 'category'
// >

type BlogPostHeaderProps = {
  title: string
  publishedOn: Date
  image: { src: string; alt: string }
  category: string
}

export function BlogPostHeader({
  title,
  publishedOn,
  image,
  category,
}: BlogPostHeaderProps) {
  return (
    <ArticleHeader
      image={{
        src: image?.src || graphicsData.imageFallback.data.src,
        alt: '',
      }}
    >
      {/* <TagLabel>
        {getCategoryLabel({ collectionName: 'blog_posts', category })}
      </TagLabel> */}

      <TagLabel>{category}</TagLabel>

      <ArticleHeader.Title>{title}</ArticleHeader.Title>

      {/* <span className="inline-block">
        {formatDate(publishedOn)}
      </span> */}
      <span className="inline-block font-bold text-neutral-200">
        {formatDate(publishedOn)}
      </span>
    </ArticleHeader>
  )
}
