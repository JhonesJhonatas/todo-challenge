import { Trash } from '@phosphor-icons/react'
import { ChangeEvent } from 'react'

interface TaskBoxProps{
  id: string,
  status: boolean,
  content: string,
  chageStatusOfTask: Function,
  deleteForListTask: Function,
}

export function TaskBox({id, status, content, chageStatusOfTask, deleteForListTask} : TaskBoxProps) {

  function handleCompleteTask(event: ChangeEvent<HTMLInputElement>){

    const propsToChange ={
      id: id,
      status: event.target.checked,
    }

    chageStatusOfTask(propsToChange)
  }

  function handleDeleteTask(){
    deleteForListTask(id)
  }

  return (
    <div className='bg-gray-700 rounded border border-gray-500 p-5 flex justify-between items-center'>

      <div className='flex gap-3 items-center'>

        <input onChange={handleCompleteTask} name="checkBoxInput" className='border-2 bg-transparent rounded-full cursor-pointer border-gray-400 hover:bg-blue-950' type="checkbox" />

        <p className={status === true ? 'line-through text-gray-100' : 'text-gray-100'}>{content}</p>

      </div>

      <Trash onClick={handleDeleteTask} className='text-gray-300 cursor-pointer ease-in-out duration-100  hover:bg-gray-800 hover:text-red-600 rounded p-1' size={28} />

    </div>
  )
}