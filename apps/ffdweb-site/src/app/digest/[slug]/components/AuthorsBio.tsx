import { formatAuthors } from '@filecoin-foundation/utils/formatAuthors'
import type { AuthorExtended } from '@filecoin-foundation/utils/types/authorTypes'

type AuthorBioProps = {
  authors: Array<AuthorExtended>
}

export function AuthorsBio({ authors }: AuthorBioProps) {
  return (
    <div className="flex flex-col gap-2 sm:w-2/3">
      <h2 className="text-base font-bold">{formatAuthors({ authors })}</h2>
      <p className="prose">{authors.map((author) => author.bio).join(' ')}</p>
    </div>
  )
}
