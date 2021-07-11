import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
const Todo = ({key, removeItem, completeTask, item, completed}) => {
    return (
        <li key={key}>
            <div className={completed ? 'complete' : 'incomplete'}>
            {item}
            </div>

            <div>
                <button className='completeTask' onClick={completeTask}>
                    <MdDone />
                </button>
                <button className='removeBtn' onClick={removeItem}>
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default Todo