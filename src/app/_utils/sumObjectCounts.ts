type WithCount = {
  count: number
}

const COUNT_INITIAL_VALUE = 0

export function sumObjectCounts<AnyObject extends WithCount>(
  objectsWithCount: Array<AnyObject>,
) {
  return objectsWithCount.reduce(
    (sum, object) => sum + object.count,
    COUNT_INITIAL_VALUE,
  )
}
