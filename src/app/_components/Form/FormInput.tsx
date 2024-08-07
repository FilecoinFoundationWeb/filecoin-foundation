import React from 'react'

import {
  Field,
  Input,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react'
import { WarningCircle } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { FormLabel, type FormLabelProps } from '@/components/Form/FormLabel'
import { Icon } from '@/components/Icon'

export type FormInputProps = {
  label: FormLabelProps['label']
  hideLabel?: FormLabelProps['isHidden']
  error?: string
} & HeadlessInputProps

export function FormInput({
  error,
  label,
  hideLabel,
  ...rest
}: FormInputProps) {
  return (
    <Field className="relative w-full">
      <FormLabel label={label} isHidden={hideLabel} />
      <div className="relative w-full">
        <Input
          className={clsx(
            'peer form-input block w-full rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none',
            error && 'border-red-400 pr-10',
            !hideLabel && 'mt-2',
          )}
          {...rest}
        />

        {error && (
          <div className="peer pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-red-400">
            <Icon component={WarningCircle} />
          </div>
        )}
      </div>
      {error && (
        <p className="absolute -bottom-8 text-nowrap text-red-400">{error}</p>
      )}
    </Field>
  )
}
