import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  let [todo, setTodo] = useState('')
  let [todos,setTodos]=useState([])

  useEffect(()=>{
    if(localStorage.getItem('todos')){
      let todosArray=localStorage.getItem("todos")
      console.log(JSON.parse(todosArray))
      setTodos(JSON.parse(todosArray))
    }
  },[])
  useEffect(()=>{
    if(todos?.length>0){
      localStorage.setItem("todos",JSON.stringify(todos))
    }
    else{
      localStorage.clear()
    }
  },[todos])

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
