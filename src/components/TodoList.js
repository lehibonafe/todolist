import React from 'react'
import Todo from './Todo'
const TodoList = ({todoList, removeItem, completeTask}) => {
  
    return (
        <ul className='itemList'>
            {todoList.map(item =>
            <Todo 
                key={item.key}
                item={item.text}
                removeItem={() => removeItem(item.key)}
                completeTask={() => completeTask(item.key)}
                completed={item.completed}
            />
            )}
        </ul>
    )
}

export default TodoList