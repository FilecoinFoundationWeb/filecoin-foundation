import { Avatar, type AvatarProps } from './Avatar'

type AuthorWithCompany = AvatarProps & {
  company: string
}

export type AvatarGroupProps = {
  authors: Array<AuthorWithCompany>
}

export function AvatarGroup({ authors }: AvatarGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex shrink-0 -space-x-1">
        {authors.map(({ firstName, lastName, image }) => (
          <Avatar
            key={`${firstName}-${lastName}`}
            firstName={firstName}
            lastName={lastName}
            image={image}
          />
        ))}
      </div>
      <span className="avatar-full-name text-sm">{formatAuthors(authors)}</span>
    </div>
  )
}

function formatAuthors(authors: Array<AuthorWithCompany>) {
  return authors
    .map((author, index) => {
      const isLastAuthor = index === authors.length - 1
      const isSecondToLastAuthor = index === authors.length - 2

      let separator = ''
      if (isSecondToLastAuthor && authors.length > 1) {
        separator = ' & '
      } else if (!isLastAuthor) {
        separator = ', '
      }

      return `${author.firstName.trim()} ${author.lastName.trim()} (${author.company.trim()})${separator}`
    })
    .join('')
    .trim()
}
