export function scrollTabContentIntoView(ref: React.RefObject<HTMLElement>) {
  ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
