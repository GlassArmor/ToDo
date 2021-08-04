import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {

  render() {
    let { taskText, taskDate, taskCompleted, taskEditing, onDeleted, onDone, onEdit, visible } = this.props;
    if (!visible) return null;
    let inputString =  <input type="text" className="edit" placeholder="Editing task" />;
    let nameString = '';
    if (taskCompleted) nameString += ' completed';
    if (taskEditing) nameString += ' editing';
    return (
      <li className={nameString} >
        <div className="view">
          <input className="toggle" type="checkbox" onClick={ onDone } defaultChecked = {taskCompleted? true: false } />
            <label>
              <span className="description" >{ taskText }</span>
              <span className="created">created { taskDate }</span>
            </label>
            <button className="icon icon-edit" onClick={ onEdit } ></button>
            <button className="icon icon-destroy" onClick={ onDeleted }></button>
        </div>
        { this.props.taskEditing? inputString : null }
      </li>
    );
  }

};
