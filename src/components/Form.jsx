import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
    let updateTodo = (title, id, completed) => {
        let newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        console.log("Updated Todos:", newTodo); // Debugging line
        setTodos(newTodo);
        setEditTodo(null);
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    let oninputChange = (e) => {
        setInput(e.target.value);
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    };

    return (
        <form onSubmit={onFormSubmit} >
            <input
                className='task-input'
                type="text"
                placeholder='Enter a Todo... '
                value={input}
                required
                onChange={oninputChange}
            />
            <button className='button-add' type='submit'>
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    );
}
