import type { StaticImageProps } from '@/types/imageType'

import { SmartTextLink } from '@/components/TextLink'

import austinImg from '@/assets/orbit/ambassadors/austin-web3-filecoin-meetup.jpg'
import barcelonaImg from '@/assets/orbit/ambassadors/barcelona-web3fc-event.jpg'
import buenosAiresImg from '@/assets/orbit/ambassadors/buenos-aires-event-attendees.jpg'
import indiaImg from '@/assets/orbit/ambassadors/india-classroom-group-photo.jpg'
import kolkataImg from '@/assets/orbit/ambassadors/kolkata-filecoin-event-booth.jpg'
import shenzhenImg from '@/assets/orbit/ambassadors/shenzhen-orbit-china-roadshow.jpg'
import tanzaniaImg from '@/assets/orbit/ambassadors/tanzania-filecoin-community-event.jpg'

export type AmbassadorData = {
  name: string
  location: string
  testimonial: Array<string> | Array<JSX.Element>
  image: StaticImageProps
}

export const ambassadorsData: Array<AmbassadorData> = [
  {
    name: 'Alex Mirran, Logan Lentz & Dante Cullari',
    location: 'Austin, USA',
    testimonial: [
      'Filecoin Orbit Austin has become a hub for developers, students, and startups in Texas! From monthly meetups to web3 developer workshops, the Austin Orbit group has on-boarded hundreds of individuals and companies to the Filecoin ecosystem.',
      'We focus on real-world use cases and tools developers can use today to build cost-effective, resilient systems. Join us for the main Filecoin Orbit event in North America at ETH Denver!',
    ],
    image: {
      data: austinImg,
      alt: 'A group of people standing together at the Austin Web3 Filecoin Meetup Group event. They are indoors, and behind them is a screen displaying the event name and logo. The group consists of men and women, casually dressed, smiling and posing for the photo.',
    },
  },
  {
    name: 'Manish Kumar Barnwal',
    location: 'Kolkata, India',
    testimonial: [
      "I met the Filecoin team IRL for the first time at ETHIndia'22 and got onboarded as a Filecoin Orbit Ambassador. Since then, I've actively contributed by hosting sessions and workshops.",
      "Filecoin sponsored our Hack4Bengal Season 2 hackathon, attracting quality projects. Witnessing increased participation from Kolkata at ETHIndia'23 after participating in local workshops and hackathons.",
      "This year during FILBangalore & ETHIndia'23 I had the opportunity to host an IPFS workshop and mentored at the booth, which was a great experience for me.",
    ],
    image: {
      data: kolkataImg,
      alt: "A man and a woman posing and making peace signs at a Filecoin event booth. The man is sitting and wearing a green high-visibility vest, while the woman is standing and wearing a black 'LabWeek23' t-shirt. The booth has a purple backdrop with Filecoin branding and information, including a depiction of a cityscape. Bottles of water and promotional materials are on the table in front of them.",
    },
  },
  {
    name: 'Adrien Be',
    location: 'Barcelona, Spain',
    testimonial: [
      'We hosted a FVM talk during the 2nd Edition of Web3FC. Pavel Fedotov, a dev building on Filecoin, presented the project to the community.',
      'It was a nice start in collaborating with Filecoin/IPFS/ProtocolLabs who are doing extremely valuable work for the decentralized space.',
      'We are excited to now welcome Robert Dowling in our next conference edition in Barcelona on April 17-19 to further raise awareness, educate and foster collaborations.',
    ],
    image: {
      data: barcelonaImg,
      alt: "A speaker presenting at a Web3FC event in Barcelona, Spain. The presenter is standing in front of a screen displaying a slide about 'Storage Provider Loan Markets' and 'What becomes possible with FVM?'. The audience is seated and listening attentively, with some taking notes on laptops. The room is well-lit with modern decor, and a camera is set up on a tripod to record the event.",
    },
  },
  {
    name: 'Enoch Mbaebie & Martin Kyanja',
    location: 'Lagos, Nigeria & Dare Salem, Tanzania',
    testimonial: [
      "The journey from participating in a hackathon to spearheading Filecoin events in Lagos. Which led me to host the inaugural Filecoin Voyage Anniversary in Lagos, then FIL Lagos—the first of its kind city event dedicated to Filecoin. The momentum didn't stop there. The Dare Salem Hackathon, led by Martin, showcased the creativity and innovation thriving within the Filecoin ecosystem.",
      'Witnessing the expansion into other African Nations i.e. Tanzania, Ethiopia, Morocco, Ghana, FIL Capetown in South Africa has been nothing short of exhilarating, coupled with the leadership figure like Juan Benet continues to drive innovation and connectivity across borders.',
      "Here's to the exciting ventures that lie ahead as we continue to explore great possibilities.",
    ],
    image: {
      data: tanzaniaImg,
      alt: 'A large group of people posing for a group photo outside a building at the Filecoin Orbit Community event in Tanzania. Many of the attendees are wearing white Filecoin t-shirts. Some individuals in the front row are holding large checks as awards for various projects. The group is standing in front of a building with large windows and plants in the foreground.',
    },
  },
  {
    name: 'Laura Angel & Flor Delgado (Zondax)',
    location: 'Buenos Aires, Argentina',
    testimonial: [
      'We hosted a side event on November 9, 2023 in Buenos Aires, Argentina as a side event for LaBitConf - one of the biggest blockchain conferences in the southern hemisphere.',
      "The event's goal was to discuss how Storage provider works and Filecoin's technology overall to the attendees of LaBitConf. Our main speaker, Emmanuel Murano, who has previously worked in Filecoin's projects on behalf of Zondax gave a very interesting chat that spurred a lot of technical and non-technical discussions.",
      'Definitely one for the books!',
    ],
    image: {
      data: buenosAiresImg,
      alt: 'A group of people seated in a brightly lit room with colorful chairs at an event in Buenos Aires. A woman in the foreground is smiling and holding a drink, while others around her are engaged and listening. The room has a vibrant atmosphere with neon lighting and artwork on the walls.',
    },
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
        <SmartTextLink href="https://twitter.com/OrbitChina">
          Twitter
        </SmartTextLink>
        ,{' '}
        <SmartTextLink href="https://orbiteventsinchina.huodongxing.com/">
          event accounts
        </SmartTextLink>
        , and a{' '}
        <SmartTextLink href="https://www.notion.so/orbitcommunityingreaterchina/Filecoin-Orbit-Community-in-Greater-China-0d94acfa59484ef6a6a9b62d41afa2c0?pvs=4">
          Notion page
        </SmartTextLink>{' '}
        for the Chinese region. We also assisted in the overall planning of the
        Orbit Community for 2023, recruited new ambassadors in the Chinese
        region, and promoted the organization of offline activities.
      </>,
      <>
        In January 2024, We hosted the Orbit China Decentralized Storage
        Roadshow Shenzhen event sponsored by FF. Orbit is an incredible journey
        where everyone can ignite new sparks of innovation and collaboration.
        Through this project, I have firsthand experience of the transformative
        power of community, propelling me towards greater creativity and growth.
      </>,
    ],
    image: {
      data: shenzhenImg,
      alt: 'A large group of attendees posing for a group photo at the Orbit China Decentralized Storage Roadshow in Shenzhen. They are holding various signs with logos and names of different organizations like Filecoin Foundation, Protocol Labs, ND Labs, and Origin Storage. The background displays a large banner with the event name and sponsors, in both Chinese and English. The attendees are smiling and standing together in a well-lit conference room.',
    },
  },
  {
    name: 'Bharath Pinaboyina',
    location: 'India',
    testimonial: [
      'We hosted FVM, IPFS & Filecoin workshops across IITs, NITs, IIITs & other top public & private universities in India. Actively building Dev & students community in web3.',
      'Alongside, we hosted hackathons in collaboration with universities to promote web3 tools & infrastructure and also helped to build projects.',
      'In 2023, we visited 20+ universities and also had a chance to host Robert at IIT Bombay, IIT Madras, and IIT Goa events. Had a great time interacting with the new age devs and collaborating with the universities.',
    ],
    image: {
      data: indiaImg,
      alt: 'A large group of students and organizers posing for a group photo in a classroom in India. They are all smiling and wearing ID badges, with some in white shirts featuring a logo. The room has a bright yellow-green color with a whiteboard and projector screen in the background.',
    },
  },
]
