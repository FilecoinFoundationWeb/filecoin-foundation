import { FFDW_URLS } from "@/constants/siteMetadata"

import { CTASection } from "./CTASection"

export function ContactCTA() {
    return (
    <CTASection
      kicker="Get Involved"
      title="Join the Conversation and Help Us Build a Better Web"
      cta={{
        href: FFDW_URLS.email,
        text: 'Contact Us',
      }}
    />
  )
}
