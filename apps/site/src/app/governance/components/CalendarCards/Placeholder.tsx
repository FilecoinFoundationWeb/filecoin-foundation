type PlaceholderProps = {
  text: string
}

export function Placeholder({ text }: PlaceholderProps) {
  return (
    <div className="py-8 lg:flex lg:h-[558px] lg:items-center lg:justify-center">
      {text}
    </div>
  )
}
