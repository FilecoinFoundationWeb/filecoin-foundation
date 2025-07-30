'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ControlledForm } from '@filecoin-foundation/ui/Form'
import { ControlledFormCheckbox } from '@filecoin-foundation/ui/FormCheckbox'
import { ControlledFormInput } from '@filecoin-foundation/ui/FormInput'
import { ControlledFormTextarea } from '@filecoin-foundation/ui/FormTextarea'

import { Button } from '@/components/Button'

import {
  OfferStorageFormSchema,
  type OfferStorageFormData,
} from '../schema/OfferStorageFormSchema'

import { OfferStoragePrivacyDisclaimer } from './OfferStoragePrivacyDisclaimer'

export function OfferStorageForm() {
  const form = useForm<OfferStorageFormData>({
    resolver: zodResolver(OfferStorageFormSchema),
    defaultValues: {
      communicationOptIn: false,
    },
  })

  const isSubmitting = form.formState.isSubmitting

  return (
    <ControlledForm<OfferStorageFormData>
      form={form}
      className="space-y-15"
      onSubmit={(data) => console.log(data)}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ControlledFormInput<OfferStorageFormData>
          name="firstName"
          label="First Name"
          placeholder="First Name"
          disabled={isSubmitting}
        />
        <ControlledFormInput<OfferStorageFormData>
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          disabled={isSubmitting}
        />
      </div>

      <ControlledFormInput<OfferStorageFormData>
        name="businessEmail"
        label="Business email address"
        type="email"
        placeholder="alex@company.com"
        disabled={isSubmitting}
      />

      <ControlledFormInput<OfferStorageFormData>
        name="company"
        label="Company Name"
        placeholder="Company Co"
        disabled={isSubmitting}
      />

      <ControlledFormTextarea<OfferStorageFormData>
        addOptionalToLabel
        name="additionalInfo"
        label="Additional Information"
        placeholder="Share details about your setup, goals, or anything you'd like us to know."
        disabled={isSubmitting}
      />

      <div className="space-y-8">
        <OfferStoragePrivacyDisclaimer />

        <ControlledFormCheckbox<OfferStorageFormData>
          name="communicationOptIn"
          label="I agree to receive other communications from Protocol Labs and Filecoin Foundation. You may unsubscribe from these communications at any time."
        />
      </div>

      <Button variant="primary" type="submit">
        Book onboarding call
      </Button>
    </ControlledForm>
  )
}
