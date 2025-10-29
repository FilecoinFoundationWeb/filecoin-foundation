import { useCallback, useEffect, useState } from 'react'

import { type CarouselApi } from '../Carousel'

export function useCarouselState(
  api: CarouselApi,
  setApi?: (api: CarouselApi) => void,
) {
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

  useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) return

    const handleSelect = () => onSelect(api)
    handleSelect()

    api.on('reInit', handleSelect)
    api.on('select', handleSelect)
    api.on('resize', handleSelect)

    return () => {
      api?.off('reInit', handleSelect)
      api?.off('select', handleSelect)
      api?.off('resize', handleSelect)
    }
  }, [api, onSelect])

  return {
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
  }
}
