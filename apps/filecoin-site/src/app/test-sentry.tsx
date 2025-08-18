'use client'

import * as Sentry from '@sentry/nextjs'

export default function Page() {
  const testSentry = () => {
    console.log('Testing Sentry...')
    Sentry.captureException(new Error('Test error from filecoin-site'))
  }

  return (
    <div>
      <button onClick={testSentry}>Test Sentry</button>
    </div>
  )
}
