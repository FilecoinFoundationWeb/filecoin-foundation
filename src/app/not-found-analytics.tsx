'use client'

import Script from 'next/script'

import { usePlausible } from 'next-plausible'

export default function NotFoundAnalytics() {
  const plausible = usePlausible()

  return (
    <Script
      onReady={() =>
        plausible('404', { props: { path: window.location.pathname } })
      }
    />
  )
}
