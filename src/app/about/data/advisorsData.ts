import type { MemberData } from '@/types/memberType'

import AlexFeerst from '@/assets/headshots/Alex_Feerst.png'
import BrewsterKahle from '@/assets/headshots/Brewster_Kahle.png'
import CatherineStihler from '@/assets/headshots/Catherine_Stihler.png'
import DenelleDixon from '@/assets/headshots/Denelle_Dixon.png'
import GeorgiaQuinn from '@/assets/headshots/Georgia_Quinn.png'
import JoeLubin from '@/assets/headshots/Joe_Lubin.png'
import KatieBiber from '@/assets/headshots/Katie_Biber.png'
import RyeBarcott from '@/assets/headshots/Rye_Barcott.png'
import SandraRo from '@/assets/headshots/Sandra_Ro.png'
import VeronicaMcGregor from '@/assets/headshots/Veronica_McGregor.png'
import WendyHanamura from '@/assets/headshots/Wendy_Hanamura.png'

export const advisorsData: Array<MemberData> = [
  {
    name: 'Brewster Kahle',
    title: 'Founder, Internet Archive',
    linkedin: 'https://www.linkedin.com/in/brewster-kahle-2a647652/',
    image: { src: BrewsterKahle, alt: 'Photo of Brewster Kahle' },
  },
  {
    name: 'Joe Lubin',
    title: 'Founder, Consensys & Cofounder, Ethereum',
    linkedin: 'https://www.linkedin.com/in/joseph-lubin-48406489/',
    image: { src: JoeLubin, alt: 'Photo of Joe Lubin' },
  },
  {
    name: 'Denelle Dixon',
    title: 'CEO, Stellar Development Foundation',
    linkedin: 'https://www.linkedin.com/in/denelle-dixon-967a236/',
    image: { src: DenelleDixon, alt: 'Photo of Denelle Dixon' },
  },
  {
    name: 'Sandra Ro',
    title: 'CEO, Global Blockchain Business Council',
    linkedin: 'https://www.linkedin.com/in/sandraro/',
    image: { src: SandraRo, alt: 'Photo of Sandra Ro' },
  },
  {
    name: 'Wendy Hanamura',
    title: 'Director of Partnerships, Internet Archive',
    linkedin: 'https://www.linkedin.com/in/wendyhanamura/',
    image: { src: WendyHanamura, alt: 'Photo of Wendy Hanamura' },
  },
  {
    name: 'Katie Biber',
    title: 'Chief Legal Officer, Paradigm',
    linkedin: 'https://www.linkedin.com/in/katiebiber/',
    image: { src: KatieBiber, alt: 'Photo of Katie Biber' },
  },
  {
    name: 'Georgia Quinn',
    title: 'Former General Counsel, Anchorage and CoinList ',
    linkedin: 'https://www.linkedin.com/in/georgia-quinn-287bb733/',
    image: { src: GeorgiaQuinn, alt: 'Photo of Georgia Quinn' },
  },
  {
    name: 'Veronica McGregor',
    title: 'Chief Legal Officer, Exodus',
    linkedin: 'https://www.linkedin.com/in/vemcgregor/',
    image: { src: VeronicaMcGregor, alt: 'Photo of Veronica McGregor' },
  },
  {
    name: 'Alex Feerst',
    title: 'CEO, Murmuration Labs & Former General Counsel, Medium',
    linkedin: 'https://www.linkedin.com/in/feerst/',
    image: { src: AlexFeerst, alt: 'Photo of Alex Feerst' },
  },
  {
    name: 'Rye Barcott',
    title: 'CEO, With Honor',
    linkedin: 'https://www.linkedin.com/in/ryebarcott/',
    image: { src: RyeBarcott, alt: 'Photo of Rye Barcott' },
  },
  {
    name: 'Catherine Stihler',
    title:
      'Former CEO, Creative Commons & Former Member of European Parliament',
    linkedin: 'https://www.linkedin.com/in/catherine-stihler/',
    image: { src: CatherineStihler, alt: 'Photo of Catherine Stihler' },
  },
]
