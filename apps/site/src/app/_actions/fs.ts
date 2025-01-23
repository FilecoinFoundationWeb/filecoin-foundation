'use server'

import fs from 'fs/promises'

export async function getFilenamesFromDirectory(directory: string) {
  return fs.readdir(directory)
}

export async function readFileContents(filePath: string) {
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
