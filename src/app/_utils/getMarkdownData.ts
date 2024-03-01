import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

interface MarkdownFileData {
  data: { [key: string]: any }
  slug: string
}

export const getMarkdownData = (directoryPath: string): MarkdownFileData[] => {
  const directory = path.join(process.cwd(), directoryPath)
  const filenames = fs.readdirSync(directory)

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const slug = filename.replace(/\.md$/, '')

    if (slug !== data.slug) {
      throw new Error(
        `Mismatch! File: ${filename} has slug: ${data.slug}, expected: ${slug}`
      )
    }

    return { data, slug }
  })
}

export const legacyGetMarkdownData = <T>(directoryPath: string): T[] => {
  const directory = path.join(process.cwd(), directoryPath)
  const filenames = fs.readdirSync(directory)

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const slug = filename.replace(/\.md$/, '')

    return { ...data, slug } as T
  })
}
