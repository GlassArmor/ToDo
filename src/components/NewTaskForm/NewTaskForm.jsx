import React, {Component} from 'react';
import './NewTaskForm.css';

import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {

  static defaultProps = {
    onItemAdded: ()=>{}
  }

  static propTypes = {
    onItemAdded: PropTypes.func
  }

  constructor() {
    super();

    this.state = {
      inputTask: '',
      inputMinutes: '',
      inputSeconds: ''
    }

    this.onSubmit = (event) => {
      event.preventDefault();
      const {onItemAdded} = this.props;
      const { inputTask, inputMinutes, inputSeconds } = this.state;
      onItemAdded(inputTask, Number(inputMinutes), Number(inputSeconds));
      this.setState({
        inputTask: '',
        inputMinutes: '',
        inputSeconds: ''
      });
    }

    this.onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

  }

  render() {
    const { inputTask, inputMinutes, inputSeconds } = this.state;
    return (
      <form onSubmit = { this.onSubmit } className='new-todo-form'>
        <input value = { inputTask } type='text' className='new-todo'
               placeholder='What needs to be done?'
               name='inputTask'
               onChange = { this.onChange } />
        <input value={inputMinutes} placeholder='Min'
               className='new-todo-form__timer'
               name='inputMinutes'
               type='number' min={0}
               onChange = { this.onChange } />
        <input value={inputSeconds} placeholder='Sec'
               className='new-todo-form__timer'
               name='inputSeconds'
               type='number' min={0} max ={59}
               onChange = { this.onChange } />
        <input type='submit' className='visually-hidden' />
      </form>
    );
  }
}
