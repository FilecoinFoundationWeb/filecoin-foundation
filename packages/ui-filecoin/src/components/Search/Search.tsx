'use client'

import { useQueryState, parseAsString } from 'nuqs'

import { SearchInput, type SearchInputProps } from '../SearchInput'

export const SEARCH_KEY = 'search'
export const DEFAULT_SEARCH_QUERY = ''

type SearchProps = {
  key?: string
  onChange?: SearchInputProps['onChange']
  placeholder?: SearchInputProps['placeholder']
}

export function Search({ key = SEARCH_KEY, onChange, ...rest }: SearchProps) {
  const [query, setQuery] = useQueryState(
    key,
    parseAsString
      .withDefault(DEFAULT_SEARCH_QUERY)
      .withOptions({ shallow: false }),
  )

  function handleQueryChange(newValue: string) {
    setQuery(newValue)
    onChange?.(newValue)
  }

  return <SearchInput value={query} onChange={handleQueryChange} {...rest} />
}
