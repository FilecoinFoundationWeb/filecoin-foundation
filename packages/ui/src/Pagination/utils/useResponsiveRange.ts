import { useMediaQuery } from 'usehooks-ts'

export const MAX_RANGE = 10

export function useResponsiveRange() {
  const is6xs = useMediaQuery('only screen and (max-width : 300px)')
  const is5xs = useMediaQuery('only screen and (max-width : 340px)')
  const is4Xs = useMediaQuery('only screen and (max-width : 380px)')
  const is3Xs = useMediaQuery('only screen and (max-width : 420px)')
  const is2Xs = useMediaQuery('only screen and (max-width : 460px)')
  const isXs = useMediaQuery('only screen and (max-width : 500px)')
  const isSm = useMediaQuery('only screen and (max-width : 640px)')
  const isMd = useMediaQuery('only screen and (max-width : 768px)')

  if (is6xs) return 1
  if (is5xs) return 2
  if (is4Xs) return 3
  if (is3Xs) return 4
  if (is2Xs) return 5
  if (isXs) return 6
  if (isSm) return 7
  if (isMd) return 8
  return MAX_RANGE
}
