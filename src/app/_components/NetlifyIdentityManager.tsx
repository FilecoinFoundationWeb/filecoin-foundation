'use client'

import { useEffect } from 'react'

import netlifyIdentity from 'netlify-identity-widget'

export function NetlifyIdentityManager() {
  useEffect(() => {
    netlifyIdentity.init({
      APIUrl: 'https://filecoin-foundation.netlify.app/.netlify/identity',
      locale: 'en',
    })

    netlifyIdentity.on('init', (user) => {
      if (!user) {
        netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }, [])

  return null
}
