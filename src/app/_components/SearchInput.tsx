import { MagnifyingGlass, X } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

type SearchInputProps = {
  id: React.ComponentProps<'input'>['id']
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function SearchInput({
  id,
  searchQuery = '',
  onSearchChange,
}: SearchInputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          id={id}
          name="search"
          className="peer form-input block w-full rounded-lg border border-brand-300 bg-brand-800 py-3 pl-10 pr-9 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none"
          placeholder="Search"
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <div className="peer pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-brand-300 peer-hover:text-brand-400 peer-focus:text-brand-100">
          <Icon component={MagnifyingGlass} />
        </div>
        {searchQuery && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-3 text-brand-300 peer-hover:text-brand-400 peer-focus:text-brand-100"
            aria-label="Clear search input"
            onClick={() => onSearchChange('')}
          >
            <Icon component={X} size={16} weight="bold" />
          </button>
        )}
      </div>
    </div>
  )
}
