import { DatacapSchema, type Datacap } from '../schemas/DatacapSchema'

const api = 'https://api.datacapstats.io/api/getVerifiers'

export async function getDatacapStats(): Promise<Array<Datacap>> {
  try {
    const response = await fetch(api)
    const { data } = await response.json()
    const datacapStats = data.map((item: any) => {
      return DatacapSchema.parse(item)
    })

    return datacapStats
  } catch (error) {
    console.error(error)
    return []
  }
}
