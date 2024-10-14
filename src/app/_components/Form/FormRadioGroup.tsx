import type { ElementType } from 'react'

import {
  Field,
  Label,
  Radio,
  RadioGroup,
  type RadioGroupProps,
} from '@headlessui/react'

export type RadioType = {
  id: string
  name: string
  disabled?: boolean
}

type ExcludedHeadlessUIProps = 'className'

export type FormRadioInputProps<Value extends RadioType = RadioType> = {
  options: ReadonlyArray<Value>
} & Omit<RadioGroupProps<ElementType, Value>, ExcludedHeadlessUIProps>

export function FormRadioGroup<Value extends RadioType = RadioType>({
  options,
  ...rest
}: FormRadioInputProps<Value>) {
  return (
    <RadioGroup<ElementType, Value>
      {...rest}
      className="flex flex-wrap items-center gap-x-10 gap-y-6 data-[disabled]:cursor-not-allowed"
    >
      {options.map((option) => (
        <Field
          key={option.id}
          disabled={option.disabled}
          className="flex items-center gap-2"
        >
          <Radio
            value={option}
            className="group flex size-5 items-center justify-center rounded-full border-2 border-white bg-white focus:brand-outline data-[checked]:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label className="data-[disabled]:cursor-not-allowed">
            {option.name}
          </Label>
        </Field>
      ))}
    </RadioGroup>
  )
}
