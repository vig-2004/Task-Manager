import React from 'react'
import TaskCard from './TaskCard'

const App = () => {
  return (
    <div>
      <div className='grid grid-cols-6'>
        <div className='col-start-2 col-span-4'>
          <p className="text-3xl font-bold">Smarter Tasks</p>
          <p className="text-xl mb-4">Project: Graduation Final Year Project (Revamp College Website)</p>
        </div>
        <div className=" col-start-2 col-span-2 border border-black rounded-2xl mr-3">
          <p className="py-2 text-2xl px-5 text-center font-bold">Pending</p>
          <div className="border border-gray-900 m-3 py-1 px-5">
            <TaskCard 
              title="Build the website with static content"
              dueDate="17th May"
              assigneeName=" Pranay R"
              />
          </div>
          <div className="border border-gray-900 m-3 py-2 px-5">
            <TaskCard 
              title="Add a blog"
              dueDate="20th May"
              assigneeName="Rasool N"
              />
          </div>
          <div className="border border-gray-900 m-3 py-2 px-5 bg-gray-300 ">
            <p>+New Task</p>
          </div>
        </div>

        <div className=" col-start-4 col-span-2 border border-gray-900 rounded-xl ml-3">
          <p className="text-2xl text-center font-bold py-2 px-5"> Done </p>
          <div className=" border border-gray-900 m-3 py-2 px-5">
            <TaskCard
              title="Design the mockup"
              completedAtDate="10th April"
              assigneeName="Rohith M"
            />
          </div>
          <div className=" border border-gray-900 m-3 py-2 px-5">
            <TaskCard
              title="Get the approval from principal"
              completedAtDate="20th April"
              assigneeName="Ajay S"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
