import React from 'react';
import './Header.css';

import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

const Header = ({onItemAdded}) => {
  return (
    <header className="header">
      <h1>Checkpoints</h1>
      <NewTaskForm onItemAdded = {onItemAdded} />
    </header>
  );
};

Header.defaultProps = {
  onItemAdded: ()=>{}
};

Header.propTypes = {
  onItemAdded: PropTypes.func
}

export default Header;
