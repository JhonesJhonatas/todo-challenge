import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { Form } from "./Form"
import { Header } from "./Header"
import { TaskBox } from "./TaskBox"
import { TasksInfo } from "./TasksInfo"

interface TaskInterface {
  id: string,
  complete: boolean,
  description: string,
}

function App() {

  const [tasksList, setTasksList] = useState([
    {
      id: uuid(),
      complete: true,
      description: "Exemplo de task dentro de uma variável.",
    },
    {
      id: uuid(),
      complete: false,
      description: "Exemplo de task dentro de uma variável.",
    },
  ])

  const [countTasks, setCountTasks] = useState(tasksList.length)

  const completeTasksCount = tasksList.filter(item => {
    return item.complete === true;
  })

  const [countCompleteTasks, setCountCompleteTasks] = useState(completeTasksCount.length)

  function changeStateOfTask(value){
    if(value === true){
      setCountCompleteTasks(countCompleteTasks + 1)
    }else{
      setCountCompleteTasks(countCompleteTasks - 1)
    }
   
  }

  function createNewTask({ id, complete = false, description }: TaskInterface) {
    const newTask: TaskInterface = {
      id: id,
      complete: complete,
      description: description,
    }

    setTasksList([...tasksList, newTask])

    console.log(tasksList.length)

    setCountTasks(countTasks + 1)
  }

  return (
    <main className="bg-gray-900 h-screen w-screen">

      <Header />

      <Form createNewTask={createNewTask} />

      <section className="w-5/12 mx-auto mt-10 mb-10 flex flex-col gap-y-4">

        <TasksInfo tasksCount={countTasks} completeTasksCount={countCompleteTasks} />

        {tasksList.map(task => {
          return <TaskBox key={task.id} complete={task.complete} description={task.description} changeStateOfTask={changeStateOfTask} />
        })}

      </section>

    </main>
  )
}

export default App
