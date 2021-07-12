import React from 'react'
import { BsTrash2Fill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
const Todo = ({key, removeItem, completeTask, item, completed}) => {
    return (
        <li key={key}>
            <div className={ completed ? 'complete' : 'incomplete'}>
            {item}
            </div>

            <div className="list-button">
                <button className='completeTask' onClick={completeTask}>
                    <MdDone />
                </button>
                <button className='removeBtn' onClick={removeItem}>
                    <BsTrash2Fill />
                </button>
            </div>
        </li>
    )
}

export default Todo