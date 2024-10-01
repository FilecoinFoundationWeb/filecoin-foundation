import * as Sentry from '@sentry/nextjs'

import { getAllocators } from '../utils/getAllocators'

import { AllocatorsTable } from './AllocatorsTable'
import { NoAllocatorsMessage } from './NoAllocatorsMessage'

export async function AllocatorsTableSection() {
  try {
    const allocators = await getAllocators()
    return <AllocatorsTable allocators={allocators} />
  } catch (error) {
    console.error('Error fetching or validating allocators:', error)

    Sentry.captureException(error, {
      tags: { component: 'AllocatorsTableSection' },
      extra: { message: 'Error fetching or validating allocators' },
    })

    return <NoAllocatorsMessage />
  }
}
