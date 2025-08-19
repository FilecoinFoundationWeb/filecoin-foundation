import { type HeadingProps } from '@/components/Heading'

import { type LogoItemProps, LogoItem } from './LogoItem'

type LogoSectionProps = {
  logos: Array<LogoItemProps>
  title?: string
  tag?: HeadingProps['tag']
}

export function LogoSection({ logos, title, tag = 'h3' }: LogoSectionProps) {
  const Tag = tag

  return (
    <section
      className="logo-section flex flex-col items-center gap-15 md:gap-20"
      aria-labelledby={title && 'logo-section-title'}
    >
      {title && (
        <Tag
          className="text-xl text-[var(--color-text-subheading)]"
          id="logo-section-title"
        >
          {title}
        </Tag>
      )}
      <div
        className="logo-section-scroll-bar w-full overflow-x-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--color-border-muted) transparent',
        }}
      >
        <ul className="flex min-w-max items-center gap-15 py-2 md:gap-20">
          {logos.map((logoItem, index) => (
            <LogoItem key={`logo-${index}`} {...logoItem} />
          ))}
        </ul>
      </div>
    </section>
  )
}
