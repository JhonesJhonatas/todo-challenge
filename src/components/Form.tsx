import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid'

interface FormParams {
  registerNewTask: Function,
}

interface TaskModel {
  id: String,
  status: Boolean,
  content: String,
}

export function Form({ registerNewTask }: FormParams) {

  const [valueOfForm, setValueOfForm] = useState('')

  function changeStateOfForm(event: ChangeEvent<HTMLInputElement>) {
    setValueOfForm(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask : TaskModel = {
      id: uuid(),
      status: false,
      content: valueOfForm,
    }

    registerNewTask(newTask)
  }

  return (

    <form onSubmit={handleCreateNewTask} className="flex justify-center -mt-6 gap-4 w-5/12 mx-auto">

      <input
        onChange={changeStateOfForm}
        className="p-3 rounded text-gray-100 bg-gray-700 w-full focus:outline-none focus:outline focus:outline-blue-500"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />

      <button type="submit" className="flex bg-blue-500 rounded pw-2 px-4 items-center gap-1 text-gray-50 cursor-pointer ease-in-out duration-300 hover:bg-blue-600">
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>

    </form>
  );
}
