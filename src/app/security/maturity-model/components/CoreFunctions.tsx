import React from 'react'

import { coreFunctionsData } from '../data/coreFunctionsData'
import type { SectionRefsProps } from '../types/sectionRefsTypes'

import { Article } from './Article'

// This should be deleted
export function CoreFunctions({ sectionRefs }: SectionRefsProps) {
  return (
    <div className="prose first:prose-h3:mt-0 prose-h4:text-brand-300 prose-h5:text-brand-300">
      {coreFunctionsData.map(({ title, Content, slug }, index) => (
        <Article key={slug} ref={sectionRefs[slug]} title={title} slug={slug}>
          <Content />
          {index < coreFunctionsData.length - 1 && (
            <hr className="border-brand-300" />
          )}
        </Article>
      ))}
    </div>
  )
}
