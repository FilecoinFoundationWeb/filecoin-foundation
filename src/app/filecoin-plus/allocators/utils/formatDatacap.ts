import prettyBytes from 'pretty-bytes'

export function formatDatacap(bytes?: string | null) {
  if (!bytes) return 'N/A'
  const num = Number(bytes)
  if (Number.isNaN(num) || !Number.isFinite(num)) return 'N/A'
  return prettyBytes(num, { binary: true })
}
