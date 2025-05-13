import React from 'react'
import TaskCard from './TaskCard'

const App = () => {
  return (
    <div className='flex flex-row items-center justify-center m-10 p-10 space-x-20'>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold m-3 p-3'>Pending</h1>
        <TaskCard title="Task 1" assignee="viggie" />
        <TaskCard title="Task 2" assignee="harsh"/>
        <TaskCard title="Task 3" assignee="chinn"/>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold m-3 p-3'>Done</h1>
        <TaskCard title="Task 1" assignee="viggie" />
        <TaskCard title="Task 2" assignee="harsh"/>
        <TaskCard title="Task 3" assignee="chinn"/>
      </div>
    </div>
  )
}

export default App
