'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { NewsletterSchema } from '@/_schemas/newsletterSchema'

import { Button } from './Button'
import { InputField, InputFieldProps } from './InputField'

export const newsletterFields: InputFieldProps[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
]

type NewsletterFormData = {
  email: string
}

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterSchema),
  })

  const onSubmit = (data: NewsletterFormData) => {
    console.log(data)
    reset()
  }

  return (
    <form
      className="relative flex items-end space-x-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {newsletterFields.map((field) => (
        <div key={field.name}>
          <InputField
            {...field}
            {...register(field.name as keyof NewsletterFormData)}
            errorMessage={
              errors[field.name as keyof NewsletterFormData]?.message
            }
          />
        </div>
      ))}
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
