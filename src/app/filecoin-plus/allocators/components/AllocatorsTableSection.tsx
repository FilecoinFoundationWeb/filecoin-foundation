import * as Sentry from '@sentry/nextjs'

import { getAllocatorsWithDatacap } from '../utils/getAllocatorsWithDatacap'

import { AllocatorsTableWithFilters } from './AllocatorsTableWithFilters'
import { NoDataAvailableMessage } from './NoDataAvailableMessage'

export async function AllocatorsTableSection() {
  try {
    const allocatorsWithDatacap = await getAllocatorsWithDatacap()

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
