import camelcaseKeys from 'camelcase-keys'

export function camelcaseEntry<Entry extends Record<string, unknown>>(
  entry: Entry,
) {
  return camelcaseKeys(entry, { deep: true, exclude: ['_meta'] as const })
}
