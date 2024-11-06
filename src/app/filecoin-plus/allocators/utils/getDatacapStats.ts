import { API_URLS } from '@/constants/apiUrls'

import {
  DatacapSchema,
  type BaseDatacap,
  type Datacap,
} from '../schemas/DatacapSchema'

export async function getDatacapStats(): Promise<Array<Datacap>> {
  try {
    const { data } = await fetchDatacapStats()
    return parseDatacapData(data)
  } catch (error) {
    console.error(error)
    return []
  }
}

async function fetchDatacapStats() {
  const response = await fetch(API_URLS.datacapStats)
  if (!response.ok) {
    throw new Error(`Failed to fetch datacap stats, status: ${response.status}`)
  }
  return response.json()
}

function parseDatacapData(data: Array<BaseDatacap>) {
  return data.map((item: BaseDatacap) => {
    return DatacapSchema.parse(item)
  })
}
