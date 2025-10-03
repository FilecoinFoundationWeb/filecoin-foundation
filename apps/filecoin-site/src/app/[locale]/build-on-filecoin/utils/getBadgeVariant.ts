import { type TutorialsAndGuides } from '../data/tutorialsAndGuides'

export function getBadgeVariant(difficulty: TutorialsAndGuides['difficulty']) {
  switch (difficulty) {
    case 'Beginner':
      return 'primary'
    case 'Intermediate':
      return 'secondary'
    case 'Advanced':
      return 'tertiary'
  }
}
