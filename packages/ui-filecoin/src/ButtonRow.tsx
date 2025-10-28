import React from 'react'

import { clsx } from 'clsx'

import type { Button } from './Button'

export type ButtonRowProps = {
  centered?: boolean
  buttons:
    | React.ReactElement<typeof Button>
    | Array<React.ReactElement<typeof Button>>
}

export function ButtonRow({ buttons, centered }: ButtonRowProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-6 sm:flex sm:flex-wrap',
        centered && 'justify-center',
      )}
    >
      {Array.isArray(buttons)
        ? buttons.map((button, index) =>
            React.cloneElement(button, { key: index }),
          )
        : buttons}
    </div>
  )
}
