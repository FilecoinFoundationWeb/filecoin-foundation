import { API_URLS } from '@/constants/apiUrls'

import { GetDatacapStatsResponseSchema } from '../schemas/DatacapSchema'

export async function getDatacapStats() {
  const response = await fetch(API_URLS.datacapStats, {
    next: { revalidate: 3600 },
  })

  const json = await response.json()
  return GetDatacapStatsResponseSchema.parse(json).data
}
