import React from 'react';

export default function TodosList({ todos, setTodos, seteditTodo }) {
    let handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }
    let handleEdit = ({ id }) => {
        let findTodo = todos.find((todo) => todo.id === id)
        seteditTodo(findTodo)
    }
    let handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li className="list-item" key={todo.id}>
                        <input
                            type="text"
                            value={todo.title || ''}
                            className={`list ${todo.completed ? "complete" : ""}`}
                            onChange={(e) => {
                                const newTodos = todos.map(t =>
                                    t.id === todo.id ? { ...t, title: e.target.value } : t
                                );
                                setTodos(newTodos);
                            }}
                        />
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


