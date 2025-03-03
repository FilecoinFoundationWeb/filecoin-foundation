import { Icon } from '@filecoin-foundation/ui/Icon'
import { Input, Label, Field, Button } from '@headlessui/react'
import { MagnifyingGlass, X } from '@phosphor-icons/react/dist/ssr'

type SearchInputProps = {
  query: string
  onChange: (value: string) => void
}

export function SearchInput({ query, onChange }: SearchInputProps) {
  return (
    <Field className="w-full">
      <Label className="sr-only">Search</Label>
      <div className="relative">
        <Input
          className="search-input focus:brand-outline peer block w-full border px-11 py-3 [&::-webkit-search-cancel-button]:appearance-none"
          placeholder="Search"
          type="search"
          value={query}
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="search-icon peer pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon component={MagnifyingGlass} />
        </div>
        {query && (
          <Button
            className="search-icon search-clear-button focus:brand-outline absolute right-1 top-1 flex size-[42px] items-center justify-center"
            aria-label="Clear search input"
            onClick={() => onChange('')}
          >
            <Icon component={X} size={16} weight="bold" />
          </Button>
        )}
      </div>
    </Field>
  )
}
