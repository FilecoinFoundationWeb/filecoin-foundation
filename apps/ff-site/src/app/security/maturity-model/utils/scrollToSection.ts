'use client'

export function scrollToSection(selector: string) {
  const element = document.querySelector(selector)

  if (!element) {
    console.error(`Element with selector "${selector}" does not exist`)
  }

  element?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}
