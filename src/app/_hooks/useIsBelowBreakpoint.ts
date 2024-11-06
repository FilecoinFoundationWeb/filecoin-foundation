import theme from 'tailwindcss/defaultTheme'
import { useMediaQuery } from 'usehooks-ts'

type BreakpointValue = keyof typeof theme.screens

export function useIsBelowBreakpoint(breakpoint: BreakpointValue) {
  const breakpointWithoutPx = theme.screens[breakpoint].replace('px', '')
  const numberBreakpoint = Number(breakpointWithoutPx)

  const isBelowBreakpoint = useMediaQuery(
    `(max-width: ${numberBreakpoint - 1}px)`,
  )

  return isBelowBreakpoint
}
