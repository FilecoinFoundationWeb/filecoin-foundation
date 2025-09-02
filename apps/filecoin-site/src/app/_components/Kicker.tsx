export type KickerProps = {
  children: string | Array<string>
}

const style = 'font-mono'

export function Kicker({ children }: KickerProps) {
  if (Array.isArray(children)) {
    return (
      <div className="flex flex-wrap gap-4">
        {children.map((kicker, index) => (
          <span key={index} className={style}>
            {kicker}
          </span>
        ))}
      </div>
    )
  }

  return <span className={style}>{children}</span>
}
