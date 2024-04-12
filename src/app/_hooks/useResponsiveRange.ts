import { useMediaQuery } from '@uidotdev/usehooks'

export function useResponsiveRange() {
  const is3xsDevice = useMediaQuery('only screen and (max-width : 420px)')
  const is2XsDevice = useMediaQuery('only screen and (max-width : 480px)')
  const isXsDevice = useMediaQuery('only screen and (max-width : 520px)')
  const isSmDevice = useMediaQuery('only screen and (max-width : 640px)')
  const isMdDevice = useMediaQuery('only screen and (max-width : 768px)')

  if (is3xsDevice) return 2
  if (is2XsDevice) return 3
  if (isXsDevice) return 4
  if (isSmDevice) return 5
  if (isMdDevice) return 6
  return 8
}
