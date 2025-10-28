import { clsx } from 'clsx'

import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

import { ButtonRow, type ButtonRowProps } from '@/components/ButtonRow'

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
          className="font-sans text-2xl/8.5 text-[var(--color-subheading-text-muted)]"
        >
          {title}
        </Heading>
      </div>

      <div className={clsx('col-span-6 flex flex-col lg:col-span-4', gap)}>
        <div className="space-y-6">
          {descriptionArray.map((item, index) => (
            <p key={index} className="text-xl/7 text-pretty">
              {item}
            </p>
          ))}
        </div>

        {cta && <ButtonRow buttons={cta} />}
      </div>
    </div>
  )
}
