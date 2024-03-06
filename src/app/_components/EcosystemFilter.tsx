import React, { ChangeEvent } from 'react'

import { CMSFieldOption, CMSConfig } from '@/types/cmsConfig'

import { getCMSCollection, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

import configJson from '@/data/cmsConfigSchema.json'
const config: CMSConfig = configJson as CMSConfig

type EcosystemFilterProps = {
  onTopicsChange: (selectedTopics: string[]) => void
  onTagsChange: (selectedTags: string[]) => void
}

type OptionSelectProps = {
  label: string
  name: string
  options: CMSFieldOption[]
  onChange: (selectedValues: string[]) => void
}

function OptionSelect({
  label,
  name,
  options,
  onChange,
}: OptionSelectProps): JSX.Element {
  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>): void {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )

    onChange(selectedOptions)
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-white block">
        {label}
      </label>
      <select multiple name={name} id={name} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-1">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function EcosystemFilter({
  onTopicsChange,
  onTagsChange,
}: EcosystemFilterProps) {
  const collection = getCMSCollection(config.collections, 'ecosystem_projects')
  let topics
  let tags

  if (collection) {
    topics = getCMSFieldOptions(collection, 'topic')
    tags = getCMSFieldOptions(collection, 'tags')
  }

  return (
    <div className="flex flex-col gap-2 text-brand-800">
      <OptionSelect
        label="Select Topics"
        name="topics"
        options={topics || []}
        onChange={(selectedTopics) => onTopicsChange(selectedTopics)}
      />
      <OptionSelect
        label="Select Tags"
        name="tags"
        options={tags || []}
        onChange={(selectedTags) => onTagsChange(selectedTags)}
      />
    </div>
  )
}
