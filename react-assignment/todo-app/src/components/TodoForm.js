import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a new todo"
                className="p-2 border rounded"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
};

export default TodoForm;
