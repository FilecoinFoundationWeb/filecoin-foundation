import * as Sentry from '@sentry/nextjs'

import { getAllocators } from '../utils/getAllocators'

import { AllocatorsTableWithFilters } from './AllocatorsTableWithFilters'
import { NoDataAvailableMessage } from './NoDataAvailableMessage'

export async function AllocatorsTableSection() {
  try {
    const allocators = await getAllocators()

    if (!allocators.length) {
      return <NoDataAvailableMessage />
    }

    return <AllocatorsTableWithFilters data={allocators} />
  } catch (error) {
    console.error('Error fetching or validating allocators:', error)

    Sentry.captureException(error, {
      tags: { component: 'AllocatorsTableSection' },
      extra: { message: 'Error fetching or validating allocators' },
    })

    return <NoDataAvailableMessage />
  }
}
