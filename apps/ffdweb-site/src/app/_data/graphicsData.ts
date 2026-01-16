import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import about from '@/assets/graphics/about.webp'
import blog from '@/assets/graphics/blog.webp'
import digest from '@/assets/graphics/digest.webp'
import dWebDigestCover from '@/assets/graphics/dweb-digest-cover.webp'
import fallback from '@/assets/graphics/fallback.webp'
import homepage from '@/assets/graphics/homepage.webp'
import learningResources from '@/assets/graphics/learning-resources.webp'
import projects from '@/assets/graphics/projects.webp'
import dWebDigestCover2 from '@/assets/images/dwd2-1.webp'

export const graphicsData = {
  imageFallback: {
    data: fallback,
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
  dWebDigestCover2: {
    data: dWebDigestCover2,
    alt: 'Illustrated magazine cover showing interconnected domes representing resilient web architecture',
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
  blog: {
    data: blog,
    alt: 'A futuristic news studio with a glowing holographic globe, digital screens displaying data, and four panelists in discussion. Neon lighting and studio cameras enhance the high-tech atmosphere.',
  },
} as const satisfies Record<string, StaticImageProps>

export const digestIssueImages: Record<number, StaticImageProps> = {
  1: graphicsData.dWebDigestCover,
  2: graphicsData.dWebDigestCover2,
}
