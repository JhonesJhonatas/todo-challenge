import { Form } from "./Form"
import { Header } from "./Header"
import { TasksArea } from "./TasksArea"

function App() {

  return (
   <main className="bg-gray-900 h-screen w-screen">

      <Header />
      
      <Form />

      <TasksArea />

   </main>
  )
}

export default App
