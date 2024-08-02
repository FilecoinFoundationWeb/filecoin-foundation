import React from 'react'

import { Input } from '@headlessui/react'
import { WarningCircle } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export function InputComponent({ error, ...rest }: InputProps) {
  return (
    <div className="relative space-y-2">
      <div className="relative">
        <Input
          className={`peer form-input relative block w-full min-w-48 rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 pr-9 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none ${error && 'border-red-400'}`}
          {...rest}
        />

        {error && (
          <div className="peer pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-red-400">
            <Icon component={WarningCircle} />
          </div>
        )}
      </div>

      {error && <span className="absolute -bottom-8 text-red-400">{error}</span>}
    </div>
  )
}
