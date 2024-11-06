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

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= getBreakpointValue('md')
  const isDesktop = width > getBreakpointValue('lg')

  return { isMobile, isDesktop }
}
