import type { Metadata } from 'next'

export default function Project() {
  return (
    <>
      <header>
        <h1></h1>
      </header>

      <section>
        <h2>About the Project</h2>
        <p></p>
      </section>

      <section>
        <h2>Partnership Details</h2>
        <p></p>
      </section>

      <div>
        <a href="#">Website</a>
        <a href="#">Read Blog Post</a>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: '', // [Name of Project] | FFDW
  description: '', //[Description of project]
}
