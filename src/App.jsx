import './App.css'
import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className='container'>
      <h1>My todo list</h1>

      <TodoForm 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />

      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App
