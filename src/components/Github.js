import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

const Github = () => {
    return (
        <div className='github'>
            <div>
                <a href="https://github.com/lehibonafe/react_todolist">
                    <VscGithub />
                </a>
            </div>
            <div>
                <a href="https://lehibonafe.github.io/">
                    <FiExternalLink />
                </a>
            </div>
        </div>
    )
}

export default Github
