import { Clipboard, Envelope, HandWaving } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const getInvolvedData = [
  {
    title: 'Sponsor an Event',
    description:
      'To be featured partner or sponsor an upcoming Foundation-hosted event, reach out to sponsorships@fil.org.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.events.sponsorShipsEmail,
      text: 'Email Us',
      icon: Envelope,
    },
  },
  {
    title: 'Speak at a Filecoin Event',
    description:
      'Interested in joining the Filecoin Foundation on stage? Complete the speaker intake form.',
    cta: {
      href: '#',
      text: 'Submit Form',
      icon: Clipboard,
    },
  },
  {
    title: 'Join Filecoin Orbit',
    description:
      'The Filecoin Orbit program promotes Filecoin technology through community events that raise network awareness. Apply to be an Orbit Ambassador.',
    cta: {
      href: '#',
      text: 'Apply to Filecoin Orbit',
      icon: HandWaving,
    },
  },
]
