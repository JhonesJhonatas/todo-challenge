import { HasNoTasks } from "./HasNoTasks";
import { TasksInfo } from "./TasksInfo";

export function TasksArea(){
  return(
    <section className="w-5/12 mx-auto mt-10 mb-10">

      <TasksInfo />

      <HasNoTasks />

    </section>
  )
}