import { monthlyUpdateCollection } from '@/qino/collections/monthlyUpdates'

import { assertEntryExists } from '@/utils/assertEntryExists'
import { camelcaseEntry } from '@/utils/camelcaseEntry'

type MonthlyUpdateEntry = Awaited<
  ReturnType<typeof monthlyUpdateCollection.getEntry>
>

export async function getMonthlyUpdateData(slug: string) {
  await assertEntryExists(monthlyUpdateCollection, slug)
  const update = await monthlyUpdateCollection.getEntry(slug)
  return transformMonthlyUpdateData(update)
}

export async function getMonthlyUpdatesData() {
  const updates = await monthlyUpdateCollection.getEntries()
  return updates.map(transformMonthlyUpdateData)
}

function transformMonthlyUpdateData(entry: MonthlyUpdateEntry) {
  const update = camelcaseEntry(entry)

  return {
    ...update,
    seo: {
      ...update.seo,
      title: update.seo.title || update.title,
    },
  }
}
