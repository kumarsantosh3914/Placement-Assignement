import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className={`mb-2 ${todo.completed ? 'line-through' : ''}`}>
            <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
                {todo.text}
            </span>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
