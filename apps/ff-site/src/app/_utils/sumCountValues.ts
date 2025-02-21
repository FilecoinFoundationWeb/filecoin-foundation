type WithCount = {
  count: number
}

const COUNT_INITIAL_VALUE = 0

export function sumCountValues<AnyObject extends WithCount>(
  objects: Array<AnyObject>,
) {
  return objects.reduce(
    (sum, object) => sum + object.count,
    COUNT_INITIAL_VALUE,
  )
}
