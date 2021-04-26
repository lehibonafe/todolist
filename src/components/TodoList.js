import React from 'react'

const TodoList = props => {
    const {todoList, removeItem} = props
    return (
        <ul className='itemList'>
            {todoList.map(item => 
            <li className='item' key={item.key}>{item.text}
                <button onClick={() => removeItem(item.key)}>Remove</button>
            </li>)}
        </ul>
    )
}

export default TodoList