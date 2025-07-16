import React from 'react'

import { clsx } from 'clsx'

import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading } from '@/components/Heading'

type SideBySideContentProps = {
  title: string
  description: string | Array<string>
  cta: ButtonRowProps['buttons']
}

const gap = 'gap-8 lg:gap-16'

export function SideBySideContent({
  title,
  description,
  cta,
}: SideBySideContentProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description]

  return (
    <div className={clsx('grid grid-cols-6', gap)}>
      <div className="col-span-6 lg:col-span-2 lg:pr-8">
        <Heading tag="h3" variant="xl-medium" className="side-by-side-heading">
          {title}
        </Heading>
      </div>

      <div className={clsx('col-span-6 flex flex-col lg:col-span-4', gap)}>
        <div className="space-y-6">
          {descriptionArray.map((item, index) => (
            <p key={index} className="side-by-side-description">
              {item}
            </p>
          ))}
        </div>

        <ButtonRow buttons={cta} />
      </div>
    </div>
  )
}
