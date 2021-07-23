import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {

  constructor() {
    super();

    this.state = {
      completed: false,
      editing: false
    }

    this.doneOnClick = () => {
      this.setState(({completed}) => {
        return {
          completed: !completed
        }
      });
    }

    this.editTask = () => {
      this.setState(({editing}) => {
        return {
          editing: !editing
        }
      });
    }

  }

  render() {
    let { taskText, taskDate, onDeleted } = this.props;
    let { completed, editing } = this.state;
    let inputString =  <input type="text" className="edit" placeholder="Editing task" />;
    let nameString = '';
    if (completed) nameString += ' completed';
    if (editing) nameString += ' editing';
    return (
      <li className={nameString} >
        <div className="view">
          <input className="toggle" type="checkbox" onClick={ this.doneOnClick } />
            <label>
              <span className="description" >{ taskText }</span>
              <span className="created">created { taskDate }</span>
            </label>
            <button className="icon icon-edit" onClick={ this.editTask } ></button>
            <button className="icon icon-destroy" onClick={ onDeleted }></button>
        </div>
        { this.state.editing? inputString : null }
      </li>
    );
  }

};
