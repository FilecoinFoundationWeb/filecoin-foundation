import type { MemberData } from '@/types/memberType'

import JoeLubin from '@/assets/headshots/Joe_Lubin.png'
import KristinSmith from '@/assets/headshots/Kristin_Smith.png'
import MartaBelcher from '@/assets/headshots/Marta_Belcher.png'
import PhilipRosendale from '@/assets/headshots/Philip_Rosendale.png'
import SheilaWarren from '@/assets/headshots/Sheila_Warren.png'

export const boardMembersData: Array<MemberData> = [
  {
    name: 'Marta Belcher',
    title: 'President & Board Chair, FF & FFDW',
    linkedin: 'https://www.linkedin.com/in/martabelcher/',
    image: MartaBelcher,
  },
  {
    name: 'Sheila Warren',
    title: 'CEO, Project Liberty Institute',
    linkedin: 'https://www.linkedin.com/in/sheilawarren/',
    image: SheilaWarren,
  },
  {
    name: 'Kristin Smith',
    title: 'President, Solana Policy Institute',
    linkedin: 'https://www.linkedin.com/in/smithk1/',
    image: KristinSmith,
  },
  {
    name: 'Philip Rosendale',
    title: 'Founder & CTO, Linden Lab',
    linkedin: 'https://www.linkedin.com/in/philiprosedale',
    image: PhilipRosendale,
  },
  {
    name: 'Joe Lubin',
    title: 'Co-Founder & President, Rendezvous Robotics',
    linkedin: 'https://www.linkedin.com/in/joseph-lubin-48406489/',
    image: JoeLubin,
  },
]
