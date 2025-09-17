type DateFormat = `${string} ${number}`
type KickerFormat = `Issue ${string} | ${DateFormat}`

export type IssueData = {
  number: string
  date: DateFormat
  title: string
  kicker: KickerFormat
  description: string[]
}

export const ISSUES_DATA: Record<string, Omit<IssueData, 'number'>> = {
  '1': {
    date: 'May 2024',
    title: 'DWeb Digest: Inaugural Edition',
    kicker: 'Issue 1 | May 2024',
    description: [
      'The DWeb Digest is an online magazine featuring articles from industry experts on topics ranging from cognitive liberty to privacy and crypto policy.',
      'This inaugural edition explores the fundamental principles of decentralization and why they matter for our digital future.',
    ],
  },
  '2': {
    date: 'June 2024',
    title: 'DWeb Digest: Issue 2',
    kicker: 'Issue 2 | June 2024',
    description: [
      'The DWeb Digest continues its exploration of decentralized technologies and their impact on society.',
      'This issue features cutting-edge research and practical applications of Web3 technologies.',
    ],
  },
}
