'use client'

import { Input, Label, Field, Button } from '@headlessui/react'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'

import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'
import { createNewsletterFormSchema } from '@filecoin-foundation/utils/schemas/NewsletterFormSchema'

import { useNewsletterForm } from '@/hooks/useNewsletterForm'

export function NewsletterForm() {
  const t = useTranslations('newsletterForm')
  const schema = createNewsletterFormSchema({
    emailInvalid: t('emailInvalid'),
    emailRequired: t('emailRequired'),
  })

  const { form, dialog, onSubmit } = useNewsletterForm()

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Field>
        <Label className="form-label">{t('label')}</Label>
        <div className="relative flex items-center gap-4 pt-1">
          <Input
            {...form.register('email', { required: true })}
            type="email"
            invalid={Boolean(form.formState.errors.email)}
            placeholder={t('placeholder')}
            autoComplete="email"
            className="form-text-input"
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="focus:brand-outline absolute right-0 -mr-1 flex h-12 w-12 cursor-pointer items-center justify-center"
            type="submit"
            aria-label={t('submitAriaLabel')}
          >
            <div className="text-brand-600 relative inline-block">
              <Icon component={ArrowRightIcon} size={20} />
            </div>
          </Button>
        </div>

        {form.formState.errors.email && (
          <p className="form-error-description mt-2">
            {form.formState.errors.email.message}
          </p>
        )}
      </Field>
    </form>
  )
}
