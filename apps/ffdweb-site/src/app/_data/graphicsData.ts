import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import about from '@/assets/graphics/about.webp'
import digest from '@/assets/graphics/digest.webp'
import dWebDigestCover from '@/assets/graphics/dweb-digest-cover.webp'
import homepage from '@/assets/graphics/homepage.webp'
import learningResources from '@/assets/graphics/learning-resources.webp'
import projects from '@/assets/graphics/projects.webp'

export const graphicsData: Record<string, StaticImageProps> = {
  imageFallback: {
    data: homepage,
    alt: 'Image fallback',
  },
  about: {
    data: about,
    alt: 'A data center visualization showing server racks illuminated in green and purple, arranged in rows with network connections indicated by light trails on the floor between them. The central server tower is prominently featured with bright green lighting.',
  },
  digest: {
    data: digest,
    alt: 'A dimly lit interior of a print shop with multiple printing machines, colorful supply bins, digital control panels, and a "PRINT SHOP" sign illuminated with neon-style lighting.',
  },
  dWebDigestCover: {
    data: dWebDigestCover,
    alt: 'A futuristic "D-WEB DIGEST" magazine cover featuring a glowing network sphere graphic with neon colors on black, showcasing decentralized web technology themes.',
  },
  homepage: {
    data: homepage,
    alt: 'An abstract 3D visualization of interconnected data cubes and nodes in green, blue, pink, and purple, forming a complex network structure against a dark background.',
  },
  learningResources: {
    data: learningResources,
    alt: 'A neon-style illustration of a workshop pegboard with tools, featuring colorful outlines of various tools including a hammer, screwdrivers, wrenches, pliers, a drill, and containers, all arranged on a dark background with a bright green border.',
  },
  projects: {
    data: projects,
    alt: 'A digital visualization of Earth as a glowing green and purple globe with connection points and network lines around it, resembling a global digital network or worldwide data connectivity system.',
  },
}
