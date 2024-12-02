type ScrollToSectionProps = {
  sectionRef: React.RefObject<HTMLElement>
}

export function scrollToSection({ sectionRef }: ScrollToSectionProps) {
  if (!sectionRef.current) {
    console.error(`The referenced element does not exist`)
    return
  }

  sectionRef.current.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}
