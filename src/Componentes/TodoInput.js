
import React, { useState } from 'react';

const TodoInput = ({ createTodoItem }) => {
const [value, setValue] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') {
    console.log('Si miras la conosla, escribe una tarea a realizar');
    return;
    }
    createTodoItem(value);
    setValue('');
};

return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Tarea a realizar"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={handleSubmit}>Crear</button>
    </form>
    )
};

export default TodoInput;
