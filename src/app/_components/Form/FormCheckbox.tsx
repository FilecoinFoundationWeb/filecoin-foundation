import { Checkbox, Field, type CheckboxProps, Label } from '@headlessui/react'
import { Check } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { type FormLabelProps } from '@/components/Form/FormLabel'
import { Icon } from '@/components/Icon'

type HardCodedProps = 'className'

export type FormCheckboxProps = Omit<CheckboxProps, HardCodedProps> &
  FormLabelProps

export function FormCheckbox({ label, hideLabel, ...rest }: FormCheckboxProps) {
  return (
    <Field className="flex items-center gap-3">
      <Checkbox
        {...rest}
        className="group size-5 rounded bg-brand-100 p-0.5 text-brand-100 focus:brand-outline data-[disabled]:cursor-not-allowed ui-checked:bg-brand-500"
      >
        <span className="hidden group-data-[checked]:block">
          <Icon component={Check} size={16} weight="bold" />
        </span>
      </Checkbox>
      <Label className={clsx('text-brand-100', hideLabel && 'sr-only')}>
        {label}
      </Label>
    </Field>
  )
}
