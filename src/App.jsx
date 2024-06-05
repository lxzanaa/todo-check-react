import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodosList from './components/TodosList'

export default function App() {
  let initialState = JSON.parse(localStorage.getItem("todos")) || []
  let [input, setInput] = useState("")
  let [todos, setTodos] = useState(initialState)
  let [editTodo, seteditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <div className='container' >
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            seteditTodo={seteditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} seteditTodo={seteditTodo} />
        </div>
      </div>
    </div>
  )
}
