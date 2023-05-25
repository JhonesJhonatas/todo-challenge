import { PlusCircle } from '@phosphor-icons/react'

export function Form(){
  return(
    <form className='flex justify-center -mt-6 gap-4 w-5/12 mx-auto'>
        <input className="p-3 rounded text-gray-100 bg-gray-700 w-full" type="text" placeholder='Adicione uma nova tarefa' />
        <div className='flex bg-blue-500 rounded pw-2 px-4 items-center gap-1 text-gray-50 cursor-pointer ease-in-out duration-300 hover:bg-blue-600 '>
          <p>Criar</p>
          <PlusCircle size={20} />
        </div>
    </form>
  )
}