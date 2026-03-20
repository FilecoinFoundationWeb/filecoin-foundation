'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormCheckbox } from '@filecoin-foundation/ui/FormCheckbox'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { ControlledFormRadioGroup } from '@filecoin-foundation/ui/FormRadioGroup'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'

import { PrivacyDisclaimer } from '@/components/PrivacyDisclaimer'

import {
  TalkToExpertFormSchema,
  dataVolumeOptions,
  type TalkToExpertFormData,
} from '../../schema/TalkToExpertFormSchema'

export function TalkToExpertForm() {
  const form = useForm<TalkToExpertFormData>({
    resolver: zodResolver(TalkToExpertFormSchema),
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
            label="First name"
            placeholder="Alex"
            disabled={isSubmitting}
          />
          <ControlledFormInput<TalkToExpertFormData>
            name="lastName"
            label="Last name"
            placeholder="Smith"
            disabled={isSubmitting}
          />
        </div>

        <ControlledFormInput<TalkToExpertFormData>
          name="businessEmail"
          label="Business email address"
          type="email"
          placeholder="alex@company.com"
          disabled={isSubmitting}
        />

        <ControlledFormInput<TalkToExpertFormData>
          name="companyName"
          label="Company name"
          placeholder="Company Co"
          disabled={isSubmitting}
        />

        <ControlledFormRadioGroup<TalkToExpertFormData>
          name="dataVolume"
          label="How much data are you looking to store?"
          options={dataVolumeOptions}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-8">
        <PrivacyDisclaimer />

        <ControlledFormCheckbox<TalkToExpertFormData>
          name="communicationOptIn"
          label="I agree to receive other communications from Protocol Labs and Filecoin Foundation. You may unsubscribe from these communications at any time."
        />
      </div>

      <div className="grid md:block">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </ControlledForm>
  )
}
