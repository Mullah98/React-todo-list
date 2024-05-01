import React from 'react'

const TodoList = ({todos, setTodos}) => {

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
    {todos.map((todo) => (
        <div className='todo-item' key={todo.id}>
        <span className='t'>{todo.title}</span>
        <button className='btn' onClick={() => handleDelete(todo)}>
            <i className='material-icons'>delete</i>
        </button>
        </div>
    ))}
    </div>
  )
}

export default TodoList
