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

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onEdit(this.props.id, this.state.inputValue);
      this.setState({ inputValue: '' });
    };

    this.onChange = (e) => {
      this.setState({ inputValue: e.target.value });
    };
  }

  render() {
    let { id, taskText, taskDate, taskCompleted, taskEditing, onDeleted, onDone, onEdit, visible } = this.props;
    if (!visible) return null;

    let inputString = <form onSubmit={this.onSubmit}>
                        <input type="text" className="edit"
                                           placeholder="Edit task"
                                           onChange={ this.onChange }
                                           value = { this.state.inputValue }
                                           autoFocus />
                      </form>;

    let nameString = '';
    if (taskCompleted) nameString += ' completed';
    if (taskEditing) nameString += ' editing';
    return (
      <li className={nameString} >
        <div className="view">
          <input className="toggle" type="checkbox" onClick={ onDone } defaultChecked = {taskCompleted? true: false } />
            <label>
              <span className="description" >{ taskText }</span>
              <span className="created">created { formatDistanceToNow(taskDate, {includeSeconds: true} ) } ago</span>
            </label>
            <button className="icon icon-edit" onClick={ () => onEdit(id) } ></button>
            <button className="icon icon-destroy" onClick={ onDeleted }></button>
        </div>
        { this.props.taskEditing? inputString : null }
      </li>
    );
  }

};
