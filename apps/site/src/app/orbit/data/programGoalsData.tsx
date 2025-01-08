import type { StaticImageProps } from '@/types/imageType'

import audienceSeatedLargeAuditoriumImg from '@/assets/orbit/goals/audience-seated-large-auditorium.jpg'
import speakerPresentationNewsPaperImg from '@/assets/orbit/goals/speaker-presentation-newspaper-tech-event.jpg'
import speakersAppreciationGroupPhoto from '@/assets/orbit/goals/speakers-appreciation-group-photo.jpg'

type ProgramGoalsData = {
  description: string,
  image: StaticImageProps,
  title: string
}

export const programGoalsData: Array<ProgramGoalsData> = [
  {
    title: 'Educate',
    description:
      'Orbit educates interested stakeholders about Filecoin and its technologies',
    image: {
      data: speakerPresentationNewsPaperImg,
      alt: 'A speaker presenting on stage with a large screen displaying a newspaper front page and a tech event banner.',
    },
  },
  {
    title: 'Inspire',
    description:
      'This program inspires the Filecoin community to build and develop on the network',
    image: {
      data: speakersAppreciationGroupPhoto,
      alt: 'Group of five people standing on stage holding certificates of appreciation with a "Tech Fantasy" event banner in the background',
    },
  },
  {
    title: 'Identify Opportunities',
    description:
      'Orbit identifies opportunities to improve the Filecoin ecosystem',
    image: {
      data: audienceSeatedLargeAuditoriumImg,
      alt: 'Audience seated in a large auditorium, attentively watching a presentation.',
    },
  },
]
