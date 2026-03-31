import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { MonthlyUpdateFrontmatterSchema } from '../schemas/MonthlyUpdateFrontmatterSchema'

const MONTHLY_UPDATES_DIRECTORY_PATH = PATHS.FIL_PLUS_MONTHLY_UPDATES.entriesPath

export async function getMonthlyUpdateData(slug: string) {
  const data = await getMonthlyUpdateMarkdownData(slug)
  return transformMonthlyUpdateData(data)
}

export async function getMonthlyUpdatesData() {
  const allUpdates = await getAllMarkdownData({
    directoryPath: MONTHLY_UPDATES_DIRECTORY_PATH,
    zodSchema: MonthlyUpdateFrontmatterSchema,
  })

  return allUpdates.map(transformMonthlyUpdateData)
}

function getMonthlyUpdateMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: MONTHLY_UPDATES_DIRECTORY_PATH,
    zodSchema: MonthlyUpdateFrontmatterSchema,
  })
}

function transformMonthlyUpdateData(
  update: Awaited<ReturnType<typeof getMonthlyUpdateMarkdownData>>,
) {
  return {
    ...update,
    seo: {
      ...update.seo,
      title: update.seo.title || update.title,
    },
  }
}
