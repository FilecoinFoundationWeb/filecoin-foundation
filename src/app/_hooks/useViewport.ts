import { useEffect, useState } from 'react'

import theme from 'tailwindcss/defaultTheme'

type BreakpointValue = keyof typeof theme.screens

const getBreakpointValue = (breakpoint: BreakpointValue) => {
  const value = theme.screens[breakpoint]
  return typeof value === 'string' ? parseInt(value.replace('px', ''), 10) : 0
}

export function useViewport() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleWindowSizeChange = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    handleWindowSizeChange()

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isSmOrBelow = width <= getBreakpointValue('md')
  const isLgOrAbove = width > getBreakpointValue('lg')

  return { isSmOrBelow, isLgOrAbove }
}
