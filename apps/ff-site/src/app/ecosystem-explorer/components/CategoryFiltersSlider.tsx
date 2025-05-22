'use client'

import { useState } from 'react'

import { Button as HeadlessUIButton } from '@headlessui/react'
import { FunnelSimple, X } from '@phosphor-icons/react'

import { useUpdateSearchParams } from '@filecoin-foundation/hooks/useUpdateSearchParams'
import { Icon } from '@filecoin-foundation/ui/Icon'
import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'

import { Button } from '@/components/Button'

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
        className="border-brand-300 bg-brand-800 text-brand-300 hover:text-brand-400 focus:brand-outline flex h-full w-full items-center gap-2 rounded-lg border p-3 font-bold hover:border-current"
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

        <div className="border-brand-300 bg-brand-800 sticky bottom-0 z-10 border-t p-6">
          <div className="flex items-center gap-3">
            <Button
              className="basis-1/2"
              variant="ghost"
              onClick={resetParamsAndCloseSlider}
            >
              Clear All
            </Button>

            <Button className="basis-1/2" onClick={closeSlider}>
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
