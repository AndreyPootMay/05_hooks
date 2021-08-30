import React, { useEffect, useReducer } from 'react';

import { TodoList } from './TodoList';
import { TodoAddForm } from './TodoAddForm';

import { todoReducer } from './todoReducer';

import './styles.css';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    };

    const handleDeleteTodo = (todoId) => {
        const actionDelete = {
            type: 'delete',
            payload: todoId
        };

        dispatch(actionDelete);
    };

    const handleToggle = (todoId) => {
        const actionToggle = {
            type: 'toggle',
            payload: todoId
        };

        dispatch(actionToggle);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <h1>Todo App <small>({todos.length})</small></h1>
            <hr />

            <div className="row">
                <div className="col-md-7">
                    <h3>ToDos</h3>

                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-md-5">
                    <TodoAddForm
                    handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
