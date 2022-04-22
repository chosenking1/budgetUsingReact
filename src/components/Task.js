import React from 'react';
import './Task.css';

const Task = ({name, children}) => {
    return (
        <div className='container'>
         <div>{name}</div>
         <div>props</div>
         <div>Completed</div>
         <button className='task-btn'>Delete</button>
            {children}
        </div>
    );
};
Task.defaultTask = {
name:"",
    children:""
}
export default Task;