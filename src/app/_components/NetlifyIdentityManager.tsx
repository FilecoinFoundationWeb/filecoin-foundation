'use client'

import { useEffect } from 'react'

import netlifyIdentity from 'netlify-identity-widget'

export function NetlifyIdentityManager() {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  return null
}
