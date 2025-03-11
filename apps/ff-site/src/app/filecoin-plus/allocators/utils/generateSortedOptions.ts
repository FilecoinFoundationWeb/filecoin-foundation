import type { AllocatorWithDatacap } from '../schemas/AllocatorSchema'

type AllocatorStringValues = Omit<AllocatorWithDatacap, 'application'>

export function generateSortedOptions(
  data: Array<AllocatorWithDatacap>,
  key: keyof AllocatorStringValues,
) {
  const valuesArray = data.map((item) => item[key])
  const uniqueValues = [...new Set(valuesArray)]

  const sortedUniqueOptions = uniqueValues
    .sort((a, b) => a.localeCompare(b))
    .map((value) => ({
      id: value,
      name: value,
    }))

  return sortedUniqueOptions
}
