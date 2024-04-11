import { useState, ChangeEvent } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

interface SearchInputProps {
  searchQuery: string
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({ searchQuery, onSearchChange }: SearchInputProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className="w-full max-w-lg  lg:max-w-xs"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div
          className={clsx(
            'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
            {
              'text-brand-400': isHovered && !isFocused,
              'text-brand-100': isFocused,
              'text-brand-300': !isHovered && !isFocused,
            },
          )}
        >
          <MagnifyingGlass size={24} aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-lg border border-brand-300 bg-brand-800 py-3 pl-10 pr-3 text-gray-300 placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:border-transparent focus:bg-brand-800 focus:text-brand-100 focus:outline-2 focus:outline-brand-100 placeholder:focus:text-brand-100"
          placeholder="Search"
          type="search"
          value={searchQuery}
          onChange={onSearchChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  )
}
