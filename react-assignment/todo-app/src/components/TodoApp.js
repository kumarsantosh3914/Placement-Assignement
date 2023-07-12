import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Reducer function to manage state and actions
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const addTodo = text => {
        dispatch({ type: 'ADD_TODO', payload: text });
    };

    const toggleTodo = id => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const deleteTodo = id => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoApp;
