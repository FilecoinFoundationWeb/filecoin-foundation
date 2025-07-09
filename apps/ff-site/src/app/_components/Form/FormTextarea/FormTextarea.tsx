import React from 'react'

import {
  Field,
  Textarea,
  type TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import {
  FormError,
  type FormErrorProps,
  FormLabel,
  type FormLabelProps,
  formFieldStyle,
  FormLabelDescription,
  type FormLabelDescriptionProps,
} from '@filecoin-foundation/ui/Form'

import { CharacterCounter } from './CharacterCounter'

type ExcludedHeadlessUIProps = 'invalid' | 'className'

export type FormTextareaProps = {
  minCharacter?: number
  maxCharacter: number
  characterCount: number
  description?: FormLabelDescriptionProps['children']
} & Omit<HeadlessTextareaProps, ExcludedHeadlessUIProps> &
  FormLabelProps &
  FormErrorProps

export function FormTextarea({
  error,
  label,
  hideLabel,
  characterCount,
  maxCharacter,
  minCharacter,
  description,
  ...rest
}: FormTextareaProps) {
  return (
    <Field className={formFieldStyle}>
      {description ? (
        <div className="space-y-1">
          <FormLabel label={label} hideLabel={hideLabel} />
          <FormLabelDescription>{description}</FormLabelDescription>
        </div>
      ) : (
        <FormLabel label={label} hideLabel={hideLabel} />
      )}

      <Textarea
        {...rest}
        invalid={Boolean(error)}
        className={clsx(
          'border-brand-300 bg-brand-800 placeholder:text-brand-300 hover:border-brand-400 hover:placeholder:text-brand-400 focus:brand-outline focus:text-brand-100 focus:placeholder:text-brand-100 block min-h-44 w-full rounded-lg border px-3.5 py-3 data-disabled:cursor-not-allowed',
          error && 'border-brand-error',
        )}
      />
      <FormError.Container>
        <div className="flex items-center justify-between gap-1">
          <FormError.Message error={error} />
          <CharacterCounter
            count={characterCount}
            max={maxCharacter}
            min={minCharacter}
          />
        </div>
      </FormError.Container>
    </Field>
  )
}
