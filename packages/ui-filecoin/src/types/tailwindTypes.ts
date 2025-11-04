import { breakpoints, spacingValues } from '../constants/tailwindConstants'

export type BreakpointValue = keyof typeof breakpoints
export type SpacingValue = (typeof spacingValues)[number]
