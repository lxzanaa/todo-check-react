import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

export default function App() {
  const getInitialTodos = () => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos"));
      return Array.isArray(todos) ? todos : [];
    } catch (e) {
      console.error("Failed to parse todos from localStorage:", e);
      return [];
    }
  };

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getInitialTodos());
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
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
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
}
