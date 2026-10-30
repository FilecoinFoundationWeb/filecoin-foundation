const REQUEST_TIMEOUT_MS = 30000

export type ExternalLinkResult =
  | { status: number; statusText: string }
  | { error: string }

export async function requestExternalLink(
  url: string,
): Promise<ExternalLinkResult> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    await response.body?.cancel()
    return { status: response.status, statusText: response.statusText }
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) }
  }
}
