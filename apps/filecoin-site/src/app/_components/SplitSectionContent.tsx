import { clsx } from 'clsx'

import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'
import { Heading } from '@/components/Heading'

type SideBySideContentProps = {
  title: string
  description: string | Array<string>
  cta?: ButtonRowProps['buttons']
}

const gap = 'gap-8 md:gap-16'

export function SplitSectionContent({
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
        <Heading
          tag="h3"
          className="text-lg font-light tracking-wide text-[var(--color-text-heading-muted)] md:text-2xl"
        >
          {title}
        </Heading>
      </div>

      <div className={clsx('col-span-6 flex flex-col lg:col-span-4', gap)}>
        <div className="space-y-6">
          {descriptionArray.map((item, index) => (
            <p
              key={index}
              className="font-sans text-lg/7 font-light text-pretty md:text-2xl/9"
            >
              {item}
            </p>
          ))}
        </div>

        {cta && <ButtonRow buttons={cta} />}
      </div>
    </div>
  )
}
