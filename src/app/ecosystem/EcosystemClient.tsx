'use client'

import React, { useState, useMemo } from 'react'

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
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
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

      const matchesTopics =
        selectedTopics.length === 0 ||
        selectedTopics.includes(project.f_topic.value)

      const matchesTags =
        selectedTags.length === 0 ||
        project.f_tag.some((tag) => selectedTags.includes(tag.value))

      return matchesSearchQuery && matchesTopics && matchesTags
    })
  }, [projects, searchQuery, selectedTags, selectedTopics])

  const hasMoreProjects = visibleCount < filteredProjects.length

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + PROJECTS_PER_LOAD)
  }

  function handleClearAll() {
    setSearchQuery('')
    setSelectedTopics([])
    setSelectedTags([])
    setVisibleCount(PROJECTS_PER_LOAD)
  }

  return (
    <>
      <button
        className="border rounded-xl py-3 px-9 mb-4 font-semibold"
        onClick={handleClearAll}
      >
        Clear All
      </button>

      <div className="sm:flex gap-6">
        <EcosystemFilter
          onTopicsChange={(topics) => setSelectedTopics(topics)}
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
              className="text-slate-900"
              onChange={handleSearch}
            />
          </div>

          <EcosystemProjectsList
            className="gap-10 grid list-none sm:grid-cols-2"
            projects={filteredProjects.slice(0, visibleCount)}
          />
        </div>
      </div>

      {hasMoreProjects && (
        <button aria-label="Load more projects" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  )
}
