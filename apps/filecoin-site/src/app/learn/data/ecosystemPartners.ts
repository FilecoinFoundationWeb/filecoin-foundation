type EcosystemPartner = {
  name: string
  description: string
  href: string
  //   logo: string
}

export const ecosystemPartners: EcosystemPartner[] = [
  {
    name: 'Internet Archive',
    description:
      'A nonprofit library preserving websites, books, audio, and video for public access.',
    href: 'https://archive.org/',
  },
  {
    name: 'Solana',
    description:
      'A high-performance blockchain supporting scalable applications and smart contracts.',
    href: 'https://solana.com/',
  },
  {
    name: 'MIT Open Learning',
    description:
      'An initiative bringing open, high-quality educational content to learners worldwide.',
    href: 'https://openlearning.mit.edu/',
  },
  {
    name: 'Smithsonian',
    description:
      'The world’s largest museum and research complex, preserving art, culture, and science.',
    href: 'https://www.si.edu/',
  },
  {
    name: 'Flickr Foundation',
    description:
      'Dedicated to the long-term preservation and accessibility of digital photography.',
    href: 'https://www.flickr.org/',
  },
  {
    name: 'Starling Labs',
    description:
      'Advances digital trust technologies to safeguard truth in human rights and history.',
    href: 'https://www.starlinglab.org/',
  },
  {
    name: 'Easier Data Initiative',
    description:
      'Supports open data efforts by helping institutions manage and share their data more effectively.',
    href: 'https://www.easierdata.org/', // Example link, confirm actual URL
  },
  {
    name: 'Aethir',
    description:
      'A decentralized cloud infrastructure provider focused on AI and gaming workloads.',
    href: 'https://aethir.com/',
  },
  {
    name: 'Victor Chang Institute',
    description:
      'A leading research institute focused on solving cardiovascular disease through science.',
    href: 'https://www.victorchang.edu.au/',
  },
  {
    name: 'Seti Institute',
    description:
      'Conducts scientific research and education around the search for extraterrestrial life.',
    href: 'https://www.seti.org/',
  },
] as const
