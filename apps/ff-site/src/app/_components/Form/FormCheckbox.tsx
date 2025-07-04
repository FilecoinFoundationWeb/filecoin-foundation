import { Checkbox, type CheckboxProps, Field, Label } from '@headlessui/react'
import { CheckIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon } from '@filecoin-foundation/ui/Icon'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

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
          'group cursor-pointer focus:outline-hidden',
          TOUCH_TARGET.touchAreaPadding,
          TOUCH_TARGET.touchAreaOffset,
        )}
      >
        <div
          className={clsx(
            TOUCH_TARGET.visibleElementSize,
            'rounded-sm bg-brand-100 p-0.5 text-brand-100 group-focus:bg-brand-200 group-focus:outline group-focus:outline-1 group-focus:outline-offset-2 group-focus:outline-brand-100 group-data-checked:bg-brand-400 group-data-disabled:cursor-not-allowed hover:bg-brand-200 group-data-checked:hover:bg-brand-500',
          )}
        >
          <span className="hidden group-data-checked:block">
            <Icon component={CheckIcon} size={16} weight="bold" />
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
