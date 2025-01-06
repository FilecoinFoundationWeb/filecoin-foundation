type ApplicationAndUseData = {
  description: string,
  step: number,
  title: string
}

export const applicationAndUseData: Array<ApplicationAndUseData> = [
  {
    step: 1,
    title: 'Level 1: Initial and Ad-hoc',
    description:
      'Represents an initial awareness and a basic understanding of the concept being evaluated (e.g., security culture). There is minimal formalization and process/documentation may not exist.',
  },
  {
    step: 2,
    title: 'Level 2: Defined and Repeatable',
    description:
      'Indicates that structured programs are in place, aimed at promoting, reinforcing, and sustaining the practices necessary to support the area being evaluated. There is an emphasis on proactive capabilities in security.',
  },
  {
    step: 3,
    title: 'Level 3: Optimized and Measurable',
    description:
      'Reflects a focus on continuous improvement. Practitioners use metrics and feedback loops to refine their security processes and practices constantly. Capabilities are driven by data and metrics to make informed security decisions, and there is a focus on optimizing security efforts based on evolving threats and lessons learned.',
  },
]
