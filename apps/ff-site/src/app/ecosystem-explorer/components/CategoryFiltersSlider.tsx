'use client'

import { useState } from 'react'

import { Button } from '@filecoin-foundation/ui/Button'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { Button as HeadlessUIButton } from '@headlessui/react'
import { FunnelSimple, X } from '@phosphor-icons/react'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { IconButton } from '@/components/IconButton'
import { SlideOver } from '@/components/SlideOver'

import { CategoryFilters, type CategoryFiltersProps } from './CategoryFilters'

type CategoryFiltersSliderProps = CategoryFiltersProps

export function CategoryFiltersSlider({
  categories,
}: CategoryFiltersSliderProps) {
  const [open, setOpen] = useState(false)
  const { resetSearchParams } = useUpdateSearchParams()

  return (
    <>
      <HeadlessUIButton
        className="flex h-full w-full items-center gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 font-bold text-brand-300 hover:border-current hover:text-brand-400 focus:brand-outline"
        onClick={openSlider}
      >
        <Icon component={FunnelSimple} />
        Filters
      </HeadlessUIButton>

      <SlideOver open={open} setOpen={setOpen} slideFrom="left">
        <div className="flex items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-2">
            <Icon component={FunnelSimple} size={24} />
            <h2 className="text-xl font-bold">Filters</h2>
          </div>

          <IconButton
            icon={X}
            label="Close category filters"
            onClick={closeSlider}
          />
        </div>

        <div className="flex flex-col gap-12 p-6">
          <CategoryFilters categories={categories} />
        </div>

        <div className="sticky bottom-0 z-10 border-t border-brand-300 bg-brand-800 p-6">
          <div className="flex items-center gap-3">
            <Button
              className="basis-1/2"
              variant="ghost"
              baseDomain={BASE_DOMAIN}
              onClick={resetParamsAndCloseSlider}
            >
              Clear All
            </Button>

            <Button
              className="basis-1/2"
              baseDomain={BASE_DOMAIN}
              onClick={closeSlider}
            >
              See Results
            </Button>
          </div>
        </div>
      </SlideOver>
    </>
  )

  function resetParamsAndCloseSlider() {
    resetSearchParams()
    closeSlider()
  }

  function openSlider() {
    setOpen(true)
  }

  function closeSlider() {
    setOpen(false)
  }
}
