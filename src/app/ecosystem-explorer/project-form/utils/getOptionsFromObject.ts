export function getOptionsFromObject(object: Record<string, any>) {
  return Object.entries(object).map(([key, value]) => ({
    id: key,
    name: String(value),
  }))
}
