'use client'

import { useTranslations } from 'next-intl'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormCheckbox } from '@filecoin-foundation/ui/FormCheckbox'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { ControlledFormRadioGroup } from '@filecoin-foundation/ui/FormRadioGroup'
import { NotificationDialog } from '@filecoin-foundation/ui/NotificationDialog'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'

import { PATHS } from '@/constants/paths'

import { PrivacyDisclaimer } from '@/components/PrivacyDisclaimer'

import {
  dataVolumeOptions,
  type TalkToExpertFormData,
} from '../../schema/TalkToExpertFormSchema'
import { useHubSpotForm } from '../hooks/useHubSpotForm'

export function TalkToExpertForm() {
  const t = useTranslations(PATHS.STORE_DATA_TALK_TO_EXPERT.path + '.form')

  const { form, isSubmitting, dialog, submitToHubSpot } = useHubSpotForm(t)

  return (
    <ControlledForm<TalkToExpertFormData>
      form={form}
      className="space-y-15"
      onSubmit={submitToHubSpot}
    >
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ControlledFormInput<TalkToExpertFormData>
            name="firstName"
            label={t('firstName.label')}
            placeholder={t('firstName.placeholder')}
            disabled={isSubmitting}
          />
          <ControlledFormInput<TalkToExpertFormData>
            name="lastName"
            label={t('lastName.label')}
            placeholder={t('lastName.placeholder')}
            disabled={isSubmitting}
          />
        </div>

        <ControlledFormInput<TalkToExpertFormData>
          name="businessEmail"
          label={t('businessEmail.label')}
          type="email"
          placeholder={t('businessEmail.placeholder')}
          disabled={isSubmitting}
        />

        <ControlledFormInput<TalkToExpertFormData>
          name="companyName"
          label={t('companyName.label')}
          placeholder={t('companyName.placeholder')}
          disabled={isSubmitting}
        />

        <ControlledFormRadioGroup<TalkToExpertFormData>
          name="dataVolume"
          label={t('dataVolume.label')}
          options={dataVolumeOptions}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-8">
        <PrivacyDisclaimer />

        <ControlledFormCheckbox<TalkToExpertFormData>
          name="communicationOptIn"
          label={t('communicationOptIn')}
        />
      </div>

      <div className="grid md:block">
        <Button variant="primary" type="submit">
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
