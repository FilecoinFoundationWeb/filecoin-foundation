'use client'

import { useForm } from 'react-hook-form'

import { ControlledFormTextarea } from '@/components/Form/ControlledFormTextarea'
import { Form } from '@/components/Form/Form'

type FormData = {
  title: string
  description: string
}

export default function Storybook() {
  const methods = useForm<FormData>()

  return (
    <div>
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
