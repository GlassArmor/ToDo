import React from 'react';
import './Task.css';

const Task = ( { state, taskText, taskDate }) => {
  let inputString =  <input type="text" className="edit" placeholder="Editing task" />;
  return (
    <li className={state}>
      <div className="view">
        <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{ taskText }</span>
            <span className="created">created { taskDate }</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
      </div>
      { state = 'editing'? inputString : null }
    </li>
  );
};

export default Task;
