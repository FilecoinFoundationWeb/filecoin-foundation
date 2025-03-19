import type { AuthorExtended } from '@filecoin-foundation/utils/types/authorTypes'

type AuthorBioProps = {
  author: AuthorExtended
}

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">
        {author.firstName} {author.lastName}
      </p>
      <p className="prose">{author.bio}</p>
    </div>
  )
}
