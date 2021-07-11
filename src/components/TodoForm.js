import React from 'react'
import { MdAdd } from "react-icons/md";
const TodoForm = ({addItem, todo, handleTodo, focusInput, taskCounter}) => {
    
    return (
        <div className='form-container'>
            <form onSubmit={addItem}>
            <input 
                type='text'
                placeholder='Task'
                value={todo}
                onChange={handleTodo}
                ref={focusInput}
            />
            <button className='addBtn' type='submit'>Add</button>
            </form>
            <p className='taskCounter'>You have {taskCounter} {taskCounter === 1 || taskCounter <  1 ? "task" : "tasks"}</p>
        </div>
    )
}

export default TodoForm