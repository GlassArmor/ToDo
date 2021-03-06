import React from 'react';
import './TasksFilter.css';

import PropTypes from 'prop-types';

const TasksFilter = ({mode, setMode}) => (
    <ul className="filters">
            <li>
              <button type="button" className={mode==='all'? 'selected': '' } onClick={()=>setMode('all')}>All</button>
            </li>
            <li>
              <button type="button" className={mode==='undone'? 'selected': '' } onClick={()=>setMode('undone')} >Active</button>
            </li>
            <li>
              <button type="button" className={mode==='done'? 'selected': '' } onClick={()=>setMode('done')} >Completed</button>
            </li>
    </ul>
  );

TasksFilter.defaultProps = {
  mode: 'all',
  setMode: ()=>{}
};

TasksFilter.propTypes = {
  mode: PropTypes.oneOf(['all', 'done', 'undone']),
  setMode: PropTypes.func
};

export default TasksFilter;
