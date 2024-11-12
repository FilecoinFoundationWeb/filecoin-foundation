import { getAllocators } from '../utils/getAllocators'
import { getDatacapStats } from '../utils/getDatacapStats'

export async function getAllocatorsWithDatacap() {
  const [allocators, datacapStats] = await Promise.all([
    getAllocators(),
    getDatacapStats(),
  ])

  const statsMap = new Map(datacapStats.map((stats) => [stats.address, stats]))

  const allocatorsWithDatacap = allocators.map((allocator) => {
    const stats = statsMap.get(allocator.address)

    return {
      ...allocator,
      remainingDatacap: stats?.remainingDatacap ?? '',
      allowance: stats?.allowance ?? '',
    }
  })

  return allocatorsWithDatacap
}
