export type DigestIssueData = {
  number: '1' | '2'
  date: string
  title: string
  description: Array<string>
}

export const digestIssues: Array<DigestIssueData> = [
  {
    number: '1',
    date: '2024-05-01',
    title: 'Inaugural Edition',
    description: [
      'The DWeb Digest is an online magazine featuring articles from industry experts on topics ranging from cognitive liberty to privacy and crypto policy.',
      'This inaugural edition explores the fundamental principles of decentralization and why they matter for our digital future.',
    ],
  },
  {
    number: '2',
    date: '2025-10-01',
    title: 'Issue 2',
    description: [
      'The DWeb Digest continues its exploration of decentralized technologies and their impact on society.',
      'This issue features cutting-edge research and practical applications of Web3 technologies.',
    ],
  },
]
