'use client'

import {
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
} from 'react'

import { Button } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'

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
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
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

export function CarouselPrevious({
  className,

  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      disabled={!canScrollPrev}
      className={clsx(
        'focus:brand-outline absolute grid size-12 cursor-pointer place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 lg:size-11',
        orientation === 'horizontal'
          ? 'top-1/2 left-0 -translate-y-1/2 md:-left-6'
          : 'top-2 left-1/2 -translate-x-1/2 rotate-90 md:-top-10',
        className,
      )}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeftIcon size={18} />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

export function CarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      disabled={!canScrollNext}
      className={clsx(
        'focus:brand-outline absolute grid size-12 cursor-pointer place-items-center rounded-full bg-zinc-800 hover:bg-zinc-700 focus:bg-zinc-700 lg:size-11',
        orientation === 'horizontal'
          ? 'top-1/2 right-0 -translate-y-1/2 md:-right-6'
          : 'bottom-2 left-1/2 -translate-x-1/2 rotate-90 md:-bottom-10',
        className,
      )}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRightIcon size={18} />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
