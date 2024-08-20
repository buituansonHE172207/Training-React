import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Component/TodoList/TodoList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      <TodoList />
      <TodoList />
    </>
  )
}

export default App
