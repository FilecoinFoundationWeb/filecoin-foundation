import { Checkbox, Field, type CheckboxProps, Label } from '@headlessui/react'
import { Check } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

type HardCodedProps = 'className'

export type FormCheckboxProps = { label: string } & Omit<
  CheckboxProps,
  HardCodedProps
>

export function FormCheckbox({ label, ...rest }: FormCheckboxProps) {
  return (
    <Field className="flex items-center gap-3">
      <Checkbox
        {...rest}
        className="group size-5 rounded bg-brand-100 p-0.5 text-brand-100 focus:brand-outline data-[disabled]:cursor-not-allowed data-[checked]:bg-brand-400"
      >
        <span className="hidden group-data-[checked]:block">
          <Icon component={Check} size={16} weight="bold" />
        </span>
      </Checkbox>
      <Label className="text-brand-100">{label}</Label>
    </Field>
  )
}
