import { useMemo } from 'react'

export function useCarouselKeyboard(
  scrollPrev: () => void,
  scrollNext: () => void,
) {
  return useMemo(
    () => (event: React.KeyboardEvent<HTMLDivElement>) => {
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
}
