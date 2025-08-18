import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import audienceAtMeetup from '@/assets/images/audienceAtMeetup.webp'
import corgiWithSunglasses from '@/assets/images/corgiWithSunglasses.webp'
import filecoinOrbitCommunity from '@/assets/images/filecoinOrbitCommunity.webp'
import keynoteSpeaker from '@/assets/images/keynoteSpeaker.webp'
import speakersReceivingCertificates from '@/assets/images/speakersReceivingCertificates.webp'

export const communityConnectionImages: Array<StaticImageProps> = [
  {
    data: keynoteSpeaker,
    alt: 'A man giving a keynote presentation on stage at a tech conference, with a projected newspaper slide and a colorful event banner in the background.',
  },
  {
    data: filecoinOrbitCommunity,
    alt: 'A large group of young people wearing matching white shirts posing for a photo in front of a building during a tech community event, holding a giant presentation check.',
  },
  {
    data: corgiWithSunglasses,
    alt: 'A cute plush toy of a corgi wearing sunglasses and a blue floral shirt, holding a blue ball with a filecoin logo embroidered on it.',
  },
  {
    data: audienceAtMeetup,
    alt: 'Smiling woman holding a drink and sitting among other attendees at a colorful, neon-lit tech meetup or networking event.',
  },
  {
    data: speakersReceivingCertificates,
    alt: 'Five speakers standing on stage holding certificates of appreciation during a tech conference, with a “Speakers Appreciation” sign projected behind them.',
  },
]
