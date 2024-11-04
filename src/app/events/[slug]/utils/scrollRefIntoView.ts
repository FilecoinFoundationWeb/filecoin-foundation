export function scrollRefIntoView(ref: React.RefObject<HTMLElement>) {
  ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
