'use client'

import { Field } from '@headlessui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import prettyBytes from 'pretty-bytes'
import { useForm } from 'react-hook-form'

import type { CategoryMap } from '@/types/categoryTypes'

import { Button } from '@/components/Button'
import { ControlledForm } from '@/components/Form/ControlledForm'
import { ControlledFormCheckbox } from '@/components/Form/ControlledFormCheckbox'
import { ControlledFormFileInput } from '@/components/Form/ControlledFormFileInput'
import { ControlledFormInput } from '@/components/Form/ControlledFormInput'
import { ControlledFormListbox } from '@/components/Form/ControlledFormListbox'
import { ControlledFormTextarea } from '@/components/Form/ControlledFormTextarea'
import { FormError } from '@/components/Form/FormError'
import { formFieldStyle } from '@/components/Form/FormField'
import { FormLabel } from '@/components/Form/FormLabel'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

import {
  ALLOWED_IMAGE_FORMATS,
  BRIEF_CHARACTER_LIMIT,
  MAX_FILE_SIZE_IN_BYTES,
  NETWORK_USE_CASE_CHARACTER_LIMIT,
} from '../constants'
import { useSubmitEcosystemProjectForm } from '../hooks/useSubmitEcosystemProjectForm'
import { EcosystemProjectFormSchema } from '../schema/EcosystemProjectFormSchema'
import type {
  EcosystemProjectFormData,
  EcosystemProjectFormDataWithoutLogo,
} from '../types'
import { getOptionsFromObject } from '../utils/getOptionsFromObject'
import { getYearOptions } from '../utils/getYearOptions'

import { FormSection } from './FormSection'

type StringOrUndefined = string | undefined

type ProjectFormProps = {
  categoryData: CategoryMap
  subCategoryData: CategoryMap
  initialValues: EcosystemProjectFormDataWithoutLogo
}

export function EcosystemProjectForm({
  categoryData,
  subCategoryData,
  initialValues,
}: ProjectFormProps) {
  const yearOptions = getYearOptions('desc')
  const categoryOptions = getOptionsFromObject(categoryData)
  const subCategoryOptions = getOptionsFromObject(subCategoryData)

  const form = useForm<EcosystemProjectFormData>({
    resolver: zodResolver(EcosystemProjectFormSchema),
    defaultValues: initialValues,
  })
  const isSubmitting = form.formState.isSubmitting

  const submitForm = useSubmitEcosystemProjectForm()

  return (
    <ControlledForm<EcosystemProjectFormData>
      form={form}
      className="md:max-w-readable"
      onSubmit={submitForm}
    >
      <FormSection
        title="Personal Information"
        description="We'll use this to verify your site updates and reach out to you in case of questions."
      >
        <ControlledFormInput<EcosystemProjectFormData>
          name="name"
          label="Name"
          placeholder="Your Name"
          disabled={isSubmitting}
        />
        <ControlledFormInput<EcosystemProjectFormData>
          name="email"
          label="Email"
          placeholder="Your Email"
          type="email"
          disabled={isSubmitting}
        />
      </FormSection>

      <FormSection title="Project Details">
        <ControlledFormInput<EcosystemProjectFormData>
          name="title"
          label="Project Name"
          placeholder="Project Name"
          disabled={isSubmitting}
        />

        <Field className={formFieldStyle}>
          <FormLabel label="Which technology does your project use?" as="p" />
          <div className="flex flex-col gap-4">
            <ControlledFormCheckbox<EcosystemProjectFormData>
              name="tech.filecoin"
              label="Filecoin"
              disabled={isSubmitting}
            />
            <ControlledFormCheckbox<EcosystemProjectFormData>
              name="tech.ipfs"
              label="IPFS"
              disabled={isSubmitting}
            />
          </div>
          <FormError error={form.formState.errors.tech?.root?.message} />
        </Field>

        <ControlledFormListbox<EcosystemProjectFormData>
          name="yearJoined"
          label="What year did your project start using Filecoin or IPFS?"
          placeholder="Select Year"
          options={yearOptions}
          disabled={isSubmitting}
          buttonWidth="w-40"
        />

        <ControlledFormTextarea<EcosystemProjectFormData>
          name="briefSummary"
          label="Brief Summary"
          placeholder="Write a brief summary of your project..."
          characterLimit={BRIEF_CHARACTER_LIMIT}
          disabled={isSubmitting}
        />

        <ControlledFormTextarea<EcosystemProjectFormData>
          name="networkUseCase"
          label="How does your project use the Filecoin network?"
          description="You can use Markdown in this field."
          placeholder="Describe how your project uses the Filecoin network..."
          characterLimit={NETWORK_USE_CASE_CHARACTER_LIMIT}
          disabled={isSubmitting}
        />

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-evenly sm:gap-6">
          <div className="min-w-0 sm:w-1/2">
            <ControlledFormListbox<EcosystemProjectFormData>
              name="category"
              label="Category"
              placeholder="Select Category"
              options={categoryOptions}
              disabled={isSubmitting}
            />
          </div>
          <div className="min-w-0 sm:w-1/2">
            <ControlledFormListbox<EcosystemProjectFormData>
              name="subcategory"
              label="Subcategory"
              placeholder="Select Subcategory"
              options={subCategoryOptions}
              disabled={isSubmitting}
              optionsPosition="bottom end"
            />
          </div>
        </div>

        <ControlledFormFileInput<EcosystemProjectFormData>
          name="logo"
          label="Choose a logo for your project"
          accept={ALLOWED_IMAGE_FORMATS}
          maxSize={MAX_FILE_SIZE_IN_BYTES}
          disabled={isSubmitting}
          description={
            <>
              For best quality, please submit a white logo with a transparent
              background, at least 1000px by 1000px, and under{' '}
              {prettyBytes(MAX_FILE_SIZE_IN_BYTES)}. You can use tools like{' '}
              <ExternalTextLink
                href="https://squoosh.app/"
                target="_blank"
                rel="noreferrer noopenner"
              >
                Squoosh
              </ExternalTextLink>{' '}
              to compress your image.
            </>
          }
        />

        <ControlledFormInput<EcosystemProjectFormData>
          name="websiteUrl"
          label="Website URL"
          placeholder="Website URL"
          type="url"
          disabled={isSubmitting}
        />

        <ControlledFormInput<EcosystemProjectFormData, StringOrUndefined>
          addOptionalToLabel
          name="youtubeUrl"
          label="YouTube video URL"
          placeholder="Video URL"
          type="url"
          disabled={isSubmitting}
        />

        <ControlledFormInput<EcosystemProjectFormData, StringOrUndefined>
          addOptionalToLabel
          name="githubUrl"
          label="GitHub repository URL"
          placeholder="GitHub Repository URL"
          type="url"
          disabled={isSubmitting}
        />

        <ControlledFormInput<EcosystemProjectFormData, StringOrUndefined>
          addOptionalToLabel
          name="xUrl"
          label="X (Twitter) profile URL"
          placeholder="X (Twitter) Profile URL"
          type="url"
          disabled={isSubmitting}
        />
      </FormSection>
      <Button disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Submitting...' : 'Submit Project'}
      </Button>
    </ControlledForm>
  )
}
