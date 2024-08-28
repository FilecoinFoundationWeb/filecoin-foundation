import { coreFunctionsData } from '../data/coreFunctionsData'

export function CoreFunctions() {
  return (
    <div className="prose prose-h3:text-brand-300 prose-h4:text-brand-300">
      {coreFunctionsData.map(({ title, Content }, index) => (
        <article key={index}>
          <h2>{title}</h2>
          <Content />
          {index < coreFunctionsData.length - 1 && (
            <hr className="border-brand-300" />
          )}{' '}
        </article>
      ))}
    </div>
  )
}
