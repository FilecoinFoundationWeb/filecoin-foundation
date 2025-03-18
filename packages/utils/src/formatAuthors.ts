import { type AuthorExtended } from '@filecoin-foundation/utils/types/authorTypes'

type FormatAuthorsProps = {
  authors: Array<AuthorExtended>
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
