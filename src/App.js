import React, {useEffect, useState,useMemo,memo,useCallback,useRef} from "react"
import "./App.css"
import { tsConditionalType } from "@babel/types"

let idSeq = Date.now()

function Control(props) {
  const {addTodo} = props
  const inputRef = useRef()
  const onSubmit = (e)=>{
    e.preventDefault()
    const newText =  inputRef.current.value.trim()
    if (newText.length===0) {
      return
    }
    addTodo({
      id:++idSeq,
      text:newText,
      compelete:false
    })
    inputRef.current.value = ''
  }
  return (
    <div className="control">
      <h1>
        todos
      </h1>
      <form onSubmit={onSubmit} >
        <input type="text" className="new-todo" placeholder="what need to be down?" ref = {inputRef}/>
      </form>
    </div>
  )
}

function TodoItem(props) {
  const {todo,toggleTodo,removeTodo} = props
  const{id,text,compelete} = todo
  
  const onChange=()=>{
    toggleTodo(id)
  }
  const onRemove = ()=>{
    removeTodo(id)
  }

  return (
    <li className="todo-item">
      <input type="checkbox" onChange={onChange} checked={compelete}/>
      <label className={compelete?'compelete':''}>
        {text}
      </label>
      <button onClick={onRemove}>@&#xd7</button>
    </li>
  )
}



function Todos(props){
  const {todos,toggleTodo,removeTodo} = props
  return (
    <ul>
      {
        todos.map(todo=>{
          return <TodoItem 
            key={todo.id}
            todo ={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        })
      }
    </ul>
  )
}


function TodoList() {
  const [todos,setTodos] = useState([])

  const addTodo = useCallback((todo)=>{
    setTodos(todos=>[...todos,todo])
  },[])

  const removeTodo = useCallback((id)=>{
    setTodos(todos=>todos.filter(todo=>{
      return todo.id !==id
    }))
  },[])//
  
  const toggleTodo = useCallback((id)=>{
    setTodos(todos => todos.map(todo=>{
      return todo.id ===id
          ?{
            ...todo,
            compelete:!todo.compelete,
          }
          :todo
    }))
  },[])

  return (
    <div className="todo-list">
      <Control  addTodo={addTodo}/>
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}/>
    </div>
  )
}




export default TodoList
