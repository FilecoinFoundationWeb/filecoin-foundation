import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

export const getMarkdownData = (directoryPath: string) => {
  const directory = path.join(process.cwd(), directoryPath)
  const filenames = fs.readdirSync(directory)

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const slug = filename.replace(/\.md$/, '')

    return { ...data, slug }
  })
}
