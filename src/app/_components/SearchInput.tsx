import { ChangeEvent } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

interface SearchInputProps {
  searchQuery: string
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({ searchQuery, onSearchChange }: SearchInputProps) {
  return (
    <div className="w-full max-w-lg lg:max-w-xs">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          id="search"
          name="search"
          className="peer block w-full rounded-lg border border-brand-300 bg-brand-800 py-3 pl-10 pr-3 placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:border-transparent focus:text-brand-100 focus:outline-2 focus:outline-brand-100 placeholder:focus:text-brand-100"
          placeholder="Search"
          type="search"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-brand-300 peer-hover:text-brand-400 peer-focus:text-brand-100">
          <MagnifyingGlass size={24} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
