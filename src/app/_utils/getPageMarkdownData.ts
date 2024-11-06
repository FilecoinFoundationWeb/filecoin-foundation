import { CONTENT_PAGES_ROOT } from '@/constants/paths'

import { getMarkdownData, type GetData } from './getMarkdownData'

type GetPageData<T> = Pick<GetData<T>, 'slug' | 'zodParser'>

export function getPageMarkdownData<T>({ slug, zodParser }: GetPageData<T>) {
  return getMarkdownData({ slug, directoryPath: CONTENT_PAGES_ROOT, zodParser })
}
