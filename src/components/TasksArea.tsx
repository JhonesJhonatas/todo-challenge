import { useState } from 'react'
import { v4 as uuid } from "uuid";

import { TaskBox } from "./TaskBox";
import { TasksInfo } from "./TasksInfo";

const tasksList = [
  {
    id: uuid(),
    complete: true,
    description: "Task criada por um objeto dentro de uma variável.",
  },
  {
    id: uuid(),
    complete: false,
    description: "Outra task criada utilizando uma variável.",
  },
  {
    id: uuid(),
    complete: true,
    description: "Task criada por um objeto dentro de uma variável.",
  },
];

export function TasksArea() {

  const [tasksCount, setTaskscount] = useState(tasksList.length)

  return (
    <section className="w-5/12 mx-auto mt-10 mb-10 flex flex-col gap-y-4">
      
      <TasksInfo tasksCount={tasksCount} completeTasksCount={0}/>

      {tasksList.map((task) => {
        return <TaskBox key={task.id} complete={task.complete} description={task.description} />;
      })}
    </section>
  );
}
