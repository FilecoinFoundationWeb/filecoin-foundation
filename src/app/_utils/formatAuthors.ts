import type { DigestArticleData } from '@/digest/types/digestTypes'

export function formatAuthors(authors: DigestArticleData['authors']) {
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

      return `${author.firstName} ${author.lastName}, ${author.company} ${separator}`
    })
    .join('')
}
