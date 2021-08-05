import React from 'react';
import './Footer.css';

import PropTypes from 'prop-types';

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

Footer.defaultProps = {
  count: 0,
  clearDone: ()=>{},
  mode: 'all',
  setMode: ()=>{}
};

Footer.propTypes = {
  count: PropTypes.number,
  clearDone: PropTypes.func,
  mode: PropTypes.string,
  setMode: PropTypes.func
}



export default Footer;
