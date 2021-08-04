import React from 'react';
import './Footer.css';

import TasksFilter from '../TasksFilter';

const Footer = ({count, clearDone, mode, setMode}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter mode={mode} setMode={setMode} />
      <button className="clear-completed" onClick={clearDone} >Clear completed</button>
    </footer>
  );
};

export default Footer;
