'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormCheckbox } from '@filecoin-foundation/ui/FormCheckbox'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { ControlledFormTextarea } from '@filecoin-foundation/ui/FormTextarea'
import {
  NotificationDialog,
  useNotificationDialog,
} from '@filecoin-foundation/ui/NotificationDialog'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'

import { PATHS } from '@/constants/paths'

import { createHubSpotSubmitHandler } from '@/utils/createHubSpotSubmitHandler'

import { PrivacyDisclaimer } from '@/components/PrivacyDisclaimer'

import {
  createProvideStorageFormSchema,
  type ProvideStorageFormSchema,
} from '../schema/ProvideStorageFormSchema'

export function ProvideStorageForm() {
  const t = useTranslations(PATHS.PROVIDE_STORAGE_ONBOARDING.path + '.form')

  const schema = createProvideStorageFormSchema({
    firstNameRequired: t('firstName.error'),
    lastNameRequired: t('lastName.error'),
    companyNameRequired: t('companyName.error'),
    businessEmailInvalid: t('businessEmail.errorInvalid'),
    businessEmailRequired: t('businessEmail.errorRequired'),
  })

  const dialog = useNotificationDialog()

  const form = useForm<ProvideStorageFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      communicationOptIn: false,
    },
  })
  const isSubmitting = form.formState.isSubmitting

  const submitToHubSpot = createHubSpotSubmitHandler({
    endpoint: '/api/hubspot/provide-storage',
    dialog,
    onSuccess: form.reset,
    t,
  })

  return (
    <ControlledForm<ProvideStorageFormSchema>
      form={form}
      className="space-y-15"
      onSubmit={submitToHubSpot}
    >
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ControlledFormInput<ProvideStorageFormSchema>
            name="firstName"
            label={t('firstName.label')}
            placeholder={t('firstName.placeholder')}
            disabled={isSubmitting}
          />
          <ControlledFormInput<ProvideStorageFormSchema>
            name="lastName"
            label={t('lastName.label')}
            placeholder={t('lastName.placeholder')}
            disabled={isSubmitting}
          />
        </div>

        <ControlledFormInput<ProvideStorageFormSchema>
          name="businessEmail"
          label={t('businessEmail.label')}
          type="email"
          placeholder={t('businessEmail.placeholder')}
          disabled={isSubmitting}
        />

        <ControlledFormInput<ProvideStorageFormSchema>
          name="companyName"
          label={t('companyName.label')}
          placeholder={t('companyName.placeholder')}
          disabled={isSubmitting}
        />

        <ControlledFormTextarea<ProvideStorageFormSchema>
          addOptionalToLabel
          name="additionalInfo"
          label={t('additionalInfo.label')}
          placeholder={t('additionalInfo.placeholder')}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-8">
        <PrivacyDisclaimer />

        <ControlledFormCheckbox<ProvideStorageFormSchema>
          name="communicationOptIn"
          label={t('communicationOptIn')}
        />
      </div>

      <div className="grid md:block">
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {t('submit')}
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
