import Script from 'next/script'

const TRANSIFEX_CONFIG = {
  api_key:
    process.env.NEXT_PUBLIC_TRANSIFEX_API_KEY ||
    '48f96b4371a44981981a6b4a096a7906',
  detectlang: true,
  picker: 'do not place a picker',
  reload_on_language_picker: true,
}

export function TransifexScript() {
  return (
    <>
      <Script id="transifex-settings" strategy="beforeInteractive">
        {`window.liveSettings = ${JSON.stringify(TRANSIFEX_CONFIG)}`}
      </Script>
      <Script
        src="https://cdn.transifex.com/live.js"
        strategy="beforeInteractive"
      />
    </>
  )
}
