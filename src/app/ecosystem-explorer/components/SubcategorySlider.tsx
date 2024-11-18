'use client'

import { useState } from 'react'

import { Button as HeadlessUIButton } from '@headlessui/react'
import { FunnelSimple } from '@phosphor-icons/react'

import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { SlideOver } from '@/components/SlideOver'

import type { CategoriesAndSubcategoriesWithCount } from '../types/ecosystemCategoryType'

import { SliderCloseButton } from './SliderCloseButton'
import { SubcategoriesSidebar } from './SubcategoriesSidebar'

type Props = {
  categories: CategoriesAndSubcategoriesWithCount
}

export function SubcategorySlider({ categories }: Props) {
  const [open, setOpen] = useState(false)
  const { resetSearchParams } = useUpdateSearchParams()

  return (
    <>
      <HeadlessUIButton
        className="flex h-full w-full items-center gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 font-bold text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400"
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

          <SliderCloseButton closeSlider={closeSlider} />
        </div>

        <div className="flex flex-col gap-12 p-6">
          <SubcategoriesSidebar categories={categories} />
        </div>

        <div className="sticky bottom-0 z-10 border-t border-brand-300 bg-brand-800 p-6">
          <div className="flex items-center gap-3">
            <Button
              className="basis-1/2"
              variant="ghost"
              onClick={resetParamsAndCloseSlider}
            >
              Clear all
            </Button>

            <Button className="basis-1/2" onClick={closeSlider}>
              See results
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
