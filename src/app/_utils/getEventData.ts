import { EventData } from '@/types/eventTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

interface MarkdownFrontMatter {
  title: string
  'start-date': string
  [key: string]: any
}

function isMarkdownFrontMatter(data: any): data is MarkdownFrontMatter {
  return (
    typeof data.title === 'string' && typeof data['start-date'] === 'string'
  )
}

export function getEventData(directoryPath: string): EventData[] {
  const markdownFiles = getMarkdownData(directoryPath)

  return markdownFiles.map(({ data, slug }) => {
    if (!isMarkdownFrontMatter(data)) {
      throw new Error(
        `The markdown file for slug '${slug}' does not have the correct front matter structure.`
      )
    }

    return {
      ...data,
      title: data.title,
      startDate: data['start-date'],
      slug,
    }
  })
}
