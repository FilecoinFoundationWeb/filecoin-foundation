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

export function SplitSectionContent({
  title,
  description,
  cta,
}: SideBySideContentProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description]

  return (
    <div className="flex flex-col gap-15 pr-0 sm:pr-15 lg:flex-row lg:gap-30">
      <div className="min-w-xs">
        <Heading
          tag="h3"
          className="font-sans text-2xl/8.5 text-(--color-subheading-text-muted)"
        >
          {title}
        </Heading>
      </div>

      <div className="space-y-15">
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
