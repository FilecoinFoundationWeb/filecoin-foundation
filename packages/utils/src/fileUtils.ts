import fs from 'fs/promises'
import path from 'path'

import { notFound } from 'next/navigation'

export function extractSlugFromFilename(filename: string) {
  return path.parse(filename).name
}

export function getFilePath(directoryPath: string, slug: string) {
  return path.join(directoryPath, `${slug}.md`)
}

export function handleFileNotFound(filePath: string) {
  console.error(`File not found: ${filePath}`)
  notFound()
}

export function readFileContents(filePath: string) {
  return fs.readFile(filePath, 'utf8')
}

export async function checkPathExists(path: string) {
  try {
    await fs.access(path, fs.constants.F_OK)
    return true
  } catch {
    return false
  }
}
