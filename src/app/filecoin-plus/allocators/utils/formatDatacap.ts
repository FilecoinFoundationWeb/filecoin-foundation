import prettyBytes from 'pretty-bytes'

export function formatDatacap(bytes?: string) {
  return !isNaN(Number(bytes)) && Number.isFinite(Number(bytes))
    ? prettyBytes(Number(bytes), { binary: true })
    : 'N/A'
}
