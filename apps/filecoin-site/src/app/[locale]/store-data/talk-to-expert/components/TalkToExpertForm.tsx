'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormCheckbox } from '@filecoin-foundation/ui/FormCheckbox'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { ControlledFormRadioGroup } from '@filecoin-foundation/ui/FormRadioGroup'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'

import { PATHS } from '@/constants/paths'

import { PrivacyDisclaimer } from '@/components/PrivacyDisclaimer'

import {
  createTalkToExpertFormSchema,
  dataVolumeOptions,
  type TalkToExpertFormData,
} from '../../schema/TalkToExpertFormSchema'

export function TalkToExpertForm() {
  const t = useTranslations(PATHS.STORE_DATA_TALK_TO_EXPERT.path + '.form')

  const schema = createTalkToExpertFormSchema({
    firstNameRequired: t('firstName.error'),
    lastNameRequired: t('lastName.error'),
    companyNameRequired: t('companyName.error'),
    businessEmailInvalid: t('businessEmail.errorInvalid'),
    businessEmailRequired: t('businessEmail.errorRequired'),
    dataVolumeRequired: t('dataVolume.error'),
  })

  const form = useForm<TalkToExpertFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      communicationOptIn: false,
    },
  })

  const isSubmitting = form.formState.isSubmitting

  return (
    <ControlledForm<TalkToExpertFormData>
      form={form}
      className="space-y-15"
      onSubmit={(data) => console.log(data)}
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
    </ControlledForm>
  )
}
