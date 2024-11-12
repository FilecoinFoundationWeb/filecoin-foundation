import prettyBytes from 'pretty-bytes'

export function formatDatacap(bytes?: string) {
  if (bytes === undefined || bytes === '') return 'N/A'
  const num = Number(bytes)
  if (isNaN(num) || !Number.isFinite(num) || num === 0) return 'N/A'
  return prettyBytes(num, { binary: true })
}
