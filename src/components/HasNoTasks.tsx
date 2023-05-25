import { ClipboardText } from '@phosphor-icons/react'

export function HasNoTasks(){
  return (
    <div className='text-center mt-8'>
      <ClipboardText className='mx-auto mb-4' size={120} color='#646464'/>
      <p className='text-lg font-bold text-gray-100'>Você ainda não tem tarefas cadastradas</p>
      <p className='text-lg text-gray-100'>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}