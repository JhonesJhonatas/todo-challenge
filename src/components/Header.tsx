import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className='h-52 bg-gray-950 flex items-center justify-center'>

      <img src={todoLogo} alt="" />

    </header>
  )
}