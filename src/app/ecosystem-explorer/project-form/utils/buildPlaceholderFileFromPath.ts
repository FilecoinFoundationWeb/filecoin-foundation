import { EMPTY_PLACEHOLDER_FILE_NAME } from '../constants'

export async function buildPlaceholderFileFromPath(path?: string) {
  if (!path) {
    return
  }

  const response = await fetch(path)
  const blob = await response.blob()
  return new File([blob], EMPTY_PLACEHOLDER_FILE_NAME, { type: blob.type })
}
