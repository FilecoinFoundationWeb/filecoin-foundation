'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import ControlledFormInput from '@/components/Form/ControlledFormInput'
import Form from '@/components/Form/Form'
import { IconProps } from '@/components/Icon'
import { NotificationDialog } from '@/components/NotificationDialog'

const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type NewsLetterFormType = z.infer<typeof NewsletterSchema>

type NotificationDialogState = {
  isOpen: boolean
  title?: string
  icon?: IconProps['component']
  iconColor?: IconProps['color']
}

const AUTHORIZATION_HEADER = `Bearer ${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_API_KEY}`
const NEWSLETTER_URL = `${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_API_URL}/publications/${process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTION_PUBLICATION_ID}/subscriptions`
const NOTIFICATION_DIALOG_DURATION_MS = 5000

export function NewsletterForm() {
  const methods = useForm<NewsLetterFormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState
  const [dialogState, setDialogState] = useState<NotificationDialogState>({
    isOpen: false,
  })

  const { isOpen, title, icon, iconColor } = dialogState

  async function onSubmit(values: NewsLetterFormType) {
    try {
      await postSubscription(values.email)
      setDialogState({
        isOpen: true,
        title: 'Successfully subscribed!',
        icon: CheckCircle,
        iconColor: 'green-400',
      })
    } catch (error) {
      setDialogState({
        isOpen: true,
        title: 'An error has occurred. Please try again.',
        icon: XCircle,
        iconColor: 'red-400',
      })
      Sentry.captureException(error)
    } finally {
      methods.resetField('email')
      setTimeout(() => {
        setDialogState((prev) => ({ ...prev, isOpen: false }))
      }, NOTIFICATION_DIALOG_DURATION_MS)
    }
  }

  function getError(
    errors: FieldErrors<NewsLetterFormType>,
    name: keyof NewsLetterFormType,
  ) {
    return errors[name]?.message
  }

  return (
    <Form<NewsLetterFormType>
      methods={methods}
      className="relative"
      onSubmit={onSubmit}
    >
      <div className="flex items-end space-x-2">
        <div className="w-72">
          <ControlledFormInput<NewsLetterFormType>
            hideLabel
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            error={getError(methods.formState.errors, 'email')}
          />
        </div>
        <div className="flex min-w-44 [&>*:first-child]:flex-1">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing' : 'Subscribe'}
          </Button>
        </div>
      </div>
      <NotificationDialog
        title={title}
        icon={icon}
        iconColor={iconColor}
        isOpen={isOpen}
        setIsOpen={(isOpen) => setDialogState((prev) => ({ ...prev, isOpen }))}
      />
    </Form>
  )
}

function postSubscription(email: string): Promise<number> {
  return fetch(NEWSLETTER_URL, {
    method: 'POST',
    headers: {
      Authorization: AUTHORIZATION_HEADER,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((response) => response.status)
}
