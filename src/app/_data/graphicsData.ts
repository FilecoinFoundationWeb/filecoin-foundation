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
import rAndD from '@/assets/graphics/Filorg_RandD.png'

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
