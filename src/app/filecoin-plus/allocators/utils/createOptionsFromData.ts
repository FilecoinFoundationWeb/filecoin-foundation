import { removeDuplicatesFromArray } from '@/utils/removeDuplicatesFromArray'

import type { Allocator } from '../schemas/AllocatorSchema'

type AllocatorStringValues = Omit<Allocator, 'application'>

export function createOptionsFromData(
  data: Array<Allocator>,
  key: keyof AllocatorStringValues,
) {
  const stringArray = data.map((item) => item[key])
  const uniqueStringArray = removeDuplicatesFromArray(stringArray)
  return uniqueStringArray
}
