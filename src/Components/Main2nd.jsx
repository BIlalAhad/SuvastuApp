import React from 'react'

export default function Main2nd() {
  return (
    <>
      <section className=' '>
        <section className=' bg-gradient-to-r from-slate-200'>
          <div className='grid p-4 sm:grid-cols-2 items-center max-w-7xl mx-auto py-12 gap-7'>
            <ul>
              <h2 className='text-3xl my-10 font-bold '>
                Features to help your team succeed
              </h2>
              <p>
                Powering a productive team means using a powerful tool (and
                plenty of snacks). From meetings and projects to events and goal
                setting, Trello’s intuitive features give any team the ability
                to quickly set up and customize workflows for just about
                anything.
              </p>
            </ul>
            <img src='help.avif' alt='' />
          </div>
        </section>
        <section className=' bg-gradient-to-l from-slate-200 '>
          <div className='grid p-4 sm:grid-cols-2 items-center max-w-7xl mx-auto py-12 gap-7'>
            <img src='board.webp' alt='' />
            <ul>
              <h2 className='text-3xl my-10 font-bold '>
                The board is just the beginning
              </h2>
              <p>
                Lists and cards are the building blocks of organizing work on a
                Trello board. Grow from there with task assignments, timelines,
                productivity metrics, calendars, and more.
              </p>
            </ul>
          </div>
        </section>
        <section className=' bg-gradient-to-r from-slate-200 '>
          <div className='grid p-4 sm:grid-cols-2 items-center max-w-7xl mx-auto py-12 gap-7'>
            <ul>
              <h2 className='text-3xl my-10 font-bold '>
                Automate your workflow
              </h2>
              <p>
                Create a foolproof process for moving work forward with Trello’s
                built-in automation system. Run commands and set automated rules
                for almost any action in Trello so that your team can focus on
                what matters most.
              </p>
            </ul>
            <img src='automate.webp' alt='' />
          </div>
        </section>
        <section className=''>
          <div className='grid p-4 sm:grid-cols-2 items-center max-w-7xl mx-auto py-12 gap-7'>
            <img src='board.webp' alt='' />
            <ul>
              <h2 className='text-3xl my-10 font-bold '>
                Integrate top work tools
              </h2>
              <p>
                Easily connect the apps your team already uses into your Trello
                workflow, or add a Power-Up that helps fine-tune one specific
                need. With hundreds of Power-Ups available, your team’s workflow
                wishes are covered.
              </p>
            </ul>
          </div>
        </section>
      </section>
    </>
  )
}
