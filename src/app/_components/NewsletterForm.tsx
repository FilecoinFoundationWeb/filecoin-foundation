'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import * as Sentry from '@sentry/nextjs'
import { type FieldErrors, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { ControlledFormInput } from '@/components/Form/ControlledFormInput'
import { Form } from '@/components/Form/Form'
import type { IconProps } from '@/components/Icon'
import { NotificationDialog } from '@/components/NotificationDialog'

const NewsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
})

export type NewsLetterFormType = z.infer<typeof NewsletterSchema>

const NOTIFICATION_DIALOG_DURATION_MS = 5000

type NotificationDialogState = {
  isOpen: boolean
  title?: string
  icon?: IconProps
}

export function NewsletterForm() {
  const { methods, isSubmitting, dialogState, handleCloseDialog, onSubmit } =
    useNewsletterForm()

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
        <div className="flex min-w-44">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? 'Subscribing' : 'Subscribe'}
          </Button>
        </div>
      </div>
      <NotificationDialog
        title={dialogState.title}
        icon={dialogState.icon}
        isOpen={dialogState.isOpen}
        setIsOpen={handleCloseDialog}
      />
    </Form>
  )
}

function useNewsletterForm() {
  const methods = useForm<NewsLetterFormType>({
    resolver: zodResolver(NewsletterSchema),
  })

  const { isSubmitting } = methods.formState
  const [dialogState, setDialogState] = useState<NotificationDialogState>({
    isOpen: false,
  })

  function handleCloseDialog() {
    setDialogState((prev) => ({ ...prev, isOpen: false }))
  }

  function displayNotification(title: string, icon: IconProps) {
    setDialogState({
      isOpen: true,
      title,
      icon,
    })

    setTimeout(handleCloseDialog, NOTIFICATION_DIALOG_DURATION_MS)
  }

  async function onSubmit(values: NewsLetterFormType) {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      displayNotification('Successfully subscribed!', {
        component: CheckCircle,
        color: 'green-400',
      })
    } catch (error) {
      displayNotification('An error has occurred. Please try again.', {
        component: XCircle,
        color: 'red-400',
      })
      Sentry.captureException(error)
    } finally {
      methods.resetField('email')
    }
  }

  return {
    methods,
    isSubmitting,
    dialogState,
    handleCloseDialog,
    displayNotification,
    onSubmit,
  }
}

function getError(
  errors: FieldErrors<NewsLetterFormType>,
  name: keyof NewsLetterFormType,
) {
  return errors[name]?.message
}
