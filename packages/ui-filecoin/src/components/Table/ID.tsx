type IDProps = {
  number: number
}

export function ID({ number }: IDProps) {
  if (number < 0) {
    console.warn('ID component received a negative number:', number)
  }

  return (
    <span className="text-sm border px-2 py-1 border-zinc-200 text-zinc-950 rounded-lg">
      {`#${number}`}
    </span>
  )
}
