'use client'

import { useEffect } from 'react'

import { usePlausible } from 'next-plausible'

export function NotFoundAnalytics() {
  const plausible = usePlausible()

  useEffect(() => {
    plausible('404', {
      props: {
        path: window.location.pathname,
        referrer: document.referrer,
      },
    })
  }, [plausible])

  return null
}
