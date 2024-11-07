import { getAllocators } from '../utils/getAllocators'
import { getDatacapStats } from '../utils/getDatacapStats'

export async function getAllocatorsWithDatacap() {
  const allocators = await getAllocators()
  const datacapStats = await getDatacapStats()

  const allocatorsWithDatacap = allocators.map((allocator) => {
    const stats = datacapStats.find(
      (stats) => stats.address === allocator.address,
    )

    return {
      ...allocator,
      remainingDatacap: stats?.remainingDatacap ?? '',
      allowance: stats?.allowance ?? '',
    }
  })

  return allocatorsWithDatacap
}
