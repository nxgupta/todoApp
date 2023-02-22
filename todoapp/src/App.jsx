import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  let [todo, setTodo] = useState('')
  let [todos,setTodos]=useState([])
  let handleTodo=(e)=>{
    setTodo(e.target.value)
  }

  let addTodo=(task)=>{
    if(task=='') return;
    setTodos([...todos,task])
    setTodo('')
  }
  let deleteTodo=(task)=>{
    setTodos(todos.filter(item=>!item.includes(task)))
  }

  return (
    <div className='app'>
      <Header/>
      <TodoInput todo={todo} handleTodo={handleTodo} addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
