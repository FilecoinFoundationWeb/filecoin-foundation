export function extractDescriptionFromContent(content: string): string {
  return content
    .split('\n')
    .filter((line) => !line.startsWith('#'))
    .join('\n')
    .trim()
    .split('\n\n')[0]
}
