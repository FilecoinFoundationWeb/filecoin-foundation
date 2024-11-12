import fs from 'fs'
import path from 'path'

import { notFound } from 'next/navigation'

import matter from 'gray-matter'

import { CONTENT_ROOT, MARKDOWN_EXTENSION } from '@/constants/paths'

export function extractSlugFromFilename(filename: string): string {
  return path.parse(filename).name
}

export function getFilePath(directoryPath: string, slug: string): string {
  return path.join(directoryPath, `${slug}.md`)
}

export function getFilenamesFromDirectory(directory: string): Array<string> {
  return fs.readdirSync(directory)
}

export function handleFileNotFound(filePath: string): void {
  console.error(`File not found: ${filePath}`)
  notFound()
}

export function isValidMarkdownPath(path: string) {
  return path.startsWith(CONTENT_ROOT) && path.endsWith(MARKDOWN_EXTENSION)
}

export function parseMarkdown(fileContents: string): {
  data: object
  content: string
} {
  return matter(fileContents)
}

export function readFileContents(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8')
}
