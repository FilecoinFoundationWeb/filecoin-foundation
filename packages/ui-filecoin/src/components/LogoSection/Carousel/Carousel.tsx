'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { clsx } from 'clsx'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'

import { useCarouselKeyboard } from './hooks/useCarouselKeyboard'
import { useCarouselState } from './hooks/useCarouselState'

export type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]

type CarouselProps = {
  opts?: CarouselOptions
  orientation?: 'horizontal' | 'vertical'
  autoPlay?: boolean
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  autoPlay: boolean
  isScrolling: boolean
  playAutoScroll: () => void
  stopAutoScroll: () => void
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
  autoPlay = false,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [isScrolling, setIsScrolling] = useState(autoPlay)

  const autoScrollPlugin = AutoScroll({
    stopOnMouseEnter: false,
    stopOnInteraction: false,
    startDelay: 0,
    speed: 1.5,
  })

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: getCarouselAxis(orientation),
      loop: opts?.loop ?? true,
    },
    [autoScrollPlugin],
  )

  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useCarouselState(api, setApi)
  const handleKeyDown = useCarouselKeyboard(scrollPrev, scrollNext)

  useEffect(() => {
    if (!api) return

    const plugin = api.plugins().autoScroll
    if (!plugin) return

    if (autoPlay) {
      plugin.play()
    } else {
      plugin.stop()
    }
  }, [api, autoPlay])

  useEffect(() => {
    if (!api) return

    const onPlay = () => setIsScrolling(true)
    const onStop = () => setIsScrolling(false)

    api.on('autoScroll:play', onPlay)
    api.on('autoScroll:stop', onStop)

    return () => {
      api.off('autoScroll:play', onPlay)
      api.off('autoScroll:stop', onStop)
    }
  }, [api])

  const playAutoScroll = useCallback(() => {
    api?.plugins().autoScroll?.play()
  }, [api])

  const stopAutoScroll = useCallback(() => {
    api?.plugins().autoScroll?.stop()
  }, [api])

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
        autoPlay,
        isScrolling,
        playAutoScroll,
        stopAutoScroll,
      }}
    >
      <div
        className={clsx('relative px-10', className)}
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
