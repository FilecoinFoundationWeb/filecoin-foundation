import type { ArrayWithAtLeastTwoItems } from '@/_types/utils'

export type WithSlug = {
  slug: string
}

export function findArrayIntersection<Object extends WithSlug>(
  arrayOfArrays: ArrayWithAtLeastTwoItems<Array<Object>>,
) {
  const [baseArray, ...otherArrays] = arrayOfArrays

  if (otherArrays.length === 1) {
    const otherArray = otherArrays[0]

    const intersection = baseArray.filter((element) =>
      hasMatchingSlug(otherArray, element),
    )
    return intersection
  }

  const intersection = baseArray.filter((element) => {
    return otherArrays.every((array) => hasMatchingSlug(array, element))
  })

  return intersection
}

function hasMatchingSlug(array: Array<WithSlug>, element: WithSlug) {
  return array.some((item) => item.slug === element.slug)
}
