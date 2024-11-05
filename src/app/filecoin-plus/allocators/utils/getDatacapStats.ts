import { API_URLS } from '@/constants/apiUrls'

import { DatacapSchema, type Datacap } from '../schemas/DatacapSchema'

async function fetchDatacapStats(): Promise<any> {
  const response = await fetch(API_URLS.datacapStats)
  if (!response.ok) {
    throw new Error(`Failed to fetch datacap stats, status: ${response.status}`)
  }
  return response.json()
}

function parseDatacapData(data: any): Array<Datacap> {
  return data.map((item: any) => {
    return DatacapSchema.parse(item)
  })
}

export async function getDatacapStats(): Promise<Array<Datacap>> {
  try {
    const { data } = await fetchDatacapStats()
    return parseDatacapData(data)
  } catch (error) {
    console.error(error)
    return []
  }
}
