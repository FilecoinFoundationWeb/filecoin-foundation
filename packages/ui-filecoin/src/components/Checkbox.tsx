import {
  Checkbox as HeadlessCheckbox,
  type CheckboxProps as HeadlessCheckboxProps,
} from '@headlessui/react'
import { CheckIcon } from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'

import type { TouchTarget } from '../types/touchTarget'

import { Icon } from './Icon'

type CheckboxProps = Omit<HeadlessCheckboxProps, 'children' | 'className'>

const TOUCH_TARGET: TouchTarget = {
  visibleElementSize: 'size-5',
  touchAreaPadding: 'p-3.5',
  touchAreaOffset: '-m-3.5',
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <HeadlessCheckbox
      {...props}
      className={clsx(
        'group inline-block cursor-pointer focus:outline-hidden',
        TOUCH_TARGET.touchAreaPadding,
        TOUCH_TARGET.touchAreaOffset,
      )}
    >
      <div
        className={clsx(
          TOUCH_TARGET.visibleElementSize,
          'group-focus:outline-brand-700 group-data-checked:bg-brand-700 group-data-checked:hover:bg-brand-600 flex items-center justify-center rounded-sm border border-zinc-400 bg-white p-0.5 text-white group-focus:bg-zinc-100 group-focus:outline-2 group-focus:outline-offset-2 group-data-disabled:cursor-not-allowed hover:bg-zinc-200',
        )}
      >
        <span className="invisible group-data-checked:visible">
          <Icon component={CheckIcon} size={16} weight="bold" />
        </span>
      </div>
    </HeadlessCheckbox>
  )
}
