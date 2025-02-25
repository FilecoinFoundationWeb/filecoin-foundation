const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

type BreakpointValue = keyof typeof breakpoints

type Width = `${number}px` | `${number}vw`
type Args = { startSize: Width } & Partial<Record<BreakpointValue, Width>>

function getScreenWidthNumber(screenSize: BreakpointValue) {
  const widthAsString = breakpoints[screenSize].replace('px', '')
  const widthAsNumber = Number(widthAsString)

  return widthAsNumber
}

export function buildImageSizeProp(args: Args) {
  const { startSize, ...breakpointWidthPairs } = args

  const breakpointWidthPairsArray = Object.entries(
    breakpointWidthPairs,
  ) as Array<[BreakpointValue, Width]>

  const sortedBreakpointWidthPairsArray = [...breakpointWidthPairsArray].sort(
    (a, b) => {
      const aBreakpoint: BreakpointValue = a[0]
      const bBreakpoint: BreakpointValue = b[0]

      return (
        getScreenWidthNumber(aBreakpoint) - getScreenWidthNumber(bBreakpoint)
      )
    },
  )

  const mediaQueriesArray = sortedBreakpointWidthPairsArray.map(
    ([screen, width]) => {
      const screenWidthNumber = getScreenWidthNumber(screen)
      const mediaQuery = `(min-width: ${screenWidthNumber}px)`

      return `${mediaQuery} ${width}`
    },
  )

  return `${mediaQueriesArray.join(', ')}, ${startSize}`
}
