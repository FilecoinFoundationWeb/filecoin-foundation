import { type AuthorWithCompany } from './types/avatarGroupType'

type FormatAuthorsProps = {
  authors: Array<AuthorWithCompany>
  showCompany?: boolean
}

export function formatAuthors({
  authors,
  showCompany = false,
}: FormatAuthorsProps) {
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

      const name = `${author.firstName.trim()} ${author.lastName.trim()}`
      return showCompany
        ? `${name} (${author.company.trim()})${separator}`
        : `${name}${separator}`
    })
    .join('')
    .trim()
}
