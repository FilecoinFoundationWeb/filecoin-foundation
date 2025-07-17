import { Heading, type HeadingProps } from '@/components/Heading'

import { type LogoItemProps, LogoItem } from './LogoItem'

type LogoSectionProps = {
  logos: Array<LogoItemProps>
  title?: string
  tag?: HeadingProps['tag']
}

export function LogoSection({ logos, title, tag = 'h2' }: LogoSectionProps) {
  return (
    <section
      className="space-y-20"
      aria-labelledby={title ? 'logo-section-title' : undefined}
    >
      {title && (
        <Heading tag={tag} variant="xl-regular" id="logo-section-title">
          {title}
        </Heading>
      )}
      <ul className="flex flex-wrap justify-start gap-x-16 gap-y-10">
        {logos.map((logoItem, index) => (
          <LogoItem key={`logo-${index}`} {...logoItem} />
        ))}
      </ul>
    </section>
  )
}
