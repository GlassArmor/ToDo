import React, {Component} from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onItemAdded(this.state.inputValue);
      this.setState({inputValue:''});
    }

    this.onChange = (e) => {
      this.setState({ inputValue: e.target.value });
    }
  }
  render() {
    return (
      <form onSubmit = { this.onSubmit }>
        <input value = { this.state.inputValue } type='text' className='new-todo'
               placeholder='What needs to be done?'
               onChange = { this.onChange }
               autoFocus />
      </form>
    );
  }
}
