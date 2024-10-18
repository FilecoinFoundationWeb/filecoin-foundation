import * as Sentry from '@sentry/nextjs'

import { getAllocators } from '../utils/getAllocators'

import { FilterableAllocatorsTable } from './FilterableAllocatorsTable'
import { NoAllocatorsMessage } from './NoAllocatorsMessage'

export async function AllocatorsTableSection() {
  try {
    const allocators = await getAllocators()

    if (!allocators.length) {
      return <NoAllocatorsMessage />
    }

    return <FilterableAllocatorsTable data={allocators} />
  } catch (error) {
    console.error('Error fetching or validating allocators:', error)

    Sentry.captureException(error, {
      tags: { component: 'AllocatorsTableSection' },
      extra: { message: 'Error fetching or validating allocators' },
    })

    return <NoAllocatorsMessage />
  }
}
