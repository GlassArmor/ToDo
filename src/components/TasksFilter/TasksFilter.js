import React from 'react';
import './TasksFilter.css';

const TasksFilter = ({mode, setMode}) => {
  return (
    <ul className="filters">
            <li>
              <button className={mode==='all'? 'selected': '' } onClick={()=>setMode('all')}>All</button>
            </li>
            <li>
              <button className={mode==='undone'? 'selected': '' } onClick={()=>setMode('undone')} >Active</button>
            </li>
            <li>
              <button className={mode==='done'? 'selected': '' } onClick={()=>setMode('done')} >Completed</button>
            </li>
    </ul>
  );
};

export default TasksFilter;
