import React from 'react';
import './TaskList.css';

import Task from '../Task';

const TaskList = ( { dealsData, mode, onDeleted, onDone, onEdit }) => {

  let tasks = dealsData.map((item) => {
    let visible = true;
    if (mode === 'done' && !item.taskCompleted) visible = false;
    if (mode === 'undone' && item.taskCompleted) visible = false;
    return (
      <Task key = {item.key}
            taskText = {item.taskText}
            taskDate = {item.taskDate}
            taskCompleted = {item.taskCompleted}
            visible = {visible}
            taskEditing = {item.taskEditing}
            onDeleted = { () => onDeleted(item.key) }
            onDone = { () => onDone(item.key) }
            onEdit = { () => onEdit(item.key) } />
    );
  });

  return (
    <ul className="todo-list">
      {tasks}
    </ul>
  );
};

export default TaskList;
