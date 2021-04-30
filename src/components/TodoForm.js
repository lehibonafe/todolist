import React from 'react'

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
            <p className='taskCounter'>You have {taskCounter} tasks</p>
        </div>
    )
}

export default TodoForm