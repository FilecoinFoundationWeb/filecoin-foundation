import camelcaseKeys from 'camelcase-keys'

export function camelcaseKeysDeep<Data extends Record<string, unknown>>(
  data: Data,
) {
  return camelcaseKeys(data, { deep: true })
}
