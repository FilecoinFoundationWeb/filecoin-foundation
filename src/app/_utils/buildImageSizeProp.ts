import theme from 'tailwindcss/defaultTheme'

const screens = theme.screens

type Breakpoint = keyof typeof screens

type Width = `${number}px` | `${number}vw`
type Args = Partial<Record<Breakpoint, Width>> & { then: Width }

function getScreenWidthNumber(screenSize: Breakpoint) {
  const widthAsString = screens[screenSize].replace('px', '')
  const widthAsNumber = Number(widthAsString)

  return widthAsNumber
}

export function buildImageSizeProp(args: Args) {
  const { then, ...pairs } = args

  const entries = Object.entries(pairs) as Array<[Breakpoint, Width]>

  const sortedEntries = [...entries].sort((a, b) => {
    const aBreakpoint: Breakpoint = a[0]
    const bBreakpoint: Breakpoint = b[0]

    return getScreenWidthNumber(aBreakpoint) - getScreenWidthNumber(bBreakpoint)
  })

  const mediaQueriesArray = sortedEntries.map(([screen, width]) => {
    const screenWidthNumber = getScreenWidthNumber(screen)
    const mediaQuery = `(max-width: ${screenWidthNumber - 1}px)`

    return `${mediaQuery} ${width}`
  })

  return `${mediaQueriesArray.join(', ')}, ${then}`
}
