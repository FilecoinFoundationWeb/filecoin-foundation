export function iso8601StringToDate(arg: unknown): unknown {
  if (typeof arg === 'string') {
    const parsedDate = new Date(arg)
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate
    }
  }
  return arg
}
