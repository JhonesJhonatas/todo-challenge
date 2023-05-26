import { TaskBox } from "./TaskBox";
import { TasksInfo } from "./TasksInfo";

export function TasksArea() {

  return (
    <section className="w-5/12 mx-auto mt-10 mb-10 flex flex-col gap-y-4">

      <TasksInfo tasksCount={5} completeTasksCount={5} />

      <TaskBox key='1' complete={false} description='modelo de task padrão' />

    </section>
  );
}
