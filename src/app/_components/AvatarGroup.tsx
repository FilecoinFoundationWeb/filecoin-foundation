import { type DigestArticleData } from '@/types/digestTypes'

import { formatAuthors } from '@/utils/formatAuthors'

import { Avatar } from '@/components/Avatar'

export function AvatarGroup({
  authors,
}: {
  authors: DigestArticleData['authors']
}) {
  return (
    <div className="flex items-center gap-2">
      <Avatar authors={authors} />
      <span className="text-sm">{formatAuthors(authors)}</span>
    </div>
  )
}
