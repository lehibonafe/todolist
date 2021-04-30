import React from 'react'
import Todo from './Todo'
const TodoList = props => {
    const {todoList, removeItem} = props
    return (
        <ul className='itemList'>
            {todoList.map(item =>
            <Todo 
                key={item.key}
                item={item.text}
                removeItem={() => removeItem(item.key)}
            />
            // <li className='item' key={item.key}>{item.text}
            //     <button onClick={() => removeItem(item.key)}>Remove</button>
            // </li>
            )}
        </ul>
    )
}

export default TodoList