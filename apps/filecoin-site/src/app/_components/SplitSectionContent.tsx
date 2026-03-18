import { clsx } from 'clsx'

import {
  ButtonRow,
  type ButtonRowProps,
} from '@filecoin-foundation/ui-filecoin/ButtonRow'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'

type SideBySideContentProps = {
  title: string
  description: string | Array<string>
  cta?: ButtonRowProps['buttons']
}

const padding = 'pb-15 md:pr-15'

export function SplitSectionContent({
  title,
  description,
  cta,
}: SideBySideContentProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description]

  return (
    <div className="grid grid-cols-12">
      <div className={clsx('col-span-12 xl:col-span-4', padding)}>
        <Heading
          tag="h3"
          className="font-sans text-2xl/8.5 text-(--color-subheading-text-muted)"
        >
          {title}
        </Heading>
      </div>

      <div className="col-span-12 flex flex-col xl:col-span-8">
        <div className={clsx('space-y-6', padding)}>
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
