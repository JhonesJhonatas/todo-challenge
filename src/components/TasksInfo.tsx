interface TaskInfoProps{
  countOfTasks: number,
  countOfCompleteTasks: number,
}

export function TasksInfo({countOfTasks, countOfCompleteTasks}: TaskInfoProps) {

  return (
    <section className="border-b border-gray-600 pb-6 flex justify-between mb-8">

      <div className="flex gap-3">
        <p className="text-blue-500 font-bold">Tarefas Criadas</p>
        <p className="bg-gray-700 rounded-full px-3 text-gray-100">{countOfTasks}</p>
      </div>

      <div className="flex gap-3">
        <p className="text-blue-500 font-bold">Concluídas</p>
        <p className="bg-gray-700 rounded-full px-3 text-gray-100">{countOfCompleteTasks}</p>
      </div>

    </section>
  )
}