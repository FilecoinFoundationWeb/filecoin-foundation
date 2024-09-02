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

type ExcludedProps = 'as' | 'className'

const renderAs = 'div' // #Q: Why are we excluding as but using renderAs?

export type FormRadioInputProps<Value extends RadioType = RadioType> = {
  options: Array<Value>
} & Omit<RadioGroupProps<typeof renderAs, Value>, ExcludedProps>

// #Q: FormRadioGroup instead of FormRadioInput?
export function FormRadioInput<Value extends RadioType = RadioType>({
  // as="div", // #Q
  options,
  ...rest
}: FormRadioInputProps<Value>) {
  return (
    <RadioGroup<typeof renderAs, Value>
      {...rest}
      as={renderAs}
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
