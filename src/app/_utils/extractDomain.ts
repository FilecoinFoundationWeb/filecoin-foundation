type URLString = string

export function extractDomain(url: URLString) {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.hostname
  } catch (error) {
    throw new Error(`Invalid URL provided: ${url}`)
  }
}
