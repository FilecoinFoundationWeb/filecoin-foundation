import { Heading } from '@/components/Heading'

import { type LogoItemProps, LogoItem } from './LogoItem'

type LogoSectionProps = {
  logos: Array<LogoItemProps>
  title?: string
}

export function LogoSection({ logos, title }: LogoSectionProps) {
  return (
    <section aria-labelledby={title ? 'logo-section-title' : undefined}>
      {title && (
        <Heading
          id="logo-section-title"
          className="sr-only"
          tag="h2"
          variant="xl-regular"
          color="dark"
        >
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
