import type { MemberData } from '@/types/memberType'

import JoeLandon from '@/assets/headshots/Joe_Landon.png'
import KristinSmith from '@/assets/headshots/Kristin_Smith.png'
import MartaBelcher from '@/assets/headshots/Marta_Belcher.webp'
import PhilipRosedale from '@/assets/headshots/Philip_Rosedale.png'
import SheilaWarren from '@/assets/headshots/Sheila_Warren.png'

export const boardMembersData: Array<MemberData> = [
  {
    name: 'Marta Belcher',
    title: 'President & Board Chair, FF & FFDW',
    linkedin: 'https://www.linkedin.com/in/martabelcher/',
    image: MartaBelcher,
  },
  {
    name: 'Joe Landon',
    title: 'Co-Founder & President, Rendezvous Robotics',
    linkedin: 'https://www.linkedin.com/in/joelandon/',
    image: JoeLandon,
  },
  {
    name: 'Kristin Smith',
    title: 'President, Solana Policy Institute',
    linkedin: 'https://www.linkedin.com/in/smithk1/',
    image: KristinSmith,
  },
  {
    name: 'Philip Rosedale',
    title: 'Founder & CTO, Linden Lab / Second Life',
    linkedin: 'https://www.linkedin.com/in/philiprosedale',
    image: PhilipRosedale,
  },
  {
    name: 'Sheila Warren',
    title: 'CEO, Project Liberty Institute',
    linkedin: 'https://www.linkedin.com/in/sheilawarren/',
    image: SheilaWarren,
  },
]
