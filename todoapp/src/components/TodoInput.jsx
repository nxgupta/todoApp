import { useState } from "react"

const TodoInput = ({todo,handleTodo,addTodo}) => {
  return (
    <div className='task'>
      <input className="input" placeholder=" Enter a new To do" value={todo} name='todo' onChange={handleTodo}/>
      <button className="btn btn-add" onClick={()=>addTodo(todo)}>Add</button>
    </div>
  )
}
export default TodoInput