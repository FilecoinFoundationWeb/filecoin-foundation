type EntryWithSeo = {
  title: string
  seo: { title?: string }
}

export function withSeoTitleFallback<Entry extends EntryWithSeo>(
  entry: Entry,
  suffix = '',
) {
  return {
    ...entry,
    seo: {
      ...entry.seo,
      title: entry.seo.title || entry.title + suffix,
    },
  }
}
