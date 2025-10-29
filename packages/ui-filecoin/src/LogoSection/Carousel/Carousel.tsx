'use client'

import { createContext, useContext } from 'react'

import { clsx } from 'clsx'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'

import { useCarouselKeyboard } from './hooks/useCarouselKeyboard'
import { useCarouselState } from './hooks/useCarouselState'

export type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  hasAnyScroll: boolean
} & CarouselProps

const CarouselContext = createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

export function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: getCarouselAxis(orientation),
    },
    plugins,
  )

  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useCarouselState(api, setApi)
  const handleKeyDown = useCarouselKeyboard(scrollPrev, scrollNext)

  const hasAnyScroll = canScrollPrev || canScrollNext

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        hasAnyScroll,
      }}
    >
      <div
        className={clsx('relative px-12', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function getCarouselAxis(orientation: CarouselProps['orientation']) {
  return orientation === 'horizontal' ? 'x' : 'y'
}
