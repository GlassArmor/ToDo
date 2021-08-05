import React from 'react';
import './TaskList.css';

import PropTypes from 'prop-types';

import Task from '../Task';

const TaskList = ( { dealsData, mode, onDeleted, onDone, onEdit }) => {

  let tasks = dealsData.map((item) => {
    let visible = true;
    if (mode === 'done' && !item.taskCompleted) visible = false;
    if (mode === 'undone' && item.taskCompleted) visible = false;
    return (
      <Task key = {item.key}
            id = {item.key}
            taskText = {item.taskText}
            taskDate = {item.taskDate}
            taskCompleted = {item.taskCompleted}
            visible = {visible}
            taskEditing = {item.taskEditing}
            onDeleted = { () => onDeleted(item.key) }
            onDone = { () => onDone(item.key) }
            onEdit = { onEdit } />
    );
  });

  return (
    <ul className="todo-list">
      {tasks}
    </ul>
  );
};

TaskList.defaultProps = {
  dealsData: [],
  mode: 'all',
  onDeleted: ()=>{},
  onDone: ()=>{},
  onEdit: ()=>{}
};

TaskList.propTypes = {
  dealsData: PropTypes.arrayOf(PropTypes.shape(
           { key: PropTypes.string,
             taskText: PropTypes.string,
             taskDate: PropTypes.instanceOf(Date),
             taskCompleted: PropTypes.bool,
             taskEditing: PropTypes.bool,
           } )),
  mode: PropTypes.oneOf(['all', 'done', 'undone']),
  onDeleted: PropTypes.func,
  onDone: PropTypes.func,
  onEdit: PropTypes.func
};

export default TaskList;
