import React, { useState } from 'react';
import AddTodos from './AddTodos';
import { RiCloseCircleLine, RiCheckFill, RiCheckboxIndeterminateLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import "./TodoList.css"

const TodoList = ({ todos, completeTodo, removeTodo, updateTodo, removeTodoCompl, setAlert }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };
    if (edit.id) {
        return <AddTodos edit={edit} onSubmit={submitUpdate} />
    }
    return (
        todos.length ? <>
            <h2>Pending Tasks?</h2>
            {
                todos.map((todo, index) => (
                    !todo.completed && <div className='todo-row' key={index}>
                        <div key={todo.id}>
                            {todo.title}
                        </div>
                        <div className='icons'>
                            <RiCheckFill
                                onClick={() => completeTodo(todo.id)}
                                className='complete-icon'
                            />
                            <RiCloseCircleLine
                                onClick={() => removeTodo(todo.id)}
                                className='delete-icon'
                            />
                            <TiEdit
                                onClick={() => setEdit({ id: todo.id, value: todo.title })}
                                className='edit-icon'
                            />
                        </div>
                    </div>
                ))
            }
            <h2>Completed Tasks.</h2>
            {
                todos.map((todo, index) => (
                    todo.completed && <div className='todo-row complete' key={index}>
                        <div key={todo.id}>
                            {todo.title}
                        </div>
                        <div className='icons'>
                            <RiCheckboxIndeterminateLine
                                onClick={() => completeTodo(todo.id)}
                                className='complete-icon'
                            />
                            <RiCloseCircleLine
                                onClick={() => removeTodoCompl(todo.id)}
                                className='delete-icon'
                            />
                        </div>
                    </div>
                ))
            }
        </>
            :
            <h4>Nothing to Show :\</h4>
    )
}

export default TodoList