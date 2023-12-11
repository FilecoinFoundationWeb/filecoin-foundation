'use client'

import { useEffect } from 'react'

import netlifyIdentity from 'netlify-identity-widget'

const NetlifyIdentityManager = () => {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  return null
}

export default NetlifyIdentityManager
