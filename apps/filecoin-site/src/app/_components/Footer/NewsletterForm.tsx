'use client'

import { Input, Label, Field, Button } from '@headlessui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'

import { Icon } from '@filecoin-foundation/ui/Icon'

import {
  NewsletterFormSchema,
  type NewsletterFormData,
} from './NewsletterFormSchema'

export function NewsletterForm() {
  const { register, handleSubmit, formState } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
  })

  const error = formState.errors.email?.message

  return (
    <form
      className="flex flex-col gap-2 text-white"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field>
        <Label className="text-sm font-medium">
          Sign up for Filecoin updates
        </Label>
        <div className="relative flex items-center gap-4">
          <Input
            {...register('email', { required: true })}
            type="email"
            invalid={Boolean(error)}
            placeholder="Your email"
            autoComplete="email"
            className="form-input h-14 w-full border-b border-zinc-400 placeholder-zinc-400 placeholder:text-sm hover:border-white focus:border-white focus:ring-0 focus:outline-none data-invalid:border-red-500"
          />
          <Button
            disabled={formState.isSubmitting}
            className="absolute right-0 -mr-1 flex h-12 w-12 cursor-pointer items-center justify-center"
            type="submit"
          >
            <div className="relative inline-block">
              <div
                className="absolute inset-0"
                style={{
                  content: '',
                  background: 'var(--gradient-brand)',
                  mixBlendMode: 'multiply',
                }}
              />
              <Icon component={ArrowRightIcon} weight="bold" size={24} />
            </div>
          </Button>
        </div>
        <p className="mt-2 text-sm text-red-300">{error}</p>
      </Field>
    </form>
  )

  function submitForm(data: NewsletterFormData) {
    console.log(data)
  }
}
