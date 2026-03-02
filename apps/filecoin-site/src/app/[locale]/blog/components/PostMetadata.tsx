import clsx from 'clsx'
import { useFormatter } from 'next-intl'

import type { BlogPost } from '../types/blogPostType'

type PostMetadataProps = {
  author?: BlogPost['author']
  date: BlogPost['publishedOn']
}

export function PostMetadata({ author, date }: PostMetadataProps) {
  const format = useFormatter()
  const formattedDate = format.dateTime(date, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const baseStyles = 'text-sm text-(--color-paragraph-text)'

  if (author) {
    return (
      <div className={clsx('flex items-center gap-2', baseStyles)}>
        <span>{formattedDate}</span>
        <span>|</span>
        <span>{author}</span>
      </div>
    )
  }

  return <span className={baseStyles}>{formattedDate}</span>
}
