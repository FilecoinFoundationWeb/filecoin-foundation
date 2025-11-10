'use client'

import { Input, Label, Field, Button } from '@headlessui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'
import {
  NewsletterFormSchema,
  type NewsletterFormData,
} from '@filecoin-foundation/utils/schemas/NewsletterFormSchema'

export function NewsletterForm() {
  const { register, handleSubmit, formState } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
  })

  const error = formState.errors.email?.message

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitForm)}>
      <Field>
        <Label className="form-label">Sign up for Filecoin updates</Label>
        <div className="relative flex items-center gap-4 pt-1">
          <Input
            {...register('email', { required: true })}
            type="email"
            invalid={Boolean(error)}
            placeholder="Your email"
            autoComplete="email"
            className="form-text-input"
          />
          <Button
            disabled={formState.isSubmitting}
            className="focus:brand-outline absolute right-0 -mr-1 flex h-12 w-12 cursor-pointer items-center justify-center"
            type="submit"
            aria-label="Submit newsletter subscription"
          >
            <div className="text-brand-600 relative inline-block">
              <Icon component={ArrowRightIcon} size={20} />
            </div>
          </Button>
        </div>

        {error && <p className="form-error-description mt-2">{error}</p>}
      </Field>
    </form>
  )

  function submitForm(data: NewsletterFormData) {
    console.log(data)
  }
}
