import React from 'react';

export const TodoListItem = ({ index, todo, handleDeleteTodo, handleToggle}) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
                onClick={_ => handleToggle(todo.id)}
                className={`${todo.done && 'complete'}`}>
                {index + 1}. {todo.description}
            </p>

            <button
                className="btn btn-danger"
                onClick={_ => handleDeleteTodo(todo.id)}
            >
                Mark as done
            </button>
        </li>
    )
}
