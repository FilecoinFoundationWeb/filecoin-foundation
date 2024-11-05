function parseDatacap(datacap: string | null) {
  if (datacap) {
    try {
      return BigInt(datacap)
    } catch {
      throw new Error(`Invalid datacap value: ${datacap}`)
    }
  }

  return BigInt(0)
}

function calculateToPiB(datacap: bigint) {
  const bytesInPiB = BigInt(2 ** 50)
  return Number(datacap) / Number(bytesInPiB)
}

export function convertDatacapToPiB(datacapString: string | null | undefined) {
  if (!datacapString) return null

  try {
    const datacap = parseDatacap(datacapString)
    const datacapInPiB = calculateToPiB(datacap)
    const formattedDatacap = `${datacapInPiB.toFixed(2)} PiB`
    return formattedDatacap
  } catch {
    console.error(Error)
    return 'Invalid Datacap'
  }
}
