type WithCount = {
  count: number
}

const COUNT_INITIAL_VALUE = 0

export function sumCountValues<Object extends WithCount>(
  objects: Array<Object>,
) {
  return objects.reduce(
    (sum, object) => sum + object.count,
    COUNT_INITIAL_VALUE,
  )
}
