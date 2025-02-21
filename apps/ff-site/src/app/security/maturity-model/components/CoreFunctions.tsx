import React from 'react'

import { coreFunctionsData } from '../data/coreFunctionsData'

import { Article } from './Article'

export function CoreFunctions() {
  return (
    <div className="prose prose-h3:first:mt-0 prose-h4:text-brand-300 prose-h5:text-brand-300">
      {coreFunctionsData.map(({ title, Content, slug }, index) => (
        <Article key={slug} title={title} slug={slug}>
          <Content />
          {index < coreFunctionsData.length - 1 && (
            <hr className="border-brand-300" />
          )}
        </Article>
      ))}
    </div>
  )
}
