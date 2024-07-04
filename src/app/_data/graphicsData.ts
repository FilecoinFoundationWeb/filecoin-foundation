import { StaticImageProps } from '@/components/StaticImage'

import about from '@/assets/graphics/Filorg_About.png'
import ecosystem from '@/assets/graphics/Filorg_Ecosystem_Explorer.png'
import events1 from '@/assets/graphics/Filorg_Events1.png'
import events2 from '@/assets/graphics/Filorg_Events2.png'
import events3 from '@/assets/graphics/Filorg_Events3.png'
import governance1 from '@/assets/graphics/Filorg_Governance1.png'
import governance2 from '@/assets/graphics/Filorg_Governance2.png'
import governance3 from '@/assets/graphics/Filorg_Governance3.png'
import grants from '@/assets/graphics/Filorg_Grants.png'
import home from '@/assets/graphics/Filorg_Home.png'
import imageFallback from '@/assets/graphics/Filorg_ImageFallback.png'
import logoFallback from '@/assets/graphics/Filorg_LogoFallback.png'
import orbit from '@/assets/graphics/Filorg_Orbit.webp'
import rAndD from '@/assets/graphics/Filorg_RandD.png'
import security from '@/assets/graphics/Filorg_Security.webp'
import security2 from '@/assets/graphics/Filorg_Security2.webp'
import security3 from '@/assets/graphics/Filorg_Security3.webp'
import security4 from '@/assets/graphics/Filorg_Security4.webp'

export const graphicsData: Record<string, StaticImageProps> = {
  home: {
    data: home,
    alt: 'A grand library with modern server racks and a large network of spheres above, symbolizing data and technology.',
  },
  about: {
    data: about,
    alt: 'A digital rendering of the Earth with interconnected points, highlighting global connectivity and communication.',
  },
  ecosystem: {
    data: ecosystem,
    alt: 'Magnifying glass focusing on a network of interconnected blue and white spheres, symbolizing exploration and analysis of connections.',
  },
  events1: {
    data: events1,
    alt: 'Auditorium with rows of seats facing a stage displaying a digital Earth image, surrounded by modern lighting and panels.',
  },
  events2: {
    data: events2,
    alt: 'Large event space with people gathered around tables for networking, many wearing yellow backpacks, against a bright blue backdrop.',
  },
  events3: {
    data: events3,
    alt: 'Speaker presenting to a full audience in a dark auditorium, with attendees attentively listening and engaged in the presentation.',
  },
  governance1: {
    data: governance1,
    alt: 'Interconnected network of blue and white spheres with icons of people, representing a social network or digital communication.',
  },
  governance2: {
    data: governance2,
    alt: 'Digital illustration of a futuristic bridge construction with cranes and vehicles on a circuit board-like surface, symbolizing advanced infrastructure.',
  },
  governance3: {
    data: governance3,
    alt: 'Modern conference room with people gathered around a circular table, discussing important issues, illuminated by natural light.',
  },
  grants: {
    data: grants,
    alt: 'Futuristic garden with blue plants and a waterfall, set in a modern architectural space with columns and curved structures.',
  },
  security: {
    data: security,
    alt: 'An illustration depicting a large, old-fashioned key unlocking a futuristic padlock. The scene is set against a light background, with various abstract geometric shapes and elements around the key and lock, suggesting a theme of digital security or unlocking digital information.',
  },
  security2: {
    data: security2,
    alt: 'A futuristic control room with a large central column displaying various data on high-tech screens. The room is filled with multiple workstations, each equipped with dual monitors showing complex graphs, charts, and data readouts. The walls and floor also feature integrated digital displays, creating an immersive environment of advanced technology and data analysis.',
  },
  security3: {
    data: security3,
    alt: 'An illustration depicting a network of interconnected shields, each representing a node in a secure system. The shields are placed on circular platforms linked by glowing blue lines, symbolizing a robust and interconnected cybersecurity network.',
  },
  security4: {
    data: security4,
    alt: 'An illustration showing a magnifying glass focusing on a screen displaying lines of code. The scene is filled with abstract spherical elements connected by thin lines, and a small, stylized bug is visible near the bottom, symbolizing the concept of debugging or analyzing code.',
  },
  orbit: {
    data: orbit,
    alt: 'An illustration of a stylized Earth surrounded by numerous smaller spheres and planets, some with rings, floating in space. The Earth is depicted with vibrant blue and white colors, while the surrounding spheres are in varying shades of blue and grey, suggesting a cosmic or orbital theme.',
  },
  rAndD: {
    data: rAndD,
    alt: 'A high-tech R&D lab with workstations and a large spherical network structure above a central platform.',
  },
  imageFallback: {
    data: imageFallback,
    alt: 'Image coming soon',
  },
  logoFallback: {
    data: logoFallback,
    alt: 'Logo coming soon',
  },
}
