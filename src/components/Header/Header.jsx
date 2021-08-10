import React from 'react';
import './Header.css';

import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

const Header = ({onItemAdded}) => (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onItemAdded = {onItemAdded} />
    </header>
  );

Header.defaultProps = {
  onItemAdded: ()=>{}
};

Header.propTypes = {
  onItemAdded: PropTypes.func
}

export default Header;
