import * as Sentry from '@sentry/nextjs'

import { convertDatacapToPiB } from '../utils/convertDatacapToPiB'
import { getAllocators } from '../utils/getAllocators'
import { getDatacapStats } from '../utils/getDatacapStats'

import { AllocatorsTableWithFilters } from './AllocatorsTableWithFilters'
import { NoDataAvailableMessage } from './NoDataAvailableMessage'

async function fetchAllocatorsWithDatacap() {
  const allocators = await getAllocators()
  const datacapStats = await getDatacapStats()

  const allocatorsWithDatacap = allocators.map((allocator) => {
    const stats = datacapStats.find(
      (stats) => stats.address === allocator.address,
    )

    return {
      ...allocator,
      remainingDatacap: convertDatacapToPiB(stats?.remainingDatacap),
      allowance: convertDatacapToPiB(stats?.allowance),
    }
  })

  return allocatorsWithDatacap
}

export async function AllocatorsTableSection() {
  try {
    const allocatorsWithDatacap = await fetchAllocatorsWithDatacap()

    if (!allocatorsWithDatacap.length) {
      return <NoDataAvailableMessage />
    }

    return <AllocatorsTableWithFilters data={allocatorsWithDatacap} />
  } catch (error) {
    console.error('Error fetching or validating allocators:', error)

    Sentry.captureException(error, {
      tags: { component: 'AllocatorsTableSection' },
      extra: { message: 'Error fetching or validating allocators' },
    })

    return <NoDataAvailableMessage />
  }
}
