import imageFallback from '@/assets/graphics/image-fallback.webp'

import type { SimpleCardWithImageProps } from '@/components/SimpleCardWithImage'

const CTA_TEXT = 'Watch video'

export const codeNCorgiSeries = [
  {
    title: 'Day 1 — Blockchain & Filecoin Essentials',
    description:
      'Learn the basics of Blockchain and Filecoin — the Data Layer of AI — and kickstart your journey into decentralized tech.',
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Day 2 — Understanding Data DAOs',
    description:
      'Understand why high-quality data matters, how Data DAOs solve data ownership challenges, and get set up with FoxWallet.',
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Day 3 — Storing Data on Filecoin (Storacha)',
    description:
      'Explore how decentralized storage supports smarter AI, and learn how to store data on Filecoin through Storacha.',
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Day 4 — Build Your First Subgraph',
    description:
      'Build, deploy, and manage subgraphs to track smart-contract events powering your AI agents — guided by Protofire.',
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Day 5 — Build Your First AI Agent',
    description:
      'Build your first AI agent on Filecoin with CrewAI through a beginner-friendly, step-by-step workflow.',
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Day 6 — Hot Storage + dApp Building',
    description:
      "Get hands-on with Akave's hot-storage solution, then explore FILFrame — your starting point for building a dApp.",
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Day 7 — Product-a-thon & Model Storage',
    description:
      'Prepare for the Product-a-thon: explore real project examples storing AI model data on Filecoin and find problem statements to build on.',
    image: {
      src: imageFallback,
      alt: '',
    },
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
] as const satisfies Array<SimpleCardWithImageProps>
