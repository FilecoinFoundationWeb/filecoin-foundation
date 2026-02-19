'use client'

import { Button } from '@headlessui/react'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { NotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'
import { type NewsletterFormData } from '@filecoin-foundation/utils/schemas/NewsletterFormSchema'

import { useNewsletterForm } from '@/hooks/useNewsletterForm'

export function NewsletterForm() {
  const t = useTranslations('newsletterForm')

  const { form, dialog, onSubmit } = useNewsletterForm()

  const isSubmitting = form.formState.isSubmitting

  return (
    <ControlledForm<NewsletterFormData>
      form={form}
      className="flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      <div className="relative flex items-center gap-4">
        <ControlledFormInput<NewsletterFormData>
          name="email"
          label={t('label')}
          type="email"
          placeholder={t('placeholder')}
          autoComplete="email"
        />

        <Button
          disabled={isSubmitting}
          className="focus:brand-outline absolute right-0 -mr-1 flex h-12 w-12 cursor-pointer items-center justify-center"
          type="submit"
          aria-label={t('submitAriaLabel')}
        >
          <div className="text-brand-600 relative inline-block">
            <Icon component={ArrowRightIcon} size={20} />
          </div>
        </Button>
      </div>
      <NotificationDialog
        message={dialog.message}
        isOpen={dialog.isOpen}
        icon={dialog.icon}
        onClose={dialog.close}
      />
    </ControlledForm>
  )
}
