import React, { Component } from 'react';
import './Task.css';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default class Task extends Component {

  static defaultProps = {
    id: 'a0',
    taskText: 'Some Epic task (Unlock legendary for only 9.99!..)',
    taskDate: new Date(),
    taskCompleted: false,
    taskEditing: false,
    onDeleted: ()=>{},
    onDone: ()=>{} ,
    onEdit: ()=>{},
    visible: true
  }

  static propTypes = {
    id: PropTypes.string,
    taskText: PropTypes.string,
    taskDate: PropTypes.instanceOf(Date),
    taskCompleted: PropTypes.bool,
    taskEditing: PropTypes.bool,
    onDeleted: PropTypes.func,
    onDone: PropTypes.func ,
    onEdit: PropTypes.func,
    visible: PropTypes.bool
  }

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };

    this.onSubmit = (event) => {
      event.preventDefault();
      const { id, onEdit } = this.props;
      const { inputValue } = this.state;
      onEdit(id, inputValue);
      this.setState({ inputValue: '' });
    };

    this.onChange = (event) => {
      this.setState({ inputValue: event.target.value });
    };
  }

  render() {
    const { id, taskText, taskDate, taskCompleted, taskEditing, onDeleted, onDone, onEdit, visible } = this.props;
    if (!visible) return null;
    const {inputValue} = this.state;
    const inputString = <form onSubmit={this.onSubmit}>
                        <input type="text" className="edit"
                                           placeholder="Edit task"
                                           onChange={ this.onChange }
                                           value = { inputValue } />
                      </form>;

    let nameString = '';
    if (taskCompleted) nameString += ' completed';
    if (taskEditing) nameString += ' editing';
    return (
      <li className={nameString} >
        <div className="view">
          <input className="toggle" type="checkbox" onClick={ onDone } defaultChecked = {!!taskCompleted } />
            <label>
              <span className="description" >{ taskText }</span>
              <span className="created">created { formatDistanceToNow(taskDate, {includeSeconds: true} ) } ago</span>
            </label>
            <button type="button" className="icon icon-edit" onClick={ () => onEdit(id) }><span className="visually-hidden">Edit task</span></button>
            <button type="button" className="icon icon-destroy" onClick={ onDeleted }><span className="visually-hidden">Delete task</span></button>
        </div>
        { taskEditing? inputString : null }
      </li>
    );
  }

};