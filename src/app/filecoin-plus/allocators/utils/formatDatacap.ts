import prettyBytes from 'pretty-bytes'

export function formatDatacap(value?: string) {
  return value ? prettyBytes(Number(value)) : 'No data available'
}
