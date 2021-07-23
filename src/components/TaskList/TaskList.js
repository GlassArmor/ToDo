import React from 'react';
import './TaskList.css';

import Task from '../Task';

const TaskList = ( { dealsData, onDeleted }) => {

  let tasks = dealsData.map((item) => {
    return (
      <Task key = {item.key}
            state = {item.state}
            taskText = {item.taskText}
            taskDate = {item.taskDate}
            onDeleted = { () => onDeleted(item.key) } />
    );
  });

  return (
    <ul className="todo-list">
      {tasks}
    </ul>
  );
};

export default TaskList;
