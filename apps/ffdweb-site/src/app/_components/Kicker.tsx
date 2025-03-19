type KickerProps = {
  as?: 'span' | 'div'
  children: string
}

export function Kicker({ as: Component = 'span', children }: KickerProps) {
  return (
    <Component className="font-bold text-neutral-400">{children}</Component>
  )
}
