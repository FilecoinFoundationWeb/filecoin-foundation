import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import type { BlogPost } from '../types/blogPostType'

type PostMetadataProps = {
  author?: BlogPost['author']
  date: BlogPost['date']
}

export function PostMetadata({ author, date }: PostMetadataProps) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm text-zinc-600">
      {author && <span>{author}</span>}
      {author && date && <span className="text-zinc-400">|</span>}
      <span>{formatDate(date, 'MMM d, yyyy')}</span>
    </div>
  )
}
