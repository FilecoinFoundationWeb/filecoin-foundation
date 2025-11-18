import { type HeadingProps } from '../Heading'

import { Carousel } from './Carousel/Carousel'
import { CarouselContent } from './Carousel/CarouselContent'
import { CarouselItem } from './Carousel/CarouselItem'
import { ConditionalCarouselNavigation } from './Carousel/CarouselNavigation'
import { type LogoItemProps, LogoItem } from './LogoItem'

type LogoSectionProps = {
  headingTag: HeadingProps['tag']
  title: string
  logos: Array<LogoItemProps>
  autoPlay?: boolean
}

export function LogoSection({
  headingTag,
  title,
  logos,
  autoPlay,
}: LogoSectionProps) {
  const Tag = headingTag

  return (
    <section
      className="logo-section flex flex-col items-center gap-10"
      aria-labelledby="logo-section-title"
    >
      <Tag
        id="logo-section-title"
        className="text-lg text-(--color-subheading-text)"
      >
        {title}
      </Tag>

      <Carousel autoPlay={autoPlay}>
        <CarouselContent>
          {logos.map((logoItem, index) => (
            <CarouselItem key={index} range={logos.length}>
              <div className="grid h-full place-items-center p-0.5">
                <LogoItem {...logoItem} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <ConditionalCarouselNavigation />
      </Carousel>
    </section>
  )
}
