import React from 'react'

import { clsx } from 'clsx'

export type ButtonRowProps = {
  centered?: boolean
  buttons: React.ReactElement | Array<React.ReactElement>
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
