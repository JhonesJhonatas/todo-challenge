import { TaskBox } from "./TaskBox";
import { TasksInfo } from "./TasksInfo";

export function TasksArea() {

  return (
    <section className="w-5/12 mx-auto mt-10 mb-10 flex flex-col gap-y-4">

      <TasksInfo />

      <TaskBox />

    </section>
  );
}
