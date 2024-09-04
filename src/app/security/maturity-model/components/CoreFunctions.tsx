import { coreFunctionsData } from '../data/coreFunctionsData'

import { LinkTitle } from './LinkTitle'

export function CoreFunctions() {
  return (
    <div className="prose first:prose-h3:mt-0 prose-h4:text-brand-300 prose-h5:text-brand-300">
      {coreFunctionsData.map(({ title, Content, slug }, index) => (
        <article key={title}>
          <LinkTitle title={title} slug={slug} />
          <Content />
          {index < coreFunctionsData.length - 1 && (
            <hr className="border-brand-300" />
          )}
        </article>
      ))}
    </div>
  )
}
