import fs from 'fs'
import path from 'path'

import type { EventData } from '@/models/eventDataModel'

import { convertMarkdownToEventData } from '@/utils/convertMarkdownToEventData'
import {
  extractSlugFromFilename,
  getFilenamesFromDirectory,
  getFilePath,
  handleFileNotFound,
  parseMarkdown,
  readFileContents,
} from '@/utils/fileUtils'

import { PATHS } from '@/constants/paths'

const EVENTS_DIRECTORY_PATH = PATHS.EVENTS.entriesContentPath as string

export function getEventData(slug: string): EventData {
  try {
    const filePath = getFilePath(EVENTS_DIRECTORY_PATH, slug)

    if (!fs.existsSync(filePath)) {
      handleFileNotFound(filePath)
    }

    const fileContents = readFileContents(filePath)
    const { data, content } = parseMarkdown(fileContents)

    return convertMarkdownToEventData({ ...data, slug, content })
  } catch (error) {
    console.error('Error retrieving event data:', error)
    throw error
  }
}

export function getEventsData(): EventData[] {
  try {
    const directory = path.join(process.cwd(), EVENTS_DIRECTORY_PATH)
    const filenames = getFilenamesFromDirectory(directory)

    return filenames.map((filename) => {
      const slug = extractSlugFromFilename(filename)
      return getEventData(slug)
    })
  } catch (error) {
    console.error('Error retrieving events data:', error)
    throw error
  }
}
