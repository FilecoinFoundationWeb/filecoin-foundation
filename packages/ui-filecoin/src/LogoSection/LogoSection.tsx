import { type HeadingProps } from '../Heading'

import { Carousel } from './Carousel/Carousel'
import { CarouselContent } from './Carousel/CarouselContent'
import { CarouselItem } from './Carousel/CarouselItem'
import { CarouselNext, CarouselPrevious } from './Carousel/CarouselNavigation'
import { type LogoItemProps, LogoItem } from './LogoItem'

type LogoSectionProps = {
  headingTag: HeadingProps['tag']
  title: string
  logos: Array<LogoItemProps>
}

export function LogoSection({ headingTag, title, logos }: LogoSectionProps) {
  const Tag = headingTag

  return (
    <section
      className="logo-section flex flex-col items-center gap-15 md:gap-20"
      aria-labelledby="logo-section-title"
    >
      <Tag
        id="logo-section-title"
        className="text-lg text-[var(--color-subheading-text)]"
      >
        {title}
      </Tag>

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
