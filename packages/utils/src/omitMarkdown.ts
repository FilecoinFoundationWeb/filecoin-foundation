type MarkdownEntry = {
  markdown: string
  raw: string
}

// Drop the body and source file before passing entries to client components
export function omitMarkdown<Entry extends MarkdownEntry>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  markdown: _markdown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  raw: _raw,
  ...entry
}: Entry) {
  return entry
}
