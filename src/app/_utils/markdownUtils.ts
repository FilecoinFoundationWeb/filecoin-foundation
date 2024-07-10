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
    console.error(`File not found: ${filePath}`)
    notFound()
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  if (!validateFrontMatter(data, fields)) {
    throw new Error(`Invalid front matter in file: ${filePath}`)
  }

  const slug = path.parse(filePath).name

  return { data: { ...data, slug }, content }
}

export function readAndValidateMarkdownFiles(
  directoryPath: string,
  fields: CMSFieldConfig[],
) {
  const directory = path.join(process.cwd(), directoryPath)
  const filenames = fs.readdirSync(directory)

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename)
    const { data, content } = readAndValidateMarkdownFile(filePath, fields)

    return { data, content }
  })
}
