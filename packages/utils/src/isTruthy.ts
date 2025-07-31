// Type-safe function to filter out undefined values in arrays:
// array.filter(isTruthy)   => Array<T>
// array.filter(Boolean)    => Array<T | undefined>

export function isTruthy<T>(value: T | undefined): value is T {
  return Boolean(value)
}
