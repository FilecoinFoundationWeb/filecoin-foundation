import type { MemberData } from '@/types/memberType'

import BrianBehlendorf from '@/assets/headshots/Brian_Behlendorf.png'
import MarciaHofmann from '@/assets/headshots/Marcia_Hofmann.png'
import MartaBelcher from '@/assets/headshots/Marta_Belcher.png'
import NicoleWong from '@/assets/headshots/Nicole_Wong.png'

export const boardMembersData: Array<MemberData> = [
  {
    name: 'Marta Belcher',
    title: 'President & Chair, Filecoin',
    linkedin: 'https://www.linkedin.com/in/martabelcher/',
    image: MartaBelcher,
  },
  {
    name: 'Marcia Hofmann',
    title: 'Electronic Privacy Attorney',
    linkedin: 'https://www.linkedin.com/in/marciahofmann/',
    image: MarciaHofmann,
  },
  {
    name: 'Brian Behlendorf',
    title: 'Chief AI Strategist, Linux Foundation',
    linkedin: 'https://www.linkedin.com/in/brianbehlendorf/',
    image: BrianBehlendorf,
  },
  {
    name: 'Nicole Wong',
    title: 'Former Deputy U.S. Chief',
    linkedin: 'https://www.linkedin.com/in/nicole-wong-96b4335/',
    image: NicoleWong,
  },
]
