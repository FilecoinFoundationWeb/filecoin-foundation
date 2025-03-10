import DnaIcon from '@/assets/icons/dna.svg'
import FileIcon from '@/assets/icons/file.svg'
import FistRaised from '@/assets/icons/fist-raised.svg'
import GlobeIcon from '@/assets/icons/globe.svg'
import GraduationCapIcon from '@/assets/icons/graduation-cap.svg'
import ResearchPaperIcon from '@/assets/icons/research-paper.svg'

export const impactAreas = [
  {
    icon: ResearchPaperIcon,
    title: 'DWeb Research and Development',
    description:
      'FFDW supports initiatives that advance decentralized technologies.',
  },
  {
    icon: GraduationCapIcon,
    title: 'Education',
    description:
      'FFDW champions initiatives that increase education and understanding of blockchain, cryptocurrency, and other decentralized technologies.',
  },
  {
    icon: FistRaised,
    title: 'Human Rights',
    description:
      'Records of the fight for human rights can be some of the most vulnerable data in the world — susceptible to tampering or total disappearance on unsecured platforms. FFDW’s work with human rights organizations is dedicated to safeguarding this critical information.',
  },
  {
    icon: GlobeIcon,
    title: 'Cultural Preservation',
    description:
      'The world’s digital artifacts are fragile —many at risk of disappearing forever. FFDW’s work in the area of cultural preservation aims to preserve and safeguard humanity’s digital cultural heritage for the long term.',
  },
  {
    icon: FileIcon,
    title: 'Government Datasets and Policy',
    description:
      'FFDW educates policymakers about the promise of decentralized technologies and works to preserve government data using decentralized technologies like the Filecoin network.',
  },
  {
    icon: DnaIcon,
    title: 'Science and Environment',
    description:
      'Scientific research produces large amounts of data, but there are limited systems in place to preserve this information publicly and securely. FFDW’s work in the area of science and environment aims to preserve this information for the long term.',
  },
] as const
