import { getAllocators } from '../utils/getAllocators'
import { getDatacapStats } from '../utils/getDatacapStats'

export async function getAllocatorsWithDatacap() {
  try {
    const [allocators, datacapStats] = await Promise.all([
      getAllocators(),
      getDatacapStats(),
    ])

    const statsMap = new Map(
      datacapStats.map((stats) => [stats.address, stats]),
    )

    const allocatorsWithDatacap = allocators.map((allocator) => {
      const stats = statsMap.get(allocator.address)

      return {
        ...allocator,
        availableDatacap: stats?.allowance ?? '',
        usedDatacap: stats?.remainingDatacap ?? '',
      }
    })

    return { data: allocatorsWithDatacap, error: null }
  } catch (error) {
    console.error('Error fetching allocators with datacap:', error)
    return { data: null, error }
  }
}
