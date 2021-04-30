import React from 'react'

const Todo = ({key, removeItem, item}) => {
    return (
        <li key={key}>
            <div>
            {item}
            </div>
            <button className='removeBtn' onClick={removeItem}>Remove</button>
        </li>
    )
}

export default Todo