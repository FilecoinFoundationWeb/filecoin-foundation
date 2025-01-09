import { Checkbox, type CheckboxProps, Field, Label } from '@headlessui/react'
import { Check } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import type { TouchTarget } from '@/types/touchTargetType'

import { Icon } from '@/components/Icon'

type ExcludedHeadlessUIProps = 'className'

export type FormCheckboxProps = {
  label: string
  labelSize?: 'sm' | 'md'
} & Omit<CheckboxProps, ExcludedHeadlessUIProps>

const TOUCH_TARGET: TouchTarget = {
  visibleElementSize: 'size-5',
  touchAreaPadding: 'p-3.5',
  touchAreaOffset: '-m-3.5',
}

export function FormCheckbox({
  label,
  labelSize = 'md',
  ...rest
}: FormCheckboxProps) {
  return (
    <Field className="flex items-center gap-3">
      <Checkbox
        {...rest}
        className={clsx(
          'group cursor-pointer focus:outline-none',
          TOUCH_TARGET.touchAreaPadding,
          TOUCH_TARGET.touchAreaOffset,
        )}
      >
        <div
          className={clsx(
            TOUCH_TARGET.visibleElementSize,
            'rounded bg-brand-100 p-0.5 text-brand-100 hover:bg-brand-200 group-focus:bg-brand-200 group-focus:outline group-focus:outline-1 group-focus:outline-offset-2 group-focus:outline-brand-100 group-data-[disabled]:cursor-not-allowed group-data-[checked]:bg-brand-400 hover:group-data-[checked]:bg-brand-500',
          )}
        >
          <span className="hidden group-data-[checked]:block">
            <Icon component={Check} size={16} weight="bold" />
          </span>
        </div>
      </Checkbox>
      <Label
        className={clsx(
          'text-brand-100',
          labelSize === 'md' && 'text-base',
          labelSize === 'sm' && 'text-sm',
        )}
      >
        {label}
      </Label>
    </Field>
  )
}
