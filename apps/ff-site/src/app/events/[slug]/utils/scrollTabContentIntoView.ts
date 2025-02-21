export function scrollTabContentIntoView(
  refCurrent: NonNullable<React.RefObject<HTMLElement>['current']>,
) {
  refCurrent.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
