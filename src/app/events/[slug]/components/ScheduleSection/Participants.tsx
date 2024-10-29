import React from 'react'

import type { Participant } from '../../../schemas/ScheduleSchema'

export type ParticipantsProps = {
  title: string
  participants: Array<Participant>
}

export function Participants({ title, participants }: ParticipantsProps) {
  const formattedParticipants = formatParticipants(participants)

  return (
    <p className="text-sm">
      <span className="font-semibold">{title}:</span> {formattedParticipants}
    </p>
  )
}

function formatParticipants(participants: Array<Participant>) {
  const formattedList = participants.map(
    ({ name, company }) => `${name} (${company})`,
  )

  if (formattedList.length === 1) return formattedList[0]
  if (formattedList.length === 2) return formattedList.join(' and ')

  return (
    formattedList.slice(0, -1).join(', ') +
    ', and ' +
    formattedList[formattedList.length - 1]
  )
}
