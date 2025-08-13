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
      className="logo-section flex flex-col items-center gap-15 md:gap-20 lg:items-start"
      aria-labelledby={title && 'logo-section-title'}
    >
      {title && (
        <Heading
          tag={tag}
          className="text-xl font-normal"
          id="logo-section-title"
        >
          {title}
        </Heading>
      )}
      <ul className="grid grid-cols-2 justify-items-center gap-15 lg:grid-cols-4 lg:justify-items-start xl:grid-cols-5">
        {logos.map((logoItem, index) => (
          <LogoItem key={`logo-${index}`} {...logoItem} />
        ))}
      </ul>
    </section>
  )
}
