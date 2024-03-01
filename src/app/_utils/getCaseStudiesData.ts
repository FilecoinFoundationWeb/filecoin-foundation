import { CaseStudyData } from '@/types/caseStudyTypes'

import { getMarkdownData } from '@/utils/getMarkdownData'

interface MarkdownFrontMatter {
  title: string
  [key: string]: any
}

function isMarkdownFrontMatter(data: any): data is MarkdownFrontMatter {
  return typeof data.title === 'string'
}

export function getCaseStudiesData(directoryPath: string): CaseStudyData[] {
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
      slug,
    }
  })
}
