import fs from 'fs'
import path from 'path'

import { notFound } from 'next/navigation'

import matter from 'gray-matter'

export function getFilePath(directoryPath: string, slug: string): string {
  return path.join(directoryPath, `${slug}.md`)
}

export function handleFileNotFound(filePath: string): void {
  console.error(`File not found: ${filePath}`)
  notFound()
}

export function readFileContents(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8')
}

export function parseMarkdown(fileContents: string): {
  data: object
  content: string
} {
  return matter(fileContents)
}

export function getFilenamesFromDirectory(directory: string): Array<string> {
  return fs.readdirSync(directory)
}

export function extractSlugFromFilename(filename: string): string {
  return path.parse(filename).name
}
