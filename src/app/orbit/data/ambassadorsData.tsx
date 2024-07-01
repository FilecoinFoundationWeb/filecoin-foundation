import { OrbitAmbassadorCardProps } from '@/components/OrbitAmbassadorCard'
import type { StaticImageProps } from '@/components/StaticImage'
import { TextLink } from '@/components/TextLink'

import austinImg from '@/assets/orbit/ambassadors/austin.jpg'
import barcelonaImg from '@/assets/orbit/ambassadors/barcelona.jpg'
import buenosAiresImg from '@/assets/orbit/ambassadors/buenos-aires.jpg'
import indiaImg from '@/assets/orbit/ambassadors/india.jpg'
import kolkataImg from '@/assets/orbit/ambassadors/kolkata.png'
import shenzhenImg from '@/assets/orbit/ambassadors/shenzhen.jpg'
import tanzaniaImg from '@/assets/orbit/ambassadors/tanzania.jpg'

type AmbassadorData = OrbitAmbassadorCardProps & { image: StaticImageProps }

export const ambassadorsData: Array<AmbassadorData> = [
  {
    name: 'Alex Mirran, Logan Lentz & Dante Cullari',
    location: 'Austin, USA',
    testimonial: [
      'Filecoin Orbit Austin has become a hub for developers, students, and startups in Texas! From monthly meetups to web3 developer workshops, the Austin Orbit group has on-boarded hundreds of individuals and companies to the Filecoin ecosystem.',
      'We focus on real world use cases and tools developers can use today to build cost effective, resilient systems. Join us for the main Filecoin Orbit event in North America at ETH Denver!',
    ],
    image: { data: austinImg, alt: 'TODO' },
  },
  {
    name: 'Manish Kumar Barnwal',
    location: 'Kolkata, India',
    testimonial: [
      "I met the Filecoin team IRL for the first time at ETHIndia'22 and got onboarded as a Filecoin Orbit Ambassador. Since then, I've actively contributed by hosting sessions and workshops.",
      "Filecoin sponsored our Hack4Bengal Season 2 hackathon, attracting quality projects. Witnessing increased participation from Kolkata at ETHIndia'23 after participating in local workshops and hackathons. This year during FILBangalore & ETHIndia'23 I had the opportunity to host an IPFS workshop and mentored at the booth, which was a great expereince for me.",
    ],
    image: { data: kolkataImg, alt: 'TODO' },
  },
  {
    name: 'Adrien Be',
    location: 'Barcelona, Spain',
    testimonial: [
      'We hosted a FVM talk during the 2nd Edition of Web3FC. Pavel Fedotov, a dev building on Filecoin, presented the project to the community. It was a nice start in collaborating with Filecoin/IPFS/ProtocolLabs who are doing an extremely valuable work for the decentralized space. We are excited to now welcome Robert Dowling in our next conference edition in Barcelona on April 17-19 to further raise awareness, educate and foster collaborations.',
    ],
    image: { data: barcelonaImg, alt: 'TODO' },
  },
  {
    name: 'Enoch Mbaebie & Martin Kyanja',
    location: ['Lagos, Nigeria', 'Dare Salem, Tanzania'],
    testimonial: [
      "The journey from participating in a hackathon to spearheading Filecoin events in Lagos. Which led me to host the inaugural Filecoin Voyage Anniversary in Lagos, then FIL Lagos—the first of its kind city event dedicated to Filecoin. The momentum didn't stop there. The Dare Salem Hackathon, led by Martin, showcased the creativity and innovation thriving within the Filecoin ecosystem.",
      'Witnessing the expansion into other African Nations i.e. Tanzania, Ethiopia, Morocco, Ghana, FIL Capetown in South Africa has been nothing short of exhilarating, coupled with the leadership figure like Juan Benet continues to drive innovation and connectivity across borders.',
      "Here's to the exciting ventures that lie ahead as we continue to explore great possibilities.",
    ],
    image: { data: tanzaniaImg, alt: 'TODO' },
  },
  {
    name: 'Laura Angel & Flor Delgado (Zondax)',
    location: 'Buenos Aires, Argentina',
    testimonial: [
      'We hosted a side event on November 9, 2023 in Buenos Aires, Argentina as a side event for LaBitConf - one of the biggest blockchain conferences in the southern hemisphere.',
      "The event's goal was to discuss how Storage provider works and Filecoin's technology overall to the attendees of LaBitConf. Our main speaker, Emmanuel Murano, who has previously worked in Filecoin's projects on behalf of Zondax gave a very interesting chat that spurred a lot of technical and non-technical discussions. Definitely one for the books!",
    ],
    image: { data: buenosAiresImg, alt: 'TODO' },
  },
  {
    name: 'Fiona Lee',
    location: 'Shenzhen, China',
    testimonial: [
      <>
        New Web Group Team became the first batch of ambassadors for the Orbit
        project in 2022 and has since been dedicated to the development of the
        Orbit community.
      </>,
      <>
        We organized Orbit Meetup events sponsored by FF in November 2022 and
        FVM Hack Day events in February 2023. Subsequently, we actively
        participated in the volunteer activities of Fil Hongkong in April and
        co-hosted an FVM event with ND Labs during the event.
      </>,
      <>
        In September, we participated in the Fil Dev Summit Singapore event,
        serving as a volunteer leader. In the same year, we jointly became
        leaders of the Orbit Greater China region with ND Labs, establishing{' '}
        <TextLink href="https://twitter.com/OrbitChina">Twitter</TextLink>,{' '}
        <TextLink href="https://orbiteventsinchina.huodongxing.com/">
          event accounts
        </TextLink>
        , and a{' '}
        <TextLink href="https://www.notion.so/orbitcommunityingreaterchina/Filecoin-Orbit-Community-in-Greater-China-0d94acfa59484ef6a6a9b62d41afa2c0?pvs=4">
          Notion page
        </TextLink>{' '}
        for the Chinese region. We also assisted in the overall planning of the
        Orbit Community for 2023, recruited new ambassadors in the Chinese
        region, and promoted the organization of offline activities.
      </>,
      <>
        In January 2024, We hosted the Orbit China Decentralised Storage
        Roadshow ·Shenzhen event sponsored by FF. Orbit is an incredible journey
        where everyone can ignite new sparks of innovation and collaboration.
        Through this project, I have firsthand experience of the transformative
        power of community, propelling me towards greater creativity and growth.
      </>,
    ],
    image: { data: shenzhenImg, alt: 'TODO' },
  },
  {
    name: 'Bharath Pinaboyina',
    location: 'India',
    testimonial: [
      'We hosted FVM, IPFS & Filecoin workshops across IITs, NITs, IIITs & other top public & private universities in India. Actively building Dev & students community in web3. Along side hosted hackathons in collaboration with universities to promote web3 tools & infra and also helped to build projects. In 2023, been to 20+ universities, also had a chance to host Robert at IIT Bombay, IIT MADRAS and IIT Goa events. Had a great time interacting with the new age devs and collaborate with the universities.',
    ],
    image: { data: indiaImg, alt: 'TODO' },
  },
]
