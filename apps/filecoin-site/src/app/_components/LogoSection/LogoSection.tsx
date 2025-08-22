import { Carousel } from '@/components/Carousel/Carousel'
import { CarouselContent } from '@/components/Carousel/CarouselContent'
import { CarouselItem } from '@/components/Carousel/CarouselItem'
import {
  CarouselNext,
  CarouselPrevious,
} from '@/components/Carousel/CarouselNavigation'
import { type HeadingProps } from '@/components/Heading'

import { type LogoItemProps, LogoItem } from './LogoItem'

type LogoSectionProps = {
  headingTag: HeadingProps['tag']
  title?: string
  logos: Array<LogoItemProps>
}

export function LogoSection({ headingTag, title, logos }: LogoSectionProps) {
  const Tag = headingTag

  return (
    <section
      className="logo-section flex flex-col items-center gap-15 md:gap-20"
      aria-labelledby={title && 'logo-section-title'}
    >
      {title && (
        <Tag
          className="text-lg text-[var(--color-subheading-text)]"
          id="logo-section-title"
        >
          {title}
        </Tag>
      )}

      <Carousel>
        <CarouselContent>
          {logos.map((logoItem, index) => (
            <CarouselItem key={index}>
              <div className="grid h-full place-items-center p-0.5">
                <LogoItem {...logoItem} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
