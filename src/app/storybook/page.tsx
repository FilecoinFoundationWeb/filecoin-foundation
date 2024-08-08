'use client'
import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { ControlledFormTextarea } from '@/components/Form/ControlledFormTextarea'
import { Form } from '@/components/Form/Form'
import { FormListbox } from '@/components/Form/FormListbox'

type FormData = {
  title: string
  description: string
}

type Person = {
  id: string
  value: string
}

const people = [
  { id: '1', value: 'Durward Reynolds', count: 10 },
  { id: '2', value: 'Kenton Towne', count: 5 },
  { id: '3', value: 'Therese Wunsch', count: 2 },
  { id: '4', value: 'Benedict Kessler', count: 18 },
  { id: '5', value: 'Katelyn Rohan', count: 729 },
]

export default function Storybook() {
  const methods = useForm<FormData>()
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <FormListbox
        label="Sort by"
        options={people}
        selectedOption={selectedPerson}
        placeholder="Sort by"
        onChange={setSelectedPerson}
      />

      <br />
      <br />

      <Form<FormData> methods={methods} onSubmit={console.log}>
        <ControlledFormTextarea<FormData>
          name="description"
          label="A text area"
          charcterLimit={1_600}
          placeholder="Write a brief summary of your project..."
          rules={{
            required: 'This field is required',
          }}
        />

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
