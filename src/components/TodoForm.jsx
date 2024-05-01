import {React} from 'react'
const TodoForm = ({input, setInput, todos, setTodos}) => {

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const addTodos = () => {
    if (input.trim() !== '') {
    setTodos([...todos, {id:Math.floor(Math.random() * 1000), title: input}])
    setInput("")
    console.log(todos);
    }
  }


  return (
    <div>
      <input className='form' type='text' placeholder='Add your task' value={input} onChange={handleInput}/>
      <button className='btn' onClick={addTodos}><i className="material-icons">add</i></button>  

    </div>
  )
}

export default TodoForm
 