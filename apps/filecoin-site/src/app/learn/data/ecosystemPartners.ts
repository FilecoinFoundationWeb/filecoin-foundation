import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Visit website'

export const ecosystemPartners: Array<SimpleCardData> = [
  {
    title: 'Easier Data Initiative',
    description:
      'The EASIER Data Initiative at the University of Maryland leverages Filecoin to make large geospatial datasets more accessible and composable.',
    cta: {
      href: 'https://www.easierdata.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Solana',
    description:
      "Solana leverages Filecoin's decentralized storage to archive its blockchain history, making ledger data accessible, content-addressable, and resilient.",
    cta: {
      href: 'https://solana.com/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Victor Chang Institute',
    description:
      'The Victor Chang Cardiac Research Institute uses Filecoin to securely store and preserve over 125 TiB of vital cardiac research data.',
    cta: {
      href: 'https://www.victorchang.edu.au/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Smithsonian',
    description:
      'The Smithsonian’s National Museum of American History is working to upload nearly 300 digitized sound recordings from Alexander Graham Bell to the InterPlanetary File System (IPFS) and Filecoin.',
    cta: {
      href: 'https://www.si.edu/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Starling Labs',
    description:
      'Starling Lab is developing technology to help establish and preserve the integrity of digital media, including archiving sensitive records on IPFS and Filecoin.',
    cta: {
      href: 'https://www.starlinglab.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Aethir',
    description:
      'Aethir leverages Filecoin as part of its decentralized cloud infrastructure, enabling scalable and distributed GPU compute and storage services.',
    cta: {
      href: 'https://aethir.com/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Seti Institute',
    description:
      'The SETI Institute uses Filecoin to store and safeguard the massive datasets generated by space research.',
    cta: {
      href: 'https://www.seti.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Internet Archive',
    description:
      'Internet Archive has been leveraging Filecoin since 2021 to store various parts of their digital archive to enhance accessibility and resiliency.',
    cta: {
      href: 'https://archive.org/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'MIT Open Learning',
    description:
      'MIT Open Learning has uploaded the entire OpenCourseWare (OCW) archive to the Filecoin network, to support the institution’s need for tamper-proof archiving.',
    cta: {
      href: 'https://openlearning.mit.edu/',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Flickr Foundation',
    description:
      'Flickr Foundation is using Filecoin to help preserve millions of historical images in a decentralized, future-proof storage system.',
    cta: {
      href: 'https://www.flickr.org/',
      text: CTA_TEXT,
    },
  },
] as const
