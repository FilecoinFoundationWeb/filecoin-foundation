'use client'

import React, { useState, useMemo } from 'react'

import { Button } from '@/components/Button'
import { EcosystemFilter } from '@/components/EcosystemFilter'
import { EcosystemProjectsList } from '@/components/EcosystemProjectsList'

import { EcosystemProjectData } from '@/types/ecosystemProjectTypes'

const PROJECTS_PER_LOAD = 9

export function EcosystemClient({
  projects,
}: {
  projects: EcosystemProjectData[]
}) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [visibleCount, setVisibleCount] = useState<number>(PROJECTS_PER_LOAD)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value.toLowerCase())
    setVisibleCount(PROJECTS_PER_LOAD)
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearchQuery = project.title
        .toLowerCase()
        .includes(searchQuery)

      const matchesCategories =
        selectedCategories.length === 0 ||
        selectedCategories.includes(project.category)

      const matchesTags =
        selectedTags.length === 0 ||
        project.tags.some((tag) => selectedTags.includes(tag))

      return matchesSearchQuery && matchesCategories && matchesTags
    })
  }, [projects, searchQuery, selectedTags, selectedCategories])

  const hasMoreProjects = visibleCount < filteredProjects.length

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + PROJECTS_PER_LOAD)
  }

  function handleClearAll() {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedTags([])
    setVisibleCount(PROJECTS_PER_LOAD)
  }

  return (
    <>
      <Button aria-label="Clear all filter options" onClick={handleClearAll}>
        Clear All
      </Button>
      <div className="gap-6 sm:flex">
        <EcosystemFilter
          onCategoriesChange={(categories) => setSelectedCategories(categories)}
          onTagsChange={(tags) => setSelectedTags(tags)}
        />

        <div>
          <div className="flex flex-col">
            <label htmlFor="search" className="mb-1 block">
              Search Projects
            </label>
            <input
              type="search"
              id="search"
              name="search"
              aria-label="Search ecosystem projects"
              className="text-brand-800"
              onChange={handleSearch}
            />
          </div>

          <EcosystemProjectsList
            className="grid list-none gap-10 sm:grid-cols-2"
            projects={filteredProjects.slice(0, visibleCount)}
          />
        </div>
      </div>

      {hasMoreProjects && (
        <Button aria-label="Load more projects" onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </>
  )
}
