import React from 'react';
import './Header.css';

import NewTaskForm from '../NewTaskForm';

const Header = ({onItemAdded}) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onItemAdded = {onItemAdded} />
    </header>
  );
};

export default Header;
