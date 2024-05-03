import fs from 'fs'
import path from 'path'

import { notFound } from 'next/navigation'

import matter from 'gray-matter'

import { CMSFieldConfig } from '@/types/cmsConfig'

import { validateFrontMatter } from '@/utils/validateFrontMatter'

export function readAndValidateMarkdownFile(
  filePath: string,
  fields: CMSFieldConfig[],
): { data: { [key: string]: any }; content: string } {
  if (!fs.existsSync(filePath)) {
    notFound()
    console.error(`File not found: ${filePath}`)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  if (!validateFrontMatter(data, fields)) {
    throw new Error(`Invalid front matter in file: ${filePath}`)
  }

  return { data, content }
}

export function readAndValidateMarkdownFiles(
  directoryPath: string,
  fields: CMSFieldConfig[],
) {
  const directory = path.join(process.cwd(), directoryPath)
  const filenames = fs.readdirSync(directory)

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const filePath = path.join(directory, filename)
    const { data, content } = readAndValidateMarkdownFile(filePath, fields)

    if (slug !== data.slug) {
      throw new Error(
        `Mismatch! File: ${filename} has slug: ${data.slug}, expected: ${slug}`,
      )
    }

    return { data, content }
  })
}
