'use client'

import React, { createRef, useState } from 'react'

import dynamic from 'next/dynamic'

// This should be in a shared util file inside the events folder
import { scrollTabContentIntoView } from '@/events/[slug]/utils/scrollTabContentIntoView'

import { coreFunctionsData } from '../data/coreFunctionsData'

import { Article } from './Article'
// import { MobileTableOfContents } from './MobileTableOfContents'

const DynamicDesktopTableOfContents = dynamic(
  () =>
    import('./DesktopTableOfContents').then(
      (module) => module.DesktopTableOfContents,
    ),
  { ssr: false },
)

const DynamicMobileTableOfContents = dynamic(
  () =>
    import('./MobileTableOfContents').then(
      (module) => module.MobileTableOfContents,
    ),
  { ssr: false },
)

type CoreFunctionData = (typeof coreFunctionsData)[number]

export type DataWithRef = CoreFunctionData & {
  ref: React.RefObject<HTMLElement | null>
}

export function TableOfContents() {
  const [dataMap, setDataMap] = useState(() => {
    const dataMap = new Map<string, DataWithRef>()

    coreFunctionsData.forEach((data) => {
      dataMap.set(data.slug, { ...data, ref: createRef() })
    })

    return dataMap
  })
  const dataArray = Array.from(dataMap.values())

  function setRef(slug: string, element: HTMLElement | null) {
    setDataMap((prev) => {
      const data = prev.get(slug)
      if (!data) return prev

      prev.set(slug, { ...data, ref: { current: element } })
      return prev
    })
  }

  function scroll(slug: string) {
    const data = dataMap.get(slug)

    if (data && data.ref.current) {
      scrollTabContentIntoView(data.ref.current)
    }
  }

  return (
    <>
      <div className="grow">
        <div className="prose first:prose-h3:mt-0 prose-h4:text-brand-300 prose-h5:text-brand-300">
          {dataArray.map(({ title, Content, slug }, index) => (
            <Article
              key={slug}
              setRef={setRef}
              scrollToSection={scroll}
              title={title}
              slug={slug}
            >
              <Content />
              {index < coreFunctionsData.length - 1 && (
                <hr className="border-brand-300" />
              )}
            </Article>
          ))}
        </div>
      </div>
      <div className="hidden lg:sticky lg:top-12 lg:order-last lg:block lg:w-72">
        <DynamicDesktopTableOfContents
          data={dataArray}
          scrollToSection={scroll}
        />
      </div>
      <div className="sticky top-6 z-10 order-first block lg:hidden">
        <DynamicMobileTableOfContents
          data={dataArray}
          scrollToSection={scroll}
        />
      </div>
    </>
  )
}
