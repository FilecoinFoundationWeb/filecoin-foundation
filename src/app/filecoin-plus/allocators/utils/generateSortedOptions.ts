import type { Allocator } from '../schemas/AllocatorSchema'

type AllocatorStringValues = Omit<Allocator, 'application'>

export function generateSortedOptions(
  data: Array<Allocator>,
  key: keyof AllocatorStringValues,
) {
  const valuesArray = data.map((item) => item[key])
  const valueCounts = countOccurrences(valuesArray)

  const sortedUniqueOptions = Object.keys(valueCounts)
    .sort((a, b) => valueCounts[b] - valueCounts[a])
    .map((value) => ({
      id: value,
      name: value,
    }))

  return sortedUniqueOptions
}

function countOccurrences(array: Array<string>) {
  const counts: Record<string, number> = {}

  array.forEach((item) => {
    if (counts[item]) {
      counts[item] += 1
    } else {
      counts[item] = 1
    }
  })

  return counts
}
