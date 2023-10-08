import React from 'react'

export default function Main1st() {
  return (
    <>
      <section className='max-w-7xl mx-auto my-20'>
        <div className='grid p-4 sm:grid-cols-2 items-center'>
          <ul>
            <h2 className='text-3xl my-10 font-bold '>
              Manage tasks with ease.
            </h2>
            <li>
              <span className='font-bold text-lg'>Members : </span>Keep everyone
              accountable and never have to ask “who’s doing that” by adding
              members to cards for their projects and tasks.{' '}
            </li>
            <li>
              <span className='font-bold text-lg'>Due dates : </span> They're
              easy to set, hard to miss (with reminders!), and oh-so-satisfying
              to mark as “done.”{' '}
            </li>
            <li>
              <span className='font-bold text-lg'>Attachments : </span>No more
              digging through endless email chains to find attachments. Just
              drag and drop them onto a card so the right files stay with the
              right tasks.{' '}
            </li>
            <li>
              <span className='font-bold text-lg'>Checklists : </span>Your best
              tool to overpower overwhelming asks. Break big tasks into small
              ones, check things off the list, and watch that status bar go to
              100% complete.
            </li>
          </ul>
          <img src='section1st.webp' alt='' />
        </div>
      </section>
    </>
  )
}
