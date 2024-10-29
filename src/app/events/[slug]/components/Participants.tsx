import React from 'react'

import type { NonEmptyArray } from '@/types/utils'

import type { Participant } from '../../schemas/ScheduleSchema'

export type ParticipantsProps = {
  title: string
  participants: NonEmptyArray<Participant>
}

export function Participants({ title, participants }: ParticipantsProps) {
  return (
    <p className="text-sm">
      <span className="font-semibold">{title}:</span>{' '}
      <span>{participants.map(formatParticipant).join('; ')}</span>
    </p>
  )
}

function formatParticipant({ name, company }: Participant) {
  return `${name}, ${company}`
}
