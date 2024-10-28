import type { Allocator } from '../schemas/AllocatorSchema'

type AllocatorStringValues = Omit<Allocator, 'application'>

export function createUniqueOptionsFromData(
  data: Array<Allocator>,
  key: keyof AllocatorStringValues,
) {
  const stringArray = data.map((item) => item[key])

  const counts = countOccurrences(stringArray)

  const sortedUniqueCountries = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a],
  )

  const sortUniqueOptions = sortedUniqueCountries.map((country) => ({
    id: country,
    name: country,
  }))

  return sortUniqueOptions
}

function countOccurrences(array: Array<string>) {
  return array.reduce(
    (object, item) => {
      const curentCount = object[item] || 0
      object[item] = curentCount + 1
      return object
    },
    {} as Record<string, number>,
  )
}
