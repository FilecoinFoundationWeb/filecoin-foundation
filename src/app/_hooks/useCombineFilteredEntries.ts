import { useMemo } from 'react'

import type { ArrayWithAtLeastTwoItems } from '@/types/utils'

import {
  findArrayIntersection,
  type WithSlug,
} from '@/utils/findArrayIntersection'

export function useCombineFilteredEntries<T extends WithSlug>(
  arrayOfArrays: ArrayWithAtLeastTwoItems<Array<T>>,
) {
  return useMemo(() => findArrayIntersection(arrayOfArrays), [arrayOfArrays])
}
