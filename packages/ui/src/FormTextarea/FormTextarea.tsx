import {
  Field,
  Textarea,
  type TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

import {
  FormError,
  type FormErrorProps,
} from '@filecoin-foundation/ui/FormField'
import { formFieldStyle } from '@filecoin-foundation/ui/FormField'
import {
  FormLabel,
  type FormLabelProps,
} from '@filecoin-foundation/ui/FormField'
import {
  FormLabelDescription,
  type FormLabelDescriptionProps,
} from '@filecoin-foundation/ui/FormField'

import { CharacterCounter } from './CharacterCounter'

type ExcludedHeadlessUIProps = 'invalid' | 'className'

export type FormTextareaProps = {
  minCharacter?: number
  maxCharacter?: number
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
  addOptionalToLabel,
  minCharacter,
  description,
  ...rest
}: FormTextareaProps) {
  return (
    <Field className={formFieldStyle}>
      {description ? (
        <div className="space-y-1">
          <FormLabel
            label={label}
            hideLabel={hideLabel}
            addOptionalToLabel={addOptionalToLabel}
          />
          <FormLabelDescription>{description}</FormLabelDescription>
        </div>
      ) : (
        <FormLabel
          label={label}
          hideLabel={hideLabel}
          addOptionalToLabel={addOptionalToLabel}
        />
      )}

      <Textarea
        {...rest}
        invalid={Boolean(error)}
        className="form-textarea-input"
      />
      <FormError.Container>
        <div className="flex items-center justify-between gap-1">
          <FormError.Message error={error} />
          {maxCharacter && (
            <CharacterCounter
              count={characterCount}
              max={maxCharacter}
              min={minCharacter}
            />
          )}
        </div>
      </FormError.Container>
    </Field>
  )
}
