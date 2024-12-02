'use client'

import React, { createRef, useRef } from 'react'

import dynamic from 'next/dynamic'

import { coreFunctionsData } from '../data/coreFunctionsData'

import { CoreFunctions } from './CoreFunctions'
import { MobileTableOfContents } from './MobileTableOfContents'

const DynamicDesktopTableOfContents = dynamic(
  () =>
    import('./DesktopTableOfContents').then(
      (module) => module.DesktopTableOfContents,
    ),
  { ssr: false },
)

export function TableOfContents() {
  const sectionRefs = useRef(
    coreFunctionsData.reduce(
      (acc, { slug }) => {
        acc[slug] = createRef<HTMLElement>()
        return acc
      },

      {} as Record<string, React.RefObject<HTMLElement>>,
    ),
  )

  return (
    <>
      <div className="grow">
        <CoreFunctions sectionRefs={sectionRefs.current} />
      </div>
      <div className="hidden lg:sticky lg:top-12 lg:order-last lg:block lg:w-72">
        <DynamicDesktopTableOfContents sectionRefs={sectionRefs.current} />
      </div>
      <div className="sticky top-6 z-10 order-first block lg:hidden">
        <MobileTableOfContents sectionRefs={sectionRefs.current} />
      </div>
    </>
  )
}
