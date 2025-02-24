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
          className="peer form-input block w-full rounded-lg border border-brand-300 bg-brand-800 px-11 py-3 placeholder:text-brand-300 hover:border-brand-400 hover:placeholder:text-brand-400 focus:brand-outline focus:text-brand-100 focus:placeholder:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none"
          placeholder="Search"
          type="search"
          value={query}
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="peer pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-brand-300 peer-hover:text-brand-400 peer-focus:text-brand-100">
          <Icon component={MagnifyingGlass} />
        </div>
        {query && (
          <Button
            className="absolute top-1 right-1 flex size-[42px] items-center justify-center rounded-sm text-brand-300 peer-hover:text-brand-400 peer-focus:text-brand-100 focus:brand-outline"
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
