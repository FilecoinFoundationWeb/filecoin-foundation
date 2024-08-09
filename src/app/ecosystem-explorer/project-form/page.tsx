'use client'

import { useState } from 'react'

import { Button } from '@/components/Button'

import { submitProjectToGithub } from './services/github'
import {
  ALLOWED_IMAGE_FORMATS,
  getFileFormat,
  convertToBase64,
} from './services/github/utils/fileUtils'

export default function ProjectForm() {
  const [files, setFiles] = useState<FileList | null>()
  const [projectName, setProjectName] = useState<string | undefined>('')
  const [link, setLink] = useState<string | undefined>('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const file = files?.[0]

    if (!file || !projectName) {
      return
    }

    const pullRequest = await submitProjectToGithub({
      projectName,
      logo: {
        base64: await convertToBase64(file),
        format: getFileFormat(file.name),
      },
    })

    if (pullRequest) {
      setLink(pullRequest.html_url)
    }
  }

  return (
    <form className="flex max-w-readable flex-col gap-8" onSubmit={onSubmit}>
      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        className="text-black"
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
      />
      <input
        type="file"
        name="files"
        accept={ALLOWED_IMAGE_FORMATS.map((format) => `.${format}`).join(',')}
        onChange={(event) => setFiles(event.target.files)}
      />

      <Button variant="primary">Submit Project</Button>

      {link && (
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-300 underline"
          >
            View Submission
          </a>
        </div>
      )}
    </form>
  )
}
