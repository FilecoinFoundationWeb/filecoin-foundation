export function extractDescriptionFromContent(content: string): string {
  const lines = content.split('\n')
  const startIndex = lines[0].startsWith('#') ? 1 : 0

  return (
    lines
      .slice(startIndex)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split('.')[0] + '.'
  )
}
