import * as Sentry from '@sentry/nextjs'

import { getAllocatorsWithDatacap } from '../utils/getAllocatorsWithDatacap'

import { AllocatorsTableWithFilters } from './AllocatorsTableWithFilters'
import { NoDataAvailableMessage } from './NoDataAvailableMessage'

export async function AllocatorsTableSection() {
  const { data: allocatorsWithDatacap, error } =
    await getAllocatorsWithDatacap()

  if (error) {
    const message = 'Error fetching or validating allocators'
    console.error({ message, error })

    Sentry.captureException(error, {
      tags: { component: AllocatorsTableSection.name },
      extra: { message },
    })
    return <NoDataAvailableMessage />
  }

  if (!allocatorsWithDatacap || !allocatorsWithDatacap.length) {
    return <NoDataAvailableMessage />
  }

  return <AllocatorsTableWithFilters data={allocatorsWithDatacap} />
}
