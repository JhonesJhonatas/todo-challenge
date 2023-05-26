import { Form } from "./Form"
import { Header } from "./Header"
import { TaskBox } from "./TaskBox"
import { TasksInfo } from "./TasksInfo"

export function App() {

  return (
    <main className="bg-gray-900 h-screen w-screen">

      <Header />

      <Form />

      <section className="w-5/12 mx-auto mt-10 mb-10 flex flex-col gap-y-4">

        <TasksInfo />

        <TaskBox />

      </section>

    </main>
  )
}