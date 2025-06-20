import * as Sentry from '@sentry/nextjs'

import { getAllocatorsWithDatacap } from '../utils/getAllocatorsWithDatacap'

import { AllocatorsTableWithFilters } from './AllocatorsTableWithFilters'
import { NoDataAvailableMessage } from './NoDataAvailableMessage'

// https://filecoin-foundation-qk.sentry.io/issues/6061156926/?project=4507390577999872&query=&referrer=issue-stream&stream_index=6

export async function AllocatorsTableSection() {
  try {
    const allocatorsWithDatacap = await getAllocatorsWithDatacap()

    if (!allocatorsWithDatacap.length) {
      return <NoDataAvailableMessage />
    }

    return <AllocatorsTableWithFilters data={allocatorsWithDatacap} />
  } catch (error) {
    Sentry.captureException('Error fetching or validating allocators', {
      tags: { slack: true },
      extra: { error, location: 'Allocators Table Section' },
    })

    return <NoDataAvailableMessage />
  }
}
