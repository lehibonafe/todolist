import React from 'react'

const TodoForm = props => {
    const {addItem, todo, handleTodo} = props
    return (
        <form onSubmit={addItem}>
            <input 
                type='text'
                placeholder='Task'
                value={todo}
                onChange={handleTodo}
            />
            <button className='addBtn' type='submit'>Add</button>
        </form>
    )
}

export default TodoForm