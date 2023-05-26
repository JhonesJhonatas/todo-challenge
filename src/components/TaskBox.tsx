import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

interface TaskProps {
  id: string,
  complete: boolean,
  description: string,
  changeStateOfTask: Function,
  deleteTask: Function,
}

export function TaskBox({ id, complete, description, changeStateOfTask, deleteTask }: TaskProps) {

  const [stateChecked, setStateChecked] = useState(complete)

  function handleCompleteTask() {

    setStateChecked(event.target.checked)

    changeStateOfTask(event.target.checked)

  }

  function handleDeteleTask() {

    deleteTask(id)

  }

  return (
    <div className='bg-gray-700 rounded border border-gray-500 p-5 flex justify-between items-center'>

      <div className='flex gap-3 items-center'>

        <input onChange={handleCompleteTask} name="checkBoxInput" className='border-2 bg-transparent rounded-full cursor-pointer border-gray-400 hover:bg-blue-950' type="checkbox" defaultChecked={stateChecked} />

        <p className={stateChecked === true ? 'text-gray-100 line-through' : 'text-gray-100'}>{description}</p>

      </div>

      <Trash onClick={handleDeteleTask} className='text-gray-300 cursor-pointer ease-in-out duration-100  hover:bg-gray-800 hover:text-red-600 rounded p-1' size={28} />

    </div>
  )
}