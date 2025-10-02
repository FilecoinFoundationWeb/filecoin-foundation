import type { AuthorExtended } from '@filecoin-foundation/utils/types/authorTypes'

type AuthorBioProps = {
  author: AuthorExtended
}

export function AuthorBio({ author }: AuthorBioProps) {
  const { firstName, lastName, bio } = author

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">
        {firstName} {lastName}
      </p>
      <p className="prose">{bio}</p>
    </div>
  )
}
