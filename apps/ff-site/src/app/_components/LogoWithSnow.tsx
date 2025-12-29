'use client'

import { useState } from 'react'

import Snowfall from 'react-snowfall'

import LogoAsset from '@/assets/images/logo.svg'

export type LogoWithSnowProps = {
  enabled?: boolean
  snowflakeCount?: number
} & React.SVGProps<SVGSVGElement>

const SNOWFALL_STYLE = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none' as const,
  zIndex: 9999,
}

export function LogoWithSnow({
  enabled = true,
  snowflakeCount = 30,
  ...svgProps
}: LogoWithSnowProps) {
  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter() {
    setIsHovering(true)
  }

  function handleMouseLeave() {
    setIsHovering(false)
  }

  if (!enabled) {
    return <LogoAsset {...svgProps} />
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LogoAsset {...svgProps} />

      {isHovering && (
        <Snowfall snowflakeCount={snowflakeCount} style={SNOWFALL_STYLE} />
      )}
    </div>
  )
}
