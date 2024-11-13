import { Clipboard, Envelope, HandWaving } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { extractEmailAddress } from '@/utils/extractEmailAddress'

export const getInvolvedData = [
  {
    title: 'Sponsor an Event',
    description: `To be featured partner or sponsor an upcoming Foundation-hosted event, reach out to ${extractEmailAddress(FILECOIN_FOUNDATION_URLS.events.sponsorshipsEmail)}.`,
    cta: {
      href: FILECOIN_FOUNDATION_URLS.events.sponsorshipsEmail,
      text: 'Email Us',
      icon: Envelope,
    },
  },
  {
    title: 'Speak at a Filecoin Event',
    description:
      'Interested in joining Filecoin Foundation on stage? Complete the speaker intake form.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.events.speakerEngagementForm,
      text: 'Submit Form',
      icon: Clipboard,
    },
  },
  {
    title: 'Join Filecoin Orbit',
    description:
      'The Filecoin Orbit program promotes Filecoin technology through community events that raise network awareness. Apply to be an Orbit Ambassador.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.events.orbitAmbassadorForm,
      text: 'Apply to Filecoin Orbit',
      icon: HandWaving,
    },
  },
]
