import React, { useState, useEffect, useRef } from 'react'

const AddTodos = () => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        // console.log(input);
        setInput('');

    };

    const handleChange = changedEvent => {
        setInput(changedEvent.target.value);
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update your item"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button">Add todo</button>
                </>
            )}
        </form >
    )
}

export default AddTodos