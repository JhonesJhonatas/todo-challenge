import { Form } from "./Form"
import { HasNoTasks } from "./HasNoTasks"
import { Header } from "./Header"
import { TaskBox } from "./TaskBox"
import { TasksInfo } from "./TasksInfo"
import { useState } from 'react'

interface PropsTaskModel {
  id: string,
  status: boolean,
  content: string,
}

interface ChangeStatusOfTask{
  id: string,
  status: boolean,
}

export function App() {
  //Definição de Estados
  const [listOfTasks, setListOfTasks] = useState<PropsTaskModel[]>([])
  const [countOfTasks, setCountOfTasks] = useState(0)
  const [countOfCompleteTasks, setCountOfCompleteTasks] = useState(0)

  //Registra uma nova task no estado de tasks
  function registerNewTask(taskToRegister :PropsTaskModel){

    if(listOfTasks.length === 0){
      setListOfTasks([taskToRegister])
      updateTaskInfo()
    }else{
      setListOfTasks([...listOfTasks, taskToRegister])
      updateTaskInfo()
    }

    setCountOfTasks(countOfTasks + 1)

  }

  function chageStatusOfTask({id, status}: ChangeStatusOfTask){

    const index = listOfTasks.findIndex(task => task.id === id)
    
    listOfTasks[index].status = status

    setListOfTasks(listOfTasks)

    updateTaskInfo()

  }

  function deleteForListTask(id: string){
    const newListWithoutDeletedOne = listOfTasks.filter(task => task.id !== id)
    const newListOfCompleteTasks = newListWithoutDeletedOne.filter(task => task.status === true)

    setListOfTasks(newListWithoutDeletedOne)

    setCountOfTasks(newListWithoutDeletedOne.length)
    setCountOfCompleteTasks(newListOfCompleteTasks.length)
  }

  function updateTaskInfo(){

    const listOfCompletedTasks = listOfTasks.filter(task => task.status === true)

    setCountOfCompleteTasks(listOfCompletedTasks.length)
  }

  return (
    <main className="bg-gray-900 h-screen w-screen">

      <Header />

      <Form registerNewTask={registerNewTask}/>

      <section className="w-5/12 mx-auto mt-10 mb-10 flex flex-col gap-y-4 max-md:w-4/5">

        <TasksInfo countOfTasks={countOfTasks} countOfCompleteTasks={countOfCompleteTasks} />

        {listOfTasks.length === 0 ? <HasNoTasks /> : listOfTasks.map(task => {
          return <TaskBox key={task.id} id={task.id} status={task.status} content={task.content} chageStatusOfTask={chageStatusOfTask} deleteForListTask={deleteForListTask}/>
        })}

      </section>

    </main>
  )
}