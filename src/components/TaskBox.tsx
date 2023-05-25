import { Trash } from '@phosphor-icons/react'

interface TaskProps{
  complete: boolean,
  description: string,
}

export function TaskBox({complete, description}: TaskProps){

  return (
    <div className='bg-gray-700 rounded border border-gray-500 p-5 flex justify-between items-center'>
      <div className='flex gap-3 items-center'>
        <input className='border-2 bg-transparent rounded-full cursor-pointer border-gray-400 hover:bg-blue-950' type="checkbox" defaultChecked={complete} />
        <p className={complete === true ? 'text-gray-100 line-through' : 'text-gray-100'}>{description}</p>
      </div>
      <Trash className='text-gray-300 cursor-pointer ease-in-out duration-100  hover:bg-gray-800 hover:text-red-600 rounded p-1' size={28} />
    </div>
  )
}